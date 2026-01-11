import { AgeGroupConfig, Category } from '../types';

// ============================================
// AGE GROUP CONFIGURATIONS
// ============================================

export const AGE_GROUPS: Record<string, AgeGroupConfig> = {
  'tiny-tots': {
    id: 'tiny-tots',
    name: 'Tiny Tots',
    ageRange: '4-7 years',
    description: 'Fun visual learning with colors, shapes, and sounds!',
    icon: '🧒',
    colors: {
      primary: '#FF6B9D',
      secondary: '#FFB6C1',
      background: '#FFF0F5',
      accent: '#FF1493',
    },
    features: {
      hasTimer: false,
      hasLeaderboard: false,
      hasVoiceOver: true,
      questionReadAloud: true,
      showTextMinimal: true,
      hasCompetitiveMode: false,
    },
  },
  'juniors': {
    id: 'juniors',
    name: 'Junior Stars',
    ageRange: '8-12 years',
    description: 'Challenge yourself with fun reading quizzes!',
    icon: '🌟',
    colors: {
      primary: '#6C63FF',
      secondary: '#A5A1FF',
      background: '#F0F0FF',
      accent: '#4834DF',
    },
    features: {
      hasTimer: true,
      hasLeaderboard: true,
      hasVoiceOver: true,
      questionReadAloud: false,
      showTextMinimal: false,
      hasCompetitiveMode: false,
    },
  },
  'teens': {
    id: 'teens',
    name: 'Teen Champions',
    ageRange: '13+ years',
    description: 'Compete, learn, and become the champion!',
    icon: '🏆',
    colors: {
      primary: '#00D9A5',
      secondary: '#7BFFC9',
      background: '#F0FFF9',
      accent: '#00A878',
    },
    features: {
      hasTimer: true,
      hasLeaderboard: true,
      hasVoiceOver: false,
      questionReadAloud: false,
      showTextMinimal: false,
      hasCompetitiveMode: true,
    },
  },
};

// ============================================
// CATEGORY CONFIGURATIONS
// ============================================

