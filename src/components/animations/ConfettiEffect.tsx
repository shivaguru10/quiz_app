import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

interface ConfettiEffectProps {
  visible: boolean;
  onComplete?: () => void;
}

export default function ConfettiEffect({ visible, onComplete }: ConfettiEffectProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (visible && animationRef.current) {
      animationRef.current.play();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.container} pointerEvents="none">
      <LottieView
        ref={animationRef}
        source={require('../../../assets/animations/confetti.json')}
        style={styles.animation}
        autoPlay={false}
        loop={false}
        onAnimationFinish={onComplete}
        speed={1}
      />
      {/* Multiple confetti instances for fuller effect */}
      <LottieView
        source={require('../../../assets/animations/confetti.json')}
        style={[styles.animation, styles.animation2]}
        autoPlay={visible}
        loop={false}
        speed={0.8}
      />
      <LottieView
        source={require('../../../assets/animations/confetti.json')}
        style={[styles.animation, styles.animation3]}
        autoPlay={visible}
        loop={false}
        speed={1.2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  animation: {
    position: 'absolute',
    width: width,
    height: height * 0.5,
    top: 0,
  },
  animation2: {
    left: -50,
  },
  animation3: {
    right: -50,
  },
});
