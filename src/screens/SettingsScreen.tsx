import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserStore } from '../store';

interface SettingsScreenProps {
    navigation: any;
}

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
    const { profile } = useUserStore();

    // Settings state
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [musicEnabled, setMusicEnabled] = useState(true);
    const [voiceOverEnabled, setVoiceOverEnabled] = useState(profile?.ageGroup === 'tiny-tots');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [hapticFeedback, setHapticFeedback] = useState(true);
    const [autoPlayNext, setAutoPlayNext] = useState(false);

    const handleResetProgress = () => {
        Alert.alert(
            'Reset Progress',
            'Are you sure you want to reset all your progress? This action cannot be undone.',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Reset',
                    style: 'destructive',
                    onPress: () => {
                        // Reset logic here
                        Alert.alert('Success', 'Your progress has been reset.');
                    },
                },
            ]
        );
    };

    const handleDeleteAccount = () => {
        Alert.alert(
            'Delete Account',
            'Are you sure you want to delete your account? All your data will be permanently deleted.',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        // Delete account logic here
                        Alert.alert('Account Deleted', 'Your account has been deleted.');
                    },
                },
            ]
        );
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
                    <Text style={styles.headerTitle}>⚙️ Settings</Text>
                </View>

                {/* Audio Settings */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🔊 Audio</Text>
                    <View style={styles.card}>
                        <View style={styles.settingItem}>
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingLabel}>Sound Effects</Text>
                                <Text style={styles.settingDescription}>
                                    Play sounds for correct/wrong answers
                                </Text>
                            </View>
                            <Switch
                                value={soundEnabled}
                                onValueChange={setSoundEnabled}
                                trackColor={{ false: '#d1d5db', true: '#10b981' }}
                                thumbColor={soundEnabled ? '#fff' : '#f3f4f6'}
                            />
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.settingItem}>
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingLabel}>Background Music</Text>
                                <Text style={styles.settingDescription}>
                                    Play background music during quizzes
                                </Text>
                            </View>
                            <Switch
                                value={musicEnabled}
                                onValueChange={setMusicEnabled}
                                trackColor={{ false: '#d1d5db', true: '#10b981' }}
                                thumbColor={musicEnabled ? '#fff' : '#f3f4f6'}
                            />
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.settingItem}>
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingLabel}>Voice-Over</Text>
                                <Text style={styles.settingDescription}>
                                    Read questions aloud (for Tiny Tots)
                                </Text>
                            </View>
                            <Switch
                                value={voiceOverEnabled}
                                onValueChange={setVoiceOverEnabled}
                                trackColor={{ false: '#d1d5db', true: '#10b981' }}
                                thumbColor={voiceOverEnabled ? '#fff' : '#f3f4f6'}
                            />
                        </View>
                    </View>
                </View>

                {/* Gameplay Settings */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🎮 Gameplay</Text>
                    <View style={styles.card}>
                        <View style={styles.settingItem}>
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingLabel}>Haptic Feedback</Text>
                                <Text style={styles.settingDescription}>
                                    Vibrate on button presses
                                </Text>
                            </View>
                            <Switch
                                value={hapticFeedback}
                                onValueChange={setHapticFeedback}
                                trackColor={{ false: '#d1d5db', true: '#10b981' }}
                                thumbColor={hapticFeedback ? '#fff' : '#f3f4f6'}
                            />
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.settingItem}>
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingLabel}>Auto-Play Next</Text>
                                <Text style={styles.settingDescription}>
                                    Automatically move to next question
                                </Text>
                            </View>
                            <Switch
                                value={autoPlayNext}
                                onValueChange={setAutoPlayNext}
                                trackColor={{ false: '#d1d5db', true: '#10b981' }}
                                thumbColor={autoPlayNext ? '#fff' : '#f3f4f6'}
                            />
                        </View>
                    </View>
                </View>

                {/* Notifications */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🔔 Notifications</Text>
                    <View style={styles.card}>
                        <View style={styles.settingItem}>
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingLabel}>Push Notifications</Text>
                                <Text style={styles.settingDescription}>
                                    Get reminders and updates
                                </Text>
                            </View>
                            <Switch
                                value={notificationsEnabled}
                                onValueChange={setNotificationsEnabled}
                                trackColor={{ false: '#d1d5db', true: '#10b981' }}
                                thumbColor={notificationsEnabled ? '#fff' : '#f3f4f6'}
                            />
                        </View>
                    </View>
                </View>

                {/* Account Settings */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>👤 Account</Text>
                    <View style={styles.card}>
                        <TouchableOpacity
                            style={styles.settingButton}
                            onPress={() => navigation.navigate('AgeSelection', { fromSettings: true })}
                        >
                            <View style={styles.settingInfo}>
                                <Text style={styles.settingButtonText}>Change Age Group</Text>
                                <Text style={styles.settingDescription}>
                                    Current: {profile?.ageGroup === 'tiny-tots' ? '🧒 Tiny Tots (4-7)' : 
                                              profile?.ageGroup === 'juniors' ? '🌟 Juniors (8-12)' : 
                                              profile?.ageGroup === 'teens' ? '🏆 Teens (13+)' : 'Not set'}
                                </Text>
                            </View>
                            <Text style={styles.settingButtonArrow}>→</Text>
                        </TouchableOpacity>

                        <View style={styles.divider} />

                        <TouchableOpacity
                            style={styles.settingButton}
                            onPress={() => navigation.navigate('OfflinePacks')}
                        >
                            <Text style={styles.settingButtonText}>Offline Quiz Packs</Text>
                            <Text style={styles.settingButtonArrow}>→</Text>
                        </TouchableOpacity>

                        <View style={styles.divider} />

                        <TouchableOpacity
                            style={styles.settingButton}
                            onPress={handleResetProgress}
                        >
                            <Text style={[styles.settingButtonText, styles.dangerText]}>
                                Reset Progress
                            </Text>
                            <Text style={styles.settingButtonArrow}>→</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* About */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>ℹ️ About</Text>
                    <View style={styles.card}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Version</Text>
                            <Text style={styles.infoValue}>1.0.0</Text>
                        </View>
                        <View style={styles.divider} />
                        <TouchableOpacity style={styles.settingButton}>
                            <Text style={styles.settingButtonText}>Privacy Policy</Text>
                            <Text style={styles.settingButtonArrow}>→</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity style={styles.settingButton}>
                            <Text style={styles.settingButtonText}>Terms of Service</Text>
                            <Text style={styles.settingButtonArrow}>→</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity style={styles.settingButton}>
                            <Text style={styles.settingButtonText}>Contact Support</Text>
                            <Text style={styles.settingButtonArrow}>→</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Danger Zone */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, styles.dangerTitle]}>⚠️ Danger Zone</Text>
                    <TouchableOpacity
                        style={styles.dangerButton}
                        onPress={handleDeleteAccount}
                    >
                        <Text style={styles.dangerButtonText}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
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
        marginBottom: 30,
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    dangerTitle: {
        color: '#fca5a5',
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 15,
        padding: 15,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    settingInfo: {
        flex: 1,
        marginRight: 15,
    },
    settingLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 4,
    },
    settingDescription: {
        fontSize: 13,
        color: '#6b7280',
    },
    divider: {
        height: 1,
        backgroundColor: '#e5e7eb',
        marginVertical: 12,
    },
    settingButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    settingButtonText: {
        fontSize: 16,
        color: '#1f2937',
        fontWeight: '500',
    },
    settingButtonArrow: {
        fontSize: 18,
        color: '#9ca3af',
    },
    dangerText: {
        color: '#ef4444',
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    infoLabel: {
        fontSize: 16,
        color: '#6b7280',
    },
    infoValue: {
        fontSize: 16,
        color: '#1f2937',
        fontWeight: '600',
    },
    dangerButton: {
        backgroundColor: 'rgba(239, 68, 68, 0.9)',
        borderRadius: 15,
        padding: 18,
        alignItems: 'center',
    },
    dangerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
