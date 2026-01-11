// Age group types for the quiz app
export type AgeGroup = 'tiny-tots' | 'juniors' | 'teens';

export interface AgeGroupConfig {
  id: AgeGroup;
  name: string;
  ageRange: string;
  description: string;
  icon: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
  };
  features: {
    hasTimer: boolean;
    hasLeaderboard: boolean;
    hasVoiceOver: boolean;
    questionReadAloud: boolean;
    showTextMinimal: boolean;
    hasCompetitiveMode: boolean;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  ageGroups: AgeGroup[];
  color: string;
  questionsCount: number;
  isOfflineAvailable: boolean;
}

export interface Question {
  id: string;
  categoryId: string;
  ageGroup: AgeGroup;
  type: 'mcq' | 'true-false' | 'image-choice' | 'drag-drop' | 'fill-blank';
  question: string;
  questionImage?: string;
  questionAudio?: string;
  options: QuestionOption[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  timeLimit?: number; // seconds
  hint?: string;
  funFact?: string;
}

export interface QuestionOption {
  id: string;
  text: string;
  image?: string;
  audio?: string;
}

export interface QuizSession {
  id: string;
  categoryId: string;
  ageGroup: AgeGroup;
  questions: Question[];
  currentIndex: number;
  score: number;
  streak: number;
  maxStreak: number;
  answers: UserAnswer[];
  startTime: Date;
  endTime?: Date;
  isCompleted: boolean;
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string | string[];
  isCorrect: boolean;
  timeSpent: number;
  pointsEarned: number;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  ageGroup: AgeGroup;
  totalPoints: number;
  level: number;
  badges: Badge[];
  streakDays: number;
  quizzesCompleted: number;
  correctAnswers: number;
  totalAnswers: number;
  unlockedCharacters: string[];
  unlockedThemes: string[];
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  requirement: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  avatar: string;
  score: number;
  ageGroup: AgeGroup;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  isUnlocked: boolean;
  progress: number;
  target: number;
}

// AI Generation types
export interface AIQuizRequest {
  topic: string;
  ageGroup: AgeGroup;
  difficulty: 'easy' | 'medium' | 'hard';
  questionCount: number;
  questionTypes: Question['type'][];
}

export interface AIQuizResponse {
  questions: Question[];
  generatedAt: Date;
  topic: string;
}

// Offline storage types
export interface OfflineQuizPack {
  id: string;
  categoryId: string;
  ageGroup: AgeGroup;
  questions: Question[];
  downloadedAt: Date;
  lastUpdated: Date;
  sizeInMB: number;
}
