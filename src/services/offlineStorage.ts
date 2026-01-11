import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import { OfflineQuizPack, Question, AgeGroup, Category } from '../types';
import { CATEGORIES } from '../constants/config';
import aiQuizGenerator from './aiQuizGenerator';

// ============================================
// OFFLINE STORAGE SERVICE
// ============================================

const OFFLINE_PACKS_KEY = 'offline_quiz_packs';
const OFFLINE_ASSETS_DIR = `${FileSystem.documentDirectory}offline_assets/`;

class OfflineStorageService {
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    // Create offline assets directory if it doesn't exist
    const dirInfo = await FileSystem.getInfoAsync(OFFLINE_ASSETS_DIR);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(OFFLINE_ASSETS_DIR, { intermediates: true });
    }

    this.initialized = true;
  }

  // ============================================
  // QUIZ PACK MANAGEMENT
  // ============================================

  async downloadQuizPack(
    category: Category,
    ageGroup: AgeGroup,
    onProgress?: (progress: number) => void
  ): Promise<OfflineQuizPack> {
    await this.initialize();

    onProgress?.(0.1);

    // Generate questions using AI or fallback
    const response = await aiQuizGenerator.generateQuestions({
      topic: category.name,
      ageGroup,
      difficulty: 'medium',
      questionCount: 50,
      questionTypes: ['mcq', 'true-false', 'image-choice'],
    });

    onProgress?.(0.5);

    // Create the pack
    const pack: OfflineQuizPack = {
      id: `${category.id}-${ageGroup}`,
      categoryId: category.id,
      ageGroup,
      questions: response.questions,
      downloadedAt: new Date(),
      lastUpdated: new Date(),
      sizeInMB: this.calculatePackSize(response.questions),
    };

    onProgress?.(0.8);

    // Save to AsyncStorage
    await this.savePackToStorage(pack);

    onProgress?.(1.0);

    return pack;
  }

  async getOfflinePack(categoryId: string, ageGroup: AgeGroup): Promise<OfflineQuizPack | null> {
    try {
      const packs = await this.getAllPacks();
      return packs.find(p => p.categoryId === categoryId && p.ageGroup === ageGroup) || null;
    } catch (error) {
      console.error('Error getting offline pack:', error);
      return null;
    }
  }

  async getAllPacks(): Promise<OfflineQuizPack[]> {
    try {
      const data = await AsyncStorage.getItem(OFFLINE_PACKS_KEY);
      if (!data) return [];
      return JSON.parse(data);
    } catch (error) {
      console.error('Error getting all packs:', error);
      return [];
    }
  }

  async deletePack(packId: string): Promise<void> {
    try {
      const packs = await this.getAllPacks();
      const filtered = packs.filter(p => p.id !== packId);
      await AsyncStorage.setItem(OFFLINE_PACKS_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error deleting pack:', error);
    }
  }

  async deleteAllPacks(): Promise<void> {
    try {
      await AsyncStorage.removeItem(OFFLINE_PACKS_KEY);
      // Also clear assets directory
      const dirInfo = await FileSystem.getInfoAsync(OFFLINE_ASSETS_DIR);
      if (dirInfo.exists) {
        await FileSystem.deleteAsync(OFFLINE_ASSETS_DIR, { idempotent: true });
      }
    } catch (error) {
      console.error('Error deleting all packs:', error);
    }
  }

  // ============================================
  // STORAGE HELPERS
  // ============================================

  private async savePackToStorage(pack: OfflineQuizPack): Promise<void> {
    try {
      const packs = await this.getAllPacks();
      const existingIndex = packs.findIndex(p => p.id === pack.id);
      
      if (existingIndex >= 0) {
        packs[existingIndex] = pack;
      } else {
        packs.push(pack);
      }

      await AsyncStorage.setItem(OFFLINE_PACKS_KEY, JSON.stringify(packs));
    } catch (error) {
      console.error('Error saving pack:', error);
      throw error;
    }
  }

  private calculatePackSize(questions: Question[]): number {
    // Rough estimate of pack size in MB
    const jsonSize = JSON.stringify(questions).length;
    return parseFloat((jsonSize / (1024 * 1024)).toFixed(2));
  }

  // ============================================
  // ASSET CACHING
  // ============================================

  async cacheAsset(url: string, filename: string): Promise<string> {
    await this.initialize();

    const localPath = `${OFFLINE_ASSETS_DIR}${filename}`;
    const fileInfo = await FileSystem.getInfoAsync(localPath);

    if (fileInfo.exists) {
      return localPath;
    }

    try {
      const downloadResult = await FileSystem.downloadAsync(url, localPath);
      return downloadResult.uri;
    } catch (error) {
      console.error('Error caching asset:', error);
      return url; // Return original URL if caching fails
    }
  }

  async getCachedAsset(filename: string): Promise<string | null> {
    const localPath = `${OFFLINE_ASSETS_DIR}${filename}`;
    const fileInfo = await FileSystem.getInfoAsync(localPath);
    return fileInfo.exists ? localPath : null;
  }

  // ============================================
  // STORAGE STATS
  // ============================================

  async getStorageStats(): Promise<{
    totalPacks: number;
    totalSizeMB: number;
    packsPerAgeGroup: Record<AgeGroup, number>;
  }> {
    const packs = await this.getAllPacks();
    
    const packsPerAgeGroup: Record<AgeGroup, number> = {
      'tiny-tots': 0,
      'juniors': 0,
      'teens': 0,
    };

    let totalSizeMB = 0;

    packs.forEach(pack => {
      packsPerAgeGroup[pack.ageGroup]++;
      totalSizeMB += pack.sizeInMB;
    });

    return {
      totalPacks: packs.length,
      totalSizeMB: parseFloat(totalSizeMB.toFixed(2)),
      packsPerAgeGroup,
    };
  }

  // ============================================
  // SYNC & UPDATE
  // ============================================

  async checkForUpdates(): Promise<string[]> {
    // Returns list of pack IDs that have updates available
    const packs = await this.getAllPacks();
    const outdatedPacks: string[] = [];

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    packs.forEach(pack => {
      const lastUpdated = new Date(pack.lastUpdated);
      if (lastUpdated < oneWeekAgo) {
        outdatedPacks.push(pack.id);
      }
    });

    return outdatedPacks;
  }

  async updatePack(packId: string, onProgress?: (progress: number) => void): Promise<OfflineQuizPack | null> {
    const packs = await this.getAllPacks();
    const existingPack = packs.find(p => p.id === packId);
    
    if (!existingPack) return null;

    const category = CATEGORIES.find(c => c.id === existingPack.categoryId);
    if (!category) return null;

    return this.downloadQuizPack(category, existingPack.ageGroup, onProgress);
  }

  // ============================================
  // OFFLINE MODE DETECTION
  // ============================================

  async isOfflineMode(): Promise<boolean> {
    // Simple network check - in production, use NetInfo
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      await fetch('https://www.google.com', {
        method: 'HEAD',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return false;
    } catch {
      return true;
    }
  }

  async getQuestionsForQuiz(
    categoryId: string,
    ageGroup: AgeGroup,
    count: number = 10
  ): Promise<Question[]> {
    const isOffline = await this.isOfflineMode();

    if (isOffline) {
      // Get from offline storage
      const pack = await this.getOfflinePack(categoryId, ageGroup);
      if (pack && pack.questions.length > 0) {
        // Shuffle and return requested count
        const shuffled = [...pack.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
      }
      throw new Error('No offline questions available');
    }

    // Online mode - generate fresh questions
    const category = CATEGORIES.find(c => c.id === categoryId);
    const response = await aiQuizGenerator.generateQuestions({
      topic: category?.name || categoryId,
      ageGroup,
      difficulty: 'medium',
      questionCount: count,
      questionTypes: ['mcq', 'true-false', 'image-choice'],
    });

    return response.questions;
  }
}

export const offlineStorage = new OfflineStorageService();
export default offlineStorage;
