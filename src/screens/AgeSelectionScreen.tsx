import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withSequence,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useUserStore } from '../store';
import { AGE_GROUPS } from '../constants/config';
import { AgeGroup, UserProfile } from '../types';

const { width } = Dimensions.get('window');

type AgeSelectionScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AgeSelection'>;
  route: RouteProp<RootStackParamList, 'AgeSelection'>;
};

const ageGroupData = [
  {
    id: 'tiny-tots' as AgeGroup,
    emoji: '🧒',
    mascot: '🦋',
    decorations: ['🌈', '🎨', '🧸', '🎪'],
  },
  {
    id: 'juniors' as AgeGroup,
    emoji: '🌟',
    mascot: '🦊',
    decorations: ['📚', '🔬', '🎯', '🎸'],
  },
  {
    id: 'teens' as AgeGroup,
    emoji: '🏆',
    mascot: '🦁',
    decorations: ['💻', '🚀', '🎮', '⚡'],
  },
];

export default function AgeSelectionScreen({ navigation, route }: AgeSelectionScreenProps) {
  const { setAgeGroup, setProfile, updateProfile, completeOnboarding, profile, selectedAgeGroup } = useUserStore();
  const fromSettings = route.params?.fromSettings ?? false;

  // Animation values for each card
  const card1Scale = useSharedValue(0);
  const card2Scale = useSharedValue(0);
  const card3Scale = useSharedValue(0);
  const titleOpacity = useSharedValue(0);

  useEffect(() => {
    titleOpacity.value = withTiming(1, { duration: 500 });
    card1Scale.value = withDelay(200, withSpring(1, { damping: 12 }));
    card2Scale.value = withDelay(400, withSpring(1, { damping: 12 }));
    card3Scale.value = withDelay(600, withSpring(1, { damping: 12 }));
  }, []);

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: interpolate(titleOpacity.value, [0, 1], [-20, 0]) }],
  }));

  const card1Style = useAnimatedStyle(() => ({
    transform: [{ scale: card1Scale.value }],
    opacity: card1Scale.value,
  }));

  const card2Style = useAnimatedStyle(() => ({
    transform: [{ scale: card2Scale.value }],
    opacity: card2Scale.value,
  }));

  const card3Style = useAnimatedStyle(() => ({
    transform: [{ scale: card3Scale.value }],
    opacity: card3Scale.value,
  }));

  const cardStyles = [card1Style, card2Style, card3Style];

  const handleSelectAge = (ageGroup: AgeGroup) => {
    const config = AGE_GROUPS[ageGroup];
    
    if (fromSettings && profile) {
      // Changing age group from settings - update existing profile directly
      updateProfile({ 
        ageGroup,
        avatar: ageGroupData.find(a => a.id === ageGroup)?.mascot || profile.avatar,
      });
      setAgeGroup(ageGroup);
      // Navigate back to Home with updated age group
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } else {
      // Initial onboarding - create new profile
      const newProfile: UserProfile = {
        id: `user-${Date.now()}`,
        name: 'Quiz Champion',
        avatar: ageGroupData.find(a => a.id === ageGroup)?.mascot || '🦊',
        ageGroup,
        totalPoints: 0,
        level: 1,
        badges: [],
        streakDays: 0,
        quizzesCompleted: 0,
        correctAnswers: 0,
        totalAnswers: 0,
        unlockedCharacters: [],
        unlockedThemes: [],
        createdAt: new Date(),
      };

      setProfile(newProfile);
      setAgeGroup(ageGroup);
      completeOnboarding();
    }
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2', '#6B8DD6']}
      style={styles.container}
    >
      {/* Back Button - only show when from settings */}
      {fromSettings && (
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      )}

      {/* Header */}
      <Animated.View style={[styles.header, titleStyle]}>
        <Text style={styles.title}>{fromSettings ? 'Change Age Group 🔄' : 'Who\'s Playing? 🎮'}</Text>
        <Text style={styles.subtitle}>
          {fromSettings 
            ? `Current: ${selectedAgeGroup ? AGE_GROUPS[selectedAgeGroup].name : 'None'}\nTap to switch!`
            : 'Pick your age group for the best experience!'}
        </Text>
      </Animated.View>

      {/* Age Group Cards */}
      <View style={styles.cardsContainer}>
        {ageGroupData.map((group, index) => {
          const config = AGE_GROUPS[group.id];
          
          return (
            <Animated.View key={group.id} style={[cardStyles[index]]}>
              <TouchableOpacity
                style={styles.cardWrapper}
                onPress={() => handleSelectAge(group.id)}
                activeOpacity={0.9}
              >
                <LinearGradient
                  colors={[config.colors.primary, config.colors.secondary]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.card}
                >
                  {/* Decorations */}
                  <View style={styles.decorations}>
                    {group.decorations.map((dec, i) => (
                      <Text key={i} style={[styles.decoration, styles[`dec${i}` as keyof typeof styles]]}>
                        {dec}
                      </Text>
                    ))}
                  </View>

                  {/* Main Content */}
                  <View style={styles.cardContent}>
                    <View style={styles.mascotContainer}>
                      <Text style={styles.mascot}>{group.mascot}</Text>
                    </View>
                    
                    <Text style={styles.cardTitle}>{config.name}</Text>
                    <Text style={styles.ageRange}>{config.ageRange}</Text>
                    <Text style={styles.cardDescription}>{config.description}</Text>

                    {/* Features Preview */}
                    <View style={styles.featuresRow}>
                      {config.features.hasVoiceOver && (
                        <View style={styles.featureBadge}>
                          <Text style={styles.featureBadgeText}>🔊 Voice</Text>
                        </View>
                      )}
                      {config.features.hasLeaderboard && (
                        <View style={styles.featureBadge}>
                          <Text style={styles.featureBadgeText}>🏆 Ranks</Text>
                        </View>
                      )}
                      {config.features.hasTimer && (
                        <View style={styles.featureBadge}>
                          <Text style={styles.featureBadgeText}>⏱️ Timed</Text>
                        </View>
                      )}
                    </View>
                  </View>

                  {/* Select Indicator */}
                  <View style={styles.selectIndicator}>
                    <Text style={styles.selectText}>Tap to Select</Text>
                    <Text style={styles.selectArrow}>→</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {fromSettings ? 'Your progress will be kept! 🎯' : 'You can change this later in settings ⚙️'}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 15,
  },
  cardWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  card: {
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  decorations: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  decoration: {
    position: 'absolute',
    fontSize: 20,
    opacity: 0.3,
  },
  dec0: { top: 10, right: 10 },
  dec1: { bottom: 10, left: 10 },
  dec2: { top: 40, left: 30 },
  dec3: { bottom: 40, right: 30 },
  cardContent: {
    alignItems: 'center',
  },
  mascotContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  mascot: {
    fontSize: 35,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  ageRange: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 6,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 10,
  },
  featuresRow: {
    flexDirection: 'row',
    gap: 8,
  },
  featureBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featureBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  selectIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
  selectText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  selectArrow: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
  },
});
