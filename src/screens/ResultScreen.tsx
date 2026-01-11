import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useQuizStore, useUserStore } from '../store';
import { ConfettiEffect, StarsEffect } from '../components/animations';
import { useSound } from '../hooks';

const { width, height } = Dimensions.get('window');

interface ResultScreenProps {
    navigation: any;
}

export default function ResultScreen({ navigation }: ResultScreenProps) {
    const { currentSession, endSession, recentSessions } = useQuizStore();
    const { profile, addPoints, incrementQuizzes } = useUserStore();
    const [scaleAnim] = useState(new Animated.Value(0));
    const [fadeAnim] = useState(new Animated.Value(0));
    const [showCelebration, setShowCelebration] = useState(false);
    const [sessionData, setSessionData] = useState<typeof currentSession>(null);
    
    const { playCorrect } = useSound();

    useEffect(() => {
        // Capture session data before it might be cleared
        if (currentSession && !sessionData) {
            setSessionData(currentSession);
            
            // Update user stats
            addPoints(currentSession.score);
            incrementQuizzes();
            endSession();

            // Play celebration sound and show confetti
            const accuracy = Math.round(
                (currentSession.answers.filter((a) => a.isCorrect).length / currentSession.questions.length) * 100
            );
            if (accuracy >= 50) {
                playCorrect();
                setShowCelebration(true);
                setTimeout(() => setShowCelebration(false), 4000);
            }

            // Animate entrance
            Animated.parallel([
                Animated.spring(scaleAnim, {
                    toValue: 1,
                    tension: 50,
                    friction: 7,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]).start();
        } else if (!currentSession && !sessionData && recentSessions.length > 0) {
            // If we navigated here but session was already cleared, use most recent
            setSessionData(recentSessions[0]);
        } else if (!currentSession && !sessionData && recentSessions.length === 0) {
            // No session data at all - redirect to home after short delay
            const timer = setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MainTabs' }],
                });
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [currentSession, sessionData, recentSessions]);

    // Use captured session data
    const session = sessionData;

    if (!session) {
        return (
            <LinearGradient
                colors={['#667eea', '#764ba2', '#f093fb']}
                style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}
            >
                <Text style={styles.loadingText}>No quiz data found</Text>
                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 10 }}>
                    Redirecting to home...
                </Text>
                <TouchableOpacity 
                    style={{ 
                        marginTop: 30, 
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: 25,
                    }}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainTabs' }],
                    })}
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Go Home Now</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }

    const totalQuestions = session.questions.length;
    const correctAnswers = session.answers.filter((a) => a.isCorrect).length;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
    const totalTimeSpent = session.answers.reduce((sum, a) => sum + a.timeSpent, 0);
    const avgTimePerQuestion = Math.round(totalTimeSpent / totalQuestions);

    // Performance rating
    let performanceEmoji = '🌟';
    let performanceText = 'Great Job!';
    let performanceColor = '#10b981';

    if (accuracy >= 90) {
        performanceEmoji = '🏆';
        performanceText = 'Outstanding!';
        performanceColor = '#f59e0b';
    } else if (accuracy >= 70) {
        performanceEmoji = '🎉';
        performanceText = 'Well Done!';
        performanceColor = '#10b981';
    } else if (accuracy >= 50) {
        performanceEmoji = '👍';
        performanceText = 'Good Effort!';
        performanceColor = '#3b82f6';
    } else {
        performanceEmoji = '💪';
        performanceText = 'Keep Practicing!';
        performanceColor = '#8b5cf6';
    }

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2', '#f093fb']}
            style={styles.container}
        >
            {/* Celebration Animations */}
            {showCelebration && (
                <>
                    <ConfettiEffect />
                    <StarsEffect />
                </>
            )}
            
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <Animated.View
                    style={[
                        styles.header,
                        {
                            opacity: fadeAnim,
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    <Text style={styles.headerEmoji}>{performanceEmoji}</Text>
                    <Text style={[styles.headerText, { color: performanceColor }]}>
                        {performanceText}
                    </Text>
                </Animated.View>

                {/* Score Card */}
                <Animated.View
                    style={[
                        styles.scoreCard,
                        {
                            opacity: fadeAnim,
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    <Text style={styles.scoreLabel}>Your Score</Text>
                    <Text style={styles.scoreValue}>{session.score}</Text>
                    <Text style={styles.scoreSubtext}>points earned</Text>

                    <View style={styles.divider} />

                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{correctAnswers}/{totalQuestions}</Text>
                            <Text style={styles.statLabel}>Correct</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{accuracy}%</Text>
                            <Text style={styles.statLabel}>Accuracy</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{session.maxStreak}</Text>
                            <Text style={styles.statLabel}>Best Streak</Text>
                        </View>
                    </View>
                </Animated.View>

                {/* Performance Breakdown */}
                <Animated.View style={[styles.breakdownCard, { opacity: fadeAnim }]}>
                    <Text style={styles.breakdownTitle}>Performance Breakdown</Text>

                    <View style={styles.breakdownItem}>
                        <View style={styles.breakdownIcon}>
                            <Text style={styles.breakdownIconText}>✓</Text>
                        </View>
                        <View style={styles.breakdownContent}>
                            <Text style={styles.breakdownLabel}>Correct Answers</Text>
                            <View style={styles.progressBar}>
                                <View
                                    style={[
                                        styles.progressFill,
                                        styles.progressCorrect,
                                        { width: `${accuracy}%` },
                                    ]}
                                />
                            </View>
                        </View>
                        <Text style={styles.breakdownValue}>{correctAnswers}</Text>
                    </View>

                    <View style={styles.breakdownItem}>
                        <View style={[styles.breakdownIcon, styles.breakdownIconWrong]}>
                            <Text style={styles.breakdownIconText}>✗</Text>
                        </View>
                        <View style={styles.breakdownContent}>
                            <Text style={styles.breakdownLabel}>Incorrect Answers</Text>
                            <View style={styles.progressBar}>
                                <View
                                    style={[
                                        styles.progressFill,
                                        styles.progressWrong,
                                        { width: `${100 - accuracy}%` },
                                    ]}
                                />
                            </View>
                        </View>
                        <Text style={styles.breakdownValue}>{totalQuestions - correctAnswers}</Text>
                    </View>

                    <View style={styles.breakdownItem}>
                        <View style={[styles.breakdownIcon, styles.breakdownIconTime]}>
                            <Text style={styles.breakdownIconText}>⏱</Text>
                        </View>
                        <View style={styles.breakdownContent}>
                            <Text style={styles.breakdownLabel}>Avg. Time per Question</Text>
                        </View>
                        <Text style={styles.breakdownValue}>{avgTimePerQuestion}s</Text>
                    </View>
                </Animated.View>

                {/* New Achievements */}
                {session.maxStreak >= 5 && (
                    <Animated.View style={[styles.achievementCard, { opacity: fadeAnim }]}>
                        <Text style={styles.achievementTitle}>🎊 New Achievement!</Text>
                        <Text style={styles.achievementText}>
                            Streak Master - {session.maxStreak} correct answers in a row!
                        </Text>
                    </Animated.View>
                )}

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <LinearGradient
                            colors={['#667eea', '#764ba2']}
                            style={styles.buttonGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Back to Home</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Category', {
                                categoryId: session.categoryId,
                                ageGroup: session.ageGroup,
                            });
                        }}
                    >
                        <LinearGradient
                            colors={['#11998e', '#38ef7d']}
                            style={styles.buttonGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Try Again</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* View Details */}
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => {
                        // Navigate to detailed review screen (future feature)
                        console.log('View detailed answers');
                    }}
                >
                    <Text style={styles.detailsButtonText}>View Detailed Answers →</Text>
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
        marginTop: height / 2,
    },
    scrollContent: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    headerEmoji: {
        fontSize: 80,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    scoreCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 25,
        padding: 30,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 12,
    },
    scoreLabel: {
        fontSize: 16,
        color: '#6b7280',
        fontWeight: '600',
        marginBottom: 10,
    },
    scoreValue: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#667eea',
    },
    scoreSubtext: {
        fontSize: 14,
        color: '#9ca3af',
        marginTop: 5,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#e5e7eb',
        marginVertical: 25,
    },
    statsRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 12,
        color: '#6b7280',
        textTransform: 'uppercase',
    },
    statDivider: {
        width: 1,
        backgroundColor: '#e5e7eb',
    },
    breakdownCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    breakdownTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 20,
    },
    breakdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    breakdownIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    breakdownIconWrong: {
        backgroundColor: '#ef4444',
    },
    breakdownIconTime: {
        backgroundColor: '#3b82f6',
    },
    breakdownIconText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    breakdownContent: {
        flex: 1,
    },
    breakdownLabel: {
        fontSize: 14,
        color: '#4b5563',
        marginBottom: 8,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#e5e7eb',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    progressCorrect: {
        backgroundColor: '#10b981',
    },
    progressWrong: {
        backgroundColor: '#ef4444',
    },
    breakdownValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginLeft: 10,
    },
    achievementCard: {
        backgroundColor: 'rgba(251, 207, 232, 0.95)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#f472b6',
    },
    achievementTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#be185d',
        marginBottom: 8,
    },
    achievementText: {
        fontSize: 14,
        color: '#831843',
    },
    buttonContainer: {
        gap: 15,
        marginTop: 10,
    },
    button: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    buttonGradient: {
        paddingVertical: 18,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailsButton: {
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 15,
    },
    detailsButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});
