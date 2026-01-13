// Teens Data Index - Exports and Helper Functions
import { TeensCategory, TeensDifficulty, TeensQuestion, TeensQuestionBank } from './types';
import { scienceQuestions } from './science';
import { mathQuestions } from './math';
import { geographyQuestions } from './geography';
import { historyQuestions } from './history';
import { englishQuestions } from './english';
import { spaceQuestions } from './space';
import { sportsQuestions } from './sports';
import { technologyQuestions } from './technology';
import { currentAffairsQuestions } from './current-affairs';
import { generalKnowledgeQuestions } from './general-knowledge';
import { moviesEntertainmentQuestions } from './movies-entertainment';

// Export all question banks
export { scienceQuestions } from './science';
export { mathQuestions } from './math';
export { geographyQuestions } from './geography';
export { historyQuestions } from './history';
export { englishQuestions } from './english';
export { spaceQuestions } from './space';
export { sportsQuestions } from './sports';
export { technologyQuestions } from './technology';
export { currentAffairsQuestions } from './current-affairs';
export { generalKnowledgeQuestions } from './general-knowledge';
export { moviesEntertainmentQuestions } from './movies-entertainment';

// Export types
export * from './types';

// Category to question bank mapping
const categoryQuestionMap: Record<TeensCategory, TeensQuestionBank> = {
  'science': scienceQuestions,
  'math': mathQuestions,
  'geography': geographyQuestions,
  'history': historyQuestions,
  'english': englishQuestions,
  'space': spaceQuestions,
  'sports': sportsQuestions,
  'technology': technologyQuestions,
  'current-affairs': currentAffairsQuestions,
  'general-knowledge': generalKnowledgeQuestions,
  'movies-entertainment': moviesEntertainmentQuestions,
};

/**
 * Get questions for a specific category and difficulty
 */
export function getTeensQuestions(
  category: TeensCategory,
  difficulty: TeensDifficulty
): TeensQuestion[] {
  const questionBank = categoryQuestionMap[category];
  if (!questionBank) {
    console.warn(`No questions found for category: ${category}`);
    return [];
  }
  return questionBank[difficulty] || [];
}

/**
 * Get all questions for a specific category (all difficulties)
 */
export function getAllTeensQuestionsForCategory(category: TeensCategory): TeensQuestion[] {
  const questionBank = categoryQuestionMap[category];
  if (!questionBank) {
    return [];
  }
  return [...questionBank.easy, ...questionBank.medium, ...questionBank.hard];
}

/**
 * Get default questions (mixed from all categories for a given difficulty)
 */
export function getDefaultTeensQuestions(difficulty: TeensDifficulty): TeensQuestion[] {
  const allQuestions: TeensQuestion[] = [];
  Object.values(categoryQuestionMap).forEach((questionBank) => {
    if (questionBank[difficulty]) {
      allQuestions.push(...questionBank[difficulty]);
    }
  });
  return allQuestions;
}

/**
 * Get random questions from a category and difficulty
 */
export function getRandomTeensQuestions(
  category: TeensCategory,
  difficulty: TeensDifficulty,
  count: number
): TeensQuestion[] {
  const questions = getTeensQuestions(category, difficulty);
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get random questions from multiple difficulties (for mixed difficulty games)
 */
export function getRandomMixedTeensQuestions(
  category: TeensCategory,
  count: number,
  easyRatio: number = 0.33,
  mediumRatio: number = 0.34,
  hardRatio: number = 0.33
): TeensQuestion[] {
  const easyCount = Math.floor(count * easyRatio);
  const mediumCount = Math.floor(count * mediumRatio);
  const hardCount = count - easyCount - mediumCount;

  const easyQuestions = getRandomTeensQuestions(category, 'easy', easyCount);
  const mediumQuestions = getRandomTeensQuestions(category, 'medium', mediumCount);
  const hardQuestions = getRandomTeensQuestions(category, 'hard', hardCount);

  // Shuffle the combined array
  return [...easyQuestions, ...mediumQuestions, ...hardQuestions].sort(
    () => Math.random() - 0.5
  );
}

/**
 * Get question count for a category and difficulty
 */
export function getTeensQuestionCount(
  category: TeensCategory,
  difficulty?: TeensDifficulty
): number {
  const questionBank = categoryQuestionMap[category];
  if (!questionBank) {
    return 0;
  }
  if (difficulty) {
    return questionBank[difficulty]?.length || 0;
  }
  return (
    (questionBank.easy?.length || 0) +
    (questionBank.medium?.length || 0) +
    (questionBank.hard?.length || 0)
  );
}

/**
 * Get total question count across all categories
 */
export function getTotalTeensQuestionCount(): number {
  let total = 0;
  Object.keys(categoryQuestionMap).forEach((category) => {
    total += getTeensQuestionCount(category as TeensCategory);
  });
  return total;
}

/**
 * Get all available categories
 */
export function getAvailableTeensCategories(): TeensCategory[] {
  return Object.keys(categoryQuestionMap) as TeensCategory[];
}

/**
 * Check if a category exists
 */
export function isValidTeensCategory(category: string): category is TeensCategory {
  return category in categoryQuestionMap;
}

/**
 * Get the question bank for a category
 */
export function getTeensQuestionBank(category: TeensCategory): TeensQuestionBank | null {
  return categoryQuestionMap[category] || null;
}
