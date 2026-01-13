// TinyTots Colors & Shapes Questions
import { TinyTotsQuestionBank } from './types';

export const colorsShapesQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What color is the sun? ☀️', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟡 Yellow' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟢 Green' }],
      correctAnswer: 'b', explanation: 'The sun is YELLOW! ☀️', funFact: 'The sun gives us light and warmth!'
    },
    {
      type: 'mcq', question: 'What color is grass? 🌿', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟡 Yellow' }, { id: 'c', text: '🟢 Green' }, { id: 'd', text: '🟣 Purple' }],
      correctAnswer: 'c', explanation: 'Grass is GREEN! 🌿', funFact: 'Plants are green because of chlorophyll!'
    },
    {
      type: 'mcq', question: 'What shape is a ball? ⚽', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⬜ Square' }, { id: 'b', text: '⭕ Circle' }, { id: 'c', text: '🔺 Triangle' }, { id: 'd', text: '⬛ Rectangle' }],
      correctAnswer: 'b', explanation: 'A ball is round like a CIRCLE! ⭕', funFact: 'Circles have no corners!'
    },
    {
      type: 'mcq', question: 'What color is the sky? ☁️', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔵 Blue' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🔴 Red' }, { id: 'd', text: '🟡 Yellow' }],
      correctAnswer: 'a', explanation: 'The sky is BLUE! 🔵', funFact: 'Sunlight makes the sky look blue!'
    },
    {
      type: 'mcq', question: 'What shape has 3 sides? 🔺', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '⬜ Square' }, { id: 'c', text: '🔺 Triangle' }, { id: 'd', text: '⬛ Rectangle' }],
      correctAnswer: 'c', explanation: 'A TRIANGLE has 3 sides! 🔺', funFact: 'Triangles are very strong shapes!'
    },
    {
      type: 'mcq', question: 'What color is a tomato? 🍅', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🟢 Green' }, { id: 'b', text: '🔴 Red' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟣 Purple' }],
      correctAnswer: 'b', explanation: 'Tomatoes are RED! 🍅', funFact: 'Tomatoes are actually fruits!'
    },
    {
      type: 'mcq', question: 'What shape has 4 equal sides? ⬜', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '🔺 Triangle' }, { id: 'c', text: '⬜ Square' }, { id: 'd', text: '⭐ Star' }],
      correctAnswer: 'c', explanation: 'A SQUARE has 4 equal sides! ⬜', funFact: 'Windows are often square shaped!'
    },
    {
      type: 'mcq', question: 'What color is chocolate? 🍫', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🟤 Brown' }, { id: 'b', text: '🔵 Blue' }, { id: 'c', text: '🟢 Green' }, { id: 'd', text: '🔴 Red' }],
      correctAnswer: 'a', explanation: 'Chocolate is BROWN! 🍫', funFact: 'Chocolate comes from cocoa beans!'
    },
    {
      type: 'true-false', question: 'An orange is orange colored. 🍊', categoryId: 'colors-shapes',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'true', explanation: 'Yes! Oranges are ORANGE! 🍊', funFact: 'The fruit was named before the color!'
    },
    {
      type: 'mcq', question: 'What color is snow? ❄️', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⚫ Black' }, { id: 'b', text: '🔵 Blue' }, { id: 'c', text: '⚪ White' }, { id: 'd', text: '🟢 Green' }],
      correctAnswer: 'c', explanation: 'Snow is WHITE! ❄️', funFact: 'Each snowflake is unique!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What shape is a stop sign? 🛑', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '⬜ Square' }, { id: 'c', text: '🔺 Triangle' }, { id: 'd', text: '🛑 Octagon (8 sides)' }],
      correctAnswer: 'd', explanation: 'Stop signs are OCTAGONS with 8 sides! 🛑', funFact: 'Stop signs are red so you can see them easily!'
    },
    {
      type: 'mcq', question: 'What colors make purple? 🟣', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔴+🔵 Red and Blue' }, { id: 'b', text: '🟡+🔵 Yellow and Blue' }, { id: 'c', text: '🔴+🟡 Red and Yellow' }, { id: 'd', text: '🔵+🟢 Blue and Green' }],
      correctAnswer: 'a', explanation: 'Red + Blue = Purple! 🟣', funFact: 'Purple was once a color only for kings!'
    },
    {
      type: 'mcq', question: 'What colors make orange? 🟠', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔴+🔵 Red and Blue' }, { id: 'b', text: '🔴+🟡 Red and Yellow' }, { id: 'c', text: '🔵+🟡 Blue and Yellow' }, { id: 'd', text: '🟢+🔴 Green and Red' }],
      correctAnswer: 'b', explanation: 'Red + Yellow = Orange! 🟠', funFact: 'Orange is a warm, happy color!'
    },
    {
      type: 'mcq', question: 'How many corners does a rectangle have? ⬛', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
      correctAnswer: 'b', explanation: 'Rectangles have 4 corners! ⬛', funFact: 'Doors are usually rectangle shaped!'
    },
    {
      type: 'mcq', question: 'What colors make green? 🟢', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔴+🔵 Red and Blue' }, { id: 'b', text: '🔵+🟡 Blue and Yellow' }, { id: 'c', text: '🔴+🟡 Red and Yellow' }, { id: 'd', text: '⚫+⚪ Black and White' }],
      correctAnswer: 'b', explanation: 'Blue + Yellow = Green! 🟢', funFact: 'Green is the color of nature!'
    },
    {
      type: 'mcq', question: 'What shape is a pizza slice? 🍕', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '⬜ Square' }, { id: 'c', text: '🔺 Triangle' }, { id: 'd', text: '⬛ Rectangle' }],
      correctAnswer: 'c', explanation: 'A pizza slice is shaped like a TRIANGLE! 🍕', funFact: 'A whole pizza is a circle!'
    },
    {
      type: 'mcq', question: 'What shape is an egg? 🥚', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '⬜ Square' }, { id: 'c', text: '🥚 Oval' }, { id: 'd', text: '🔺 Triangle' }],
      correctAnswer: 'c', explanation: 'An egg is shaped like an OVAL! 🥚', funFact: 'Ovals are stretched circles!'
    },
    {
      type: 'mcq', question: 'What color is a banana? 🍌', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🟡 Yellow' }, { id: 'd', text: '🔵 Blue' }],
      correctAnswer: 'c', explanation: 'Ripe bananas are YELLOW! 🍌', funFact: 'Bananas start green and turn yellow!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'How many sides does a hexagon have? ⬡', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'c', explanation: 'A hexagon has 6 sides! ⬡', funFact: 'Honeycomb cells are hexagons!'
    },
    {
      type: 'mcq', question: 'What shape has 5 sides? ⬠', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: 'Square' }, { id: 'b', text: 'Pentagon' }, { id: 'c', text: 'Hexagon' }, { id: 'd', text: 'Triangle' }],
      correctAnswer: 'b', explanation: 'A PENTAGON has 5 sides! ⬠', funFact: 'The Pentagon building in USA has 5 sides!'
    },
    {
      type: 'mcq', question: 'What do you get when you mix all colors? 🎨', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: '⚪ White' }, { id: 'b', text: '⚫ Black' }, { id: 'c', text: '🟤 Brown' }, { id: 'd', text: '🔵 Blue' }],
      correctAnswer: 'c', explanation: 'Mixing all paint colors makes BROWN! 🟤', funFact: 'Mixing all light colors makes white!'
    },
    {
      type: 'mcq', question: 'What 3D shape is a ball? 🏀', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: 'Cube' }, { id: 'b', text: 'Sphere' }, { id: 'c', text: 'Cylinder' }, { id: 'd', text: 'Cone' }],
      correctAnswer: 'b', explanation: 'A ball is a SPHERE! 🏀', funFact: 'Earth is shaped like a sphere!'
    },
    {
      type: 'mcq', question: 'What 3D shape is a dice? 🎲', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: 'Sphere' }, { id: 'b', text: 'Cube' }, { id: 'c', text: 'Pyramid' }, { id: 'd', text: 'Cone' }],
      correctAnswer: 'b', explanation: 'A dice is a CUBE! 🎲', funFact: 'A cube has 6 faces!'
    },
    {
      type: 'mcq', question: 'What color is indigo? 🌈', categoryId: 'colors-shapes',
      options: [{ id: 'a', text: 'Dark blue-purple' }, { id: 'b', text: 'Light green' }, { id: 'c', text: 'Bright red' }, { id: 'd', text: 'Orange-yellow' }],
      correctAnswer: 'a', explanation: 'Indigo is a dark blue-purple color! 🌈', funFact: 'Indigo is in the rainbow!'
    },
  ],
};
