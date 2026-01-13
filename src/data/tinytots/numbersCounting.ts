// TinyTots Numbers & Counting Questions
import { TinyTotsQuestionBank } from './types';

export const numbersCountingQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'How many fingers do you have on one hand? ✋', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
      correctAnswer: 'c', explanation: 'You have 5 fingers on each hand! ✋', funFact: 'You have 10 fingers total!'
    },
    {
      type: 'mcq', question: 'What number comes after 1? 🔢', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '0' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
      correctAnswer: 'b', explanation: '2 comes after 1! 1, 2...', funFact: 'Counting is fun!'
    },
    {
      type: 'mcq', question: 'How many eyes do you have? 👀', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
      correctAnswer: 'b', explanation: 'You have 2 eyes! 👀', funFact: 'Your eyes help you see!'
    },
    {
      type: 'mcq', question: 'What is 1 + 1? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
      correctAnswer: 'b', explanation: '1 + 1 = 2! 🎉', funFact: 'Adding means putting together!'
    },
    {
      type: 'mcq', question: 'How many wheels does a bicycle have? 🚲', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
      correctAnswer: 'b', explanation: 'A bicycle has 2 wheels! 🚲', funFact: 'Bi means two!'
    },
    {
      type: 'mcq', question: 'What number comes before 3? 🔢', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: '2 comes before 3! ...2, 3...', funFact: 'Counting backwards is fun too!'
    },
    {
      type: 'mcq', question: 'How many legs does a chair have? 🪑', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'c', explanation: 'A chair has 4 legs! 🪑', funFact: 'Tables also have 4 legs!'
    },
    {
      type: 'mcq', question: 'What is 2 + 1? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: '2 + 1 = 3! 🎉', funFact: 'You can use your fingers to add!'
    },
    {
      type: 'true-false', question: 'There are 7 days in a week. 📅', categoryId: 'numbers-counting',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'true', explanation: 'Yes! 7 days in a week! 📅', funFact: 'Sunday is the first day!'
    },
    {
      type: 'mcq', question: 'How many ears do you have? 👂', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
      correctAnswer: 'b', explanation: 'You have 2 ears! 👂👂', funFact: 'Your ears help you hear!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is 3 + 2? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'b', explanation: '3 + 2 = 5! 🎉', funFact: 'Count: 3... 4, 5!'
    },
    {
      type: 'mcq', question: 'How many months are in a year? 📆', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '11' }, { id: 'c', text: '12' }, { id: 'd', text: '13' }],
      correctAnswer: 'c', explanation: '12 months in a year! 📆', funFact: 'January is the first month!'
    },
    {
      type: 'mcq', question: 'What is 5 - 2? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: '5 - 2 = 3! 🎉', funFact: 'Subtracting means taking away!'
    },
    {
      type: 'mcq', question: 'What comes after 9? 🔢', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '8' }, { id: 'b', text: '10' }, { id: 'c', text: '11' }, { id: 'd', text: '12' }],
      correctAnswer: 'b', explanation: '10 comes after 9! 🔟', funFact: '10 is a two-digit number!'
    },
    {
      type: 'mcq', question: 'How many sides does a triangle have? 🔺', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: 'Triangles have 3 sides! 🔺', funFact: 'Tri means three!'
    },
    {
      type: 'mcq', question: 'What is 2 + 2 + 2? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'c', explanation: '2 + 2 + 2 = 6! 🎉', funFact: 'Thats three 2s added together!'
    },
    {
      type: 'mcq', question: 'Which is more: 5 or 3? 🔢', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '5' }, { id: 'c', text: 'Same' }, { id: 'd', text: '0' }],
      correctAnswer: 'b', explanation: '5 is more than 3! 5 > 3', funFact: 'Greater than means more!'
    },
    {
      type: 'mcq', question: 'How many toes do you have? 🦶', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '8' }, { id: 'c', text: '10' }, { id: 'd', text: '12' }],
      correctAnswer: 'c', explanation: 'You have 10 toes! 🦶🦶', funFact: '5 toes on each foot!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is 5 + 5? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '8' }, { id: 'b', text: '9' }, { id: 'c', text: '10' }, { id: 'd', text: '11' }],
      correctAnswer: 'c', explanation: '5 + 5 = 10! 🎉', funFact: 'Two hands make 10 fingers!'
    },
    {
      type: 'mcq', question: 'What comes after 19? 🔢', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '18' }, { id: 'b', text: '20' }, { id: 'c', text: '21' }, { id: 'd', text: '29' }],
      correctAnswer: 'b', explanation: '20 comes after 19! 2️⃣0️⃣', funFact: '20 starts the twenties!'
    },
    {
      type: 'mcq', question: 'What is 10 - 5? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
      correctAnswer: 'c', explanation: '10 - 5 = 5! 🎉', funFact: '5 is half of 10!'
    },
    {
      type: 'mcq', question: 'Count by 2s: 2, 4, 6, __? 🔢', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
      correctAnswer: 'b', explanation: '8 comes next! 2, 4, 6, 8! 🎉', funFact: 'These are even numbers!'
    },
    {
      type: 'mcq', question: 'How many hours in a day? ⏰', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '12' }, { id: 'b', text: '20' }, { id: 'c', text: '24' }, { id: 'd', text: '30' }],
      correctAnswer: 'c', explanation: '24 hours in a day! ⏰', funFact: 'Day and night together!'
    },
    {
      type: 'mcq', question: 'What is 3 x 2? 🧮', categoryId: 'numbers-counting',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'b', explanation: '3 x 2 = 6! (3 + 3 = 6) 🎉', funFact: 'Times means groups of!'
    },
  ],
};
