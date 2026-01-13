// TinyTots Question Bank Index
// This file exports all TinyTots questions organized by category and difficulty

export * from './types';
export { colorsShapesQuestions } from './colorsShapes';
export { animalsQuestions } from './animals';
export { numbersCountingQuestions } from './numbersCounting';
export { alphabetWordsQuestions } from './alphabetWords';
export { natureQuestions } from './nature';
export { foodFruitsQuestions } from './foodFruits';
export { spaceQuestions } from './space';
export { historyQuestions } from './history';
export { sportsQuestions } from './sports';

import { TinyTotsQuestionBank, TinyTotsQuestion } from './types';
import { colorsShapesQuestions } from './colorsShapes';
import { animalsQuestions } from './animals';
import { numbersCountingQuestions } from './numbersCounting';
import { alphabetWordsQuestions } from './alphabetWords';
import { natureQuestions } from './nature';
import { foodFruitsQuestions } from './foodFruits';
import { spaceQuestions } from './space';
import { historyQuestions } from './history';
import { sportsQuestions } from './sports';

// Map of all TinyTots question banks by category
export const tinyTotsQuestionBanks: Record<string, TinyTotsQuestionBank> = {
  'colors-shapes': colorsShapesQuestions,
  'animals': animalsQuestions,
  'numbers-counting': numbersCountingQuestions,
  'alphabet-words': alphabetWordsQuestions,
  'nature': natureQuestions,
  'food-fruits': foodFruitsQuestions,
  'space': spaceQuestions,
  'history': historyQuestions,
  'sports': sportsQuestions,
};

// Helper function to get TinyTots questions by category and difficulty
export function getTinyTotsQuestions(
  category: string,
  difficulty: 'easy' | 'medium' | 'hard'
): TinyTotsQuestion[] {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
  const questionBank = tinyTotsQuestionBanks[categoryKey];
  
  if (questionBank) {
    return questionBank[difficulty] || [];
  }
  
  // Return default questions if category not found
  return getDefaultTinyTotsQuestions(difficulty);
}

// Default questions for TinyTots when category is not found
export function getDefaultTinyTotsQuestions(
  difficulty: 'easy' | 'medium' | 'hard'
): TinyTotsQuestion[] {
  const defaults: Record<string, TinyTotsQuestion[]> = {
    'easy': [
      {
        type: 'mcq', question: 'Which is bigger? 🐘 or 🐭', categoryId: 'general',
        options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🐭 Mouse' }],
        correctAnswer: 'a', explanation: 'Elephants are MUCH bigger! 🐘', funFact: 'Elephants are the biggest land animals!'
      },
      {
        type: 'mcq', question: 'What color is grass? 🌿', categoryId: 'general',
        options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟡 Yellow' }],
        correctAnswer: 'b', explanation: 'Grass is GREEN! 🌿', funFact: 'Plants are green because of chlorophyll!'
      },
      {
        type: 'mcq', question: 'What do we drink? 💧', categoryId: 'general',
        options: [{ id: 'a', text: '🪨 Rocks' }, { id: 'b', text: '💧 Water' }, { id: 'c', text: '🌳 Trees' }, { id: 'd', text: '☁️ Clouds' }],
        correctAnswer: 'b', explanation: 'We drink WATER! 💧', funFact: 'Our body is 60% water!'
      },
      {
        type: 'true-false', question: 'The sky is blue. ☁️', categoryId: 'general',
        options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
        correctAnswer: 'true', explanation: 'Yes! The sky is blue! ☀️', funFact: 'Sunlight makes the sky look blue!'
      },
      {
        type: 'mcq', question: 'What do bees make? 🐝', categoryId: 'general',
        options: [{ id: 'a', text: '🍯 Honey' }, { id: 'b', text: '🥛 Milk' }, { id: 'c', text: '🧀 Cheese' }, { id: 'd', text: '🍞 Bread' }],
        correctAnswer: 'a', explanation: 'Bees make HONEY! 🍯', funFact: 'Bees visit millions of flowers!'
      },
    ],
    'medium': [
      {
        type: 'mcq', question: 'How many days in a week? 📅', categoryId: 'general',
        options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
        correctAnswer: 'c', explanation: '7 days in a week!', funFact: 'Sunday is the first day!'
      },
      {
        type: 'mcq', question: 'What season comes after summer? 🍂', categoryId: 'general',
        options: [{ id: 'a', text: '🌸 Spring' }, { id: 'b', text: '❄️ Winter' }, { id: 'c', text: '🍂 Fall/Autumn' }, { id: 'd', text: '☀️ Summer' }],
        correctAnswer: 'c', explanation: 'Fall comes after summer! 🍂', funFact: 'Leaves change colors in fall!'
      },
      {
        type: 'mcq', question: 'How many legs does an insect have? 🐜', categoryId: 'general',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '10' }],
        correctAnswer: 'b', explanation: 'Insects have 6 legs! 🐜', funFact: 'Ants, bees, and butterflies are insects!'
      },
    ],
    'hard': [
      {
        type: 'mcq', question: 'What comes after 19? 🔢', categoryId: 'general',
        options: [{ id: 'a', text: '18' }, { id: 'b', text: '20' }, { id: 'c', text: '21' }, { id: 'd', text: '29' }],
        correctAnswer: 'b', explanation: '20 comes after 19!', funFact: 'Counting is fun!'
      },
      {
        type: 'mcq', question: 'Which planet is closest to the Sun? ☀️', categoryId: 'general',
        options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '🔴 Mars' }, { id: 'c', text: '⚫ Mercury' }, { id: 'd', text: '🟡 Venus' }],
        correctAnswer: 'c', explanation: 'Mercury is closest! ⚫', funFact: 'Mercury is very hot!'
      },
      {
        type: 'mcq', question: 'How many months have 31 days? 📅', categoryId: 'general',
        options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
        correctAnswer: 'c', explanation: '7 months have 31 days! 📅', funFact: 'January, March, May, July, August, October, December!'
      },
    ],
  };

  return defaults[difficulty] || defaults['easy'];
}

// Get all categories available for TinyTots
export function getTinyTotsCategories(): string[] {
  return Object.keys(tinyTotsQuestionBanks);
}

// Get total question count for a category
export function getTinyTotsCategoryQuestionCount(category: string): number {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
  const questionBank = tinyTotsQuestionBanks[categoryKey];
  
  if (questionBank) {
    return (
      questionBank.easy.length +
      questionBank.medium.length +
      questionBank.hard.length
    );
  }
  
  return 0;
}
