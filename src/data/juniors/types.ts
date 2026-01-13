// Juniors Question Types
import { Question } from '../../types';

export type JuniorsCategory = 
  | 'animals'
  | 'food'
  | 'science'
  | 'geography'
  | 'history'
  | 'english'
  | 'space'
  | 'sports'
  | 'technology'
  | 'math';

export type JuniorsDifficulty = 'easy' | 'medium' | 'hard';

export type JuniorsQuestion = Partial<Question>;

export interface JuniorsQuestionBank {
  easy: JuniorsQuestion[];
  medium: JuniorsQuestion[];
  hard: JuniorsQuestion[];
}
