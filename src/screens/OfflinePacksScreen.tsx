import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useOfflineStore } from '../store';
import type { Category } from '../types';

interface OfflinePacksScreenProps {
    navigation: any;
}

// Mock categories for offline packs
const availablePacks: Category[] = [
    {
        id: 'math',
        name: 'Mathematics',
        icon: '🔢',
        description: 'Numbers, calculations, and problem solving',
        ageGroups: ['tiny-tots', 'juniors', 'teens'],
        color: '#3b82f6',
        questionsCount: 50,
        isOfflineAvailable: true,
    },
    {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        description: 'Explore the wonders of science',
        ageGroups: ['juniors', 'teens'],
        color: '#10b981',
        questionsCount: 45,
        isOfflineAvailable: true,
    },
    {
        id: 'history',
        name: 'History',
        icon: '📜',
        description: 'Learn about the past',
        ageGroups: ['juniors', 'teens'],
        color: '#f59e0b',
        questionsCount: 40,
        isOfflineAvailable: true,
    },
    {
        id: 'geography',
        name: 'Geography',
        icon: '🌍',
        description: 'Discover the world',
        ageGroups: ['juniors', 'teens'],
        color: '#06b6d4',
        questionsCount: 35,
        isOfflineAvailable: true,
    },
];

export default function OfflinePacksScreen({ navigation }: OfflinePacksScreenProps) {
    const { downloadedPacks, downloadPack, deletePack } = useOfflineStore();
    const [downloading, setDownloading] = useState<string | null>(null);

    const handleDownload = async (categoryId: string) => {
        setDownloading(categoryId);

        // Simulate download delay
        setTimeout(() => {
            downloadPack(categoryId);
            setDownloading(null);
            Alert.alert('Success', 'Quiz pack downloaded successfully!');
        }, 2000);
    };

    const handleDelete = (categoryId: string) => {
        Alert.alert(
            'Delete Pack',
            'Are you sure you want to delete this offline pack?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        deletePack(categoryId);
                        Alert.alert('Deleted', 'Quiz pack has been removed.');
                    },
                },
            ]
        );
    };

    const isDownloaded = (categoryId: string) => {
        return downloadedPacks.some((pack) => pack.categoryId === categoryId);
    };

    const getTotalSize = () => {
        return downloadedPacks.reduce((sum, pack) => sum + pack.sizeInMB, 0).toFixed(1);
    };

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2', '#f093fb']}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>← Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>📦 Offline Quiz Packs</Text>
                    <Text style={styles.headerSubtitle}>
                        Download quizzes to play without internet
                    </Text>
                </View>

                {/* Storage Info */}
                <View style={styles.storageCard}>
                    <View style={styles.storageHeader}>
                        <Text style={styles.storageTitle}>Storage Used</Text>
                        <Text style={styles.storageValue}>{getTotalSize()} MB</Text>
                    </View>
                    <View style={styles.storageBar}>
                        <View
                            style={[
                                styles.storageBarFill,
                                { width: `${Math.min((parseFloat(getTotalSize()) / 100) * 100, 100)}%` },
                            ]}
                        />
                    </View>
                    <Text style={styles.storageSubtext}>
                        {downloadedPacks.length} pack{downloadedPacks.length !== 1 ? 's' : ''} downloaded
                    </Text>
                </View>

                {/* Available Packs */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Available Packs</Text>
                    {availablePacks.map((pack) => {
                        const downloaded = isDownloaded(pack.id);
                        const isDownloadingThis = downloading === pack.id;

                        return (
                            <View key={pack.id} style={styles.packCard}>
                                <View style={styles.packIcon}>
                                    <Text style={styles.packIconText}>{pack.icon}</Text>
                                </View>
                                <View style={styles.packInfo}>
                                    <Text style={styles.packName}>{pack.name}</Text>
                                    <Text style={styles.packDescription}>{pack.description}</Text>
                                    <View style={styles.packMeta}>
                                        <Text style={styles.packMetaText}>
                                            📝 {pack.questionsCount} questions
                                        </Text>
                                        <Text style={styles.packMetaText}>💾 ~5 MB</Text>
                                    </View>
                                </View>
                                <View style={styles.packActions}>
                                    {downloaded ? (
                                        <>
                                            <View style={styles.downloadedBadge}>
                                                <Text style={styles.downloadedText}>✓ Downloaded</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.deleteButton}
                                                onPress={() => handleDelete(pack.id)}
                                            >
                                                <Text style={styles.deleteButtonText}>🗑️</Text>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        <TouchableOpacity
                                            style={[
                                                styles.downloadButton,
                                                isDownloadingThis && styles.downloadButtonDisabled,
                                            ]}
                                            onPress={() => handleDownload(pack.id)}
                                            disabled={isDownloadingThis}
                                        >
                                            <LinearGradient
                                                colors={
                                                    isDownloadingThis
                                                        ? ['#9ca3af', '#6b7280']
                                                        : ['#10b981', '#059669']
                                                }
                                                style={styles.downloadGradient}
                                            >
                                                <Text style={styles.downloadButtonText}>
                                                    {isDownloadingThis ? '⏳ Downloading...' : '⬇️ Download'}
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        );
                    })}
                </View>

                {/* Info Card */}
                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>💡 Why Download?</Text>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoBullet}>•</Text>
                        <Text style={styles.infoText}>Play quizzes without internet connection</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoBullet}>•</Text>
                        <Text style={styles.infoText}>Faster loading times</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoBullet}>•</Text>
                        <Text style={styles.infoText}>Save mobile data</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoBullet}>•</Text>
                        <Text style={styles.infoText}>Perfect for travel or areas with poor connectivity</Text>
                    </View>
                </View>

                {/* Clear All Button */}
                {downloadedPacks.length > 0 && (
                    <TouchableOpacity
                        style={styles.clearAllButton}
                        onPress={() => {
                            Alert.alert(
                                'Clear All Packs',
                                'Are you sure you want to delete all downloaded packs?',
                                [
                                    { text: 'Cancel', style: 'cancel' },
                                    {
                                        text: 'Clear All',
                                        style: 'destructive',
                                        onPress: () => {
                                            downloadedPacks.forEach((pack) => deletePack(pack.categoryId));
                                            Alert.alert('Cleared', 'All offline packs have been removed.');
                                        },
                                    },
                                ]
                            );
                        }}
                    >
                        <Text style={styles.clearAllButtonText}>Clear All Downloads</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    header: {
        marginBottom: 25,
    },
    backButton: {
        marginBottom: 15,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.9,
    },
    storageCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 25,
    },
    storageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    storageTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
    },
    storageValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#667eea',
    },
    storageBar: {
        height: 10,
        backgroundColor: '#e5e7eb',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 8,
    },
    storageBarFill: {
        height: '100%',
        backgroundColor: '#10b981',
        borderRadius: 5,
    },
    storageSubtext: {
        fontSize: 12,
        color: '#6b7280',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
    },
    packCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 15,
        padding: 15,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    packIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    packIconText: {
        fontSize: 30,
    },
    packInfo: {
        flex: 1,
    },
    packName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    packDescription: {
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 8,
    },
    packMeta: {
        flexDirection: 'row',
        gap: 15,
    },
    packMetaText: {
        fontSize: 11,
        color: '#9ca3af',
    },
    packActions: {
        alignItems: 'flex-end',
    },
    downloadedBadge: {
        backgroundColor: '#d1fae5',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        marginBottom: 8,
    },
    downloadedText: {
        fontSize: 12,
        color: '#065f46',
        fontWeight: '600',
    },
    deleteButton: {
        padding: 8,
    },
    deleteButtonText: {
        fontSize: 20,
    },
    downloadButton: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    downloadButtonDisabled: {
        opacity: 0.7,
    },
    downloadGradient: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    infoCard: {
        backgroundColor: 'rgba(219, 234, 254, 0.95)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e40af',
        marginBottom: 12,
    },
    infoItem: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    infoBullet: {
        fontSize: 14,
        color: '#3b82f6',
        marginRight: 8,
    },
    infoText: {
        flex: 1,
        fontSize: 14,
        color: '#1e3a8a',
        lineHeight: 20,
    },
    clearAllButton: {
        backgroundColor: 'rgba(239, 68, 68, 0.9)',
        borderRadius: 15,
        padding: 18,
        alignItems: 'center',
    },
    clearAllButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
