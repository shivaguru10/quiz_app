// TinyTots Alphabet & Words Questions
import { TinyTotsQuestionBank } from './types';

export const alphabetWordsQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What letter does "Apple" start with? 🍎', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'D' }],
      correctAnswer: 'a', explanation: 'Apple starts with A! 🍎', funFact: 'A is the first letter!'
    },
    {
      type: 'mcq', question: 'What letter does "Ball" start with? ⚽', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'D' }],
      correctAnswer: 'b', explanation: 'Ball starts with B! ⚽', funFact: 'B is the second letter!'
    },
    {
      type: 'mcq', question: 'What letter does "Cat" start with? 🐱', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'D' }],
      correctAnswer: 'c', explanation: 'Cat starts with C! 🐱', funFact: 'C makes a "kuh" sound!'
    },
    {
      type: 'mcq', question: 'What letter comes after A? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'C' }, { id: 'b', text: 'B' }, { id: 'c', text: 'D' }, { id: 'd', text: 'E' }],
      correctAnswer: 'b', explanation: 'B comes after A! A, B...', funFact: 'The alphabet has 26 letters!'
    },
    {
      type: 'mcq', question: 'What letter does "Dog" start with? 🐕', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'B' }, { id: 'b', text: 'C' }, { id: 'c', text: 'D' }, { id: 'd', text: 'E' }],
      correctAnswer: 'c', explanation: 'Dog starts with D! 🐕', funFact: 'D is the 4th letter!'
    },
    {
      type: 'mcq', question: 'Which is the first letter of the alphabet? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Z' }, { id: 'b', text: 'M' }, { id: 'c', text: 'A' }, { id: 'd', text: 'B' }],
      correctAnswer: 'c', explanation: 'A is the first letter! 🅰️', funFact: 'A is for Apple!'
    },
    {
      type: 'mcq', question: 'What letter does "Sun" start with? ☀️', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'R' }, { id: 'b', text: 'S' }, { id: 'c', text: 'T' }, { id: 'd', text: 'U' }],
      correctAnswer: 'b', explanation: 'Sun starts with S! ☀️', funFact: 'S sounds like a snake - ssss!'
    },
    {
      type: 'mcq', question: 'What letter does "Moon" start with? 🌙', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'L' }, { id: 'b', text: 'M' }, { id: 'c', text: 'N' }, { id: 'd', text: 'O' }],
      correctAnswer: 'b', explanation: 'Moon starts with M! 🌙', funFact: 'M is in the middle of the alphabet!'
    },
    {
      type: 'true-false', question: 'Z is the last letter of the alphabet. 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'true', explanation: 'Yes! Z is the last letter! 🔤', funFact: 'Z is for Zebra!'
    },
    {
      type: 'mcq', question: 'What letter does "Fish" start with? 🐟', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'E' }, { id: 'b', text: 'F' }, { id: 'c', text: 'G' }, { id: 'd', text: 'H' }],
      correctAnswer: 'b', explanation: 'Fish starts with F! 🐟', funFact: 'F makes a "ffff" sound!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'How many letters are in the alphabet? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: '24' }, { id: 'b', text: '25' }, { id: 'c', text: '26' }, { id: 'd', text: '27' }],
      correctAnswer: 'c', explanation: 'There are 26 letters! 🔤', funFact: 'A to Z!'
    },
    {
      type: 'mcq', question: 'Which word rhymes with "cat"? 🐱', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Dog' }, { id: 'b', text: 'Hat' }, { id: 'c', text: 'Fish' }, { id: 'd', text: 'Bird' }],
      correctAnswer: 'b', explanation: 'Cat and Hat rhyme! 🎩🐱', funFact: 'Rhyming words sound alike!'
    },
    {
      type: 'mcq', question: 'What letter comes before M? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'K' }, { id: 'b', text: 'L' }, { id: 'c', text: 'N' }, { id: 'd', text: 'O' }],
      correctAnswer: 'b', explanation: 'L comes before M! ...L, M, N...', funFact: 'Try singing the alphabet!'
    },
    {
      type: 'mcq', question: 'Which word is spelled correctly? 📝', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Dgo' }, { id: 'b', text: 'Gdo' }, { id: 'c', text: 'Dog' }, { id: 'd', text: 'Odg' }],
      correctAnswer: 'c', explanation: 'Dog is spelled D-O-G! 🐕', funFact: 'Spelling is putting letters in order!'
    },
    {
      type: 'mcq', question: 'What are A, E, I, O, U called? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Numbers' }, { id: 'b', text: 'Vowels' }, { id: 'c', text: 'Colors' }, { id: 'd', text: 'Shapes' }],
      correctAnswer: 'b', explanation: 'A, E, I, O, U are VOWELS! 🔤', funFact: 'Every word needs a vowel!'
    },
    {
      type: 'mcq', question: 'Which word rhymes with "sun"? ☀️', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Moon' }, { id: 'b', text: 'Star' }, { id: 'c', text: 'Fun' }, { id: 'd', text: 'Sky' }],
      correctAnswer: 'c', explanation: 'Sun and Fun rhyme! ☀️😄', funFact: 'Run also rhymes with sun!'
    },
    {
      type: 'mcq', question: 'What letter does "Queen" start with? 👑', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'P' }, { id: 'b', text: 'Q' }, { id: 'c', text: 'R' }, { id: 'd', text: 'K' }],
      correctAnswer: 'b', explanation: 'Queen starts with Q! 👑', funFact: 'Q almost always has U after it!'
    },
    {
      type: 'mcq', question: 'How do you spell "red"? 🔴', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'R-E-D' }, { id: 'b', text: 'R-A-D' }, { id: 'c', text: 'R-I-D' }, { id: 'd', text: 'R-O-D' }],
      correctAnswer: 'a', explanation: 'Red is spelled R-E-D! 🔴', funFact: 'Red is a primary color!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'Which letters are vowels? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'B, C, D' }, { id: 'b', text: 'X, Y, Z' }, { id: 'c', text: 'A, E, I, O, U' }, { id: 'd', text: 'L, M, N' }],
      correctAnswer: 'c', explanation: 'A, E, I, O, U are all vowels! 🔤', funFact: 'Sometimes Y is a vowel too!'
    },
    {
      type: 'mcq', question: 'What is the opposite of "big"? 🔄', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Huge' }, { id: 'b', text: 'Small' }, { id: 'c', text: 'Large' }, { id: 'd', text: 'Giant' }],
      correctAnswer: 'b', explanation: 'Small is the opposite of big! 🔄', funFact: 'Opposites are words that mean the reverse!'
    },
    {
      type: 'mcq', question: 'What is the opposite of "hot"? 🔄', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Warm' }, { id: 'b', text: 'Cool' }, { id: 'c', text: 'Cold' }, { id: 'd', text: 'Boiling' }],
      correctAnswer: 'c', explanation: 'Cold is the opposite of hot! ❄️🔥', funFact: 'Hot and cold are temperatures!'
    },
    {
      type: 'mcq', question: 'How many vowels are there? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
      correctAnswer: 'c', explanation: 'There are 5 vowels: A, E, I, O, U! 🔤', funFact: 'The rest are consonants!'
    },
    {
      type: 'mcq', question: 'Which word means "happy"? 😊', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'Sad' }, { id: 'b', text: 'Joyful' }, { id: 'c', text: 'Angry' }, { id: 'd', text: 'Tired' }],
      correctAnswer: 'b', explanation: 'Joyful means happy! 😊', funFact: 'Words with the same meaning are called synonyms!'
    },
    {
      type: 'mcq', question: 'What comes after X, Y, ___? 🔤', categoryId: 'alphabet-words',
      options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'W' }, { id: 'c', text: 'Z' }, { id: 'd', text: 'V' }],
      correctAnswer: 'c', explanation: 'X, Y, Z - Z is last! 🔤', funFact: 'Then the alphabet starts over!'
    },
  ],
};
