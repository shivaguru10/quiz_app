// Teens General Knowledge Questions (13+ years) - Wide-ranging Trivia
import { TeensQuestionBank } from './types';

export const generalKnowledgeQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is the currency of Japan?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Yuan' }, { id: 'b', text: 'Won' }, { id: 'c', text: 'Yen' }, { id: 'd', text: 'Ringgit' }],
      correctAnswer: 'c', explanation: 'The Japanese yen is one of the most traded currencies!', funFact: 'Yen means "circle" in Japanese!'
    },
    {
      type: 'mcq', question: 'Who painted the Mona Lisa?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Michelangelo' }, { id: 'b', text: 'Leonardo da Vinci' }, { id: 'c', text: 'Raphael' }, { id: 'd', text: 'Rembrandt' }],
      correctAnswer: 'b', explanation: 'Da Vinci painted it in the early 1500s in Italy!', funFact: 'The Mona Lisa has its own mailbox for fan letters!'
    },
    {
      type: 'mcq', question: 'What is the chemical symbol for gold?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Go' }, { id: 'b', text: 'Gd' }, { id: 'c', text: 'Au' }, { id: 'd', text: 'Ag' }],
      correctAnswer: 'c', explanation: 'Au comes from the Latin word "aurum"!', funFact: 'All the gold ever mined would fit in 3.5 Olympic swimming pools!'
    },
    {
      type: 'mcq', question: 'How many continents are there?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'c', explanation: 'Africa, Antarctica, Asia, Australia, Europe, North America, South America!', funFact: 'Some models combine Europe and Asia into Eurasia!'
    },
    {
      type: 'mcq', question: 'What is the largest organ in the human body?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Heart' }, { id: 'b', text: 'Liver' }, { id: 'c', text: 'Brain' }, { id: 'd', text: 'Skin' }],
      correctAnswer: 'd', explanation: 'Skin covers about 20 square feet in adults!', funFact: 'Skin accounts for about 16% of your body weight!'
    },
    {
      type: 'mcq', question: 'What is the tallest building in the world (as of 2024)?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Empire State Building' }, { id: 'b', text: 'Burj Khalifa' }, { id: 'c', text: 'Shanghai Tower' }, { id: 'd', text: 'One World Trade Center' }],
      correctAnswer: 'b', explanation: 'The Burj Khalifa in Dubai stands at 828 meters!', funFact: 'It has 163 floors and took 6 years to build!'
    },
    {
      type: 'mcq', question: 'What language is spoken in Brazil?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Spanish' }, { id: 'b', text: 'Brazilian' }, { id: 'c', text: 'Portuguese' }, { id: 'd', text: 'English' }],
      correctAnswer: 'c', explanation: 'Brazil is the largest Portuguese-speaking country!', funFact: 'Brazil is the only country in South America that speaks Portuguese!'
    },
    {
      type: 'mcq', question: 'What is the hardest natural substance on Earth?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Steel' }, { id: 'b', text: 'Diamond' }, { id: 'c', text: 'Titanium' }, { id: 'd', text: 'Granite' }],
      correctAnswer: 'b', explanation: 'Diamond rates 10 on the Mohs hardness scale!', funFact: 'Diamonds are made of carbon atoms arranged in a crystal structure!'
    },
    {
      type: 'mcq', question: 'Which planet is known as the Red Planet?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Jupiter' }, { id: 'c', text: 'Mars' }, { id: 'd', text: 'Saturn' }],
      correctAnswer: 'c', explanation: 'Mars appears red due to iron oxide (rust) on its surface!', funFact: 'A day on Mars is about 24 hours 37 minutes!'
    },
    {
      type: 'mcq', question: 'What is the largest mammal on Earth?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'African Elephant' }, { id: 'b', text: 'Blue Whale' }, { id: 'c', text: 'Giraffe' }, { id: 'd', text: 'Hippopotamus' }],
      correctAnswer: 'b', explanation: 'Blue whales can be over 100 feet long!', funFact: 'A blue whale\'s heart is the size of a small car!'
    },
    {
      type: 'mcq', question: 'Who wrote "Romeo and Juliet"?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Charles Dickens' }, { id: 'b', text: 'William Shakespeare' }, { id: 'c', text: 'Jane Austen' }, { id: 'd', text: 'Mark Twain' }],
      correctAnswer: 'b', explanation: 'Shakespeare wrote it around 1594-1596!', funFact: 'Shakespeare invented over 1,700 words we still use today!'
    },
    {
      type: 'mcq', question: 'What is the capital of Australia?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Sydney' }, { id: 'b', text: 'Melbourne' }, { id: 'c', text: 'Canberra' }, { id: 'd', text: 'Brisbane' }],
      correctAnswer: 'c', explanation: 'Canberra was chosen as a compromise between Sydney and Melbourne!', funFact: 'Canberra is the only major Australian city not on the coast!'
    },
    {
      type: 'mcq', question: 'How many bones are in the adult human body?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: '186' }, { id: 'b', text: '206' }, { id: 'c', text: '256' }, { id: 'd', text: '306' }],
      correctAnswer: 'b', explanation: 'Babies are born with about 270 bones that fuse together!', funFact: 'The smallest bone is the stapes in your ear!'
    },
    {
      type: 'mcq', question: 'What is the name of the longest river in Africa?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Congo' }, { id: 'b', text: 'Niger' }, { id: 'c', text: 'Nile' }, { id: 'd', text: 'Zambezi' }],
      correctAnswer: 'c', explanation: 'The Nile flows through 11 countries!', funFact: 'The Nile is about 6,650 km long - the longest in the world!'
    },
    {
      type: 'true-false', question: 'The Great Wall of China is visible from space with the naked eye.', categoryId: 'general-knowledge',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'This is a common myth - it\'s too narrow to see from space!', funFact: 'From low Earth orbit, you\'d need visual aids to see it!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the Fibonacci sequence?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Random numbers' }, { id: 'b', text: 'A series where each number is the sum of the two preceding ones' }, { id: 'c', text: 'Prime numbers' }, { id: 'd', text: 'Even numbers' }],
      correctAnswer: 'b', explanation: '1, 1, 2, 3, 5, 8, 13, 21...', funFact: 'Fibonacci patterns appear in nature, like sunflower spirals!'
    },
    {
      type: 'mcq', question: 'What is the significance of the Rosetta Stone?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'It\'s a precious gemstone' }, { id: 'b', text: 'It helped decode Egyptian hieroglyphics' }, { id: 'c', text: 'It\'s a meteor' }, { id: 'd', text: 'It\'s a religious artifact' }],
      correctAnswer: 'b', explanation: 'The stone has the same text in three scripts, enabling translation!', funFact: 'The Rosetta Stone is now in the British Museum!'
    },
    {
      type: 'mcq', question: 'What is the term for animals that are active at night?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Diurnal' }, { id: 'b', text: 'Nocturnal' }, { id: 'c', text: 'Crepuscular' }, { id: 'd', text: 'Hibernating' }],
      correctAnswer: 'b', explanation: 'Owls, bats, and many cats are nocturnal!', funFact: 'Crepuscular animals are active at dawn and dusk!'
    },
    {
      type: 'mcq', question: 'Who developed the theory of general relativity?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Isaac Newton' }, { id: 'b', text: 'Niels Bohr' }, { id: 'c', text: 'Albert Einstein' }, { id: 'd', text: 'Stephen Hawking' }],
      correctAnswer: 'c', explanation: 'Einstein published it in 1915, revolutionizing physics!', funFact: 'GPS satellites must account for relativity to be accurate!'
    },
    {
      type: 'mcq', question: 'What is the deepest point in the ocean?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Puerto Rico Trench' }, { id: 'b', text: 'Mariana Trench' }, { id: 'c', text: 'Tonga Trench' }, { id: 'd', text: 'Java Trench' }],
      correctAnswer: 'b', explanation: 'Challenger Deep in the Mariana Trench reaches about 11,034 meters!', funFact: 'If you put Mount Everest there, its peak would still be underwater!'
    },
    {
      type: 'mcq', question: 'What is the main component of Earth\'s atmosphere?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Carbon dioxide' }, { id: 'c', text: 'Nitrogen' }, { id: 'd', text: 'Hydrogen' }],
      correctAnswer: 'c', explanation: 'Nitrogen makes up about 78% of the atmosphere!', funFact: 'Oxygen is only about 21% of the atmosphere!'
    },
    {
      type: 'mcq', question: 'What is the largest desert in the world?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Sahara' }, { id: 'b', text: 'Antarctic Desert' }, { id: 'c', text: 'Arabian Desert' }, { id: 'd', text: 'Gobi Desert' }],
      correctAnswer: 'b', explanation: 'Antarctica is a cold desert - deserts are defined by precipitation, not temperature!', funFact: 'The Antarctic Desert is about 14 million square km!'
    },
    {
      type: 'mcq', question: 'What is the Doppler effect?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A visual illusion' }, { id: 'b', text: 'Change in wave frequency due to relative motion' }, { id: 'c', text: 'A chemical reaction' }, { id: 'd', text: 'A type of echo' }],
      correctAnswer: 'b', explanation: 'It\'s why an ambulance siren sounds different as it approaches vs. leaves!', funFact: 'The Doppler effect is used in weather radar and medical ultrasound!'
    },
    {
      type: 'mcq', question: 'Who was the first woman to win a Nobel Prize?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Dorothy Hodgkin' }, { id: 'b', text: 'Marie Curie' }, { id: 'c', text: 'Rosalind Franklin' }, { id: 'd', text: 'Ada Lovelace' }],
      correctAnswer: 'b', explanation: 'Marie Curie won in Physics (1903) and Chemistry (1911)!', funFact: 'She\'s the only person to win Nobel Prizes in two different sciences!'
    },
    {
      type: 'mcq', question: 'What is photosynthesis?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Plants breathing' }, { id: 'b', text: 'Process of converting light energy into chemical energy' }, { id: 'c', text: 'Taking photographs of plants' }, { id: 'd', text: 'Plant reproduction' }],
      correctAnswer: 'b', explanation: 'Plants use sunlight, water, and CO2 to produce glucose and oxygen!', funFact: 'Photosynthesis produces most of Earth\'s oxygen!'
    },
    {
      type: 'mcq', question: 'What is the significance of the number phi (φ)?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'It\'s a random number' }, { id: 'b', text: 'The golden ratio, approximately 1.618' }, { id: 'c', text: 'Pi\'s twin' }, { id: 'd', text: 'A fraction' }],
      correctAnswer: 'b', explanation: 'The golden ratio appears in art, architecture, and nature!', funFact: 'The Parthenon and many paintings use golden ratio proportions!'
    },
    {
      type: 'mcq', question: 'What is the primary function of white blood cells?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Carry oxygen' }, { id: 'b', text: 'Fight infections' }, { id: 'c', text: 'Clot blood' }, { id: 'd', text: 'Transport nutrients' }],
      correctAnswer: 'b', explanation: 'White blood cells are part of the immune system!', funFact: 'There are several types of white blood cells with different functions!'
    },
    {
      type: 'mcq', question: 'What is the Turing test?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A math exam' }, { id: 'b', text: 'A test of a machine\'s ability to exhibit human-like intelligence' }, { id: 'c', text: 'A programming test' }, { id: 'd', text: 'A security protocol' }],
      correctAnswer: 'b', explanation: 'If a human can\'t tell they\'re talking to a machine, it passes!', funFact: 'Alan Turing proposed this test in 1950!'
    },
    {
      type: 'mcq', question: 'What is the name of the galaxy that contains our Solar System?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Andromeda' }, { id: 'b', text: 'Milky Way' }, { id: 'c', text: 'Whirlpool' }, { id: 'd', text: 'Sombrero' }],
      correctAnswer: 'b', explanation: 'The Milky Way is a barred spiral galaxy!', funFact: 'Our galaxy contains 100-400 billion stars!'
    },
    {
      type: 'mcq', question: 'What is the Renaissance?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A type of art' }, { id: 'b', text: 'A cultural movement of rebirth in arts and sciences (14th-17th century)' }, { id: 'c', text: 'A war period' }, { id: 'd', text: 'An ancient civilization' }],
      correctAnswer: 'b', explanation: 'It began in Italy and spread across Europe!', funFact: 'Renaissance means "rebirth" in French!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the Heisenberg Uncertainty Principle?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A philosophy concept' }, { id: 'b', text: 'You cannot simultaneously know both the position and momentum of a particle precisely' }, { id: 'c', text: 'Uncertainty in experiments' }, { id: 'd', text: 'Human indecision' }],
      correctAnswer: 'b', explanation: 'It\'s a fundamental concept in quantum mechanics!', funFact: 'This isn\'t about measurement error - it\'s a fundamental property of nature!'
    },
    {
      type: 'mcq', question: 'What is the Sapir-Whorf hypothesis?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A linguistic theory that language affects thought and perception' }, { id: 'b', text: 'A theory about space' }, { id: 'c', text: 'A physics principle' }, { id: 'd', text: 'A biology concept' }],
      correctAnswer: 'a', explanation: 'The strong version claims language determines thought; the weak version says it influences it!', funFact: 'Some languages have more words for colors, affecting perception!'
    },
    {
      type: 'mcq', question: 'What is the Fermat\'s Last Theorem?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A physics equation' }, { id: 'b', text: 'No three positive integers satisfy aⁿ + bⁿ = cⁿ for n > 2' }, { id: 'c', text: 'A chemical formula' }, { id: 'd', text: 'A geometry rule' }],
      correctAnswer: 'b', explanation: 'Fermat claimed to have a proof in 1637, but Andrew Wiles proved it in 1995!', funFact: 'It took over 350 years to prove this theorem!'
    },
    {
      type: 'mcq', question: 'What is the Ship of Theseus paradox about?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A Greek war' }, { id: 'b', text: 'The question of whether an object remains the same if all its parts are replaced' }, { id: 'c', text: 'Shipbuilding techniques' }, { id: 'd', text: 'Navigation' }],
      correctAnswer: 'b', explanation: 'It questions personal identity and the nature of objects over time!', funFact: 'This paradox has been debated since ancient Greece!'
    },
    {
      type: 'mcq', question: 'What is the Dunning-Kruger effect?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A physical phenomenon' }, { id: 'b', text: 'Cognitive bias where unskilled people overestimate their abilities' }, { id: 'c', text: 'A disease' }, { id: 'd', text: 'A learning technique' }],
      correctAnswer: 'b', explanation: 'While experts often underestimate their competence!', funFact: 'Named after psychologists David Dunning and Justin Kruger!'
    },
    {
      type: 'mcq', question: 'What is the Anthropic Principle?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Study of humans' }, { id: 'b', text: 'The universe\'s constants must allow for conscious life to exist' }, { id: 'c', text: 'Evolution theory' }, { id: 'd', text: 'Climate change' }],
      correctAnswer: 'b', explanation: 'We observe the universe as it is because only such a universe could contain observers!', funFact: 'Some use it to explain "fine-tuning" of physical constants!'
    },
    {
      type: 'mcq', question: 'What is the Prisoner\'s Dilemma in game theory?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A real prison scenario' }, { id: 'b', text: 'A scenario where two rational individuals might not cooperate even when it\'s beneficial' }, { id: 'c', text: 'A chess strategy' }, { id: 'd', text: 'A riddle' }],
      correctAnswer: 'b', explanation: 'It demonstrates why cooperation can be difficult!', funFact: 'Used to analyze conflicts, economics, and evolution!'
    },
    {
      type: 'mcq', question: 'What is the Planck length?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A unit of time' }, { id: 'b', text: 'The smallest meaningful length scale in physics' }, { id: 'c', text: 'A measurement tool' }, { id: 'd', text: 'The length of Planck\'s experiments' }],
      correctAnswer: 'b', explanation: 'It\'s about 1.6 × 10⁻³⁵ meters - unimaginably small!', funFact: 'Below this scale, our understanding of physics breaks down!'
    },
    {
      type: 'mcq', question: 'What is the concept of entropy in thermodynamics?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Energy level' }, { id: 'b', text: 'A measure of disorder or randomness in a system' }, { id: 'c', text: 'Heat transfer' }, { id: 'd', text: 'Pressure' }],
      correctAnswer: 'b', explanation: 'The second law of thermodynamics states entropy always increases!', funFact: 'This explains why you can\'t unstir a cup of coffee!'
    },
    {
      type: 'mcq', question: 'What is Occam\'s Razor?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A medieval weapon' }, { id: 'b', text: 'The simplest explanation is usually correct' }, { id: 'c', text: 'A surgery technique' }, { id: 'd', text: 'A shaving tool' }],
      correctAnswer: 'b', explanation: 'Named after 14th-century philosopher William of Ockham!', funFact: 'It\'s also called the principle of parsimony!'
    },
    {
      type: 'mcq', question: 'What is cognitive dissonance?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A music term' }, { id: 'b', text: 'Mental discomfort from holding contradictory beliefs' }, { id: 'c', text: 'A medical condition' }, { id: 'd', text: 'Forgetfulness' }],
      correctAnswer: 'b', explanation: 'People often change beliefs or behaviors to reduce this discomfort!', funFact: 'First described by Leon Festinger in 1957!'
    },
    {
      type: 'mcq', question: 'What is the Drake Equation used for?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Calculating distances in space' }, { id: 'b', text: 'Estimating the number of active extraterrestrial civilizations' }, { id: 'c', text: 'Predicting asteroid impacts' }, { id: 'd', text: 'Measuring star brightness' }],
      correctAnswer: 'b', explanation: 'It includes factors like star formation rate and habitable planets!', funFact: 'Created by Frank Drake in 1961!'
    },
    {
      type: 'mcq', question: 'What is the Mandela Effect?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'A political theory' }, { id: 'b', text: 'A phenomenon where many people share false memories' }, { id: 'c', text: 'A leadership style' }, { id: 'd', text: 'African history' }],
      correctAnswer: 'b', explanation: 'Named because many thought Nelson Mandela died in prison (he didn\'t)!', funFact: 'Examples include Berenstain vs. Berenstein Bears!'
    },
    {
      type: 'mcq', question: 'What is the butterfly effect?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'How butterflies fly' }, { id: 'b', text: 'Small changes in initial conditions can lead to vastly different outcomes' }, { id: 'c', text: 'Butterfly migration' }, { id: 'd', text: 'A photography technique' }],
      correctAnswer: 'b', explanation: 'It\'s a concept in chaos theory!', funFact: 'Named from the idea that a butterfly\'s wings could cause a tornado weeks later!'
    },
    {
      type: 'mcq', question: 'What is Gödel\'s Incompleteness Theorem about?', categoryId: 'general-knowledge',
      options: [{ id: 'a', text: 'Physics equations' }, { id: 'b', text: 'Any consistent mathematical system has true statements that cannot be proven' }, { id: 'c', text: 'Computer programming' }, { id: 'd', text: 'Language theory' }],
      correctAnswer: 'b', explanation: 'Kurt Gödel proved this in 1931, shaking the foundations of mathematics!', funFact: 'It shows mathematics has inherent limitations!'
    },
  ],
};
