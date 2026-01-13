import { Question, AgeGroup, AIQuizRequest, AIQuizResponse } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { getTinyTotsQuestions, getDefaultTinyTotsQuestions } from '../data/tinytots';
import { getJuniorsQuestions, getDefaultJuniorsQuestions, JuniorsCategory, JuniorsDifficulty } from '../data/juniors';
import { getTeensQuestions, getDefaultTeensQuestions, TeensCategory, TeensDifficulty } from '../data/teens';

// ============================================
// AI QUIZ GENERATOR SERVICE
// ============================================

type Difficulty = 'easy' | 'medium' | 'hard';

// Valid Juniors categories for type checking
const validJuniorsCategories: JuniorsCategory[] = [
  'animals', 'food', 'science', 'geography', 
  'history', 'english', 'space', 'sports', 'technology', 'math'
];

// Valid Teens categories for type checking
const validTeensCategories: TeensCategory[] = [
  'science', 'math', 'geography', 'history', 'english', 'space', 'sports',
  'technology', 'current-affairs', 'general-knowledge', 'movies-entertainment'
];

class AIQuizGenerator {
  async generateQuestions(request: AIQuizRequest): Promise<AIQuizResponse> {
    return this.generateLocalQuestions(request);
  }

  private generateLocalQuestions(request: AIQuizRequest): AIQuizResponse {
    const questionBank = this.getQuestionBank(request.topic, request.ageGroup, request.difficulty);

    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(request.questionCount, shuffled.length));

    while (selected.length < request.questionCount) {
      const defaults = this.getDefaultQuestions(request.ageGroup, request.difficulty);
      const randomDefault = defaults[Math.floor(Math.random() * defaults.length)];
      if (randomDefault && !selected.find(q => q.question === randomDefault.question)) {
        selected.push(randomDefault);
      } else {
        break;
      }
    }

    return {
      questions: selected.map(q => ({
        id: uuidv4(),
        categoryId: q.categoryId || request.topic,
        ageGroup: request.ageGroup,
        type: q.type || 'mcq',
        question: q.question || '',
        options: q.options || [],
        correctAnswer: q.correctAnswer || 'a',
        explanation: q.explanation || 'Great job!',
        difficulty: request.difficulty,
        points: request.difficulty === 'easy' ? 10 : request.difficulty === 'medium' ? 20 : 30,
        timeLimit: request.difficulty === 'easy' ? 30 : request.difficulty === 'medium' ? 25 : 20,
        hint: q.hint,
        funFact: q.funFact,
      })) as Question[],
      generatedAt: new Date(),
      topic: request.topic,
    };
  }

  private getQuestionBank(topic: string, ageGroup: AgeGroup, difficulty: Difficulty): Partial<Question>[] {
    const topicKey = topic.toLowerCase().replace(/\s+/g, '-');
    
    // Use centralized TinyTots question bank
    if (ageGroup === 'tiny-tots') {
      const tinyTotsQuestions = getTinyTotsQuestions(topicKey, difficulty);
      if (tinyTotsQuestions.length > 0) {
        return tinyTotsQuestions;
      }
      // Fallback to default TinyTots questions
      return getDefaultTinyTotsQuestions(difficulty);
    }

    // Use centralized Juniors question bank
    if (ageGroup === 'juniors') {
      // Check if the topic is a valid Juniors category
      if (validJuniorsCategories.includes(topicKey as JuniorsCategory)) {
        const juniorsQuestions = getJuniorsQuestions(
          topicKey as JuniorsCategory, 
          difficulty as JuniorsDifficulty
        );
        if (juniorsQuestions.length > 0) {
          return juniorsQuestions;
        }
      }
      // Fallback to default Juniors questions
      return getDefaultJuniorsQuestions(difficulty as JuniorsDifficulty);
    }

    // Use centralized Teens question bank
    if (ageGroup === 'teens') {
      // Check if the topic is a valid Teens category
      if (validTeensCategories.includes(topicKey as TeensCategory)) {
        const teensQuestions = getTeensQuestions(
          topicKey as TeensCategory, 
          difficulty as TeensDifficulty
        );
        if (teensQuestions.length > 0) {
          return teensQuestions;
        }
      }
      // Fallback to default Teens questions
      return getDefaultTeensQuestions(difficulty as TeensDifficulty);
    }

    // Default fallback for other categories
    return this.getDefaultQuestions(ageGroup, difficulty);
  }

  private getDefaultQuestions(ageGroup: AgeGroup, difficulty: Difficulty): Partial<Question>[] {
    // Use centralized TinyTots defaults
    if (ageGroup === 'tiny-tots') {
      return getDefaultTinyTotsQuestions(difficulty);
    }

    // Use centralized Juniors defaults
    if (ageGroup === 'juniors') {
      return getDefaultJuniorsQuestions(difficulty as JuniorsDifficulty);
    }

    // Use centralized Teens defaults
    if (ageGroup === 'teens') {
      return getDefaultTeensQuestions(difficulty as TeensDifficulty);
    }

    // Ultimate fallback - basic general questions
    const fallbackQuestions: Partial<Question>[] = [
      { 
        type: 'mcq', 
        question: 'How many continents are there?', 
        categoryId: 'general',
        options: [
          { id: 'a', text: '5' }, 
          { id: 'b', text: '6' }, 
          { id: 'c', text: '7' }, 
          { id: 'd', text: '8' }
        ],
        correctAnswer: 'c', 
        explanation: 'There are 7 continents!', 
        funFact: 'Asia is the largest continent!' 
      },
      { 
        type: 'mcq', 
        question: 'What planet do we live on?', 
        categoryId: 'general',
        options: [
          { id: 'a', text: 'Mars' }, 
          { id: 'b', text: 'Earth' }, 
          { id: 'c', text: 'Venus' }, 
          { id: 'd', text: 'Jupiter' }
        ],
        correctAnswer: 'b', 
        explanation: 'We live on Earth!', 
        funFact: 'Earth is the only planet with liquid water!' 
      },
    ];

    return fallbackQuestions;
  }
}

export const aiQuizGenerator = new AIQuizGenerator();
export default aiQuizGenerator;
