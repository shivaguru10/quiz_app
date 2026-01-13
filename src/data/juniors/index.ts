// Juniors Questions Data - Index
// Central export for all Juniors quiz questions organized by category and difficulty

export * from './types';

// Import all category question banks
import { animalsQuestions } from './animals';
import { foodQuestions } from './food';
import { scienceQuestions } from './science';
import { geographyQuestions } from './geography';
import { historyQuestions } from './history';
import { englishQuestions } from './english';
import { spaceQuestions } from './space';
import { sportsQuestions } from './sports';
import { technologyQuestions } from './technology';
import { mathQuestions } from './math';

import { JuniorsCategory, JuniorsDifficulty, JuniorsQuestion, JuniorsQuestionBank } from './types';

// Export individual question banks
export {
  animalsQuestions,
  foodQuestions,
  scienceQuestions,
  geographyQuestions,
  historyQuestions,
  englishQuestions,
  spaceQuestions,
  sportsQuestions,
  technologyQuestions,
  mathQuestions,
};

// Map of category IDs to their question banks
const juniorsQuestionBanks: Record<JuniorsCategory, JuniorsQuestionBank> = {
  animals: animalsQuestions,
  food: foodQuestions,
  science: scienceQuestions,
  geography: geographyQuestions,
  history: historyQuestions,
  english: englishQuestions,
  space: spaceQuestions,
  sports: sportsQuestions,
  technology: technologyQuestions,
  math: mathQuestions,
};

/**
 * Get questions for a specific category and difficulty
 * @param categoryId - The category to get questions for
 * @param difficulty - The difficulty level (easy, medium, hard)
 * @returns Array of questions for the specified category and difficulty
 */
export function getJuniorsQuestions(
  categoryId: JuniorsCategory,
  difficulty: JuniorsDifficulty
): JuniorsQuestion[] {
  const questionBank = juniorsQuestionBanks[categoryId];
  if (!questionBank) {
    console.warn(`Unknown category: ${categoryId}`);
    return getDefaultJuniorsQuestions(difficulty);
  }
  return questionBank[difficulty] || [];
}

/**
 * Get all questions for a specific category across all difficulties
 * @param categoryId - The category to get questions for
 * @returns Object containing questions organized by difficulty
 */
export function getAllJuniorsQuestionsForCategory(
  categoryId: JuniorsCategory
): JuniorsQuestionBank | null {
  return juniorsQuestionBanks[categoryId] || null;
}

/**
 * Get default questions when a category is not found
 * Falls back to Science questions
 * @param difficulty - The difficulty level
 * @returns Array of default questions
 */
export function getDefaultJuniorsQuestions(
  difficulty: JuniorsDifficulty
): JuniorsQuestion[] {
  return scienceQuestions[difficulty] || [];
}

/**
 * Get a random selection of questions from a category
 * @param categoryId - The category to get questions from
 * @param difficulty - The difficulty level
 * @param count - Number of questions to return
 * @returns Array of randomly selected questions
 */
export function getRandomJuniorsQuestions(
  categoryId: JuniorsCategory,
  difficulty: JuniorsDifficulty,
  count: number
): JuniorsQuestion[] {
  const questions = getJuniorsQuestions(categoryId, difficulty);
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get the total count of questions available for a category and difficulty
 * @param categoryId - The category ID
 * @param difficulty - The difficulty level
 * @returns Number of questions available
 */
export function getJuniorsQuestionCount(
  categoryId: JuniorsCategory,
  difficulty: JuniorsDifficulty
): number {
  return getJuniorsQuestions(categoryId, difficulty).length;
}

/**
 * List of all available Juniors categories
 */
export const juniorsCategories: JuniorsCategory[] = [
  'animals',
  'food',
  'science',
  'geography',
  'history',
  'english',
  'space',
  'sports',
  'technology',
  'math',
];

/**
 * List of all available difficulties
 */
export const juniorsDifficulties: JuniorsDifficulty[] = ['easy', 'medium', 'hard'];
