import { useCallback } from 'react';
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useUserStore } from '../store';

/**
 * Hook for playing sound effects and haptic feedback
 * Uses haptics as fallback when sounds aren't available
 */
export function useSound() {
  const { isSoundEnabled } = useUserStore();

  const playCorrect = useCallback(async () => {
    if (!isSoundEnabled) return;
    
    try {
      // Haptic feedback for correct answer
      if (Platform.OS !== 'web') {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      // Sound would play here when audio files are added
      // await audioService.playCorrectSound();
    } catch (error) {
      console.log('Sound not available');
    }
  }, [isSoundEnabled]);

  const playWrong = useCallback(async () => {
    if (!isSoundEnabled) return;
    
    try {
      if (Platform.OS !== 'web') {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    } catch (error) {
      console.log('Sound not available');
    }
  }, [isSoundEnabled]);

  const playClick = useCallback(async () => {
    if (!isSoundEnabled) return;
    
    try {
      if (Platform.OS !== 'web') {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch (error) {
      console.log('Sound not available');
    }
  }, [isSoundEnabled]);

  const playCelebration = useCallback(async () => {
    if (!isSoundEnabled) return;
    
    try {
      if (Platform.OS !== 'web') {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        // Double haptic for celebration
        setTimeout(() => {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }, 200);
      }
    } catch (error) {
      console.log('Sound not available');
    }
  }, [isSoundEnabled]);

  const playStreak = useCallback(async () => {
    if (!isSoundEnabled) return;
    
    try {
      if (Platform.OS !== 'web') {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
    } catch (error) {
      console.log('Sound not available');
    }
  }, [isSoundEnabled]);

  return {
    playCorrect,
    playWrong,
    playClick,
    playCelebration,
    playStreak,
  };
}

export default useSound;
