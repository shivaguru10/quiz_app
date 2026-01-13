// Juniors Sports Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const sportsQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'How many players are on a basketball team on the court?', categoryId: 'sports',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'b', explanation: 'Basketball has 5 players per team on court!', funFact: 'Basketball was invented in 1891!'
    },
    {
      type: 'mcq', question: 'What sport uses a bat and ball with bases?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Cricket' }, { id: 'b', text: 'Baseball' }, { id: 'c', text: 'Tennis' }, { id: 'd', text: 'Golf' }],
      correctAnswer: 'b', explanation: 'Baseball has bases to run around!', funFact: 'Baseball is called Americas pastime!'
    },
    {
      type: 'mcq', question: 'What color card means ejection in soccer?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Yellow' }, { id: 'b', text: 'Blue' }, { id: 'c', text: 'Red' }, { id: 'd', text: 'Green' }],
      correctAnswer: 'c', explanation: 'A red card means you must leave the game!', funFact: 'Yellow is a warning, red is ejection!'
    },
    {
      type: 'mcq', question: 'How many rings are in the Olympic symbol?', categoryId: 'sports',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'b', explanation: 'There are 5 Olympic rings!', funFact: 'They represent the 5 continents!'
    },
    {
      type: 'mcq', question: 'In which sport do you perform a slam dunk?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Soccer' }, { id: 'b', text: 'Tennis' }, { id: 'c', text: 'Basketball' }, { id: 'd', text: 'Baseball' }],
      correctAnswer: 'c', explanation: 'Slam dunks are exciting basketball plays!', funFact: 'The first slam dunk in NBA was in 1936!'
    },
    {
      type: 'mcq', question: 'What is the goal in swimming races?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Swim the longest' }, { id: 'b', text: 'Swim the fastest' }, { id: 'c', text: 'Swim the deepest' }, { id: 'd', text: 'Swim the highest' }],
      correctAnswer: 'b', explanation: 'The fastest swimmer wins the race!', funFact: 'The butterfly stroke is one of the hardest!'
    },
    {
      type: 'true-false', question: 'A touchdown in American football is worth 6 points.', categoryId: 'sports',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Touchdowns are worth 6 points!', funFact: 'You can get an extra point by kicking after!'
    },
    {
      type: 'mcq', question: 'What sport is played at Wimbledon?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Golf' }, { id: 'b', text: 'Cricket' }, { id: 'c', text: 'Tennis' }, { id: 'd', text: 'Soccer' }],
      correctAnswer: 'c', explanation: 'Wimbledon is a famous tennis tournament!', funFact: 'Its played on grass courts!'
    },
    {
      type: 'mcq', question: 'How many players are on a soccer team on the field?', categoryId: 'sports',
      options: [{ id: 'a', text: '9' }, { id: 'b', text: '10' }, { id: 'c', text: '11' }, { id: 'd', text: '12' }],
      correctAnswer: 'c', explanation: 'Soccer has 11 players per team!', funFact: 'Soccer is called football in most countries!'
    },
    {
      type: 'mcq', question: 'In golf, what is the term for one under par?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Eagle' }, { id: 'b', text: 'Birdie' }, { id: 'c', text: 'Bogey' }, { id: 'd', text: 'Albatross' }],
      correctAnswer: 'b', explanation: 'A birdie is one under par!', funFact: 'An eagle is two under par!'
    },
    {
      type: 'mcq', question: 'What do you hit in badminton?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Ball' }, { id: 'b', text: 'Puck' }, { id: 'c', text: 'Shuttlecock' }, { id: 'd', text: 'Disc' }],
      correctAnswer: 'c', explanation: 'Badminton uses a shuttlecock (birdie)!', funFact: 'Shuttlecocks can reach speeds over 300 km/h!'
    },
    {
      type: 'mcq', question: 'What is the national sport of Japan?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Karate' }, { id: 'b', text: 'Sumo Wrestling' }, { id: 'c', text: 'Judo' }, { id: 'd', text: 'Baseball' }],
      correctAnswer: 'b', explanation: 'Sumo wrestling is Japans national sport!', funFact: 'Sumo wrestlers follow strict traditions!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'How many sets are needed to win a mens singles match at Wimbledon?', categoryId: 'sports',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: 'You need to win 3 out of 5 sets!', funFact: 'Womens matches are best of 3!'
    },
    {
      type: 'mcq', question: 'What is the distance of a marathon?', categoryId: 'sports',
      options: [{ id: 'a', text: '26.2 miles' }, { id: 'b', text: '24.2 miles' }, { id: 'c', text: '28.2 miles' }, { id: 'd', text: '22.2 miles' }],
      correctAnswer: 'a', explanation: 'A marathon is 26.2 miles (42.195 km)!', funFact: 'Named after a Greek legend!'
    },
    {
      type: 'mcq', question: 'What country hosts the Tour de France?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Spain' }, { id: 'b', text: 'Italy' }, { id: 'c', text: 'France' }, { id: 'd', text: 'Belgium' }],
      correctAnswer: 'c', explanation: 'Tour de France is in France!', funFact: 'Its the most famous cycling race!'
    },
    {
      type: 'mcq', question: 'In cricket, what is it called when a bowler gets 3 wickets in 3 balls?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Triple play' }, { id: 'b', text: 'Hat trick' }, { id: 'c', text: 'Triple crown' }, { id: 'd', text: 'Wicket trifecta' }],
      correctAnswer: 'b', explanation: 'Its called a hat trick!', funFact: 'The term comes from cricket!'
    },
    {
      type: 'mcq', question: 'How many periods are in an NHL hockey game?', categoryId: 'sports',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: 'Hockey has 3 periods!', funFact: 'Each period is 20 minutes!'
    },
    {
      type: 'mcq', question: 'What is the highest score possible in gymnastics?', categoryId: 'sports',
      options: [{ id: 'a', text: '10.0' }, { id: 'b', text: 'No maximum' }, { id: 'c', text: '15.0' }, { id: 'd', text: '20.0' }],
      correctAnswer: 'b', explanation: 'Since 2006, theres no maximum score!', funFact: 'Before 2006, the perfect score was 10.0!'
    },
    {
      type: 'mcq', question: 'What sport uses the terms "love" and "deuce"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Golf' }, { id: 'b', text: 'Tennis' }, { id: 'c', text: 'Badminton' }, { id: 'd', text: 'Squash' }],
      correctAnswer: 'b', explanation: 'Tennis uses these terms!', funFact: '"Love" means zero, "deuce" means 40-40!'
    },
    {
      type: 'mcq', question: 'What country invented the modern game of soccer?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Brazil' }, { id: 'b', text: 'Germany' }, { id: 'c', text: 'England' }, { id: 'd', text: 'Italy' }],
      correctAnswer: 'c', explanation: 'England established the rules in 1863!', funFact: 'The FA (Football Association) was formed then!'
    },
    {
      type: 'mcq', question: 'What is the name of the NBA championship trophy?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Stanley Cup' }, { id: 'b', text: 'Lombardi Trophy' }, { id: 'c', text: 'Larry OBrien Trophy' }, { id: 'd', text: 'Commissioners Trophy' }],
      correctAnswer: 'c', explanation: 'Its the Larry OBrien Championship Trophy!', funFact: 'Named after a former NBA commissioner!'
    },
    {
      type: 'true-false', question: 'The Super Bowl is the championship game of the NFL.', categoryId: 'sports',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'The Super Bowl determines the NFL champion!', funFact: 'Its one of the most watched events in the US!'
    },
    {
      type: 'mcq', question: 'In which sport would you perform a "slam dunk" or "alley-oop"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Volleyball' }, { id: 'b', text: 'Basketball' }, { id: 'c', text: 'Handball' }, { id: 'd', text: 'Tennis' }],
      correctAnswer: 'b', explanation: 'These are basketball moves!', funFact: 'An alley-oop is a pass for a mid-air dunk!'
    },
    {
      type: 'mcq', question: 'What is the term for three goals by one player in soccer?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Triple' }, { id: 'b', text: 'Hat trick' }, { id: 'c', text: 'Three-peat' }, { id: 'd', text: 'Trifecta' }],
      correctAnswer: 'b', explanation: 'Three goals is a hat trick!', funFact: 'The term originated from cricket!'
    },
    {
      type: 'mcq', question: 'What martial art became an Olympic sport in 2000?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Karate' }, { id: 'b', text: 'Judo' }, { id: 'c', text: 'Taekwondo' }, { id: 'd', text: 'Kung Fu' }],
      correctAnswer: 'c', explanation: 'Taekwondo became Olympic in Sydney 2000!', funFact: 'Its a Korean martial art!'
    },
    {
      type: 'mcq', question: 'How long is an Olympic swimming pool?', categoryId: 'sports',
      options: [{ id: 'a', text: '25 meters' }, { id: 'b', text: '50 meters' }, { id: 'c', text: '75 meters' }, { id: 'd', text: '100 meters' }],
      correctAnswer: 'b', explanation: 'Olympic pools are 50 meters long!', funFact: '25-meter pools are called "short course"!'
    },
    {
      type: 'mcq', question: 'What is the penalty for a false start in track and field?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Time penalty' }, { id: 'b', text: 'Disqualification' }, { id: 'c', text: 'Warning only' }, { id: 'd', text: 'Restart the race' }],
      correctAnswer: 'b', explanation: 'One false start means disqualification!', funFact: 'The rule changed in 2010 to be stricter!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the only country to have played in every FIFA World Cup?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Germany' }, { id: 'b', text: 'Argentina' }, { id: 'c', text: 'Brazil' }, { id: 'd', text: 'Italy' }],
      correctAnswer: 'c', explanation: 'Brazil has played in every World Cup since 1930!', funFact: 'Theyve won 5 times!'
    },
    {
      type: 'mcq', question: 'What is the diameter of a basketball hoop in inches?', categoryId: 'sports',
      options: [{ id: 'a', text: '16 inches' }, { id: 'b', text: '18 inches' }, { id: 'c', text: '20 inches' }, { id: 'd', text: '22 inches' }],
      correctAnswer: 'b', explanation: 'The rim is exactly 18 inches wide!', funFact: 'A basketball is about 9.4 inches wide!'
    },
    {
      type: 'mcq', question: 'In which year were the first modern Olympic Games held?', categoryId: 'sports',
      options: [{ id: 'a', text: '1892' }, { id: 'b', text: '1896' }, { id: 'c', text: '1900' }, { id: 'd', text: '1904' }],
      correctAnswer: 'b', explanation: 'The first modern Olympics were in Athens 1896!', funFact: '14 countries participated!'
    },
    {
      type: 'mcq', question: 'What is the fastest ball speed recorded in professional sports?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Tennis serve' }, { id: 'b', text: 'Baseball pitch' }, { id: 'c', text: 'Badminton smash' }, { id: 'd', text: 'Golf drive' }],
      correctAnswer: 'c', explanation: 'A badminton smash reached 493 km/h!', funFact: 'Thats faster than any other ball sport!'
    },
    {
      type: 'mcq', question: 'Which country has won the most Rugby World Cups?', categoryId: 'sports',
      options: [{ id: 'a', text: 'New Zealand' }, { id: 'b', text: 'South Africa' }, { id: 'c', text: 'Australia' }, { id: 'd', text: 'England' }],
      correctAnswer: 'b', explanation: 'South Africa has won 4 Rugby World Cups!', funFact: 'They won in 1995, 2007, 2019, and 2023!'
    },
    {
      type: 'mcq', question: 'What is the decathlon made up of?', categoryId: 'sports',
      options: [{ id: 'a', text: '8 events' }, { id: 'b', text: '10 events' }, { id: 'c', text: '12 events' }, { id: 'd', text: '15 events' }],
      correctAnswer: 'b', explanation: 'The decathlon has 10 events!', funFact: 'The winner is called the "worlds greatest athlete"!'
    },
    {
      type: 'mcq', question: 'What is the oldest tennis Grand Slam tournament?', categoryId: 'sports',
      options: [{ id: 'a', text: 'US Open' }, { id: 'b', text: 'French Open' }, { id: 'c', text: 'Australian Open' }, { id: 'd', text: 'Wimbledon' }],
      correctAnswer: 'd', explanation: 'Wimbledon started in 1877!', funFact: 'Players must wear all white!'
    },
    {
      type: 'mcq', question: 'What does "NASCAR" stand for?', categoryId: 'sports',
      options: [{ id: 'a', text: 'National Auto Sport Car Racing' }, { id: 'b', text: 'National Association for Stock Car Auto Racing' }, { id: 'c', text: 'North American Stock Car Association Racing' }, { id: 'd', text: 'National Stock Car Racing Association' }],
      correctAnswer: 'b', explanation: 'NASCAR is the National Association for Stock Car Auto Racing!', funFact: 'It was founded in 1948!'
    },
    {
      type: 'mcq', question: 'In which sport is the Ryder Cup competed?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Sailing' }, { id: 'b', text: 'Polo' }, { id: 'c', text: 'Golf' }, { id: 'd', text: 'Horse Racing' }],
      correctAnswer: 'c', explanation: 'The Ryder Cup is a golf competition!', funFact: 'Its between Europe and USA every 2 years!'
    },
    {
      type: 'true-false', question: 'Michael Phelps has won more Olympic medals than any other athlete.', categoryId: 'sports',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Phelps has 28 Olympic medals total!', funFact: '23 of them are gold medals!'
    },
    {
      type: 'mcq', question: 'What is the height of an official tennis net at the center?', categoryId: 'sports',
      options: [{ id: 'a', text: '2 feet 6 inches' }, { id: 'b', text: '3 feet' }, { id: 'c', text: '3 feet 6 inches' }, { id: 'd', text: '4 feet' }],
      correctAnswer: 'b', explanation: 'The net is 3 feet at the center!', funFact: 'Its slightly higher at the posts!'
    },
    {
      type: 'mcq', question: 'Which boxer was known as "The Greatest"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Mike Tyson' }, { id: 'b', text: 'Muhammad Ali' }, { id: 'c', text: 'Sugar Ray Leonard' }, { id: 'd', text: 'Floyd Mayweather' }],
      correctAnswer: 'b', explanation: 'Muhammad Ali called himself "The Greatest"!', funFact: 'His birth name was Cassius Clay!'
    },
    {
      type: 'mcq', question: 'In baseball, what is a "no-hitter"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'No runs allowed' }, { id: 'b', text: 'No hits allowed for entire game' }, { id: 'c', text: 'No walks allowed' }, { id: 'd', text: 'No errors made' }],
      correctAnswer: 'b', explanation: 'A no-hitter means no hits by the opposing team!', funFact: 'A perfect game also means no walks!'
    },
    {
      type: 'mcq', question: 'What sport uses the terms "wicket," "over," and "maiden"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Baseball' }, { id: 'b', text: 'Cricket' }, { id: 'c', text: 'Rugby' }, { id: 'd', text: 'Polo' }],
      correctAnswer: 'b', explanation: 'These are cricket terms!', funFact: 'A maiden over has no runs scored!'
    },
    {
      type: 'mcq', question: 'How many dimples are on a regulation golf ball?', categoryId: 'sports',
      options: [{ id: 'a', text: '200-250' }, { id: 'b', text: '300-350' }, { id: 'c', text: '400-500' }, { id: 'd', text: 'Varies by manufacturer' }],
      correctAnswer: 'd', explanation: 'Golf balls typically have 300-500 dimples!', funFact: 'Dimples help the ball fly farther!'
    },
    {
      type: 'mcq', question: 'What is the maximum weight of a bowling ball in pounds?', categoryId: 'sports',
      options: [{ id: 'a', text: '14 lbs' }, { id: 'b', text: '16 lbs' }, { id: 'c', text: '18 lbs' }, { id: 'd', text: '20 lbs' }],
      correctAnswer: 'b', explanation: 'Bowling balls cannot exceed 16 pounds!', funFact: 'Most pros use 14-16 pound balls!'
    },
    {
      type: 'mcq', question: 'In what year did basketball become an Olympic sport?', categoryId: 'sports',
      options: [{ id: 'a', text: '1932' }, { id: 'b', text: '1936' }, { id: 'c', text: '1940' }, { id: 'd', text: '1948' }],
      correctAnswer: 'b', explanation: 'Basketball debuted at the 1936 Berlin Olympics!', funFact: 'The USA won the first gold medal!'
    },
    {
      type: 'mcq', question: 'What is the term for scoring zero points in tennis?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Zero' }, { id: 'b', text: 'Nothing' }, { id: 'c', text: 'Love' }, { id: 'd', text: 'Nil' }],
      correctAnswer: 'c', explanation: 'Zero in tennis is called "love"!', funFact: 'It may come from the French word for egg (l\oeuf)!'
    },
    {
      type: 'mcq', question: 'Which country has hosted the most Summer Olympic Games?', categoryId: 'sports',
      options: [{ id: 'a', text: 'USA' }, { id: 'b', text: 'France' }, { id: 'c', text: 'UK' }, { id: 'd', text: 'Japan' }],
      correctAnswer: 'a', explanation: 'The USA has hosted 4 Summer Olympics!', funFact: 'LA will host again in 2028!'
    },
    {
      type: 'mcq', question: 'What is the circumference of a regulation NBA basketball?', categoryId: 'sports',
      options: [{ id: 'a', text: '27.5-28.5 inches' }, { id: 'b', text: '29.5 inches' }, { id: 'c', text: '30.5 inches' }, { id: 'd', text: '31.5 inches' }],
      correctAnswer: 'b', explanation: 'An NBA ball is 29.5 inches in circumference!', funFact: 'WNBA balls are slightly smaller!'
    },
  ],
};
