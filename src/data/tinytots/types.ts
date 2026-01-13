// TinyTots Question Types
import { Question } from '../../types';

export type TinyTotsCategory = 
  | 'colors-shapes'
  | 'animals'
  | 'numbers-counting'
  | 'alphabet-words'
  | 'nature'
  | 'food-fruits'
  | 'family-body'
  | 'vehicles'
  | 'space'
  | 'history'
  | 'sports'
  | 'science'
  | 'geography'
  | 'music'
  | 'technology';

export type TinyTotsDifficulty = 'easy' | 'medium' | 'hard';

export type TinyTotsQuestion = Partial<Question>;

export interface TinyTotsQuestionBank {
  easy: TinyTotsQuestion[];
  medium: TinyTotsQuestion[];
  hard: TinyTotsQuestion[];
}
