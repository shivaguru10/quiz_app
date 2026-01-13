// TinyTots Food & Fruits Questions
import { TinyTotsQuestionBank } from './types';

export const foodFruitsQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What color is a banana? 🍌', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🟡 Yellow' }, { id: 'd', text: '🔵 Blue' }],
      correctAnswer: 'c', explanation: 'Ripe bananas are YELLOW! 🍌', funFact: 'Bananas are full of potassium!'
    },
    {
      type: 'mcq', question: 'What fruit is red and grows on trees? 🍎', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍌 Banana' }, { id: 'b', text: '🍎 Apple' }, { id: 'c', text: '🍇 Grapes' }, { id: 'd', text: '🍊 Orange' }],
      correctAnswer: 'b', explanation: 'Apples are red! 🍎', funFact: 'An apple a day keeps the doctor away!'
    },
    {
      type: 'mcq', question: 'Where does milk come from? 🥛', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🐔 Chicken' }, { id: 'b', text: '🐄 Cow' }, { id: 'c', text: '🐷 Pig' }, { id: 'd', text: '🐟 Fish' }],
      correctAnswer: 'b', explanation: 'Cows give us milk! 🐄🥛', funFact: 'Milk makes our bones strong!'
    },
    {
      type: 'mcq', question: 'What is orange and crunchy? 🥕', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🥕 Carrot' }, { id: 'b', text: '🍆 Eggplant' }, { id: 'c', text: '🥬 Lettuce' }, { id: 'd', text: '🧅 Onion' }],
      correctAnswer: 'a', explanation: 'Carrots are orange and crunchy! 🥕', funFact: 'Rabbits love carrots!'
    },
    {
      type: 'mcq', question: 'What do chickens give us? 🐔', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🥛 Milk' }, { id: 'b', text: '🥚 Eggs' }, { id: 'c', text: '🧀 Cheese' }, { id: 'd', text: '🍞 Bread' }],
      correctAnswer: 'b', explanation: 'Chickens lay eggs! 🐔🥚', funFact: 'Eggs are full of protein!'
    },
    {
      type: 'mcq', question: 'Which fruit is round and orange? 🍊', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🍌 Banana' }, { id: 'c', text: '🍊 Orange' }, { id: 'd', text: '🍇 Grapes' }],
      correctAnswer: 'c', explanation: 'Oranges are round and orange! 🍊', funFact: 'Oranges have lots of Vitamin C!'
    },
    {
      type: 'true-false', question: 'Pizza is a healthy vegetable. 🍕', categoryId: 'food-fruits',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'false', explanation: 'Pizza is yummy but not a vegetable! 🍕', funFact: 'Pizza can have veggies on top though!'
    },
    {
      type: 'mcq', question: 'What is sweet and comes from bees? 🐝', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍯 Honey' }, { id: 'b', text: '🥛 Milk' }, { id: 'c', text: '💧 Water' }, { id: 'd', text: '🧈 Butter' }],
      correctAnswer: 'a', explanation: 'Bees make sweet honey! 🐝🍯', funFact: 'Honey never spoils!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'Which food group do apples belong to? 🍎', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🥩 Meat' }, { id: 'b', text: '🍎 Fruits' }, { id: 'c', text: '🥬 Vegetables' }, { id: 'd', text: '🍞 Grains' }],
      correctAnswer: 'b', explanation: 'Apples are fruits! 🍎', funFact: 'Eat 5 fruits and veggies a day!'
    },
    {
      type: 'mcq', question: 'What is bread made from? 🍞', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🥛 Milk' }, { id: 'b', text: '🌾 Wheat/Flour' }, { id: 'c', text: '🥚 Eggs' }, { id: 'd', text: '🍎 Apples' }],
      correctAnswer: 'b', explanation: 'Bread is made from wheat flour! 🌾🍞', funFact: 'Wheat grows in fields!'
    },
    {
      type: 'mcq', question: 'Which grows underground? 🥔', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🥕 Carrot' }, { id: 'c', text: '🍊 Orange' }, { id: 'd', text: '🍌 Banana' }],
      correctAnswer: 'b', explanation: 'Carrots grow underground! 🥕', funFact: 'Potatoes also grow underground!'
    },
    {
      type: 'mcq', question: 'What makes cheese? 🧀', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🥛 Milk' }, { id: 'b', text: '💧 Water' }, { id: 'c', text: '🍎 Apples' }, { id: 'd', text: '🌾 Wheat' }],
      correctAnswer: 'a', explanation: 'Cheese is made from milk! 🥛🧀', funFact: 'Mice love cheese!'
    },
    {
      type: 'mcq', question: 'Which fruit has seeds on the outside? 🍓', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🍊 Orange' }, { id: 'c', text: '🍓 Strawberry' }, { id: 'd', text: '🍇 Grape' }],
      correctAnswer: 'c', explanation: 'Strawberries have seeds outside! 🍓', funFact: 'A strawberry has about 200 seeds!'
    },
    {
      type: 'mcq', question: 'What is the main ingredient in juice? 🧃', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍎 Fruit' }, { id: 'b', text: '🥩 Meat' }, { id: 'c', text: '🍞 Bread' }, { id: 'd', text: '🧀 Cheese' }],
      correctAnswer: 'a', explanation: 'Juice is made from fruits! 🍎🧃', funFact: 'Orange juice has Vitamin C!'
    },
    {
      type: 'mcq', question: 'Which is a vegetable? 🥬', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🥦 Broccoli' }, { id: 'c', text: '🍇 Grapes' }, { id: 'd', text: '🍌 Banana' }],
      correctAnswer: 'b', explanation: 'Broccoli is a vegetable! 🥦', funFact: 'Broccoli looks like little trees!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'Which fruit is actually a berry? 🍌', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🍓 Strawberry' }, { id: 'b', text: '🍌 Banana' }, { id: 'c', text: '🫐 Blueberry' }, { id: 'd', text: '🍒 Cherry' }],
      correctAnswer: 'b', explanation: 'Bananas are berries! 🍌', funFact: 'Strawberries are NOT berries!'
    },
    {
      type: 'mcq', question: 'What vitamin do oranges have? 🍊', categoryId: 'food-fruits',
      options: [{ id: 'a', text: 'Vitamin A' }, { id: 'b', text: 'Vitamin B' }, { id: 'c', text: 'Vitamin C' }, { id: 'd', text: 'Vitamin D' }],
      correctAnswer: 'c', explanation: 'Oranges have Vitamin C! 🍊', funFact: 'Vitamin C helps fight colds!'
    },
    {
      type: 'mcq', question: 'What food is made from soybeans? 🫛', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🧀 Cheese' }, { id: 'b', text: '🍞 Bread' }, { id: 'c', text: '🧈 Butter' }, { id: 'd', text: '🍶 Tofu' }],
      correctAnswer: 'd', explanation: 'Tofu is made from soybeans! 🫛', funFact: 'Tofu is full of protein!'
    },
    {
      type: 'mcq', question: 'Which part of broccoli do we eat? 🥦', categoryId: 'food-fruits',
      options: [{ id: 'a', text: 'Roots' }, { id: 'b', text: 'Leaves' }, { id: 'c', text: 'Flowers' }, { id: 'd', text: 'Seeds' }],
      correctAnswer: 'c', explanation: 'We eat broccoli flowers! 🥦', funFact: 'The green part is unopened flowers!'
    },
    {
      type: 'mcq', question: 'Where does chocolate come from? 🍫', categoryId: 'food-fruits',
      options: [{ id: 'a', text: '🌾 Wheat' }, { id: 'b', text: '🫘 Cocoa beans' }, { id: 'c', text: '🥛 Milk' }, { id: 'd', text: '🍯 Honey' }],
      correctAnswer: 'b', explanation: 'Chocolate comes from cocoa beans! 🫘🍫', funFact: 'Cocoa trees grow in hot places!'
    },
    {
      type: 'mcq', question: 'What makes bread rise? 🍞', categoryId: 'food-fruits',
      options: [{ id: 'a', text: 'Sugar' }, { id: 'b', text: 'Yeast' }, { id: 'c', text: 'Salt' }, { id: 'd', text: 'Water' }],
      correctAnswer: 'b', explanation: 'Yeast makes bread fluffy! 🍞', funFact: 'Yeast creates tiny bubbles in bread!'
    },
  ],
};
