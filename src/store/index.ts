import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  AgeGroup, 
  UserProfile, 
  QuizSession, 
  Question, 
  UserAnswer,
  Badge,
  OfflineQuizPack 
} from '../types';
import { POINTS_CONFIG, BADGES } from '../constants/config';

// ============================================
// USER STORE
// ============================================

interface UserState {
  profile: UserProfile | null;
  isOnboarded: boolean;
  selectedAgeGroup: AgeGroup | null;
  isSoundEnabled: boolean;
  isMusicEnabled: boolean;
  isVoiceOverEnabled: boolean;
  
  // Actions
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  setAgeGroup: (ageGroup: AgeGroup) => void;
  completeOnboarding: () => void;
  toggleSound: () => void;
  toggleMusic: () => void;
  toggleVoiceOver: () => void;
  addPoints: (points: number) => void;
  incrementQuizzes: () => void;
  unlockBadge: (badgeId: string) => void;
  checkAndUnlockBadges: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profile: null,
      isOnboarded: false,
      selectedAgeGroup: null,
      isSoundEnabled: true,
      isMusicEnabled: true,
      isVoiceOverEnabled: true,

      setProfile: (profile) => set({ profile }),
      
      updateProfile: (updates) => set((state) => ({
        profile: state.profile ? { ...state.profile, ...updates } : null
      })),

      setAgeGroup: (ageGroup) => set({ selectedAgeGroup: ageGroup }),

      completeOnboarding: () => set({ isOnboarded: true }),

      toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
      
      toggleMusic: () => set((state) => ({ isMusicEnabled: !state.isMusicEnabled })),
      
      toggleVoiceOver: () => set((state) => ({ isVoiceOverEnabled: !state.isVoiceOverEnabled })),

      addPoints: (points) => set((state) => {
        if (!state.profile) return state;
        const newTotal = state.profile.totalPoints + points;
        const newLevel = POINTS_CONFIG.levelThresholds.findIndex(
          (threshold, index) => 
            newTotal >= threshold && 
            (index === POINTS_CONFIG.levelThresholds.length - 1 || 
             newTotal < POINTS_CONFIG.levelThresholds[index + 1])
        );
        return {
          profile: {
            ...state.profile,
            totalPoints: newTotal,
            level: newLevel + 1,
          }
        };
      }),

      unlockBadge: (badgeId) => set((state) => {
        if (!state.profile) return state;
        const existingBadge = state.profile.badges.find(b => b.id === badgeId);
        if (existingBadge?.unlockedAt) return state;
        
        const badgeConfig = BADGES.find(b => b.id === badgeId);
        if (!badgeConfig) return state;

        const newBadge: Badge = {
          ...badgeConfig,
          unlockedAt: new Date(),
          requirement: badgeConfig.description,
        };

        return {
          profile: {
            ...state.profile,
            badges: [...state.profile.badges.filter(b => b.id !== badgeId), newBadge],
          }
        };
      }),

      incrementQuizzes: () => set((state) => {
        if (!state.profile) return state;
        return {
          profile: {
            ...state.profile,
            quizzesCompleted: state.profile.quizzesCompleted + 1,
          }
        };
      }),

