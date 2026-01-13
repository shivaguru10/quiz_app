// TinyTots Animals Questions
import { TinyTotsQuestionBank } from './types';

export const animalsQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What sound does a dog make? 🐶', categoryId: 'animals',
      options: [{ id: 'a', text: 'Meow' }, { id: 'b', text: 'Woof' }, { id: 'c', text: 'Moo' }, { id: 'd', text: 'Oink' }],
      correctAnswer: 'b', explanation: 'Dogs say Woof! 🐶', funFact: 'Dogs can understand up to 250 words!'
    },
    {
      type: 'mcq', question: 'Which animal says "Meow"? 🐱', categoryId: 'animals',
      options: [{ id: 'a', text: '🐶 Dog' }, { id: 'b', text: '🐱 Cat' }, { id: 'c', text: '🐦 Bird' }, { id: 'd', text: '🐸 Frog' }],
      correctAnswer: 'b', explanation: 'Cats say "Meow"! 🐱', funFact: 'Cats sleep 70% of their lives!'
    },
    {
      type: 'mcq', question: 'Which animal says "Moo"? 🐮', categoryId: 'animals',
      options: [{ id: 'a', text: '🐷 Pig' }, { id: 'b', text: '🐔 Chicken' }, { id: 'c', text: '🐮 Cow' }, { id: 'd', text: '🐴 Horse' }],
      correctAnswer: 'c', explanation: 'Cows say "Moo"! 🐮', funFact: 'Cows have best friends!'
    },
    {
      type: 'mcq', question: 'Which animal lives in water? 🐟', categoryId: 'animals',
      options: [{ id: 'a', text: '🐟 Fish' }, { id: 'b', text: '🦁 Lion' }, { id: 'c', text: '🐘 Elephant' }, { id: 'd', text: '🐵 Monkey' }],
      correctAnswer: 'a', explanation: 'Fish live in water! 🐟', funFact: 'Fish breathe through gills!'
    },
    {
      type: 'true-false', question: 'Birds can fly. 🐦', categoryId: 'animals',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'true', explanation: 'Most birds can fly! 🐦', funFact: 'Penguins cannot fly!'
    },
    {
      type: 'mcq', question: 'Which is the King of the Jungle? 👑', categoryId: 'animals',
      options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🦁 Lion' }, { id: 'c', text: '🐍 Snake' }, { id: 'd', text: '🐻 Bear' }],
      correctAnswer: 'b', explanation: 'The Lion is King! ROAR! 🦁👑', funFact: 'Lions sleep 20 hours a day!'
    },
    {
      type: 'mcq', question: 'Which animal hops? 🐰', categoryId: 'animals',
      options: [{ id: 'a', text: '🐍 Snake' }, { id: 'b', text: '🐟 Fish' }, { id: 'c', text: '🐰 Rabbit' }, { id: 'd', text: '🐢 Turtle' }],
      correctAnswer: 'c', explanation: 'Rabbits hop! Boing boing! 🐰', funFact: 'Rabbits can jump 3 feet high!'
    },
    {
      type: 'mcq', question: 'Which has black and white stripes? 🦓', categoryId: 'animals',
      options: [{ id: 'a', text: '🦁 Lion' }, { id: 'b', text: '🦓 Zebra' }, { id: 'c', text: '🐘 Elephant' }, { id: 'd', text: '🐻 Bear' }],
      correctAnswer: 'b', explanation: 'Zebras have stripes! 🦓', funFact: 'Each zebra has unique stripes!'
    },
    {
      type: 'mcq', question: 'How many legs does a dog have? 🐕', categoryId: 'animals',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '4' }, { id: 'c', text: '6' }, { id: 'd', text: '8' }],
      correctAnswer: 'b', explanation: 'Dogs have 4 legs! 🐕', funFact: 'Dogs walk on their toes!'
    },
    {
      type: 'mcq', question: 'What does a duck say? 🦆', categoryId: 'animals',
      options: [{ id: 'a', text: 'Woof' }, { id: 'b', text: 'Quack' }, { id: 'c', text: 'Meow' }, { id: 'd', text: 'Moo' }],
      correctAnswer: 'b', explanation: 'Ducks say Quack! 🦆', funFact: 'Ducks feathers are waterproof!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'Which animal has the longest neck? 🦒', categoryId: 'animals',
      options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🦒 Giraffe' }, { id: 'c', text: '🐻 Bear' }, { id: 'd', text: '🐰 Rabbit' }],
      correctAnswer: 'b', explanation: 'Giraffes have the longest necks! 🦒', funFact: 'A giraffe neck can be 6 feet long!'
    },
    {
      type: 'mcq', question: 'Which animal has a trunk? 🐘', categoryId: 'animals',
      options: [{ id: 'a', text: '🦁 Lion' }, { id: 'b', text: '🐘 Elephant' }, { id: 'c', text: '🦓 Zebra' }, { id: 'd', text: '🐵 Monkey' }],
      correctAnswer: 'b', explanation: 'Elephants have trunks! 🐘', funFact: 'Elephants use their trunks to drink water!'
    },
    {
      type: 'mcq', question: 'How many legs does a spider have? 🕷️', categoryId: 'animals',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '10' }],
      correctAnswer: 'c', explanation: 'Spiders have 8 legs! 🕷️', funFact: 'Spiders spin webs to catch food!'
    },
    {
      type: 'mcq', question: 'Where do fish live? 🐠', categoryId: 'animals',
      options: [{ id: 'a', text: '🌳 Trees' }, { id: 'b', text: '🏠 Houses' }, { id: 'c', text: '💧 Water' }, { id: 'd', text: '☁️ Clouds' }],
      correctAnswer: 'c', explanation: 'Fish live in water! 🐠', funFact: 'There are over 30,000 types of fish!'
    },
    {
      type: 'mcq', question: 'Which animal makes honey? 🐝', categoryId: 'animals',
      options: [{ id: 'a', text: '🐝 Bee' }, { id: 'b', text: '🦋 Butterfly' }, { id: 'c', text: '🐜 Ant' }, { id: 'd', text: '🐞 Ladybug' }],
      correctAnswer: 'a', explanation: 'Bees make honey! 🐝🍯', funFact: 'Bees visit millions of flowers!'
    },
    {
      type: 'mcq', question: 'What do butterflies start as? 🦋', categoryId: 'animals',
      options: [{ id: 'a', text: '🐛 Caterpillar' }, { id: 'b', text: '🐟 Fish' }, { id: 'c', text: '🐸 Frog' }, { id: 'd', text: '🐦 Bird' }],
      correctAnswer: 'a', explanation: 'Butterflies start as caterpillars! 🐛➡️🦋', funFact: 'This change is called metamorphosis!'
    },
    {
      type: 'mcq', question: 'Which animal carries its house? 🐌', categoryId: 'animals',
      options: [{ id: 'a', text: '🐸 Frog' }, { id: 'b', text: '🐌 Snail' }, { id: 'c', text: '🦎 Lizard' }, { id: 'd', text: '🐜 Ant' }],
      correctAnswer: 'b', explanation: 'Snails carry shells on their backs! 🐌', funFact: 'A snail can sleep for 3 years!'
    },
    {
      type: 'mcq', question: 'Which bird cannot fly? 🐧', categoryId: 'animals',
      options: [{ id: 'a', text: '🦜 Parrot' }, { id: 'b', text: '🐧 Penguin' }, { id: 'c', text: '🦅 Eagle' }, { id: 'd', text: '🐦 Sparrow' }],
      correctAnswer: 'b', explanation: 'Penguins cannot fly! 🐧', funFact: 'But penguins are great swimmers!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'Which is the largest animal on Earth? 🐋', categoryId: 'animals',
      options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🦒 Giraffe' }, { id: 'c', text: '🐋 Blue Whale' }, { id: 'd', text: '🦈 Shark' }],
      correctAnswer: 'c', explanation: 'Blue whales are the largest! 🐋', funFact: 'A blue whale heart is as big as a car!'
    },
    {
      type: 'mcq', question: 'Which animal sleeps upside down? 🦇', categoryId: 'animals',
      options: [{ id: 'a', text: '🐿️ Squirrel' }, { id: 'b', text: '🦇 Bat' }, { id: 'c', text: '🐦 Bird' }, { id: 'd', text: '🐵 Monkey' }],
      correctAnswer: 'b', explanation: 'Bats sleep upside down! 🦇', funFact: 'Bats are the only flying mammals!'
    },
    {
      type: 'mcq', question: 'How many arms does an octopus have? 🐙', categoryId: 'animals',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '10' }],
      correctAnswer: 'c', explanation: 'Octopuses have 8 arms! 🐙', funFact: 'Octopuses have 3 hearts!'
    },
    {
      type: 'mcq', question: 'Which animal changes color? 🦎', categoryId: 'animals',
      options: [{ id: 'a', text: '🐸 Frog' }, { id: 'b', text: '🦎 Chameleon' }, { id: 'c', text: '🦜 Parrot' }, { id: 'd', text: '🐢 Turtle' }],
      correctAnswer: 'b', explanation: 'Chameleons change color! 🦎', funFact: 'They change based on mood!'
    },
    {
      type: 'mcq', question: 'What is a baby frog called? 🐸', categoryId: 'animals',
      options: [{ id: 'a', text: 'Puppy' }, { id: 'b', text: 'Kitten' }, { id: 'c', text: 'Tadpole' }, { id: 'd', text: 'Cub' }],
      correctAnswer: 'c', explanation: 'Baby frogs are tadpoles! 🐸', funFact: 'Tadpoles have tails that disappear!'
    },
    {
      type: 'mcq', question: 'Which animal has a pouch? 🦘', categoryId: 'animals',
      options: [{ id: 'a', text: '🐻 Bear' }, { id: 'b', text: '🦘 Kangaroo' }, { id: 'c', text: '🐺 Wolf' }, { id: 'd', text: '🦊 Fox' }],
      correctAnswer: 'b', explanation: 'Kangaroos carry babies in pouches! 🦘', funFact: 'Baby kangaroos are called joeys!'
    },
  ],
};
