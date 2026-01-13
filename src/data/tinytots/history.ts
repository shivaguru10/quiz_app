// TinyTots History Questions
import { TinyTotsQuestionBank } from './types';

export const historyQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What big animals lived long, long ago? 🦕', categoryId: 'history',
      options: [{ id: 'a', text: '🐶 Dogs' }, { id: 'b', text: '🦕 Dinosaurs' }, { id: 'c', text: '🐱 Cats' }, { id: 'd', text: '🐰 Rabbits' }],
      correctAnswer: 'b', explanation: 'Dinosaurs lived millions of years ago! 🦕', funFact: 'Some dinosaurs were as big as houses!'
    },
    {
      type: 'mcq', question: 'What did kings and queens live in? 🏰', categoryId: 'history',
      options: [{ id: 'a', text: '🏠 House' }, { id: 'b', text: '🏰 Castle' }, { id: 'c', text: '🏢 Building' }, { id: 'd', text: '⛺ Tent' }],
      correctAnswer: 'b', explanation: 'Kings and queens lived in castles! 🏰', funFact: 'Castles had tall walls to keep people safe!'
    },
    {
      type: 'mcq', question: 'What did pirates look for? 🏴‍☠️', categoryId: 'history',
      options: [{ id: 'a', text: '📚 Books' }, { id: 'b', text: '💎 Treasure' }, { id: 'c', text: '🍎 Apples' }, { id: 'd', text: '🎈 Balloons' }],
      correctAnswer: 'b', explanation: 'Pirates searched for treasure! 💎', funFact: 'Pirates said "Arrr!" and "Ahoy!"'
    },
    {
      type: 'mcq', question: 'Who rides horses and wears armor? ⚔️', categoryId: 'history',
      options: [{ id: 'a', text: '👨‍🍳 Chef' }, { id: 'b', text: '⚔️ Knight' }, { id: 'c', text: '👨‍🏫 Teacher' }, { id: 'd', text: '👨‍⚕️ Doctor' }],
      correctAnswer: 'b', explanation: 'Knights wore shiny armor! ⚔️', funFact: 'Knights protected castles!'
    },
    {
      type: 'mcq', question: 'What did people use before cars? 🐴', categoryId: 'history',
      options: [{ id: 'a', text: '✈️ Airplanes' }, { id: 'b', text: '🚀 Rockets' }, { id: 'c', text: '🐴 Horses' }, { id: 'd', text: '🛸 UFOs' }],
      correctAnswer: 'c', explanation: 'People rode horses before cars! 🐴', funFact: 'Horses pulled wagons and carriages!'
    },
    {
      type: 'mcq', question: 'What did cowboys ride? 🤠', categoryId: 'history',
      options: [{ id: 'a', text: '🚲 Bicycles' }, { id: 'b', text: '🐴 Horses' }, { id: 'c', text: '🛴 Scooters' }, { id: 'd', text: '🛹 Skateboards' }],
      correctAnswer: 'b', explanation: 'Cowboys rode horses! 🤠', funFact: 'Cowboys herded cattle on the ranch!'
    },
    {
      type: 'mcq', question: 'What shape are pyramids? 🔺', categoryId: 'history',
      options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '⬜ Square' }, { id: 'c', text: '🔺 Triangle' }, { id: 'd', text: '⭐ Star' }],
      correctAnswer: 'c', explanation: 'Pyramids have triangle shapes! 🔺', funFact: 'Pyramids were built in Egypt!'
    },
    {
      type: 'mcq', question: 'Who walked on the Moon? 🌙', categoryId: 'history',
      options: [{ id: 'a', text: '👨‍🚀 Astronauts' }, { id: 'b', text: '🐦 Birds' }, { id: 'c', text: '✈️ Pilots' }, { id: 'd', text: '🏊 Swimmers' }],
      correctAnswer: 'a', explanation: 'Astronauts walked on the Moon! 🌙', funFact: 'Neil Armstrong was the first!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'Who sailed on ships to find new lands? ⛵', categoryId: 'history',
      options: [{ id: 'a', text: '👨‍🚀 Astronauts' }, { id: 'b', text: '⛵ Explorers' }, { id: 'c', text: '👨‍🌾 Farmers' }, { id: 'd', text: '👨‍🔬 Scientists' }],
      correctAnswer: 'b', explanation: 'Explorers sailed to discover new places! ⛵', funFact: 'Christopher Columbus was an explorer!'
    },
    {
      type: 'mcq', question: 'What did cave people paint on walls? 🎨', categoryId: 'history',
      options: [{ id: 'a', text: '🚗 Cars' }, { id: 'b', text: '🦌 Animals' }, { id: 'c', text: '📱 Phones' }, { id: 'd', text: '🏠 Houses' }],
      correctAnswer: 'b', explanation: 'Cave people painted animals! 🎨', funFact: 'Cave paintings are thousands of years old!'
    },
    {
      type: 'mcq', question: 'What did ancient Egyptians build? 🏛️', categoryId: 'history',
      options: [{ id: 'a', text: '🏢 Skyscrapers' }, { id: 'b', text: '🏰 Castles' }, { id: 'c', text: '🔺 Pyramids' }, { id: 'd', text: '🌉 Bridges' }],
      correctAnswer: 'c', explanation: 'Egyptians built pyramids! 🔺', funFact: 'The pyramids are over 4,000 years old!'
    },
    {
      type: 'mcq', question: 'What did T-Rex eat? 🦖', categoryId: 'history',
      options: [{ id: 'a', text: '🥬 Vegetables' }, { id: 'b', text: '🍎 Fruits' }, { id: 'c', text: '🥩 Meat' }, { id: 'd', text: '🍞 Bread' }],
      correctAnswer: 'c', explanation: 'T-Rex was a meat-eater! 🦖', funFact: 'T-Rex had tiny arms but big teeth!'
    },
    {
      type: 'mcq', question: 'What did Viking ships have? ⛵', categoryId: 'history',
      options: [{ id: 'a', text: '🚁 Propellers' }, { id: 'b', text: '⛵ Sails and oars' }, { id: 'c', text: '🚀 Rockets' }, { id: 'd', text: '🎈 Balloons' }],
      correctAnswer: 'b', explanation: 'Vikings used sails and oars! ⛵', funFact: 'Viking ships had dragon heads!'
    },
    {
      type: 'mcq', question: 'What is a mummy? 🇪🇬', categoryId: 'history',
      options: [{ id: 'a', text: 'A scary monster' }, { id: 'b', text: 'A wrapped ancient body' }, { id: 'c', text: 'A type of candy' }, { id: 'd', text: 'A dinosaur' }],
      correctAnswer: 'b', explanation: 'Mummies are wrapped preserved bodies! 🇪🇬', funFact: 'Egyptians made mummies!'
    },
    {
      type: 'mcq', question: 'What did samurai use? ⚔️', categoryId: 'history',
      options: [{ id: 'a', text: '🔫 Guns' }, { id: 'b', text: '⚔️ Swords' }, { id: 'c', text: '🏹 Bow only' }, { id: 'd', text: '🪃 Boomerangs' }],
      correctAnswer: 'b', explanation: 'Samurai used swords! ⚔️', funFact: 'Samurai were Japanese warriors!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'When did dinosaurs live? 🦕', categoryId: 'history',
      options: [{ id: 'a', text: '100 years ago' }, { id: 'b', text: '1,000 years ago' }, { id: 'c', text: 'Millions of years ago' }, { id: 'd', text: '50 years ago' }],
      correctAnswer: 'c', explanation: 'Dinosaurs lived millions of years ago! 🦕', funFact: 'They lived before humans!'
    },
    {
      type: 'mcq', question: 'What ended the dinosaurs? ☄️', categoryId: 'history',
      options: [{ id: 'a', text: '🌊 Flood' }, { id: 'b', text: '☄️ Giant asteroid' }, { id: 'c', text: '🦁 Lions' }, { id: 'd', text: '👫 Humans' }],
      correctAnswer: 'b', explanation: 'An asteroid hit Earth! ☄️', funFact: 'It changed the weather and food!'
    },
    {
      type: 'mcq', question: 'Who invented the lightbulb? 💡', categoryId: 'history',
      options: [{ id: 'a', text: 'Albert Einstein' }, { id: 'b', text: 'Thomas Edison' }, { id: 'c', text: 'Isaac Newton' }, { id: 'd', text: 'Benjamin Franklin' }],
      correctAnswer: 'b', explanation: 'Thomas Edison invented the lightbulb! 💡', funFact: 'He tried thousands of times!'
    },
    {
      type: 'mcq', question: 'How long ago were pyramids built? 🔺', categoryId: 'history',
      options: [{ id: 'a', text: '100 years' }, { id: 'b', text: '1,000 years' }, { id: 'c', text: 'Over 4,000 years' }, { id: 'd', text: '50 years' }],
      correctAnswer: 'c', explanation: 'Pyramids are over 4,000 years old! 🔺', funFact: 'They were built without machines!'
    },
    {
      type: 'mcq', question: 'What was the first animal in space? 🚀', categoryId: 'history',
      options: [{ id: 'a', text: '🐱 Cat' }, { id: 'b', text: '🐶 Dog' }, { id: 'c', text: '🐵 Monkey' }, { id: 'd', text: '🐁 Mouse' }],
      correctAnswer: 'b', explanation: 'A dog named Laika went to space! 🐶', funFact: 'She was from Russia!'
    },
    {
      type: 'mcq', question: 'When did people first fly in an airplane? ✈️', categoryId: 'history',
      options: [{ id: 'a', text: '1803' }, { id: 'b', text: '1903' }, { id: 'c', text: '1953' }, { id: 'd', text: '2003' }],
      correctAnswer: 'b', explanation: 'The Wright Brothers flew in 1903! ✈️', funFact: 'The first flight was 12 seconds!'
    },
  ],
};