      checkAndUnlockBadges: () => {
        const { profile, unlockBadge } = get();
        if (!profile) return;

        // Check various badge conditions
        if (profile.quizzesCompleted >= 1) unlockBadge('first-quiz');
        if (profile.quizzesCompleted >= 50) unlockBadge('quiz-master');
        if (profile.totalAnswers >= 500) unlockBadge('knowledge-seeker');
        if (profile.level >= 10) unlockBadge('champion');
        if (profile.streakDays >= 7) unlockBadge('daily-learner');
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// ============================================
// QUIZ STORE
// ============================================

interface QuizState {
  currentSession: QuizSession | null;
  session: QuizSession | null; // Alias for screens
  recentSessions: QuizSession[];
  
  // Actions
  startQuiz: (categoryId: string, ageGroup: AgeGroup, questions: Question[]) => void;
  submitAnswer: (questionId: string, answer: string | string[], isCorrect: boolean, timeSpent: number) => void;
  nextQuestion: () => void;
  endQuiz: () => QuizSession;
  endSession: () => void; // Alias for screens
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  currentSession: null,
  recentSessions: [],
  
  // Computed property - alias for screens
  get session() {
    return this.currentSession;
  },

  startQuiz: (categoryId, ageGroup, questions) => {
    const session: QuizSession = {
      id: `quiz-${Date.now()}`,
      categoryId,
      ageGroup,
      questions,
      currentIndex: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      answers: [],
      startTime: new Date(),
      isCompleted: false,
    };
    set({ currentSession: session });
  },

  // Updated submitAnswer to match what screens expect
  submitAnswer: (questionId: string, answer: string | string[], isCorrect: boolean, timeSpent: number) => {
    const { currentSession } = get();
    if (!currentSession) return;

    let points = 0;
    let newStreak = currentSession.streak;

    if (isCorrect) {
      // Base points based on difficulty
      const currentQuestion = currentSession.questions.find(q => q.id === questionId);
      const difficulty = currentQuestion?.difficulty || 'medium';
      points = POINTS_CONFIG.correctAnswer[difficulty];
      
      // Streak bonus
      newStreak += 1;
      const streakBonuses = Object.entries(POINTS_CONFIG.streakBonus)
        .filter(([streak]) => newStreak >= parseInt(streak))
        .map(([, bonus]) => bonus);
      if (streakBonuses.length > 0) {
        points += streakBonuses[streakBonuses.length - 1];
      }

      // Speed bonus
      if (timeSpent < 5) {
        points += POINTS_CONFIG.speedBonus.fast;
      } else if (timeSpent < 10) {
        points += POINTS_CONFIG.speedBonus.medium;
      }
    } else {
      newStreak = 0;
    }

    const userAnswer: UserAnswer = {
      questionId,
      selectedAnswer: answer,
      isCorrect,
      timeSpent,
      pointsEarned: points,
    };

    set((state) => ({
      currentSession: state.currentSession ? {
        ...state.currentSession,
        score: state.currentSession.score + points,
        streak: newStreak,
        maxStreak: Math.max(state.currentSession.maxStreak, newStreak),
        answers: [...state.currentSession.answers, userAnswer],
      } : null,
    }));
  },

  nextQuestion: () => {
    set((state) => ({
      currentSession: state.currentSession ? {
        ...state.currentSession,
        currentIndex: state.currentSession.currentIndex + 1,
      } : null,
    }));
  },

  endQuiz: () => {
    const { currentSession } = get();
    if (!currentSession) throw new Error('No active quiz session');

    const completedSession: QuizSession = {
      ...currentSession,
      endTime: new Date(),
      isCompleted: true,
    };

    set((state) => ({
      currentSession: null,
      recentSessions: [completedSession, ...state.recentSessions.slice(0, 9)],
    }));

    return completedSession;
  },
  
  // Alias for screens that use endSession
  endSession: () => {
    const { currentSession } = get();
    if (!currentSession) return;

    const completedSession: QuizSession = {
      ...currentSession,
      endTime: new Date(),
      isCompleted: true,
    };

    set((state) => ({
      currentSession: null,
      recentSessions: [completedSession, ...state.recentSessions.slice(0, 9)],
    }));
  },

  resetQuiz: () => set({ currentSession: null }),
}));

// ============================================
// OFFLINE STORE
// ============================================

interface OfflineState {
  downloadedPacks: OfflineQuizPack[];
  isDownloading: boolean;
  downloadProgress: number;
  
  // Actions
  addPack: (pack: OfflineQuizPack) => void;
  removePack: (packId: string) => void;
  setDownloading: (isDownloading: boolean) => void;
  setProgress: (progress: number) => void;
  getPackForCategory: (categoryId: string, ageGroup: AgeGroup) => OfflineQuizPack | undefined;
  isPackDownloaded: (categoryId: string, ageGroup: AgeGroup) => boolean;
}

export const useOfflineStore = create<OfflineState>()(
  persist(
    (set, get) => ({
      downloadedPacks: [],
      isDownloading: false,
      downloadProgress: 0,

      addPack: (pack) => set((state) => ({
        downloadedPacks: [
          ...state.downloadedPacks.filter(p => p.id !== pack.id),
          pack,
        ],
      })),

      removePack: (packId) => set((state) => ({
        downloadedPacks: state.downloadedPacks.filter(p => p.id !== packId),
      })),

      setDownloading: (isDownloading) => set({ isDownloading }),
      
      setProgress: (progress) => set({ downloadProgress: progress }),

      getPackForCategory: (categoryId, ageGroup) => {
        return get().downloadedPacks.find(
          p => p.categoryId === categoryId && p.ageGroup === ageGroup
        );
      },

      isPackDownloaded: (categoryId, ageGroup) => {
        return get().downloadedPacks.some(
          p => p.categoryId === categoryId && p.ageGroup === ageGroup
        );
      },
    }),
    {
      name: 'offline-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
