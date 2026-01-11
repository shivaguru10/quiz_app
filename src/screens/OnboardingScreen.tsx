import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withRepeat,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export default function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  // Animation values
  const logoScale = useSharedValue(0);
  const logoRotation = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const subtitleOpacity = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);
  const floatingY = useSharedValue(0);

  // Star animations
  const star1 = useSharedValue(0);
  const star2 = useSharedValue(0);
  const star3 = useSharedValue(0);

  useEffect(() => {
    // Entrance animations
    logoScale.value = withSpring(1, { damping: 12, stiffness: 100 });
    logoRotation.value = withSequence(
      withTiming(15, { duration: 200 }),
      withTiming(-15, { duration: 200 }),
      withTiming(0, { duration: 200 })
    );

    setTimeout(() => {
      titleOpacity.value = withTiming(1, { duration: 500 });
    }, 300);

    setTimeout(() => {
      subtitleOpacity.value = withTiming(1, { duration: 500 });
    }, 600);

    setTimeout(() => {
      buttonOpacity.value = withTiming(1, { duration: 500 });
    }, 900);

    // Floating animation
    floatingY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 1500 }),
        withTiming(10, { duration: 1500 })
      ),
      -1,
      true
    );

    // Star twinkling
    star1.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0.3, { duration: 1000 })
      ),
      -1,
      true
    );
    star2.value = withRepeat(
      withSequence(
        withTiming(0.3, { duration: 800 }),
        withTiming(1, { duration: 800 })
      ),
      -1,
      true
    );
    star3.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1200 }),
        withTiming(0.5, { duration: 1200 })
      ),
      -1,
      true
    );
  }, []);

  // Animated styles
  const logoStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { rotate: `${logoRotation.value}deg` },
      { translateY: floatingY.value },
    ],
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [
      {
        translateY: interpolate(
          titleOpacity.value,
          [0, 1],
          [20, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
    transform: [
      {
        scale: interpolate(
          buttonOpacity.value,
          [0, 1],
          [0.8, 1],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const starStyle1 = useAnimatedStyle(() => ({
    opacity: star1.value,
    transform: [{ scale: star1.value }],
  }));

  const starStyle2 = useAnimatedStyle(() => ({
    opacity: star2.value,
    transform: [{ scale: star2.value }],
  }));

  const starStyle3 = useAnimatedStyle(() => ({
    opacity: star3.value,
    transform: [{ scale: star3.value }],
  }));

  const handleGetStarted = () => {
    navigation.navigate('AgeSelection');
  };

  return (
    <LinearGradient
      colors={['#6C63FF', '#4834DF', '#2C2977']}
      style={styles.container}
    >
      {/* Decorative Stars */}
      <Animated.Text style={[styles.star, styles.star1, starStyle1]}>⭐</Animated.Text>
      <Animated.Text style={[styles.star, styles.star2, starStyle2]}>✨</Animated.Text>
      <Animated.Text style={[styles.star, styles.star3, starStyle3]}>🌟</Animated.Text>
      <Animated.Text style={[styles.star, styles.star4, starStyle1]}>⭐</Animated.Text>
      <Animated.Text style={[styles.star, styles.star5, starStyle2]}>✨</Animated.Text>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Logo/Mascot */}
        <Animated.View style={[styles.logoContainer, logoStyle]}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🧠</Text>
          </View>
        </Animated.View>

        {/* Title */}
        <Animated.Text style={[styles.title, titleStyle]}>
          KidQuiz
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text style={[styles.subtitle, subtitleStyle]}>
          Learn • Play • Grow
        </Animated.Text>

        <Animated.Text style={[styles.description, subtitleStyle]}>
          Fun quizzes with animations, sounds, and rewards!{'\n'}
          Made for curious minds of all ages 🎮
        </Animated.Text>

        {/* Feature Pills */}
        <Animated.View style={[styles.features, subtitleStyle]}>
          <View style={styles.featurePill}>
            <Text style={styles.featureText}>🎨 Fun Animations</Text>
          </View>
          <View style={styles.featurePill}>
            <Text style={styles.featureText}>🔊 Audio & Voice</Text>
          </View>
          <View style={styles.featurePill}>
            <Text style={styles.featureText}>📴 Offline Mode</Text>
          </View>
        </Animated.View>

        {/* Get Started Button */}
        <Animated.View style={buttonStyle}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#FF6B9D', '#FF8E72']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Let's Go! 🚀</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Bottom decoration */}
      <View style={styles.bottomDecoration}>
        <Text style={styles.decorEmoji}>🎯 🏆 📚 ✨ 🎮</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  star: {
    position: 'absolute',
    fontSize: 24,
  },
  star1: { top: 80, left: 30 },
  star2: { top: 120, right: 40 },
  star3: { top: 200, left: 60 },
  star4: { top: 300, right: 30 },
  star5: { top: 400, left: 20 },
  logoContainer: {
    marginBottom: 30,
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoEmoji: {
    fontSize: 70,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 22,
    color: '#FFD93D',
    fontWeight: '600',
    marginBottom: 15,
    letterSpacing: 2,
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 40,
  },
  featurePill: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonGradient: {
    paddingHorizontal: 50,
    paddingVertical: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomDecoration: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  decorEmoji: {
    fontSize: 24,
    letterSpacing: 10,
  },
});
