// TinyTots Space Questions
import { TinyTotsQuestionBank } from './types';

export const spaceQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is big, bright, and in the sky during the day? ☀️', categoryId: 'space',
      options: [{ id: 'a', text: '🌙 Moon' }, { id: 'b', text: '☀️ Sun' }, { id: 'c', text: '⭐ Star' }, { id: 'd', text: '☁️ Cloud' }],
      correctAnswer: 'b', explanation: 'The Sun shines during the day! ☀️', funFact: 'The Sun is actually a star!'
    },
    {
      type: 'mcq', question: 'What shines at night and looks round? 🌙', categoryId: 'space',
      options: [{ id: 'a', text: '☀️ Sun' }, { id: 'b', text: '🌙 Moon' }, { id: 'c', text: '🏀 Ball' }, { id: 'd', text: '🍪 Cookie' }],
      correctAnswer: 'b', explanation: 'The Moon shines at night! 🌙', funFact: 'We can see the Moon from Earth!'
    },
    {
      type: 'mcq', question: 'What twinkles in the night sky? ⭐', categoryId: 'space',
      options: [{ id: 'a', text: '☁️ Clouds' }, { id: 'b', text: '🐦 Birds' }, { id: 'c', text: '⭐ Stars' }, { id: 'd', text: '✈️ Planes' }],
      correctAnswer: 'c', explanation: 'Stars twinkle in the sky! ⭐', funFact: 'There are billions of stars!'
    },
    {
      type: 'mcq', question: 'What planet do we live on? 🌍', categoryId: 'space',
      options: [{ id: 'a', text: '🔴 Mars' }, { id: 'b', text: '🌍 Earth' }, { id: 'c', text: '🟠 Jupiter' }, { id: 'd', text: '🟡 Venus' }],
      correctAnswer: 'b', explanation: 'We live on Earth! 🌍', funFact: 'Earth is blue and green from space!'
    },
    {
      type: 'mcq', question: 'Who goes to space in a rocket? 🚀', categoryId: 'space',
      options: [{ id: 'a', text: '👨‍🍳 Chef' }, { id: 'b', text: '👨‍🚀 Astronaut' }, { id: 'c', text: '👨‍🏫 Teacher' }, { id: 'd', text: '👨‍⚕️ Doctor' }],
      correctAnswer: 'b', explanation: 'Astronauts fly to space! 🚀', funFact: 'They wear special space suits!'
    },
    {
      type: 'mcq', question: 'What shape is the Moon? 🌕', categoryId: 'space',
      options: [{ id: 'a', text: '⬜ Square' }, { id: 'b', text: '🔺 Triangle' }, { id: 'c', text: '⭕ Round' }, { id: 'd', text: '⭐ Star' }],
      correctAnswer: 'c', explanation: 'The Moon is round like a ball! 🌕', funFact: 'Sometimes we see only part of it!'
    },
    {
      type: 'mcq', question: 'What flies to space? 🚀', categoryId: 'space',
      options: [{ id: 'a', text: '🚗 Car' }, { id: 'b', text: '🚂 Train' }, { id: 'c', text: '🚀 Rocket' }, { id: 'd', text: '🚲 Bicycle' }],
      correctAnswer: 'c', explanation: 'Rockets fly to space! 🚀', funFact: 'Rockets go very, very fast!'
    },
    {
      type: 'mcq', question: 'What color is the sky at night? 🌌', categoryId: 'space',
      options: [{ id: 'a', text: '🔵 Blue' }, { id: 'b', text: '⚫ Dark/Black' }, { id: 'c', text: '🟢 Green' }, { id: 'd', text: '🔴 Red' }],
      correctAnswer: 'b', explanation: 'The sky is dark at night! 🌌', funFact: 'Thats when we can see the stars!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What has rings around it? 🪐', categoryId: 'space',
      options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '☀️ Sun' }, { id: 'c', text: '🪐 Saturn' }, { id: 'd', text: '🌙 Moon' }],
      correctAnswer: 'c', explanation: 'Saturn has beautiful rings! 🪐', funFact: 'The rings are made of ice and rock!'
    },
    {
      type: 'mcq', question: 'What is the red planet called? 🔴', categoryId: 'space',
      options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '🔴 Mars' }, { id: 'c', text: '🌙 Moon' }, { id: 'd', text: '☀️ Sun' }],
      correctAnswer: 'b', explanation: 'Mars is the red planet! 🔴', funFact: 'Mars looks red because of rusty dust!'
    },
    {
      type: 'mcq', question: 'How many planets are in our solar system? 🌌', categoryId: 'space',
      options: [{ id: 'a', text: '6' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '9' }],
      correctAnswer: 'c', explanation: 'There are 8 planets! 🌌', funFact: 'Pluto is now called a dwarf planet!'
    },
    {
      type: 'mcq', question: 'What is the closest planet to the Sun? ☀️', categoryId: 'space',
      options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '🟡 Venus' }, { id: 'c', text: '⚫ Mercury' }, { id: 'd', text: '🔴 Mars' }],
      correctAnswer: 'c', explanation: 'Mercury is closest to the Sun! ⚫', funFact: 'Mercury is very hot!'
    },
    {
      type: 'mcq', question: 'What is the biggest planet? 🟠', categoryId: 'space',
      options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '🪐 Saturn' }, { id: 'c', text: '🟠 Jupiter' }, { id: 'd', text: '🔴 Mars' }],
      correctAnswer: 'c', explanation: 'Jupiter is the biggest planet! 🟠', funFact: 'Jupiter has a giant red spot!'
    },
    {
      type: 'mcq', question: 'The Moon goes around what? 🌙', categoryId: 'space',
      options: [{ id: 'a', text: '☀️ Sun' }, { id: 'b', text: '🌍 Earth' }, { id: 'c', text: '🔴 Mars' }, { id: 'd', text: '⭐ Stars' }],
      correctAnswer: 'b', explanation: 'The Moon orbits Earth! 🌙🌍', funFact: 'It takes about 27 days!'
    },
    {
      type: 'mcq', question: 'What walks on the Moon? 👣', categoryId: 'space',
      options: [{ id: 'a', text: '🐕 Dogs' }, { id: 'b', text: '🐱 Cats' }, { id: 'c', text: '👨‍🚀 Astronauts' }, { id: 'd', text: '🤖 Robots' }],
      correctAnswer: 'c', explanation: 'Astronauts walked on the Moon! 👨‍🚀', funFact: 'Neil Armstrong was the first!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is a shooting star? 🌠', categoryId: 'space',
      options: [{ id: 'a', text: 'A falling star' }, { id: 'b', text: 'A meteor burning up' }, { id: 'c', text: 'A broken rocket' }, { id: 'd', text: 'A fast comet' }],
      correctAnswer: 'b', explanation: 'Its a meteor burning in our air! 🌠', funFact: 'Make a wish when you see one!'
    },
    {
      type: 'mcq', question: 'Why does the Moon change shape? 🌓', categoryId: 'space',
      options: [{ id: 'a', text: 'It shrinks and grows' }, { id: 'b', text: 'We see different lit parts' }, { id: 'c', text: 'Clouds cover it' }, { id: 'd', text: 'It spins fast' }],
      correctAnswer: 'b', explanation: 'Sun lights different parts! 🌓', funFact: 'These are called Moon phases!'
    },
    {
      type: 'mcq', question: 'What is the Milky Way? 🌌', categoryId: 'space',
      options: [{ id: 'a', text: 'A candy bar' }, { id: 'b', text: 'Our galaxy' }, { id: 'c', text: 'A planet' }, { id: 'd', text: 'A star' }],
      correctAnswer: 'b', explanation: 'The Milky Way is our galaxy! 🌌', funFact: 'It has billions of stars!'
    },
    {
      type: 'mcq', question: 'What keeps us on Earth? 🌍', categoryId: 'space',
      options: [{ id: 'a', text: 'Glue' }, { id: 'b', text: 'Gravity' }, { id: 'c', text: 'Magnets' }, { id: 'd', text: 'Air' }],
      correctAnswer: 'b', explanation: 'Gravity keeps us on Earth! 🌍', funFact: 'Without gravity, wed float away!'
    },
    {
      type: 'mcq', question: 'How long is one day on Earth? ⏰', categoryId: 'space',
      options: [{ id: 'a', text: '12 hours' }, { id: 'b', text: '24 hours' }, { id: 'c', text: '48 hours' }, { id: 'd', text: '7 days' }],
      correctAnswer: 'b', explanation: '24 hours = 1 day! ⏰', funFact: 'Thats how long Earth takes to spin once!'
    },
    {
      type: 'mcq', question: 'What is a constellation? ⭐', categoryId: 'space',
      options: [{ id: 'a', text: 'A planet' }, { id: 'b', text: 'A star pattern' }, { id: 'c', text: 'A rocket' }, { id: 'd', text: 'A moon' }],
      correctAnswer: 'b', explanation: 'Stars that form patterns! ⭐', funFact: 'The Big Dipper is a constellation!'
    },
  ],
};
