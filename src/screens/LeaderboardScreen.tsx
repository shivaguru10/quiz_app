import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { LeaderboardEntry, AgeGroup } from '../types';

const { width } = Dimensions.get('window');

interface LeaderboardScreenProps {
    navigation: any;
}

// Mock leaderboard data (will be replaced with real data from backend)
const mockLeaderboardData: LeaderboardEntry[] = [
    { rank: 1, userId: '1', userName: 'Emma', avatar: '👧', score: 15420, ageGroup: 'juniors' },
    { rank: 2, userId: '2', userName: 'Liam', avatar: '👦', score: 14850, ageGroup: 'juniors' },
    { rank: 3, userId: '3', userName: 'Sophia', avatar: '👧', score: 13990, ageGroup: 'juniors' },
    { rank: 4, userId: '4', userName: 'Noah', avatar: '👦', score: 12750, ageGroup: 'juniors' },
    { rank: 5, userId: '5', userName: 'Olivia', avatar: '👧', score: 11890, ageGroup: 'juniors' },
    { rank: 6, userId: '6', userName: 'Ethan', avatar: '👦', score: 10540, ageGroup: 'juniors' },
    { rank: 7, userId: '7', userName: 'Ava', avatar: '👧', score: 9870, ageGroup: 'juniors' },
    { rank: 8, userId: '8', userName: 'Mason', avatar: '👦', score: 8920, ageGroup: 'juniors' },
    { rank: 9, userId: '9', userName: 'Isabella', avatar: '👧', score: 7650, ageGroup: 'juniors' },
    { rank: 10, userId: '10', userName: 'Lucas', avatar: '👦', score: 6890, ageGroup: 'juniors' },
];

