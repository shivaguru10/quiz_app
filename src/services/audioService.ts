import { Audio } from 'expo-av';
import { useUserStore } from '../store';
import { AgeGroup } from '../types';

// ============================================
// AUDIO SERVICE
// ============================================

class AudioService {
  private backgroundMusic: Audio.Sound | null = null;
  private soundEffects: Map<string, Audio.Sound> = new Map();
  private isInitialized = false;

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });

      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize audio:', error);
    }
  }

  // ============================================
  // BACKGROUND MUSIC
  // ============================================

  async playBackgroundMusic(ageGroup: AgeGroup): Promise<void> {
    const { isMusicEnabled } = useUserStore.getState();
    if (!isMusicEnabled) return;

    await this.initialize();
    await this.stopBackgroundMusic();

    try {
      // In production, load actual music files
      // const musicFiles = {
      //   'tiny-tots': require('../../assets/sounds/bg-kids.mp3'),
      //   'juniors': require('../../assets/sounds/bg-juniors.mp3'),
      //   'teens': require('../../assets/sounds/bg-teens.mp3'),
      // };

      const { sound } = await Audio.Sound.createAsync(
        // musicFiles[ageGroup],
        { uri: '' }, // Placeholder - replace with actual music
        {
          isLooping: true,
          volume: 0.3,
        }
      );

      this.backgroundMusic = sound;
      await sound.playAsync();
    } catch (error) {
      console.log('Background music not available:', error);
    }
  }

  async stopBackgroundMusic(): Promise<void> {
    if (this.backgroundMusic) {
      try {
        await this.backgroundMusic.stopAsync();
        await this.backgroundMusic.unloadAsync();
        this.backgroundMusic = null;
      } catch (error) {
        console.error('Failed to stop background music:', error);
      }
    }
  }

  async setMusicVolume(volume: number): Promise<void> {
    if (this.backgroundMusic) {
      await this.backgroundMusic.setVolumeAsync(Math.max(0, Math.min(1, volume)));
    }
  }

  // ============================================
  // SOUND EFFECTS
  // ============================================

  async loadSoundEffect(key: string, source: any): Promise<void> {
    await this.initialize();

    try {
      const { sound } = await Audio.Sound.createAsync(source);
      this.soundEffects.set(key, sound);
    } catch (error) {
      console.error(`Failed to load sound effect ${key}:`, error);
    }
  }

  async playSoundEffect(key: string): Promise<void> {
    const { isSoundEnabled } = useUserStore.getState();
    if (!isSoundEnabled) return;

    const sound = this.soundEffects.get(key);
    if (sound) {
      try {
        await sound.setPositionAsync(0);
        await sound.playAsync();
      } catch (error) {
        console.error(`Failed to play sound effect ${key}:`, error);
      }
    }
  }

  // Pre-built sound effect methods
  async playCorrectSound(): Promise<void> {
    await this.playSoundEffect('correct');
  }

  async playWrongSound(): Promise<void> {
    await this.playSoundEffect('wrong');
  }

  async playClickSound(): Promise<void> {
    await this.playSoundEffect('click');
  }

  async playCelebrationSound(): Promise<void> {
    await this.playSoundEffect('celebration');
  }

  async playStreakSound(): Promise<void> {
    await this.playSoundEffect('streak');
  }

  async playLevelUpSound(): Promise<void> {
    await this.playSoundEffect('levelUp');
  }

  // ============================================
  // VOICE OVER (TEXT-TO-SPEECH)
  // ============================================

  async speakText(text: string, rate: number = 0.8): Promise<void> {
    const { isVoiceOverEnabled } = useUserStore.getState();
    if (!isVoiceOverEnabled) return;

    // Using Expo Speech API
    try {
      const Speech = require('expo-speech');
      await Speech.speak(text, {
        language: 'en-US',
        rate,
        pitch: 1.1, // Slightly higher pitch for kid-friendly voice
      });
    } catch (error) {
      console.log('Speech not available:', error);
    }
  }

  async stopSpeaking(): Promise<void> {
    try {
      const Speech = require('expo-speech');
      await Speech.stop();
    } catch (error) {
      console.error('Failed to stop speech:', error);
    }
  }

  // ============================================
  // CLEANUP
  // ============================================

  async cleanup(): Promise<void> {
    await this.stopBackgroundMusic();
    await this.stopSpeaking();

    for (const sound of this.soundEffects.values()) {
      try {
        await sound.unloadAsync();
      } catch (error) {
        console.error('Failed to unload sound:', error);
      }
    }
    this.soundEffects.clear();
  }
}

export const audioService = new AudioService();
export default audioService;
