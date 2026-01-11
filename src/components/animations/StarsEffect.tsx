import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface StarsEffectProps {
  visible: boolean;
  onComplete?: () => void;
  size?: number;
}

export default function StarsEffect({ 
  visible, 
  onComplete,
  size = 150 
}: StarsEffectProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (visible && animationRef.current) {
      animationRef.current.play();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../../../assets/animations/stars.json')}
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
