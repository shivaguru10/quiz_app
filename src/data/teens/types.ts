// Teens Question Types (13+ years)
import { Question } from '../../types';

export type TeensCategory = 
  | 'science'
  | 'math'
  | 'geography'
  | 'history'
  | 'english'
  | 'space'
  | 'sports'
  | 'technology'
  | 'current-affairs'
  | 'general-knowledge'
  | 'movies-entertainment';

export type TeensDifficulty = 'easy' | 'medium' | 'hard';

export type TeensQuestion = Partial<Question>;

export interface TeensQuestionBank {
  easy: TeensQuestion[];
  medium: TeensQuestion[];
  hard: TeensQuestion[];
}
