import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface FeedbackAnimationProps {
  type: 'correct' | 'wrong';
  visible: boolean;
  onComplete?: () => void;
  size?: number;
}

export default function FeedbackAnimation({ 
  type, 
  visible, 
  onComplete,
  size = 120 
}: FeedbackAnimationProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (visible && animationRef.current) {
      animationRef.current.play();
    }
  }, [visible]);

  if (!visible) return null;

  const source = type === 'correct' 
    ? require('../../../assets/animations/correct.json')
    : require('../../../assets/animations/wrong.json');

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={source}
        style={{ width: size, height: size }}
        autoPlay={false}
        loop={false}
        onAnimationFinish={onComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