export const CATEGORIES: Category[] = [
  // TINY TOTS CATEGORIES (4-7 years) - Visual & Audio focused
  {
    id: 'colors-shapes',
    name: 'Colors & Shapes',
    icon: '🔴',
    description: 'Learn colors and shapes with fun pictures!',
    ageGroups: ['tiny-tots'],
    color: '#FF6B6B',
    questionsCount: 50,
    isOfflineAvailable: true,
  },
  {
    id: 'animals',
    name: 'Animal Friends',
    icon: '🐶',
    description: 'Meet cute animals and learn about them!',
    ageGroups: ['tiny-tots', 'juniors'],
    color: '#4ECDC4',
    questionsCount: 80,
    isOfflineAvailable: true,
  },
  {
    id: 'numbers-counting',
    name: 'Numbers Fun',
    icon: '🔢',
    description: 'Count and play with numbers!',
    ageGroups: ['tiny-tots'],
    color: '#FFE66D',
    questionsCount: 60,
    isOfflineAvailable: true,
  },
  {
    id: 'abc-phonics',
    name: 'ABC & Phonics',
    icon: '🔤',
    description: 'Learn letters and sounds!',
    ageGroups: ['tiny-tots'],
    color: '#95E1D3',
    questionsCount: 52,
    isOfflineAvailable: true,
  },
  {
    id: 'fruits-veggies',
    name: 'Yummy Food',
    icon: '🍎',
    description: 'Discover fruits and vegetables!',
    ageGroups: ['tiny-tots', 'juniors'],
    color: '#F38181',
    questionsCount: 40,
    isOfflineAvailable: true,
  },

  // JUNIORS CATEGORIES (8-12 years) - Reading & Learning focused
  {
    id: 'science',
    name: 'Science Explorer',
    icon: '🔬',
    description: 'Discover amazing science facts!',
    ageGroups: ['juniors', 'teens'],
    color: '#6C63FF',
    questionsCount: 150,
    isOfflineAvailable: true,
  },
  {
    id: 'math',
    name: 'Math Wizard',
    icon: '➕',
    description: 'Become a math superhero!',
    ageGroups: ['juniors', 'teens'],
    color: '#FF6B9D',
    questionsCount: 200,
    isOfflineAvailable: true,
  },
  {
    id: 'geography',
    name: 'World Explorer',
    icon: '🌍',
    description: 'Travel the world and learn!',
    ageGroups: ['juniors', 'teens'],
    color: '#00D9A5',
    questionsCount: 120,
    isOfflineAvailable: true,
  },
  {
    id: 'history',
    name: 'Time Travelers',
    icon: '🏛️',
    description: 'Journey through amazing history!',
    ageGroups: ['juniors', 'teens'],
    color: '#DDA15E',
    questionsCount: 100,
    isOfflineAvailable: true,
  },
  {
    id: 'english',
    name: 'Word Master',
    icon: '📚',
    description: 'Grammar, vocabulary and more!',
    ageGroups: ['juniors', 'teens'],
    color: '#7209B7',
    questionsCount: 180,
    isOfflineAvailable: true,
  },
  {
    id: 'space',
    name: 'Space Adventure',
    icon: '🚀',
    description: 'Explore the universe!',
    ageGroups: ['juniors', 'teens'],
    color: '#1A1A2E',
    questionsCount: 90,
    isOfflineAvailable: true,
  },

  // TEENS CATEGORIES (13+) - Competitive & Advanced
  {
    id: 'current-affairs',
    name: 'Current Affairs',
    icon: '📰',
    description: 'Stay updated with the world!',
    ageGroups: ['teens'],
    color: '#E63946',
    questionsCount: 200,
    isOfflineAvailable: false,
  },
  {
    id: 'technology',
    name: 'Tech Genius',
    icon: '💻',
    description: 'Master technology and coding!',
    ageGroups: ['teens'],
    color: '#2196F3',
    questionsCount: 150,
    isOfflineAvailable: true,
  },
  {
    id: 'general-knowledge',
    name: 'Brain Buster',
    icon: '🧠',
    description: 'Test your general knowledge!',
    ageGroups: ['teens'],
    color: '#9C27B0',
    questionsCount: 300,
    isOfflineAvailable: true,
  },
  {
    id: 'sports',
    name: 'Sports Arena',
    icon: '⚽',
    description: 'For sports enthusiasts!',
    ageGroups: ['juniors', 'teens'],
    color: '#4CAF50',
    questionsCount: 120,
    isOfflineAvailable: true,
  },
  {
    id: 'movies-entertainment',
    name: 'Entertainment Zone',
    icon: '🎬',
    description: 'Movies, music and pop culture!',
    ageGroups: ['teens'],
    color: '#FF5722',
    questionsCount: 150,
    isOfflineAvailable: true,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getCategoriesForAgeGroup = (ageGroup: string): Category[] => {
  return CATEGORIES.filter(cat => cat.ageGroups.includes(ageGroup as any));
};

export const getAgeGroupConfig = (ageGroup: string): AgeGroupConfig => {
  return AGE_GROUPS[ageGroup];
};

export const getOfflineCategories = (): Category[] => {
  return CATEGORIES.filter(cat => cat.isOfflineAvailable);
};

// ============================================
// SOUND & ANIMATION CONFIGS
// ============================================

// NOTE: These are commented out until actual asset files are added
// Uncomment when you add the actual sound/animation files

export const SOUND_EFFECTS = {
  // correct: require('../../assets/sounds/correct.mp3'),
  // wrong: require('../../assets/sounds/wrong.mp3'),
  // click: require('../../assets/sounds/click.mp3'),
  // celebration: require('../../assets/sounds/celebration.mp3'),
  // streak: require('../../assets/sounds/streak.mp3'),
  // levelUp: require('../../assets/sounds/level-up.mp3'),
  // countdown: require('../../assets/sounds/countdown.mp3'),
  // backgroundMusic: {
  //   'tiny-tots': require('../../assets/sounds/bg-kids.mp3'),
  //   'juniors': require('../../assets/sounds/bg-juniors.mp3'),
  //   'teens': require('../../assets/sounds/bg-teens.mp3'),
  // },
};

export const ANIMATIONS = {
  // mascot: {
  //   idle: require('../../assets/animations/mascot-idle.json'),
  //   happy: require('../../assets/animations/mascot-happy.json'),
  //   sad: require('../../assets/animations/mascot-sad.json'),
  //   thinking: require('../../assets/animations/mascot-thinking.json'),
  //   celebration: require('../../assets/animations/mascot-celebration.json'),
  // },
  // effects: {
  //   confetti: require('../../assets/animations/confetti.json'),
  //   stars: require('../../assets/animations/stars.json'),
  //   fireworks: require('../../assets/animations/fireworks.json'),
  //   sparkle: require('../../assets/animations/sparkle.json'),
  // },
  // backgrounds: {
  //   'tiny-tots': require('../../assets/animations/bg-playground.json'),
  //   'juniors': require('../../assets/animations/bg-classroom.json'),
  //   'teens': require('../../assets/animations/bg-space.json'),
  // },
};

// Points and leveling system
export const POINTS_CONFIG = {
  correctAnswer: {
    easy: 10,
    medium: 20,
    hard: 30,
  },
  streakBonus: {
    3: 5,
    5: 10,
    10: 25,
    15: 50,
  },
  speedBonus: {
    fast: 10, // < 5 seconds
    medium: 5, // 5-10 seconds
    slow: 0, // > 10 seconds
  },
  levelThresholds: [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5500, 7500, 10000],
};

export const BADGES = [
  { id: 'first-quiz', name: 'First Steps', description: 'Complete your first quiz', icon: '🎯' },
  { id: 'perfect-score', name: 'Perfect!', description: 'Get 100% on a quiz', icon: '💯' },
  { id: 'streak-5', name: 'On Fire!', description: 'Get 5 correct in a row', icon: '🔥' },
  { id: 'streak-10', name: 'Unstoppable!', description: 'Get 10 correct in a row', icon: '⚡' },
  { id: 'speed-demon', name: 'Speed Demon', description: 'Answer 10 questions under 3 seconds each', icon: '⏱️' },
  { id: 'explorer', name: 'Explorer', description: 'Try all categories', icon: '🗺️' },
  { id: 'daily-learner', name: 'Daily Learner', description: '7 day streak', icon: '📅' },
  { id: 'quiz-master', name: 'Quiz Master', description: 'Complete 50 quizzes', icon: '👑' },
  { id: 'knowledge-seeker', name: 'Knowledge Seeker', description: 'Answer 500 questions', icon: '📖' },
  { id: 'champion', name: 'Champion', description: 'Reach level 10', icon: '🏆' },
];
