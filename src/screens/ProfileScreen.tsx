import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserStore } from '../store';
import type { Badge } from '../types';

const { width } = Dimensions.get('window');

interface ProfileScreenProps {
    navigation: any;
}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
    const { profile } = useUserStore();

    if (!profile) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading profile...</Text>
            </View>
        );
    }

    const accuracy = profile.totalAnswers > 0
        ? Math.round((profile.correctAnswers / profile.totalAnswers) * 100)
        : 0;

    const levelProgress = (profile.totalPoints % 1000) / 10; // Progress to next level
    const nextLevelPoints = (profile.level + 1) * 1000;

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2', '#f093fb']}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <LinearGradient
                            colors={['#fbbf24', '#f59e0b']}
                            style={styles.avatarGradient}
                        >
                            <Text style={styles.avatarText}>{profile.name.charAt(0).toUpperCase()}</Text>
                        </LinearGradient>
                        <View style={styles.levelBadge}>
                            <Text style={styles.levelText}>Lv {profile.level}</Text>
                        </View>
                    </View>
                    <Text style={styles.userName}>{profile.name}</Text>
                    <Text style={styles.userAgeGroup}>
                        {profile.ageGroup === 'tiny-tots' && '🌟 Tiny Tot'}
                        {profile.ageGroup === 'juniors' && '⭐ Junior Star'}
                        {profile.ageGroup === 'teens' && '🏆 Teen Champion'}
                    </Text>
                </View>

                {/* Stats Card */}
                <View style={styles.statsCard}>
                    <View style={styles.statRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statValue}>{profile.totalPoints}</Text>
                            <Text style={styles.statLabel}>Total Points</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statValue}>{profile.quizzesCompleted}</Text>
                            <Text style={styles.statLabel}>Quizzes Done</Text>
                        </View>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statValue}>{accuracy}%</Text>
                            <Text style={styles.statLabel}>Accuracy</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statValue}>{profile.streakDays}</Text>
                            <Text style={styles.statLabel}>Day Streak 🔥</Text>
                        </View>
                    </View>
                </View>

                {/* Level Progress */}
                <View style={styles.progressCard}>
                    <View style={styles.progressHeader}>
                        <Text style={styles.progressTitle}>Level Progress</Text>
                        <Text style={styles.progressPoints}>
                            {profile.totalPoints} / {nextLevelPoints} XP
                        </Text>
                    </View>
                    <View style={styles.progressBarContainer}>
                        <View
                            style={[styles.progressBarFill, { width: `${levelProgress}%` }]}
                        />
                    </View>
                    <Text style={styles.progressSubtext}>
                        {nextLevelPoints - profile.totalPoints} points to Level {profile.level + 1}
                    </Text>
                </View>

                {/* Badges Section */}
                <View style={styles.badgesSection}>
                    <Text style={styles.sectionTitle}>🏅 Badges & Achievements</Text>
                    <View style={styles.badgesGrid}>
                        {profile.badges.map((badge: Badge) => (
                            <View
                                key={badge.id}
                                style={[
                                    styles.badgeCard,
                                    !badge.unlockedAt && styles.badgeCardLocked,
                                ]}
                            >
                                <Text style={styles.badgeIcon}>{badge.icon}</Text>
                                <Text style={styles.badgeName}>{badge.name}</Text>
                                {badge.unlockedAt ? (
                                    <Text style={styles.badgeUnlocked}>✓ Unlocked</Text>
                                ) : (
                                    <Text style={styles.badgeLocked}>🔒 Locked</Text>
                                )}
                            </View>
                        ))}
                    </View>
                </View>

                {/* Recent Activity */}
                <View style={styles.activitySection}>
                    <Text style={styles.sectionTitle}>📊 Quick Stats</Text>
                    <View style={styles.activityCard}>
                        <View style={styles.activityItem}>
                            <Text style={styles.activityIcon}>✅</Text>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityLabel}>Correct Answers</Text>
                                <Text style={styles.activityValue}>{profile.correctAnswers}</Text>
                            </View>
                        </View>
                        <View style={styles.activityDivider} />
                        <View style={styles.activityItem}>
                            <Text style={styles.activityIcon}>📝</Text>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityLabel}>Total Questions</Text>
                                <Text style={styles.activityValue}>{profile.totalAnswers}</Text>
                            </View>
                        </View>
                        <View style={styles.activityDivider} />
                        <View style={styles.activityItem}>
                            <Text style={styles.activityIcon}>🎯</Text>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityLabel}>Success Rate</Text>
                                <Text style={styles.activityValue}>{accuracy}%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Settings Button */}
                <TouchableOpacity
                    style={styles.settingsButton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <LinearGradient
                        colors={['#6366f1', '#8b5cf6']}
                        style={styles.settingsGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.settingsButtonText}>⚙️ Settings</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 200,
    },
    scrollContent: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    avatarGradient: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#fff',
    },
    avatarText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    levelBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#10b981',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#fff',
    },
    levelText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    userAgeGroup: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    statsCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f3f4f6',
        borderRadius: 15,
        marginHorizontal: 5,
    },
    statValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#667eea',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 12,
        color: '#6b7280',
        textAlign: 'center',
    },
    progressCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    progressTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    progressPoints: {
        fontSize: 14,
        color: '#6b7280',
        fontWeight: '600',
    },
    progressBarContainer: {
        height: 12,
        backgroundColor: '#e5e7eb',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#10b981',
        borderRadius: 6,
    },
    progressSubtext: {
        fontSize: 12,
        color: '#9ca3af',
        textAlign: 'center',
    },
    badgesSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
    },
    badgesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    badgeCard: {
        width: (width - 60) / 3,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
    },
    badgeCardLocked: {
        opacity: 0.5,
    },
    badgeIcon: {
        fontSize: 40,
        marginBottom: 8,
    },
    badgeName: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 5,
    },
    badgeUnlocked: {
        fontSize: 10,
        color: '#10b981',
        fontWeight: 'bold',
    },
    badgeLocked: {
        fontSize: 10,
        color: '#9ca3af',
    },
    activitySection: {
        marginBottom: 20,
    },
    activityCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 20,
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    activityIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    activityContent: {
        flex: 1,
    },
    activityLabel: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 4,
    },
    activityValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    activityDivider: {
        height: 1,
        backgroundColor: '#e5e7eb',
        marginVertical: 8,
    },
    settingsButton: {
        borderRadius: 15,
        overflow: 'hidden',
        marginTop: 10,
    },
    settingsGradient: {
        paddingVertical: 18,
        alignItems: 'center',
    },
    settingsButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
