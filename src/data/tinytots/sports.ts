// TinyTots Sports Questions
import { TinyTotsQuestionBank } from './types';

export const sportsQuestions: TinyTotsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What do you kick in soccer? ⚽', categoryId: 'sports',
      options: [{ id: 'a', text: '🏀 Basketball' }, { id: 'b', text: '⚽ Soccer ball' }, { id: 'c', text: '🏈 Football' }, { id: 'd', text: '🎾 Tennis ball' }],
      correctAnswer: 'b', explanation: 'You kick a soccer ball! ⚽', funFact: 'Soccer is the most popular sport in the world!'
    },
    {
      type: 'mcq', question: 'What do you throw into a hoop? 🏀', categoryId: 'sports',
      options: [{ id: 'a', text: '⚽ Soccer ball' }, { id: 'b', text: '🏀 Basketball' }, { id: 'c', text: '🏈 Football' }, { id: 'd', text: '⚾ Baseball' }],
      correctAnswer: 'b', explanation: 'You throw a basketball into the hoop! 🏀', funFact: 'Basketball was invented in 1891!'
    },
    {
      type: 'mcq', question: 'What do swimmers swim in? 🏊', categoryId: 'sports',
      options: [{ id: 'a', text: '🌲 Forest' }, { id: 'b', text: '🏖️ Sand' }, { id: 'c', text: '💧 Water/Pool' }, { id: 'd', text: '🏔️ Mountain' }],
      correctAnswer: 'c', explanation: 'Swimmers swim in water! 🏊💧', funFact: 'Swimming is great exercise!'
    },
    {
      type: 'mcq', question: 'What do you use to hit a baseball? ⚾', categoryId: 'sports',
      options: [{ id: 'a', text: '🦶 Foot' }, { id: 'b', text: '🏏 Bat' }, { id: 'c', text: '✋ Hand' }, { id: 'd', text: '🦵 Knee' }],
      correctAnswer: 'b', explanation: 'You use a bat to hit baseballs! ⚾🏏', funFact: 'Baseball is Americas pastime!'
    },
    {
      type: 'mcq', question: 'What do you wear on your feet to run? 👟', categoryId: 'sports',
      options: [{ id: 'a', text: '🧤 Gloves' }, { id: 'b', text: '🎩 Hat' }, { id: 'c', text: '👟 Sneakers' }, { id: 'd', text: '🧣 Scarf' }],
      correctAnswer: 'c', explanation: 'You wear sneakers to run! 👟', funFact: 'Good shoes help you run faster!'
    },
    {
      type: 'mcq', question: 'What color is a tennis ball? 🎾', categoryId: 'sports',
      options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🔵 Blue' }, { id: 'c', text: '🟡 Yellow-Green' }, { id: 'd', text: '⚫ Black' }],
      correctAnswer: 'c', explanation: 'Tennis balls are yellow-green! 🎾', funFact: 'Its called optic yellow!'
    },
    {
      type: 'true-false', question: 'You need ice to play ice hockey. 🏒', categoryId: 'sports',
      options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
      correctAnswer: 'true', explanation: 'Yes! Ice hockey is played on ice! 🏒', funFact: 'Players wear ice skates!'
    },
    {
      type: 'mcq', question: 'How many players on a soccer team on the field? ⚽', categoryId: 'sports',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '9' }, { id: 'c', text: '11' }, { id: 'd', text: '15' }],
      correctAnswer: 'c', explanation: '11 players on each team! ⚽', funFact: 'Including the goalkeeper!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What do you ride in cycling? 🚴', categoryId: 'sports',
      options: [{ id: 'a', text: '🛹 Skateboard' }, { id: 'b', text: '🚲 Bicycle' }, { id: 'c', text: '🛴 Scooter' }, { id: 'd', text: '🛷 Sled' }],
      correctAnswer: 'b', explanation: 'Cyclists ride bicycles! 🚴', funFact: 'The Tour de France is a famous bike race!'
    },
    {
      type: 'mcq', question: 'What sport uses a racket and shuttlecock? 🏸', categoryId: 'sports',
      options: [{ id: 'a', text: '🎾 Tennis' }, { id: 'b', text: '🏸 Badminton' }, { id: 'c', text: '🏓 Ping Pong' }, { id: 'd', text: '⚽ Soccer' }],
      correctAnswer: 'b', explanation: 'Badminton uses a shuttlecock! 🏸', funFact: 'The shuttlecock has feathers!'
    },
    {
      type: 'mcq', question: 'How many holes in a full golf course? ⛳', categoryId: 'sports',
      options: [{ id: 'a', text: '9' }, { id: 'b', text: '12' }, { id: 'c', text: '18' }, { id: 'd', text: '21' }],
      correctAnswer: 'c', explanation: 'A full course has 18 holes! ⛳', funFact: 'Golf balls have little dents called dimples!'
    },
    {
      type: 'mcq', question: 'What do you need to play volleyball? 🏐', categoryId: 'sports',
      options: [{ id: 'a', text: 'Bat and ball' }, { id: 'b', text: 'Net and ball' }, { id: 'c', text: 'Hoop and ball' }, { id: 'd', text: 'Stick and puck' }],
      correctAnswer: 'b', explanation: 'Volleyball needs a net and ball! 🏐', funFact: 'You hit the ball over the net!'
    },
    {
      type: 'mcq', question: 'What sport do you do on snow? ⛷️', categoryId: 'sports',
      options: [{ id: 'a', text: '🏊 Swimming' }, { id: 'b', text: '⛷️ Skiing' }, { id: 'c', text: '🚴 Cycling' }, { id: 'd', text: '⚽ Soccer' }],
      correctAnswer: 'b', explanation: 'Skiing is done on snow! ⛷️', funFact: 'You wear special boots on skis!'
    },
    {
      type: 'mcq', question: 'What do gymnasts do? 🤸', categoryId: 'sports',
      options: [{ id: 'a', text: 'Swim' }, { id: 'b', text: 'Flip and tumble' }, { id: 'c', text: 'Throw balls' }, { id: 'd', text: 'Ride bikes' }],
      correctAnswer: 'b', explanation: 'Gymnasts flip and tumble! 🤸', funFact: 'They are super flexible!'
    },
    {
      type: 'mcq', question: 'What do you wear to protect your head in sports? ⛑️', categoryId: 'sports',
      options: [{ id: 'a', text: '🧤 Gloves' }, { id: 'b', text: '⛑️ Helmet' }, { id: 'c', text: '👟 Shoes' }, { id: 'd', text: '🧣 Scarf' }],
      correctAnswer: 'b', explanation: 'Helmets protect your head! ⛑️', funFact: 'Always wear a helmet when biking!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What are the Olympic rings colors? 🏅', categoryId: 'sports',
      options: [{ id: 'a', text: 'Red, white, pink' }, { id: 'b', text: 'Blue, yellow, black, green, red' }, { id: 'c', text: 'Orange, purple, brown' }, { id: 'd', text: 'Gold, silver, bronze' }],
      correctAnswer: 'b', explanation: 'The 5 rings are blue, yellow, black, green, red! 🏅', funFact: 'They represent 5 continents!'
    },
    {
      type: 'mcq', question: 'How many periods in an ice hockey game? 🏒', categoryId: 'sports',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: 'Hockey has 3 periods! 🏒', funFact: 'Each period is 20 minutes!'
    },
    {
      type: 'mcq', question: 'What country invented basketball? 🏀', categoryId: 'sports',
      options: [{ id: 'a', text: '🇬🇧 England' }, { id: 'b', text: '🇺🇸 USA' }, { id: 'c', text: '🇨🇦 Canada' }, { id: 'd', text: '🇫🇷 France' }],
      correctAnswer: 'b', explanation: 'Basketball was invented in the USA! 🏀', funFact: 'It was invented by a Canadian living in the USA!'
    },
    {
      type: 'mcq', question: 'How often are the Summer Olympics held? 🏅', categoryId: 'sports',
      options: [{ id: 'a', text: 'Every year' }, { id: 'b', text: 'Every 2 years' }, { id: 'c', text: 'Every 4 years' }, { id: 'd', text: 'Every 10 years' }],
      correctAnswer: 'c', explanation: 'Olympics are every 4 years! 🏅', funFact: 'They started in ancient Greece!'
    },
    {
      type: 'mcq', question: 'What is the fastest swimming stroke? 🏊', categoryId: 'sports',
      options: [{ id: 'a', text: 'Backstroke' }, { id: 'b', text: 'Breaststroke' }, { id: 'c', text: 'Freestyle/Front crawl' }, { id: 'd', text: 'Butterfly' }],
      correctAnswer: 'c', explanation: 'Freestyle is the fastest! 🏊', funFact: 'Swimmers move their arms in circles!'
    },
    {
      type: 'mcq', question: 'What sport has a "home run"? ⚾', categoryId: 'sports',
      options: [{ id: 'a', text: '⚽ Soccer' }, { id: 'b', text: '🏀 Basketball' }, { id: 'c', text: '⚾ Baseball' }, { id: 'd', text: '🏈 Football' }],
      correctAnswer: 'c', explanation: 'Baseball has home runs! ⚾', funFact: 'Hit the ball out of the park!'
    },
  ],
};