export default function LeaderboardScreen({ navigation }: LeaderboardScreenProps) {
    const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'all-time'>('weekly');
    const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | 'all'>('all');

    const periods = [
        { id: 'daily', label: 'Daily' },
        { id: 'weekly', label: 'Weekly' },
        { id: 'all-time', label: 'All Time' },
    ];

    const ageGroups = [
        { id: 'all', label: 'All Ages' },
        { id: 'tiny-tots', label: 'Tiny Tots' },
        { id: 'juniors', label: 'Juniors' },
        { id: 'teens', label: 'Teens' },
    ];

    const getRankColor = (rank: number) => {
        if (rank === 1) return ['#fbbf24', '#f59e0b']; // Gold
        if (rank === 2) return ['#d1d5db', '#9ca3af']; // Silver
        if (rank === 3) return ['#f97316', '#ea580c']; // Bronze
        return ['#667eea', '#764ba2']; // Default
    };

    const getRankEmoji = (rank: number) => {
        if (rank === 1) return '🥇';
        if (rank === 2) return '🥈';
        if (rank === 3) return '🥉';
        return `#${rank}`;
    };

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2', '#f093fb']}
            style={styles.container}
        >
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>🏆 Leaderboard</Text>
                <Text style={styles.headerSubtitle}>Compete with the best!</Text>
            </View>

            {/* Period Filter */}
            <View style={styles.filterContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterScroll}
                >
                    {periods.map((period) => (
                        <TouchableOpacity
                            key={period.id}
                            onPress={() => setSelectedPeriod(period.id as any)}
                            style={[
                                styles.filterButton,
                                selectedPeriod === period.id && styles.filterButtonActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.filterButtonText,
                                    selectedPeriod === period.id && styles.filterButtonTextActive,
                                ]}
                            >
                                {period.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Age Group Filter */}
            <View style={styles.filterContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterScroll}
                >
                    {ageGroups.map((group) => (
                        <TouchableOpacity
                            key={group.id}
                            onPress={() => setSelectedAgeGroup(group.id as any)}
                            style={[
                                styles.filterButton,
                                selectedAgeGroup === group.id && styles.filterButtonActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.filterButtonText,
                                    selectedAgeGroup === group.id && styles.filterButtonTextActive,
                                ]}
                            >
                                {group.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Top 3 Podium */}
            <View style={styles.podiumContainer}>
                {/* 2nd Place */}
                {mockLeaderboardData[1] && (
                    <View style={styles.podiumItem}>
                        <LinearGradient
                            colors={getRankColor(2)}
                            style={[styles.podiumAvatar, styles.podiumSecond]}
                        >
                            <Text style={styles.podiumAvatarText}>{mockLeaderboardData[1].avatar}</Text>
                        </LinearGradient>
                        <View style={styles.podiumRank}>
                            <Text style={styles.podiumRankText}>🥈</Text>
                        </View>
                        <Text style={styles.podiumName}>{mockLeaderboardData[1].userName}</Text>
                        <Text style={styles.podiumScore}>{mockLeaderboardData[1].score.toLocaleString()}</Text>
                    </View>
                )}

                {/* 1st Place */}
                {mockLeaderboardData[0] && (
                    <View style={styles.podiumItem}>
                        <LinearGradient
                            colors={getRankColor(1)}
                            style={[styles.podiumAvatar, styles.podiumFirst]}
                        >
                            <Text style={styles.podiumAvatarText}>{mockLeaderboardData[0].avatar}</Text>
                            <View style={styles.crownContainer}>
                                <Text style={styles.crown}>👑</Text>
                            </View>
                        </LinearGradient>
                        <View style={styles.podiumRank}>
                            <Text style={styles.podiumRankText}>🥇</Text>
                        </View>
                        <Text style={styles.podiumName}>{mockLeaderboardData[0].userName}</Text>
                        <Text style={styles.podiumScore}>{mockLeaderboardData[0].score.toLocaleString()}</Text>
                    </View>
                )}

                {/* 3rd Place */}
                {mockLeaderboardData[2] && (
                    <View style={styles.podiumItem}>
                        <LinearGradient
                            colors={getRankColor(3)}
                            style={[styles.podiumAvatar, styles.podiumThird]}
                        >
                            <Text style={styles.podiumAvatarText}>{mockLeaderboardData[2].avatar}</Text>
                        </LinearGradient>
                        <View style={styles.podiumRank}>
                            <Text style={styles.podiumRankText}>🥉</Text>
                        </View>
                        <Text style={styles.podiumName}>{mockLeaderboardData[2].userName}</Text>
                        <Text style={styles.podiumScore}>{mockLeaderboardData[2].score.toLocaleString()}</Text>
                    </View>
                )}
            </View>

            {/* Leaderboard List */}
            <ScrollView
                style={styles.listContainer}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            >
                {mockLeaderboardData.slice(3).map((entry) => (
                    <View key={entry.userId} style={styles.listItem}>
                        <View style={styles.listRank}>
                            <Text style={styles.listRankText}>{getRankEmoji(entry.rank)}</Text>
                        </View>
                        <View style={styles.listAvatar}>
                            <Text style={styles.listAvatarText}>{entry.avatar}</Text>
                        </View>
                        <View style={styles.listInfo}>
                            <Text style={styles.listName}>{entry.userName}</Text>
                            <Text style={styles.listScore}>{entry.score.toLocaleString()} points</Text>
                        </View>
                        <TouchableOpacity style={styles.viewButton}>
                            <Text style={styles.viewButtonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Your Rank Card */}
            <View style={styles.yourRankCard}>
                <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.yourRankGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={styles.yourRankContent}>
                        <Text style={styles.yourRankLabel}>Your Rank</Text>
                        <Text style={styles.yourRankValue}>#42</Text>
                    </View>
                    <View style={styles.yourRankDivider} />
                    <View style={styles.yourRankContent}>
                        <Text style={styles.yourRankLabel}>Your Score</Text>
                        <Text style={styles.yourRankValue}>3,450</Text>
                    </View>
                </LinearGradient>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    filterContainer: {
        marginBottom: 15,
    },
    filterScroll: {
        paddingHorizontal: 20,
        gap: 10,
    },
    filterButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    filterButtonActive: {
        backgroundColor: '#fff',
    },
    filterButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    filterButtonTextActive: {
        color: '#667eea',
    },
    podiumContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 15,
    },
    podiumItem: {
        alignItems: 'center',
        flex: 1,
    },
    podiumAvatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#fff',
        position: 'relative',
    },
    podiumFirst: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    podiumSecond: {
        marginBottom: 10,
    },
    podiumThird: {
        marginBottom: 20,
    },
    podiumAvatarText: {
        fontSize: 36,
    },
    crownContainer: {
        position: 'absolute',
        top: -20,
    },
    crown: {
        fontSize: 30,
    },
    podiumRank: {
        marginTop: 8,
    },
    podiumRankText: {
        fontSize: 24,
    },
    podiumName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
    },
    podiumScore: {
        fontSize: 12,
        color: '#fff',
        opacity: 0.9,
    },
    listContainer: {
        flex: 1,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
    },
    listRank: {
        width: 40,
        alignItems: 'center',
    },
    listRankText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#667eea',
    },
    listAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    listAvatarText: {
        fontSize: 24,
    },
    listInfo: {
        flex: 1,
    },
    listName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 3,
    },
    listScore: {
        fontSize: 13,
        color: '#6b7280',
    },
    viewButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#667eea',
        borderRadius: 10,
    },
    viewButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    yourRankCard: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    yourRankGradient: {
        flexDirection: 'row',
        padding: 20,
    },
    yourRankContent: {
        flex: 1,
        alignItems: 'center',
    },
    yourRankLabel: {
        fontSize: 12,
        color: '#fff',
        opacity: 0.9,
        marginBottom: 5,
    },
    yourRankValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    yourRankDivider: {
        width: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginHorizontal: 15,
    },
});
