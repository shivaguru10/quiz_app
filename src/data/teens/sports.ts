// Teens Sports Questions (13+ years) - Sports Knowledge & History
import { TeensQuestionBank } from './types';

export const sportsQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'How many players are on a soccer/football team on the field?', categoryId: 'sports',
      options: [{ id: 'a', text: '9' }, { id: 'b', text: '10' }, { id: 'c', text: '11' }, { id: 'd', text: '12' }],
      correctAnswer: 'c', explanation: 'Each team has 11 players including the goalkeeper!', funFact: 'Football/soccer is the world\'s most popular sport with 4 billion fans!'
    },
    {
      type: 'mcq', question: 'Which country hosted the 2016 Summer Olympics?', categoryId: 'sports',
      options: [{ id: 'a', text: 'China' }, { id: 'b', text: 'Brazil' }, { id: 'c', text: 'UK' }, { id: 'd', text: 'Japan' }],
      correctAnswer: 'b', explanation: 'Rio de Janeiro, Brazil hosted the 2016 Summer Olympics!', funFact: 'It was the first Olympics held in South America!'
    },
    {
      type: 'mcq', question: 'In basketball, how many points is a shot from beyond the three-point line worth?', categoryId: 'sports',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
      correctAnswer: 'c', explanation: 'Shots from beyond the arc are worth 3 points!', funFact: 'The three-point line was introduced to the NBA in 1979!'
    },
    {
      type: 'mcq', question: 'What is the national sport of Japan?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Judo' }, { id: 'b', text: 'Sumo' }, { id: 'c', text: 'Baseball' }, { id: 'd', text: 'Karate' }],
      correctAnswer: 'b', explanation: 'Sumo wrestling is Japan\'s national sport with ancient traditions!', funFact: 'Sumo wrestlers can weigh over 200 kg!'
    },
    {
      type: 'mcq', question: 'How long is a marathon race?', categoryId: 'sports',
      options: [{ id: 'a', text: '26.2 miles' }, { id: 'b', text: '20 miles' }, { id: 'c', text: '30 miles' }, { id: 'd', text: '10 miles' }],
      correctAnswer: 'a', explanation: '26.2 miles or 42.195 kilometers!', funFact: 'The distance honors the ancient Greek messenger Pheidippides!'
    },
    {
      type: 'mcq', question: 'In tennis, what is a score of 40-40 called?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Match point' }, { id: 'b', text: 'Deuce' }, { id: 'c', text: 'Love' }, { id: 'd', text: 'Break point' }],
      correctAnswer: 'b', explanation: 'Deuce requires a player to win by 2 points!', funFact: 'The word "deuce" comes from French "deux" meaning two!'
    },
    {
      type: 'mcq', question: 'Which country won the FIFA World Cup in 2018?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Brazil' }, { id: 'b', text: 'Germany' }, { id: 'c', text: 'France' }, { id: 'd', text: 'Argentina' }],
      correctAnswer: 'c', explanation: 'France beat Croatia 4-2 in the final in Russia!', funFact: 'It was France\'s second World Cup title after 1998!'
    },
    {
      type: 'mcq', question: 'What is the highest possible score in a single frame of bowling?', categoryId: 'sports',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '20' }, { id: 'c', text: '30' }, { id: 'd', text: '50' }],
      correctAnswer: 'c', explanation: 'A strike + 2 more strikes in the following shots = 30 points!', funFact: 'A perfect game (12 strikes) scores 300!'
    },
    {
      type: 'mcq', question: 'Which Grand Slam tennis tournament is played on grass?', categoryId: 'sports',
      options: [{ id: 'a', text: 'US Open' }, { id: 'b', text: 'French Open' }, { id: 'c', text: 'Australian Open' }, { id: 'd', text: 'Wimbledon' }],
      correctAnswer: 'd', explanation: 'Wimbledon is the only Grand Slam played on grass!', funFact: 'The grass is cut to exactly 8mm height!'
    },
    {
      type: 'mcq', question: 'How many holes are played in a standard round of golf?', categoryId: 'sports',
      options: [{ id: 'a', text: '9' }, { id: 'b', text: '18' }, { id: 'c', text: '12' }, { id: 'd', text: '20' }],
      correctAnswer: 'b', explanation: 'A standard round is 18 holes!', funFact: 'St Andrews, the "Home of Golf," originally had 22 holes!'
    },
    {
      type: 'mcq', question: 'Which sport uses terms like "love" and "ace"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Basketball' }, { id: 'b', text: 'Tennis' }, { id: 'c', text: 'Golf' }, { id: 'd', text: 'Volleyball' }],
      correctAnswer: 'b', explanation: 'Love = zero, ace = unreturnable serve!', funFact: '"Love" may come from the French "l\'oeuf" (egg) representing zero!'
    },
    {
      type: 'mcq', question: 'What is the maximum weight of a boxing glove in professional heavyweight boxing?', categoryId: 'sports',
      options: [{ id: 'a', text: '8 oz' }, { id: 'b', text: '10 oz' }, { id: 'c', text: '12 oz' }, { id: 'd', text: '16 oz' }],
      correctAnswer: 'b', explanation: 'Professional heavyweight bouts use 10 oz gloves!', funFact: 'Heavier gloves are used in training for more protection!'
    },
    {
      type: 'mcq', question: 'Which swimmer has won the most Olympic gold medals?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Mark Spitz' }, { id: 'b', text: 'Ian Thorpe' }, { id: 'c', text: 'Michael Phelps' }, { id: 'd', text: 'Ryan Lochte' }],
      correctAnswer: 'c', explanation: 'Michael Phelps has 23 Olympic gold medals!', funFact: 'Phelps has 28 total Olympic medals - the most ever!'
    },
    {
      type: 'mcq', question: 'In American football, how many points is a touchdown worth?', categoryId: 'sports',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'c', explanation: '6 points, plus an extra point kick or 2-point conversion!', funFact: 'The term "touchdown" comes from rugby where you actually touch the ball down!'
    },
    {
      type: 'true-false', question: 'The Olympic rings represent the five inhabited continents.', categoryId: 'sports',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'The rings represent Africa, Americas, Asia, Europe, and Oceania!', funFact: 'Every national flag contains at least one of the ring colors!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the diameter of a basketball hoop?', categoryId: 'sports',
      options: [{ id: 'a', text: '15 inches' }, { id: 'b', text: '18 inches' }, { id: 'c', text: '20 inches' }, { id: 'd', text: '24 inches' }],
      correctAnswer: 'b', explanation: 'The rim is 18 inches (46 cm) in diameter!', funFact: 'The basketball itself is about 9.4 inches in diameter!'
    },
    {
      type: 'mcq', question: 'Which country has won the most FIFA World Cups?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Germany' }, { id: 'b', text: 'Italy' }, { id: 'c', text: 'Brazil' }, { id: 'd', text: 'Argentina' }],
      correctAnswer: 'c', explanation: 'Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002)!', funFact: 'Brazil is the only team to have played in every World Cup!'
    },
    {
      type: 'mcq', question: 'What is the LBW rule in cricket?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Long Ball Width' }, { id: 'b', text: 'Leg Before Wicket' }, { id: 'c', text: 'Left Back Wing' }, { id: 'd', text: 'Low Ball Weight' }],
      correctAnswer: 'b', explanation: 'If the ball would have hit the stumps but hits the batsman\'s leg instead!', funFact: 'LBW decisions are now assisted by Hawk-Eye technology!'
    },
    {
      type: 'mcq', question: 'How many players are in a water polo team?', categoryId: 'sports',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'c', explanation: '7 players including the goalkeeper!', funFact: 'Water polo was one of the first Olympic team sports in 1900!'
    },
    {
      type: 'mcq', question: 'What is the term for three strikes in a row in bowling?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Turkey' }, { id: 'b', text: 'Eagle' }, { id: 'c', text: 'Hat trick' }, { id: 'd', text: 'Triple' }],
      correctAnswer: 'a', explanation: 'A turkey is three consecutive strikes!', funFact: 'Six in a row is called a "wild turkey" or "six pack"!'
    },
    {
      type: 'mcq', question: 'In which sport would you perform a "Fosbury Flop"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Diving' }, { id: 'b', text: 'Gymnastics' }, { id: 'c', text: 'High jump' }, { id: 'd', text: 'Pole vault' }],
      correctAnswer: 'c', explanation: 'It\'s a technique where you go over the bar backwards!', funFact: 'Dick Fosbury invented it and won gold at the 1968 Olympics!'
    },
    {
      type: 'mcq', question: 'What is the name of the trophy awarded to the winner of the NHL playoffs?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Vince Lombardi Trophy' }, { id: 'b', text: 'Stanley Cup' }, { id: 'c', text: 'Commissioner\'s Trophy' }, { id: 'd', text: 'Larry O\'Brien Trophy' }],
      correctAnswer: 'b', explanation: 'The Stanley Cup is the oldest professional sports trophy in North America!', funFact: 'Each winning player gets to keep the Cup for a day!'
    },
    {
      type: 'mcq', question: 'What is the fastest recorded tennis serve?', categoryId: 'sports',
      options: [{ id: 'a', text: '163.7 mph' }, { id: 'b', text: '163 mph' }, { id: 'c', text: '155 mph' }, { id: 'd', text: '175 mph' }],
      correctAnswer: 'a', explanation: 'Sam Groth served 163.7 mph (263.4 km/h) in 2012!', funFact: 'The ATP only counts serves in ATP/WTA events - John Isner holds the record at 157.2 mph!'
    },
    {
      type: 'mcq', question: 'Which Formula 1 driver has the most World Championship titles?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Michael Schumacher' }, { id: 'b', text: 'Ayrton Senna' }, { id: 'c', text: 'Lewis Hamilton' }, { id: 'd', text: 'Sebastian Vettel' }],
      correctAnswer: 'c', explanation: 'Lewis Hamilton and Michael Schumacher are tied with 7 titles each (as of 2023)!', funFact: 'Hamilton also holds the record for most race wins!'
    },
    {
      type: 'mcq', question: 'What is the circumference of an official FIFA football?', categoryId: 'sports',
      options: [{ id: 'a', text: '58-60 cm' }, { id: 'b', text: '68-70 cm' }, { id: 'c', text: '78-80 cm' }, { id: 'd', text: '88-90 cm' }],
      correctAnswer: 'b', explanation: 'Official footballs are 68-70 cm in circumference!', funFact: 'The classic 32-panel design is called a truncated icosahedron!'
    },
    {
      type: 'mcq', question: 'What is a "perfect game" in baseball?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Winning by 10+ runs' }, { id: 'b', text: 'No hits, walks, or errors allowed' }, { id: 'c', text: 'Hitting 4 home runs' }, { id: 'd', text: 'Striking out every batter' }],
      correctAnswer: 'b', explanation: 'No opposing player reaches base - no hits, walks, or errors!', funFact: 'Only 23 perfect games have been thrown in MLB history!'
    },
    {
      type: 'mcq', question: 'In which Olympics did Usain Bolt first win the 100m gold?', categoryId: 'sports',
      options: [{ id: 'a', text: '2004 Athens' }, { id: 'b', text: '2008 Beijing' }, { id: 'c', text: '2012 London' }, { id: 'd', text: '2016 Rio' }],
      correctAnswer: 'b', explanation: 'Bolt won his first 100m gold in Beijing 2008 with 9.69 seconds!', funFact: 'He went on to win the 100m gold in three consecutive Olympics!'
    },
    {
      type: 'mcq', question: 'What does "par" mean in golf?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Below average' }, { id: 'b', text: 'The expected number of strokes' }, { id: 'c', text: 'A penalty' }, { id: 'd', text: 'A type of club' }],
      correctAnswer: 'b', explanation: 'Par is the predetermined number of strokes an expert golfer should need!', funFact: 'Most holes are par 3, 4, or 5!'
    },
    {
      type: 'mcq', question: 'What is the record for most goals in a single FIFA World Cup tournament?', categoryId: 'sports',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '13' }, { id: 'c', text: '15' }, { id: 'd', text: '17' }],
      correctAnswer: 'b', explanation: 'Just Fontaine scored 13 goals for France in 1958!', funFact: 'This record has stood for over 60 years!'
    },
    {
      type: 'mcq', question: 'Which martial art is an Olympic sport known for high kicks?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Karate' }, { id: 'b', text: 'Judo' }, { id: 'c', text: 'Taekwondo' }, { id: 'd', text: 'Wrestling' }],
      correctAnswer: 'c', explanation: 'Taekwondo emphasizes head-height kicks and spinning kicks!', funFact: 'Taekwondo became an Olympic sport in 2000!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the maximum number of clubs allowed in a golfer\'s bag during a round?', categoryId: 'sports',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '12' }, { id: 'c', text: '14' }, { id: 'd', text: '16' }],
      correctAnswer: 'c', explanation: 'Players are limited to 14 clubs by the rules of golf!', funFact: 'This rule was established in 1938!'
    },
    {
      type: 'mcq', question: 'In baseball, what is the "infield fly rule"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'A fly ball hit to the infield' }, { id: 'b', text: 'An automatic out on easily catchable fly balls with runners on base' }, { id: 'c', text: 'A rule about home runs' }, { id: 'd', text: 'A fair/foul determination' }],
      correctAnswer: 'b', explanation: 'It prevents fielders from intentionally dropping the ball to get a double play!', funFact: 'Runners can still advance at their own risk!'
    },
    {
      type: 'mcq', question: 'What is the fastest ball sport in the world?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Tennis' }, { id: 'b', text: 'Golf' }, { id: 'c', text: 'Badminton' }, { id: 'd', text: 'Jai Alai' }],
      correctAnswer: 'd', explanation: 'Jai Alai balls have been clocked at over 300 km/h!', funFact: 'Badminton shuttlecocks are the fastest hit objects at 426 km/h!'
    },
    {
      type: 'mcq', question: 'What is the "Duckworth-Lewis-Stern" method used for?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Calculating player rankings' }, { id: 'b', text: 'Resetting targets in rain-affected cricket matches' }, { id: 'c', text: 'Determining tie-breakers' }, { id: 'd', text: 'Measuring pitch conditions' }],
      correctAnswer: 'b', explanation: 'DLS calculates fair targets when overs are lost to weather!', funFact: 'It replaced the old average run rate method in 1997!'
    },
    {
      type: 'mcq', question: 'What is the weight of an Olympic shot put for men?', categoryId: 'sports',
      options: [{ id: 'a', text: '5 kg' }, { id: 'b', text: '6 kg' }, { id: 'c', text: '7.26 kg' }, { id: 'd', text: '8 kg' }],
      correctAnswer: 'c', explanation: '7.26 kg (16 pounds) for men, 4 kg for women!', funFact: 'The world record is over 23 meters!'
    },
    {
      type: 'mcq', question: 'In cycling, what is the Tour de France\'s total distance approximately?', categoryId: 'sports',
      options: [{ id: 'a', text: '2,000 km' }, { id: 'b', text: '2,500 km' }, { id: 'c', text: '3,500 km' }, { id: 'd', text: '5,000 km' }],
      correctAnswer: 'c', explanation: 'The race covers approximately 3,500 km over about 21 stages!', funFact: 'The race has been held annually since 1903!'
    },
    {
      type: 'mcq', question: 'What is the "Triple Crown" in horse racing?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Winning 3 races in a day' }, { id: 'b', text: 'Winning 3 specific prestigious races' }, { id: 'c', text: 'A type of award' }, { id: 'd', text: 'Winning 3 consecutive years' }],
      correctAnswer: 'b', explanation: 'In the US: Kentucky Derby, Preakness Stakes, and Belmont Stakes!', funFact: 'Only 13 horses have won the US Triple Crown!'
    },
    {
      type: 'mcq', question: 'What is the dimensions of an Olympic swimming pool?', categoryId: 'sports',
      options: [{ id: 'a', text: '25m × 25m' }, { id: 'b', text: '50m × 25m' }, { id: 'c', text: '50m × 50m' }, { id: 'd', text: '100m × 25m' }],
      correctAnswer: 'b', explanation: '50 meters long, 25 meters wide, with 8 or 10 lanes!', funFact: 'The depth must be at least 2 meters!'
    },
    {
      type: 'mcq', question: 'What does VAR stand for in football?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Video Assisted Referee' }, { id: 'b', text: 'Variable Assistant Rule' }, { id: 'c', text: 'Video Analysis Review' }, { id: 'd', text: 'Verified Action Replay' }],
      correctAnswer: 'a', explanation: 'VAR helps referees with crucial decisions using video footage!', funFact: 'VAR was first used in the 2018 World Cup!'
    },
    {
      type: 'mcq', question: 'In which sport would you find a "Slam Dunk Contest"?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Volleyball' }, { id: 'b', text: 'Tennis' }, { id: 'c', text: 'Basketball' }, { id: 'd', text: 'Wrestling' }],
      correctAnswer: 'c', explanation: 'The NBA Slam Dunk Contest is part of the All-Star Weekend!', funFact: 'Michael Jordan\'s 1988 free-throw line dunk is legendary!'
    },
    {
      type: 'mcq', question: 'What is the Ironman triathlon distance?', categoryId: 'sports',
      options: [{ id: 'a', text: '1.9 km swim, 90 km bike, 21 km run' }, { id: 'b', text: '3.8 km swim, 180 km bike, 42.2 km run' }, { id: 'c', text: '2 km swim, 100 km bike, 30 km run' }, { id: 'd', text: '5 km swim, 200 km bike, 50 km run' }],
      correctAnswer: 'b', explanation: 'Full Ironman: 3.8 km swim, 180.2 km bike, 42.195 km run!', funFact: 'The world record is under 8 hours!'
    },
    {
      type: 'mcq', question: 'In rugby union, how many points is a converted try worth?', categoryId: 'sports',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'c', explanation: 'A try (5 points) + conversion kick (2 points) = 7 points!', funFact: 'The try was originally worth 0 points - it just gave you a "try" at the goal!'
    },
    {
      type: 'mcq', question: 'What is the "yips" in sports?', categoryId: 'sports',
      options: [{ id: 'a', text: 'A celebration' }, { id: 'b', text: 'A sudden loss of fine motor skills under pressure' }, { id: 'c', text: 'A type of injury' }, { id: 'd', text: 'A training method' }],
      correctAnswer: 'b', explanation: 'Athletes suddenly can\'t perform simple skills they\'ve done thousands of times!', funFact: 'It\'s most common in golf putting and baseball throwing!'
    },
    {
      type: 'mcq', question: 'Which Olympic sport covers the longest distance?', categoryId: 'sports',
      options: [{ id: 'a', text: 'Marathon' }, { id: 'b', text: '50 km race walk' }, { id: 'c', text: 'Triathlon' }, { id: 'd', text: 'Cycling road race' }],
      correctAnswer: 'd', explanation: 'The men\'s road cycling race can be over 230 km!', funFact: 'The marathon is only 42.195 km in comparison!'
    },
    {
      type: 'mcq', question: 'What is the record for most Grand Slam singles titles in tennis (as of 2023)?', categoryId: 'sports',
      options: [{ id: 'a', text: '20' }, { id: 'b', text: '22' }, { id: 'c', text: '24' }, { id: 'd', text: '25' }],
      correctAnswer: 'c', explanation: 'Novak Djokovic holds the record with 24 Grand Slam titles!', funFact: 'The previous record of 22 was held by Rafael Nadal!'
    },
  ],
};
