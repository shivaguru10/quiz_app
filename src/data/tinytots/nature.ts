// TinyTots Nature Questions
import { TinyTotsQuestionBank } from './types';

export const natureQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What color is grass? 🌿', categoryId: 'nature',
      options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟡 Yellow' }],
      correctAnswer: 'b', explanation: 'Grass is GREEN! 🌿', funFact: 'Plants are green because of chlorophyll!'
    },
    {
      type: 'mcq', question: 'Where does rain come from? 🌧️', categoryId: 'nature',
      options: [{ id: 'a', text: '🌳 Trees' }, { id: 'b', text: '☁️ Clouds' }, { id: 'c', text: '🏠 Houses' }, { id: 'd', text: '🚗 Cars' }],
      correctAnswer: 'b', explanation: 'Rain falls from clouds! ☁️🌧️', funFact: 'Clouds are made of tiny water drops!'
    },
    {
      type: 'mcq', question: 'What do plants need to grow? 🌱', categoryId: 'nature',
      options: [{ id: 'a', text: '📺 TV' }, { id: 'b', text: '☀️ Sunlight' }, { id: 'c', text: '🚗 Cars' }, { id: 'd', text: '📱 Phone' }],
      correctAnswer: 'b', explanation: 'Plants need sunlight! ☀️🌱', funFact: 'Plants also need water and soil!'
    },
    {
      type: 'mcq', question: 'What gives us light during the day? ☀️', categoryId: 'nature',
      options: [{ id: 'a', text: '🌙 Moon' }, { id: 'b', text: '☀️ Sun' }, { id: 'c', text: '⭐ Stars' }, { id: 'd', text: '💡 Lamp' }],
      correctAnswer: 'b', explanation: 'The Sun gives us light! ☀️', funFact: 'The Sun is a star!'
    },
    {
      type: 'mcq', question: 'What do flowers grow from? 🌷', categoryId: 'nature',
      options: [{ id: 'a', text: '🌱 Seeds' }, { id: 'b', text: '🪨 Rocks' }, { id: 'c', text: '📦 Boxes' }, { id: 'd', text: '🧊 Ice' }],
      correctAnswer: 'a', explanation: 'Flowers grow from seeds! 🌱🌷', funFact: 'Seeds are like baby plants!'
    },
    {
      type: 'true-false', question: 'Trees give us oxygen to breathe. 🌳', categoryId: 'nature',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'true', explanation: 'Yes! Trees help us breathe! 🌳', funFact: 'Thats why we plant trees!'
    },
    {
      type: 'mcq', question: 'What falls from the sky in winter? ❄️', categoryId: 'nature',
      options: [{ id: 'a', text: '🌸 Flowers' }, { id: 'b', text: '🍂 Leaves' }, { id: 'c', text: '❄️ Snow' }, { id: 'd', text: '🌈 Rainbow' }],
      correctAnswer: 'c', explanation: 'Snow falls in winter! ❄️', funFact: 'Each snowflake is unique!'
    },
    {
      type: 'mcq', question: 'What makes a rainbow? 🌈', categoryId: 'nature',
      options: [{ id: 'a', text: '🌙 Moon' }, { id: 'b', text: '☀️ Sun and Rain' }, { id: 'c', text: '⭐ Stars' }, { id: 'd', text: '🌲 Trees' }],
      correctAnswer: 'b', explanation: 'Sun + Rain = Rainbow! 🌈', funFact: 'Rainbows have 7 colors!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'How many seasons are there? 🍂🌸☀️❄️', categoryId: 'nature',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'c', explanation: 'There are 4 seasons! 🍂🌸☀️❄️', funFact: 'Spring, Summer, Fall, Winter!'
    },
    {
      type: 'mcq', question: 'What part of the plant is underground? 🌱', categoryId: 'nature',
      options: [{ id: 'a', text: '🌸 Flower' }, { id: 'b', text: '🌿 Leaf' }, { id: 'c', text: '🌳 Trunk' }, { id: 'd', text: '🌱 Roots' }],
      correctAnswer: 'd', explanation: 'Roots grow underground! 🌱', funFact: 'Roots drink water from soil!'
    },
    {
      type: 'mcq', question: 'Where do bees get nectar from? 🐝', categoryId: 'nature',
      options: [{ id: 'a', text: '🌸 Flowers' }, { id: 'b', text: '🪨 Rocks' }, { id: 'c', text: '☁️ Clouds' }, { id: 'd', text: '🏠 Houses' }],
      correctAnswer: 'a', explanation: 'Bees get nectar from flowers! 🌸🐝', funFact: 'Bees make honey from nectar!'
    },
    {
      type: 'mcq', question: 'What do caterpillars turn into? 🐛', categoryId: 'nature',
      options: [{ id: 'a', text: '🐦 Bird' }, { id: 'b', text: '🦋 Butterfly' }, { id: 'c', text: '🐟 Fish' }, { id: 'd', text: '🐸 Frog' }],
      correctAnswer: 'b', explanation: 'Caterpillars become butterflies! 🐛➡️🦋', funFact: 'This change is called metamorphosis!'
    },
    {
      type: 'mcq', question: 'What makes the wind blow? 💨', categoryId: 'nature',
      options: [{ id: 'a', text: '🌳 Trees' }, { id: 'b', text: '☀️ Sun warming air' }, { id: 'c', text: '🐦 Birds' }, { id: 'd', text: '🚗 Cars' }],
      correctAnswer: 'b', explanation: 'The sun warms air and makes wind! 💨', funFact: 'Warm air rises and cool air rushes in!'
    },
    {
      type: 'mcq', question: 'What season do leaves fall? 🍂', categoryId: 'nature',
      options: [{ id: 'a', text: '🌸 Spring' }, { id: 'b', text: '☀️ Summer' }, { id: 'c', text: '🍂 Fall/Autumn' }, { id: 'd', text: '❄️ Winter' }],
      correctAnswer: 'c', explanation: 'Leaves fall in Autumn! 🍂', funFact: 'Thats why its called Fall!'
    },
    {
      type: 'mcq', question: 'What do tadpoles become? 🐸', categoryId: 'nature',
      options: [{ id: 'a', text: '🐟 Fish' }, { id: 'b', text: '🐸 Frogs' }, { id: 'c', text: '🐍 Snakes' }, { id: 'd', text: '🦎 Lizards' }],
      correctAnswer: 'b', explanation: 'Tadpoles become frogs! 🐸', funFact: 'Tadpoles live in water!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'Why is the sky blue? 🔵', categoryId: 'nature',
      options: [{ id: 'a', text: 'Paint' }, { id: 'b', text: 'Sunlight scatters' }, { id: 'c', text: 'Water' }, { id: 'd', text: 'Magic' }],
      correctAnswer: 'b', explanation: 'Sunlight scatters and makes it blue! 🔵', funFact: 'Blue light bounces around more!'
    },
    {
      type: 'mcq', question: 'What is the water cycle? 💧', categoryId: 'nature',
      options: [{ id: 'a', text: 'A bike made of water' }, { id: 'b', text: 'Water moving in circles' }, { id: 'c', text: 'Evaporation, clouds, rain, repeat' }, { id: 'd', text: 'A water game' }],
      correctAnswer: 'c', explanation: 'Water evaporates, forms clouds, rains! 💧', funFact: 'The same water has been recycling forever!'
    },
    {
      type: 'mcq', question: 'Why do leaves change color in fall? 🍂', categoryId: 'nature',
      options: [{ id: 'a', text: 'They get painted' }, { id: 'b', text: 'Less sunlight' }, { id: 'c', text: 'Its too hot' }, { id: 'd', text: 'Birds color them' }],
      correctAnswer: 'b', explanation: 'Less sunlight changes leaf colors! 🍂', funFact: 'Green chlorophyll fades away!'
    },
    {
      type: 'mcq', question: 'What is photosynthesis? 🌿', categoryId: 'nature',
      options: [{ id: 'a', text: 'Taking photos' }, { id: 'b', text: 'Plants making food from sunlight' }, { id: 'c', text: 'Plants sleeping' }, { id: 'd', text: 'Watering plants' }],
      correctAnswer: 'b', explanation: 'Plants make food from sunlight! 🌿☀️', funFact: 'They also give us oxygen!'
    },
    {
      type: 'mcq', question: 'How do seeds travel? 🌱', categoryId: 'nature',
      options: [{ id: 'a', text: 'Wind, animals, water' }, { id: 'b', text: 'By car' }, { id: 'c', text: 'By plane' }, { id: 'd', text: 'They walk' }],
      correctAnswer: 'a', explanation: 'Seeds travel by wind, animals, and water! 🌱', funFact: 'Dandelion seeds fly in the wind!'
    },
    {
      type: 'mcq', question: 'What causes thunder? ⛈️', categoryId: 'nature',
      options: [{ id: 'a', text: 'Giants bowling' }, { id: 'b', text: 'Lightning heating air' }, { id: 'c', text: 'Clouds bumping' }, { id: 'd', text: 'Rain falling' }],
      correctAnswer: 'b', explanation: 'Lightning heats air very fast! ⚡⛈️', funFact: 'Thunder is the sound of that hot air!'
    },
  ],
};
