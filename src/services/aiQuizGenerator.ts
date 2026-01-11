import { Question, AgeGroup, AIQuizRequest, AIQuizResponse } from '../types';
import { v4 as uuidv4 } from 'uuid';

// ============================================
// AI QUIZ GENERATOR SERVICE
// ============================================

type Difficulty = 'easy' | 'medium' | 'hard';

class AIQuizGenerator {
  async generateQuestions(request: AIQuizRequest): Promise<AIQuizResponse> {
    return this.generateLocalQuestions(request);
  }

  private generateLocalQuestions(request: AIQuizRequest): AIQuizResponse {
    const questionBank = this.getQuestionBank(request.topic, request.ageGroup, request.difficulty);

    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(request.questionCount, shuffled.length));

    while (selected.length < request.questionCount) {
      const defaults = this.getDefaultQuestions(request.ageGroup, request.difficulty);
      const randomDefault = defaults[Math.floor(Math.random() * defaults.length)];
      if (randomDefault && !selected.find(q => q.question === randomDefault.question)) {
        selected.push(randomDefault);
      } else {
        break;
      }
    }

    return {
      questions: selected.map(q => ({
        id: uuidv4(),
        categoryId: q.categoryId || request.topic,
        ageGroup: request.ageGroup,
        type: q.type || 'mcq',
        question: q.question || '',
        options: q.options || [],
        correctAnswer: q.correctAnswer || 'a',
        explanation: q.explanation || 'Great job!',
        difficulty: request.difficulty,
        points: request.difficulty === 'easy' ? 10 : request.difficulty === 'medium' ? 20 : 30,
        timeLimit: request.difficulty === 'easy' ? 30 : request.difficulty === 'medium' ? 25 : 20,
        hint: q.hint,
        funFact: q.funFact,
      })) as Question[],
      generatedAt: new Date(),
      topic: request.topic,
    };
  }

  private getQuestionBank(topic: string, ageGroup: AgeGroup, difficulty: Difficulty): Partial<Question>[] {
    const topicKey = topic.toLowerCase().replace(/\s+/g, '-');
    
    // JUNIORS ANIMAL QUESTIONS BY DIFFICULTY
    const animalsJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What sound does a dog make?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Meow' }, { id: 'b', text: 'Woof' }, { id: 'c', text: 'Moo' }, { id: 'd', text: 'Oink' }],
        correctAnswer: 'b', explanation: 'Dogs say Woof!', funFact: 'Dogs can understand up to 250 words!'
      },
      {
        type: 'mcq', question: 'How many legs does a spider have?', categoryId: 'animals',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '8' }, { id: 'c', text: '10' }, { id: 'd', text: '4' }],
        correctAnswer: 'b', explanation: 'Spiders have 8 legs!', funFact: 'Spiders are arachnids, not insects!'
      },
      {
        type: 'mcq', question: 'What is a baby cat called?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Puppy' }, { id: 'b', text: 'Kitten' }, { id: 'c', text: 'Cub' }, { id: 'd', text: 'Foal' }],
        correctAnswer: 'b', explanation: 'Baby cats are called kittens!', funFact: 'Kittens sleep 18-20 hours a day!'
      },
      {
        type: 'mcq', question: 'Which animal has a trunk?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Giraffe' }, { id: 'b', text: 'Elephant' }, { id: 'c', text: 'Hippo' }, { id: 'd', text: 'Rhino' }],
        correctAnswer: 'b', explanation: 'Elephants have trunks!', funFact: 'An elephant trunk has 40,000 muscles!'
      },
      {
        type: 'mcq', question: 'What do cows give us?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Eggs' }, { id: 'b', text: 'Milk' }, { id: 'c', text: 'Honey' }, { id: 'd', text: 'Wool' }],
        correctAnswer: 'b', explanation: 'Cows give us milk!', funFact: 'A cow can produce 6-7 gallons of milk daily!'
      },
      {
        type: 'true-false', question: 'Penguins can fly.', categoryId: 'animals',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'Penguins cannot fly but swim very well!', funFact: 'Penguins can swim up to 22 mph!'
      },
      {
        type: 'mcq', question: 'What is the largest land animal?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Giraffe' }, { id: 'b', text: 'Elephant' }, { id: 'c', text: 'Hippo' }, { id: 'd', text: 'Bear' }],
        correctAnswer: 'b', explanation: 'African elephants are the largest land animals!', funFact: 'They can weigh up to 14,000 pounds!'
      },
      {
        type: 'mcq', question: 'Which bird is known for saying "Who"?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Parrot' }, { id: 'b', text: 'Owl' }, { id: 'c', text: 'Eagle' }, { id: 'd', text: 'Crow' }],
        correctAnswer: 'b', explanation: 'Owls make the "hoo" sound!', funFact: 'Owls can rotate their heads 270 degrees!'
      },
      {
        type: 'mcq', question: 'What animal is Nemo (from Finding Nemo)?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Goldfish' }, { id: 'b', text: 'Clownfish' }, { id: 'c', text: 'Shark' }, { id: 'd', text: 'Dolphin' }],
        correctAnswer: 'b', explanation: 'Nemo is a clownfish!', funFact: 'Clownfish live in sea anemones!'
      },
      {
        type: 'mcq', question: 'Which animal hops and has a pouch?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Rabbit' }, { id: 'b', text: 'Kangaroo' }, { id: 'c', text: 'Frog' }, { id: 'd', text: 'Squirrel' }],
        correctAnswer: 'b', explanation: 'Kangaroos hop and carry babies in pouches!', funFact: 'Kangaroos can jump 30 feet in one leap!'
      },
      {
        type: 'mcq', question: 'What color is a polar bear?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Brown' }, { id: 'b', text: 'Black' }, { id: 'c', text: 'White' }, { id: 'd', text: 'Gray' }],
        correctAnswer: 'c', explanation: 'Polar bears appear white!', funFact: 'Their fur is actually transparent, not white!'
      },
      {
        type: 'mcq', question: 'Which animal is called the "King of the Jungle"?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Tiger' }, { id: 'b', text: 'Lion' }, { id: 'c', text: 'Elephant' }, { id: 'd', text: 'Gorilla' }],
        correctAnswer: 'b', explanation: 'Lions are called the King of the Jungle!', funFact: 'Lions actually live in grasslands, not jungles!'
      },
    ];

    const animalsJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the fastest land animal?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Lion' }, { id: 'b', text: 'Cheetah' }, { id: 'c', text: 'Horse' }, { id: 'd', text: 'Gazelle' }],
        correctAnswer: 'b', explanation: 'Cheetahs can run up to 70 mph!', funFact: 'Cheetahs accelerate faster than sports cars!'
      },
      {
        type: 'mcq', question: 'Which mammal can truly fly?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Flying Squirrel' }, { id: 'b', text: 'Bat' }, { id: 'c', text: 'Flying Fish' }, { id: 'd', text: 'Sugar Glider' }],
        correctAnswer: 'b', explanation: 'Bats are the only mammals that can truly fly!', funFact: 'There are over 1,400 species of bats!'
      },
      {
        type: 'mcq', question: 'What do you call a group of wolves?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Herd' }, { id: 'b', text: 'Pack' }, { id: 'c', text: 'Flock' }, { id: 'd', text: 'School' }],
        correctAnswer: 'b', explanation: 'A group of wolves is called a pack!', funFact: 'Wolf packs have an alpha leader!'
      },
      {
        type: 'mcq', question: 'Which animal has the longest neck?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Ostrich' }, { id: 'b', text: 'Giraffe' }, { id: 'c', text: 'Camel' }, { id: 'd', text: 'Llama' }],
        correctAnswer: 'b', explanation: 'Giraffes have necks up to 6 feet long!', funFact: 'Despite the length, they have only 7 neck bones like humans!'
      },
      {
        type: 'mcq', question: 'What is a female deer called?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Mare' }, { id: 'b', text: 'Doe' }, { id: 'c', text: 'Hen' }, { id: 'd', text: 'Ewe' }],
        correctAnswer: 'b', explanation: 'A female deer is called a doe!', funFact: 'Male deer are called bucks!'
      },
      {
        type: 'mcq', question: 'Which reptile is known for changing colors?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Gecko' }, { id: 'b', text: 'Chameleon' }, { id: 'c', text: 'Iguana' }, { id: 'd', text: 'Komodo Dragon' }],
        correctAnswer: 'b', explanation: 'Chameleons can change their skin color!', funFact: 'They change color based on mood and temperature!'
      },
      {
        type: 'mcq', question: 'How many hearts does an octopus have?', categoryId: 'animals',
        options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '4' }],
        correctAnswer: 'c', explanation: 'Octopuses have 3 hearts!', funFact: 'They also have blue blood!'
      },
      {
        type: 'mcq', question: 'Which animal sleeps standing up?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Dog' }, { id: 'b', text: 'Horse' }, { id: 'c', text: 'Cat' }, { id: 'd', text: 'Rabbit' }],
        correctAnswer: 'b', explanation: 'Horses can sleep standing up!', funFact: 'They have a special locking leg mechanism!'
      },
      {
        type: 'true-false', question: 'Sharks are mammals.', categoryId: 'animals',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'Sharks are fish, not mammals!', funFact: 'Sharks have been around for 400 million years!'
      },
      {
        type: 'mcq', question: 'What is a group of fish called?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Herd' }, { id: 'b', text: 'Flock' }, { id: 'c', text: 'School' }, { id: 'd', text: 'Pack' }],
        correctAnswer: 'c', explanation: 'A group of fish is called a school!', funFact: 'Schools can contain millions of fish!'
      },
      {
        type: 'mcq', question: 'Which animal produces silk?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Bee' }, { id: 'b', text: 'Spider' }, { id: 'c', text: 'Silkworm' }, { id: 'd', text: 'Caterpillar' }],
        correctAnswer: 'c', explanation: 'Silkworms produce silk!', funFact: 'One cocoon can produce 1,000 feet of silk thread!'
      },
      {
        type: 'mcq', question: 'What is the largest species of bear?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Grizzly Bear' }, { id: 'b', text: 'Polar Bear' }, { id: 'c', text: 'Black Bear' }, { id: 'd', text: 'Panda Bear' }],
        correctAnswer: 'b', explanation: 'Polar bears are the largest bears!', funFact: 'Male polar bears can weigh up to 1,500 pounds!'
      },
      {
        type: 'mcq', question: 'Which animal has fingerprints similar to humans?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Gorilla' }, { id: 'b', text: 'Koala' }, { id: 'c', text: 'Chimpanzee' }, { id: 'd', text: 'Orangutan' }],
        correctAnswer: 'b', explanation: 'Koalas have fingerprints almost identical to humans!', funFact: 'Even experts have trouble telling them apart!'
      },
      {
        type: 'mcq', question: 'How long can a camel go without water?', categoryId: 'animals',
        options: [{ id: 'a', text: '1 week' }, { id: 'b', text: '2 weeks' }, { id: 'c', text: '1 month' }, { id: 'd', text: '3 months' }],
        correctAnswer: 'b', explanation: 'Camels can go about 2 weeks without water!', funFact: 'They store fat in their humps, not water!'
      },
      {
        type: 'mcq', question: 'What is a baby swan called?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Chick' }, { id: 'b', text: 'Cygnet' }, { id: 'c', text: 'Duckling' }, { id: 'd', text: 'Gosling' }],
        correctAnswer: 'b', explanation: 'Baby swans are called cygnets!', funFact: 'Swans mate for life!'
      },
    ];

    const animalsJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the only mammal capable of sustained flight?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Flying Squirrel' }, { id: 'b', text: 'Bat' }, { id: 'c', text: 'Flying Lemur' }, { id: 'd', text: 'Sugar Glider' }],
        correctAnswer: 'b', explanation: 'Bats are the only mammals capable of true sustained flight!', funFact: 'Some bats can fly up to 100 miles per hour!'
      },
      {
        type: 'mcq', question: 'Which animal has the largest brain relative to body size?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Dolphin' }, { id: 'b', text: 'Elephant' }, { id: 'c', text: 'Ant' }, { id: 'd', text: 'Human' }],
        correctAnswer: 'c', explanation: 'Ants have the largest brain relative to their body size!', funFact: 'An ant brain has 250,000 neurons!'
      },
      {
        type: 'mcq', question: 'What is the scientific name for the study of animals?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Biology' }, { id: 'b', text: 'Zoology' }, { id: 'c', text: 'Ecology' }, { id: 'd', text: 'Botany' }],
        correctAnswer: 'b', explanation: 'Zoology is the study of animals!', funFact: 'The word comes from Greek "zoon" meaning animal!'
      },
      {
        type: 'mcq', question: 'Which deep-sea creature has three hearts and blue blood?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Jellyfish' }, { id: 'b', text: 'Squid' }, { id: 'c', text: 'Octopus' }, { id: 'd', text: 'Sea Urchin' }],
        correctAnswer: 'c', explanation: 'Octopuses have 3 hearts and blue blood!', funFact: 'Two hearts pump blood to the gills, one pumps to the body!'
      },
      {
        type: 'mcq', question: 'What adaptation allows arctic foxes to survive extreme cold?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Thick fur that changes color' }, { id: 'b', text: 'Hibernation' }, { id: 'c', text: 'Migration' }, { id: 'd', text: 'Storing food underground' }],
        correctAnswer: 'a', explanation: 'Arctic foxes have fur that changes from white to brown!', funFact: 'They can survive temperatures as low as -58°F!'
      },
      {
        type: 'mcq', question: 'Which animal can regenerate its entire body from a tiny piece?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Starfish' }, { id: 'b', text: 'Planarian' }, { id: 'c', text: 'Lizard' }, { id: 'd', text: 'Salamander' }],
        correctAnswer: 'b', explanation: 'Planarians can regenerate from just a small piece!', funFact: 'Even 1/279th of a planarian can grow into a new worm!'
      },
      {
        type: 'mcq', question: 'What is the worlds most venomous snake?', categoryId: 'animals',
        options: [{ id: 'a', text: 'King Cobra' }, { id: 'b', text: 'Black Mamba' }, { id: 'c', text: 'Inland Taipan' }, { id: 'd', text: 'Rattlesnake' }],
        correctAnswer: 'c', explanation: 'The Inland Taipan has the most toxic venom!', funFact: 'One bite has enough venom to kill 100 adult humans!'
      },
      {
        type: 'mcq', question: 'Which bird can fly backwards?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Sparrow' }, { id: 'b', text: 'Hummingbird' }, { id: 'c', text: 'Eagle' }, { id: 'd', text: 'Kingfisher' }],
        correctAnswer: 'b', explanation: 'Hummingbirds are the only birds that can fly backwards!', funFact: 'They can flap their wings 80 times per second!'
      },
      {
        type: 'true-false', question: 'A group of ravens is called a "murder".', categoryId: 'animals',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'A group of ravens is called an "unkindness". Crows form a "murder"!', funFact: 'Ravens are extremely intelligent and can solve puzzles!'
      },
      {
        type: 'mcq', question: 'What percentage of all animal species are insects?', categoryId: 'animals',
        options: [{ id: 'a', text: '50%' }, { id: 'b', text: '60%' }, { id: 'c', text: '80%' }, { id: 'd', text: '90%' }],
        correctAnswer: 'c', explanation: 'About 80% of all known animal species are insects!', funFact: 'There are over 900,000 known insect species!'
      },
      {
        type: 'mcq', question: 'Which animal has the longest migration route?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Monarch Butterfly' }, { id: 'b', text: 'Arctic Tern' }, { id: 'c', text: 'Humpback Whale' }, { id: 'd', text: 'Wildebeest' }],
        correctAnswer: 'b', explanation: 'Arctic Terns migrate 44,000 miles annually!', funFact: 'They see two summers per year!'
      },
      {
        type: 'mcq', question: 'What is the only continent without native reptiles?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Australia' }, { id: 'b', text: 'Antarctica' }, { id: 'c', text: 'Europe' }, { id: 'd', text: 'North America' }],
        correctAnswer: 'b', explanation: 'Antarctica has no native reptiles due to extreme cold!', funFact: 'Its too cold for cold-blooded animals!'
      },
      {
        type: 'mcq', question: 'Which animal can see both ultraviolet and polarized light?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Eagle' }, { id: 'b', text: 'Mantis Shrimp' }, { id: 'c', text: 'Owl' }, { id: 'd', text: 'Cat' }],
        correctAnswer: 'b', explanation: 'Mantis shrimp have the most complex eyes in the animal kingdom!', funFact: 'They can see 16 types of color receptors; humans have 3!'
      },
      {
        type: 'mcq', question: 'What is the term for animals that are active at twilight?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Nocturnal' }, { id: 'b', text: 'Diurnal' }, { id: 'c', text: 'Crepuscular' }, { id: 'd', text: 'Cathemeral' }],
        correctAnswer: 'c', explanation: 'Crepuscular animals are most active during twilight!', funFact: 'Rabbits and deer are crepuscular animals!'
      },
      {
        type: 'mcq', question: 'Which extinct animal was the largest shark to ever exist?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Great White Shark' }, { id: 'b', text: 'Megalodon' }, { id: 'c', text: 'Whale Shark' }, { id: 'd', text: 'Tiger Shark' }],
        correctAnswer: 'b', explanation: 'Megalodon could grow up to 60 feet long!', funFact: 'It went extinct about 3.6 million years ago!'
      },
      {
        type: 'mcq', question: 'Which insect has the shortest lifespan as an adult?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Butterfly' }, { id: 'b', text: 'Mayfly' }, { id: 'c', text: 'Ant' }, { id: 'd', text: 'Bee' }],
        correctAnswer: 'b', explanation: 'Adult mayflies live only 24 hours or less!', funFact: 'They dont even have mouths as adults!'
      },
      {
        type: 'mcq', question: 'What is the process by which some animals enter a deep sleep to survive winter?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Migration' }, { id: 'b', text: 'Hibernation' }, { id: 'c', text: 'Estivation' }, { id: 'd', text: 'Torpor' }],
        correctAnswer: 'b', explanation: 'Hibernation is a deep sleep during winter months!', funFact: 'Bears heart rate drops to 8 beats per minute during hibernation!'
      },
      {
        type: 'mcq', question: 'Which venomous Australian mammal lays eggs?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Koala' }, { id: 'b', text: 'Platypus' }, { id: 'c', text: 'Wombat' }, { id: 'd', text: 'Kangaroo' }],
        correctAnswer: 'b', explanation: 'Male platypuses have venomous spurs on their hind legs!', funFact: 'They are one of only 5 species of egg-laying mammals!'
      },
      {
        type: 'mcq', question: 'How many species of animals are estimated to exist on Earth?', categoryId: 'animals',
        options: [{ id: 'a', text: '1 million' }, { id: 'b', text: '8.7 million' }, { id: 'c', text: '50 million' }, { id: 'd', text: '100 million' }],
        correctAnswer: 'b', explanation: 'Scientists estimate about 8.7 million animal species exist!', funFact: 'Only about 1.5 million have been discovered so far!'
      },
      {
        type: 'mcq', question: 'Which animal can survive being frozen solid?', categoryId: 'animals',
        options: [{ id: 'a', text: 'Polar Bear' }, { id: 'b', text: 'Wood Frog' }, { id: 'c', text: 'Arctic Fox' }, { id: 'd', text: 'Penguin' }],
        correctAnswer: 'b', explanation: 'Wood frogs can survive being frozen and thaw back to life!', funFact: 'Up to 65% of their body can freeze solid!'
      },
    ];

    // JUNIORS FOOD QUESTIONS BY DIFFICULTY
    const foodJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What color is a ripe banana?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Red' }, { id: 'b', text: 'Yellow' }, { id: 'c', text: 'Blue' }, { id: 'd', text: 'Green' }],
        correctAnswer: 'b', explanation: 'Ripe bananas are yellow!', funFact: 'Bananas are actually berries!'
      },
      {
        type: 'mcq', question: 'Which fruit is red and keeps the doctor away?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Orange' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Apple' }, { id: 'd', text: 'Grape' }],
        correctAnswer: 'c', explanation: 'An apple a day keeps the doctor away!', funFact: 'There are over 7,500 varieties of apples!'
      },
      {
        type: 'mcq', question: 'What vegetable do rabbits love to eat?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Potato' }, { id: 'b', text: 'Carrot' }, { id: 'c', text: 'Onion' }, { id: 'd', text: 'Garlic' }],
        correctAnswer: 'b', explanation: 'Rabbits love carrots!', funFact: 'Carrots were originally purple, not orange!'
      },
      {
        type: 'mcq', question: 'Which fruit has its seeds on the outside?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Orange' }, { id: 'c', text: 'Strawberry' }, { id: 'd', text: 'Grape' }],
        correctAnswer: 'c', explanation: 'Strawberries have seeds on the outside!', funFact: 'One strawberry has about 200 seeds!'
      },
      {
        type: 'mcq', question: 'What vegetable makes you cry when you cut it?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Tomato' }, { id: 'b', text: 'Cucumber' }, { id: 'c', text: 'Onion' }, { id: 'd', text: 'Lettuce' }],
        correctAnswer: 'c', explanation: 'Onions release a chemical that makes us cry!', funFact: 'Chilling onions before cutting reduces tears!'
      },
      {
        type: 'true-false', question: 'Tomatoes are fruits.', categoryId: 'fruits-veggies',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Tomatoes are technically fruits!', funFact: 'Botanically, they are berries!'
      },
      {
        type: 'mcq', question: 'What fruit do we get orange juice from?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Orange' }, { id: 'c', text: 'Grape' }, { id: 'd', text: 'Lemon' }],
        correctAnswer: 'b', explanation: 'Orange juice comes from oranges!', funFact: 'Brazil produces the most oranges in the world!'
      },
      {
        type: 'mcq', question: 'Which vegetable is orange and good for your eyes?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Broccoli' }, { id: 'b', text: 'Spinach' }, { id: 'c', text: 'Carrot' }, { id: 'd', text: 'Cabbage' }],
        correctAnswer: 'c', explanation: 'Carrots are great for eye health!', funFact: 'Carrots contain beta-carotene which helps vision!'
      },
      {
        type: 'mcq', question: 'What is the most popular fruit in the world?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Orange' }, { id: 'd', text: 'Mango' }],
        correctAnswer: 'b', explanation: 'Bananas are the most popular fruit!', funFact: 'Over 100 billion bananas are eaten yearly!'
      },
      {
        type: 'mcq', question: 'Which green vegetable looks like a tiny tree?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Spinach' }, { id: 'b', text: 'Broccoli' }, { id: 'c', text: 'Lettuce' }, { id: 'd', text: 'Peas' }],
        correctAnswer: 'b', explanation: 'Broccoli looks like tiny trees!', funFact: 'Broccoli is a superfood packed with vitamins!'
      },
      {
        type: 'mcq', question: 'What fruit is traditionally carved on Halloween?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Watermelon' }, { id: 'b', text: 'Pumpkin' }, { id: 'c', text: 'Apple' }, { id: 'd', text: 'Orange' }],
        correctAnswer: 'b', explanation: 'Pumpkins are carved into jack-o-lanterns!', funFact: 'Pumpkins are 90% water!'
      },
      {
        type: 'mcq', question: 'Which fruit is known as the "King of Fruits"?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Mango' }, { id: 'c', text: 'Durian' }, { id: 'd', text: 'Pineapple' }],
        correctAnswer: 'b', explanation: 'Mango is called the King of Fruits!', funFact: 'India produces the most mangoes!'
      },
    ];

    const foodJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'Which vitamin is abundant in citrus fruits?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Vitamin A' }, { id: 'b', text: 'Vitamin B' }, { id: 'c', text: 'Vitamin C' }, { id: 'd', text: 'Vitamin D' }],
        correctAnswer: 'c', explanation: 'Citrus fruits are rich in Vitamin C!', funFact: 'Vitamin C boosts your immune system!'
      },
      {
        type: 'mcq', question: 'What gives chili peppers their spicy taste?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Vitamin C' }, { id: 'b', text: 'Capsaicin' }, { id: 'c', text: 'Sugar' }, { id: 'd', text: 'Salt' }],
        correctAnswer: 'b', explanation: 'Capsaicin makes peppers spicy!', funFact: 'Milk helps reduce the burning sensation!'
      },
      {
        type: 'mcq', question: 'Which fruit contains the most water?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Watermelon' }, { id: 'd', text: 'Grape' }],
        correctAnswer: 'c', explanation: 'Watermelon is 92% water!', funFact: 'Watermelons are both a fruit and a vegetable!'
      },
      {
        type: 'mcq', question: 'What part of the plant is a potato?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Root' }, { id: 'b', text: 'Stem' }, { id: 'c', text: 'Leaf' }, { id: 'd', text: 'Fruit' }],
        correctAnswer: 'b', explanation: 'Potatoes are underground stems called tubers!', funFact: 'Potatoes were the first vegetable grown in space!'
      },
      {
        type: 'mcq', question: 'Which country is the largest producer of rice?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'India' }, { id: 'b', text: 'China' }, { id: 'c', text: 'Japan' }, { id: 'd', text: 'Thailand' }],
        correctAnswer: 'b', explanation: 'China produces the most rice!', funFact: 'Rice feeds more than half the world!'
      },
      {
        type: 'mcq', question: 'What is the hottest chili pepper in the world?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Jalapeno' }, { id: 'b', text: 'Habanero' }, { id: 'c', text: 'Carolina Reaper' }, { id: 'd', text: 'Ghost Pepper' }],
        correctAnswer: 'c', explanation: 'Carolina Reaper is the hottest pepper!', funFact: 'It measures over 2 million Scoville units!'
      },
      {
        type: 'true-false', question: 'Avocados are vegetables.', categoryId: 'fruits-veggies',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'Avocados are actually fruits!', funFact: 'They are also known as "alligator pears"!'
      },
      {
        type: 'mcq', question: 'Which fruit is used to make wine?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Grape' }, { id: 'c', text: 'Orange' }, { id: 'd', text: 'Peach' }],
        correctAnswer: 'b', explanation: 'Grapes are used to make wine!', funFact: 'Wine has been made for over 8,000 years!'
      },
      {
        type: 'mcq', question: 'What vegetable is Popeye famous for eating?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Broccoli' }, { id: 'b', text: 'Spinach' }, { id: 'c', text: 'Kale' }, { id: 'd', text: 'Lettuce' }],
        correctAnswer: 'b', explanation: 'Popeye loves spinach!', funFact: 'Spinach is rich in iron and vitamins!'
      },
      {
        type: 'mcq', question: 'Which nut grows underground?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Almond' }, { id: 'b', text: 'Walnut' }, { id: 'c', text: 'Peanut' }, { id: 'd', text: 'Cashew' }],
        correctAnswer: 'c', explanation: 'Peanuts grow underground!', funFact: 'Peanuts are actually legumes, not nuts!'
      },
      {
        type: 'mcq', question: 'What fruit is dried to make raisins?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Grape' }, { id: 'c', text: 'Plum' }, { id: 'd', text: 'Apricot' }],
        correctAnswer: 'b', explanation: 'Raisins are dried grapes!', funFact: 'It takes 4 pounds of grapes to make 1 pound of raisins!'
      },
      {
        type: 'mcq', question: 'Which vegetable is used to make french fries?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Sweet Potato' }, { id: 'b', text: 'Potato' }, { id: 'c', text: 'Carrot' }, { id: 'd', text: 'Turnip' }],
        correctAnswer: 'b', explanation: 'French fries are made from potatoes!', funFact: 'Americans eat 4.5 billion pounds of fries yearly!'
      },
      {
        type: 'mcq', question: 'What is the main ingredient in guacamole?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Tomato' }, { id: 'b', text: 'Avocado' }, { id: 'c', text: 'Pepper' }, { id: 'd', text: 'Onion' }],
        correctAnswer: 'b', explanation: 'Guacamole is made from avocados!', funFact: 'The word comes from Aztec "ahuacamolli"!'
      },
      {
        type: 'mcq', question: 'Which fruit has a crown and is tropical?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Mango' }, { id: 'b', text: 'Papaya' }, { id: 'c', text: 'Pineapple' }, { id: 'd', text: 'Coconut' }],
        correctAnswer: 'c', explanation: 'Pineapples have a leafy crown!', funFact: 'It takes 2-3 years for a pineapple to grow!'
      },
      {
        type: 'mcq', question: 'What vegetable is used to make pickles?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Zucchini' }, { id: 'b', text: 'Cucumber' }, { id: 'c', text: 'Squash' }, { id: 'd', text: 'Eggplant' }],
        correctAnswer: 'b', explanation: 'Pickles are made from cucumbers!', funFact: 'Cleopatra believed pickles made her beautiful!'
      },
    ];

    const foodJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the process of turning grapes into wine called?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Pasteurization' }, { id: 'b', text: 'Fermentation' }, { id: 'c', text: 'Distillation' }, { id: 'd', text: 'Oxidation' }],
        correctAnswer: 'b', explanation: 'Fermentation converts sugar to alcohol!', funFact: 'Yeast is essential for fermentation!'
      },
      {
        type: 'mcq', question: 'Which compound gives turmeric its yellow color?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Chlorophyll' }, { id: 'b', text: 'Curcumin' }, { id: 'c', text: 'Carotene' }, { id: 'd', text: 'Lycopene' }],
        correctAnswer: 'b', explanation: 'Curcumin gives turmeric its color!', funFact: 'Curcumin has anti-inflammatory properties!'
      },
      {
        type: 'mcq', question: 'What fruit is known as a "modified berry"?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Strawberry' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Raspberry' }, { id: 'd', text: 'Blueberry' }],
        correctAnswer: 'b', explanation: 'Bananas are botanically modified berries!', funFact: 'Strawberries and raspberries are not true berries!'
      },
      {
        type: 'mcq', question: 'Which pigment makes tomatoes red?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Chlorophyll' }, { id: 'b', text: 'Anthocyanin' }, { id: 'c', text: 'Lycopene' }, { id: 'd', text: 'Carotene' }],
        correctAnswer: 'c', explanation: 'Lycopene gives tomatoes their red color!', funFact: 'Lycopene is a powerful antioxidant!'
      },
      {
        type: 'mcq', question: 'What is the Scoville scale used to measure?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Sweetness' }, { id: 'b', text: 'Acidity' }, { id: 'c', text: 'Spiciness' }, { id: 'd', text: 'Bitterness' }],
        correctAnswer: 'c', explanation: 'The Scoville scale measures pepper heat!', funFact: 'Bell peppers have zero Scoville units!'
      },
      {
        type: 'mcq', question: 'Which fruit contains the enzyme bromelain?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Papaya' }, { id: 'b', text: 'Pineapple' }, { id: 'c', text: 'Mango' }, { id: 'd', text: 'Kiwi' }],
        correctAnswer: 'b', explanation: 'Pineapple contains bromelain!', funFact: 'Bromelain can tenderize meat!'
      },
      {
        type: 'true-false', question: 'Botanically, strawberries are not true berries.', categoryId: 'fruits-veggies',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Strawberries are "accessory fruits"!', funFact: 'True berries include bananas and grapes!'
      },
      {
        type: 'mcq', question: 'What causes fruit to ripen faster when stored together?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Ethylene gas' }, { id: 'c', text: 'Carbon dioxide' }, { id: 'd', text: 'Nitrogen' }],
        correctAnswer: 'b', explanation: 'Ethylene gas triggers ripening!', funFact: 'Apples produce lots of ethylene!'
      },
      {
        type: 'mcq', question: 'Which vegetable family includes cabbage, broccoli, and cauliflower?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Nightshade' }, { id: 'b', text: 'Cruciferous' }, { id: 'c', text: 'Allium' }, { id: 'd', text: 'Legume' }],
        correctAnswer: 'b', explanation: 'They belong to the cruciferous family!', funFact: 'The name means "cross-bearing" from flower shape!'
      },
      {
        type: 'mcq', question: 'What is the worlds most expensive spice by weight?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Vanilla' }, { id: 'b', text: 'Cardamom' }, { id: 'c', text: 'Saffron' }, { id: 'd', text: 'Cinnamon' }],
        correctAnswer: 'c', explanation: 'Saffron is the most expensive spice!', funFact: 'It takes 75,000 flowers to make 1 pound!'
      },
      {
        type: 'mcq', question: 'Which fruit is known as the "superfruit" for its antioxidants?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Acai' }, { id: 'c', text: 'Banana' }, { id: 'd', text: 'Orange' }],
        correctAnswer: 'b', explanation: 'Acai berries are packed with antioxidants!', funFact: 'They grow on palm trees in the Amazon!'
      },
      {
        type: 'mcq', question: 'What compound in garlic gives it its distinctive smell?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Sulfur compounds' }, { id: 'b', text: 'Nitrogen' }, { id: 'c', text: 'Carbon' }, { id: 'd', text: 'Phosphorus' }],
        correctAnswer: 'a', explanation: 'Sulfur compounds create garlics smell!', funFact: 'Allicin is released when garlic is crushed!'
      },
      {
        type: 'mcq', question: 'Which fruit was once so valuable it was called "black gold"?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Coffee' }, { id: 'b', text: 'Pepper' }, { id: 'c', text: 'Cacao' }, { id: 'd', text: 'Vanilla' }],
        correctAnswer: 'b', explanation: 'Peppercorns were once called black gold!', funFact: 'They were used as currency in ancient times!'
      },
      {
        type: 'mcq', question: 'What is the term for plants that complete their life cycle in one year?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Perennial' }, { id: 'b', text: 'Annual' }, { id: 'c', text: 'Biennial' }, { id: 'd', text: 'Evergreen' }],
        correctAnswer: 'b', explanation: 'Annual plants live for one growing season!', funFact: 'Most vegetables are annuals!'
      },
      {
        type: 'mcq', question: 'Which nutrient makes leafy greens green?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Iron' }, { id: 'b', text: 'Chlorophyll' }, { id: 'c', text: 'Magnesium' }, { id: 'd', text: 'Calcium' }],
        correctAnswer: 'b', explanation: 'Chlorophyll gives plants their green color!', funFact: 'Chlorophyll absorbs light for photosynthesis!'
      },
      {
        type: 'mcq', question: 'What percentage of an apple is water?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: '65%' }, { id: 'b', text: '75%' }, { id: 'c', text: '85%' }, { id: 'd', text: '95%' }],
        correctAnswer: 'c', explanation: 'Apples are about 85% water!', funFact: 'Thats why they are so refreshing!'
      },
      {
        type: 'mcq', question: 'Which vitamin is synthesized in the body through sun exposure?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Vitamin A' }, { id: 'b', text: 'Vitamin C' }, { id: 'c', text: 'Vitamin D' }, { id: 'd', text: 'Vitamin E' }],
        correctAnswer: 'c', explanation: 'Vitamin D is made from sunlight!', funFact: 'Mushrooms exposed to UV light contain Vitamin D!'
      },
      {
        type: 'mcq', question: 'What is the botanical classification of a coconut?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Nut' }, { id: 'b', text: 'Fruit' }, { id: 'c', text: 'Seed' }, { id: 'd', text: 'All of the above' }],
        correctAnswer: 'd', explanation: 'Coconut is a fruit, nut, AND seed!', funFact: 'Its technically a "drupe" or stone fruit!'
      },
      {
        type: 'mcq', question: 'Which country is the origin of the tomato?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Italy' }, { id: 'b', text: 'Spain' }, { id: 'c', text: 'Mexico/Peru' }, { id: 'd', text: 'India' }],
        correctAnswer: 'c', explanation: 'Tomatoes originated in South America!', funFact: 'Europeans once thought tomatoes were poisonous!'
      },
      {
        type: 'mcq', question: 'What is the process called when vegetables are briefly boiled then cooled?', categoryId: 'fruits-veggies',
        options: [{ id: 'a', text: 'Sauteing' }, { id: 'b', text: 'Blanching' }, { id: 'c', text: 'Braising' }, { id: 'd', text: 'Steaming' }],
        correctAnswer: 'b', explanation: 'Blanching preserves color and nutrients!', funFact: 'Its often done before freezing vegetables!'
      },
    ];

    // JUNIORS SCIENCE QUESTIONS BY DIFFICULTY
    const scienceJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What planet do we live on?', categoryId: 'science',
        options: [{ id: 'a', text: 'Mars' }, { id: 'b', text: 'Earth' }, { id: 'c', text: 'Venus' }, { id: 'd', text: 'Jupiter' }],
        correctAnswer: 'b', explanation: 'We live on planet Earth!', funFact: 'Earth is the only planet with liquid water on its surface!'
      },
      {
        type: 'mcq', question: 'What do plants need to make food?', categoryId: 'science',
        options: [{ id: 'a', text: 'Sunlight' }, { id: 'b', text: 'Music' }, { id: 'c', text: 'Paint' }, { id: 'd', text: 'Toys' }],
        correctAnswer: 'a', explanation: 'Plants use sunlight for photosynthesis!', funFact: 'Plants also need water and carbon dioxide!'
      },
      {
        type: 'mcq', question: 'What is the closest star to Earth?', categoryId: 'science',
        options: [{ id: 'a', text: 'North Star' }, { id: 'b', text: 'The Sun' }, { id: 'c', text: 'Sirius' }, { id: 'd', text: 'Alpha Centauri' }],
        correctAnswer: 'b', explanation: 'The Sun is our closest star!', funFact: 'Light from the Sun takes 8 minutes to reach Earth!'
      },
      {
        type: 'mcq', question: 'What gas do humans breathe in?', categoryId: 'science',
        options: [{ id: 'a', text: 'Carbon dioxide' }, { id: 'b', text: 'Nitrogen' }, { id: 'c', text: 'Oxygen' }, { id: 'd', text: 'Helium' }],
        correctAnswer: 'c', explanation: 'We breathe in oxygen!', funFact: 'Trees produce the oxygen we breathe!'
      },
      {
        type: 'mcq', question: 'How many legs does an insect have?', categoryId: 'science',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '10' }],
        correctAnswer: 'b', explanation: 'All insects have 6 legs!', funFact: 'Spiders have 8 legs - they are not insects!'
      },
      {
        type: 'mcq', question: 'What is H₂O commonly known as?', categoryId: 'science',
        options: [{ id: 'a', text: 'Salt' }, { id: 'b', text: 'Water' }, { id: 'c', text: 'Sugar' }, { id: 'd', text: 'Air' }],
        correctAnswer: 'b', explanation: 'H₂O is water!', funFact: 'H means hydrogen, O means oxygen!'
      },
      {
        type: 'true-false', question: 'The Moon produces its own light.', categoryId: 'science',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'The Moon reflects light from the Sun!', funFact: 'Moonlight is actually reflected sunlight!'
      },
      {
        type: 'mcq', question: 'What force keeps us on the ground?', categoryId: 'science',
        options: [{ id: 'a', text: 'Magnetism' }, { id: 'b', text: 'Gravity' }, { id: 'c', text: 'Friction' }, { id: 'd', text: 'Wind' }],
        correctAnswer: 'b', explanation: 'Gravity keeps us on the ground!', funFact: 'Isaac Newton discovered gravity!'
      },
      {
        type: 'mcq', question: 'What are the three states of matter?', categoryId: 'science',
        options: [{ id: 'a', text: 'Hot, cold, warm' }, { id: 'b', text: 'Solid, liquid, gas' }, { id: 'c', text: 'Big, medium, small' }, { id: 'd', text: 'Red, blue, green' }],
        correctAnswer: 'b', explanation: 'Solid, liquid, and gas are the three states!', funFact: 'Ice is solid, water is liquid, steam is gas!'
      },
      {
        type: 'mcq', question: 'Which organ pumps blood through your body?', categoryId: 'science',
        options: [{ id: 'a', text: 'Brain' }, { id: 'b', text: 'Lungs' }, { id: 'c', text: 'Heart' }, { id: 'd', text: 'Stomach' }],
        correctAnswer: 'c', explanation: 'Your heart pumps blood!', funFact: 'Your heart beats about 100,000 times a day!'
      },
      {
        type: 'mcq', question: 'What do we call animals that eat only plants?', categoryId: 'science',
        options: [{ id: 'a', text: 'Carnivores' }, { id: 'b', text: 'Herbivores' }, { id: 'c', text: 'Omnivores' }, { id: 'd', text: 'Insectivores' }],
        correctAnswer: 'b', explanation: 'Herbivores eat only plants!', funFact: 'Cows, elephants, and rabbits are herbivores!'
      },
      {
        type: 'mcq', question: 'What is the largest organ in the human body?', categoryId: 'science',
        options: [{ id: 'a', text: 'Heart' }, { id: 'b', text: 'Brain' }, { id: 'c', text: 'Skin' }, { id: 'd', text: 'Liver' }],
        correctAnswer: 'c', explanation: 'Skin is the largest organ!', funFact: 'An adults skin weighs about 8 pounds!'
      },
    ];

    const scienceJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the process by which plants make their own food?', categoryId: 'science',
        options: [{ id: 'a', text: 'Respiration' }, { id: 'b', text: 'Photosynthesis' }, { id: 'c', text: 'Digestion' }, { id: 'd', text: 'Fermentation' }],
        correctAnswer: 'b', explanation: 'Photosynthesis converts sunlight to food!', funFact: 'Photo means light, synthesis means making!'
      },
      {
        type: 'mcq', question: 'How many planets are in our solar system?', categoryId: 'science',
        options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
        correctAnswer: 'b', explanation: 'There are 8 planets in our solar system!', funFact: 'Pluto was reclassified as a dwarf planet in 2006!'
      },
      {
        type: 'mcq', question: 'What type of energy does the Sun provide?', categoryId: 'science',
        options: [{ id: 'a', text: 'Nuclear and light' }, { id: 'b', text: 'Wind' }, { id: 'c', text: 'Electrical' }, { id: 'd', text: 'Chemical' }],
        correctAnswer: 'a', explanation: 'The Sun provides nuclear energy and light!', funFact: 'Solar panels convert sunlight to electricity!'
      },
      {
        type: 'mcq', question: 'What is the chemical symbol for gold?', categoryId: 'science',
        options: [{ id: 'a', text: 'Go' }, { id: 'b', text: 'Gd' }, { id: 'c', text: 'Au' }, { id: 'd', text: 'Ag' }],
        correctAnswer: 'c', explanation: 'Au is for gold (from Latin "aurum")!', funFact: 'Gold never rusts or tarnishes!'
      },
      {
        type: 'mcq', question: 'What is the hardest natural substance on Earth?', categoryId: 'science',
        options: [{ id: 'a', text: 'Iron' }, { id: 'b', text: 'Diamond' }, { id: 'c', text: 'Quartz' }, { id: 'd', text: 'Granite' }],
        correctAnswer: 'b', explanation: 'Diamond is the hardest natural substance!', funFact: 'Diamonds are made of pure carbon!'
      },
      {
        type: 'mcq', question: 'What part of the cell contains genetic information?', categoryId: 'science',
        options: [{ id: 'a', text: 'Cell wall' }, { id: 'b', text: 'Cytoplasm' }, { id: 'c', text: 'Nucleus' }, { id: 'd', text: 'Mitochondria' }],
        correctAnswer: 'c', explanation: 'The nucleus contains DNA!', funFact: 'DNA stands for deoxyribonucleic acid!'
      },
      {
        type: 'true-false', question: 'Sound travels faster than light.', categoryId: 'science',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'Light travels much faster than sound!', funFact: 'Thats why you see lightning before you hear thunder!'
      },
      {
        type: 'mcq', question: 'What is the main gas in the atmosphere?', categoryId: 'science',
        options: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Carbon dioxide' }, { id: 'c', text: 'Nitrogen' }, { id: 'd', text: 'Hydrogen' }],
        correctAnswer: 'c', explanation: 'Nitrogen makes up about 78% of air!', funFact: 'Oxygen is only about 21%!'
      },
      {
        type: 'mcq', question: 'What is the powerhouse of the cell?', categoryId: 'science',
        options: [{ id: 'a', text: 'Nucleus' }, { id: 'b', text: 'Ribosome' }, { id: 'c', text: 'Mitochondria' }, { id: 'd', text: 'Chloroplast' }],
        correctAnswer: 'c', explanation: 'Mitochondria produce energy for cells!', funFact: 'They have their own DNA!'
      },
      {
        type: 'mcq', question: 'What causes the seasons on Earth?', categoryId: 'science',
        options: [{ id: 'a', text: 'Distance from Sun' }, { id: 'b', text: 'Earths tilt' }, { id: 'c', text: 'Moon phases' }, { id: 'd', text: 'Solar flares' }],
        correctAnswer: 'b', explanation: 'Earths 23.5° tilt causes seasons!', funFact: 'When its summer in the North, its winter in the South!'
      },
      {
        type: 'mcq', question: 'What type of rock is formed from cooled lava?', categoryId: 'science',
        options: [{ id: 'a', text: 'Sedimentary' }, { id: 'b', text: 'Metamorphic' }, { id: 'c', text: 'Igneous' }, { id: 'd', text: 'Limestone' }],
        correctAnswer: 'c', explanation: 'Igneous rocks form from cooled magma or lava!', funFact: 'Granite and basalt are igneous rocks!'
      },
      {
        type: 'mcq', question: 'What is the unit of electrical resistance?', categoryId: 'science',
        options: [{ id: 'a', text: 'Volt' }, { id: 'b', text: 'Ampere' }, { id: 'c', text: 'Watt' }, { id: 'd', text: 'Ohm' }],
        correctAnswer: 'd', explanation: 'Resistance is measured in Ohms (Ω)!', funFact: 'Named after German physicist Georg Ohm!'
      },
      {
        type: 'mcq', question: 'What instrument measures atmospheric pressure?', categoryId: 'science',
        options: [{ id: 'a', text: 'Thermometer' }, { id: 'b', text: 'Barometer' }, { id: 'c', text: 'Anemometer' }, { id: 'd', text: 'Hygrometer' }],
        correctAnswer: 'b', explanation: 'A barometer measures air pressure!', funFact: 'Low pressure often means storms are coming!'
      },
      {
        type: 'mcq', question: 'Which planet is known as the Red Planet?', categoryId: 'science',
        options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Mars' }, { id: 'c', text: 'Jupiter' }, { id: 'd', text: 'Saturn' }],
        correctAnswer: 'b', explanation: 'Mars is the Red Planet!', funFact: 'Its red color comes from iron oxide (rust)!'
      },
      {
        type: 'mcq', question: 'What is the boiling point of water in Celsius?', categoryId: 'science',
        options: [{ id: 'a', text: '50°C' }, { id: 'b', text: '100°C' }, { id: 'c', text: '150°C' }, { id: 'd', text: '212°C' }],
        correctAnswer: 'b', explanation: 'Water boils at 100°C (212°F)!', funFact: 'At high altitudes, water boils at lower temperatures!'
      },
    ];

    const scienceJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the speed of light in a vacuum?', categoryId: 'science',
        options: [{ id: 'a', text: '300,000 km/s' }, { id: 'b', text: '150,000 km/s' }, { id: 'c', text: '500,000 km/s' }, { id: 'd', text: '1,000,000 km/s' }],
        correctAnswer: 'a', explanation: 'Light travels at about 300,000 km/s!', funFact: 'Nothing can travel faster than light!'
      },
      {
        type: 'mcq', question: 'What is the atomic number of Carbon?', categoryId: 'science',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '12' }],
        correctAnswer: 'b', explanation: 'Carbon has 6 protons!', funFact: 'Carbon is the basis of all organic life!'
      },
      {
        type: 'mcq', question: 'What is the chemical formula for table salt?', categoryId: 'science',
        options: [{ id: 'a', text: 'NaCl' }, { id: 'b', text: 'KCl' }, { id: 'c', text: 'CaCl₂' }, { id: 'd', text: 'MgCl₂' }],
        correctAnswer: 'a', explanation: 'Table salt is sodium chloride (NaCl)!', funFact: 'Na is sodium, Cl is chlorine!'
      },
      {
        type: 'mcq', question: 'What particle has a negative charge?', categoryId: 'science',
        options: [{ id: 'a', text: 'Proton' }, { id: 'b', text: 'Neutron' }, { id: 'c', text: 'Electron' }, { id: 'd', text: 'Photon' }],
        correctAnswer: 'c', explanation: 'Electrons are negatively charged!', funFact: 'Protons are positive, neutrons are neutral!'
      },
      {
        type: 'mcq', question: 'What law states that energy cannot be created or destroyed?', categoryId: 'science',
        options: [{ id: 'a', text: 'Newtons Law' }, { id: 'b', text: 'Law of Conservation of Energy' }, { id: 'c', text: 'Ohms Law' }, { id: 'd', text: 'Boyles Law' }],
        correctAnswer: 'b', explanation: 'Energy is always conserved!', funFact: 'It can only change from one form to another!'
      },
      {
        type: 'mcq', question: 'What is the most abundant element in the universe?', categoryId: 'science',
        options: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Carbon' }, { id: 'c', text: 'Helium' }, { id: 'd', text: 'Hydrogen' }],
        correctAnswer: 'd', explanation: 'Hydrogen makes up about 75% of the universe!', funFact: 'Stars are mainly made of hydrogen!'
      },
      {
        type: 'mcq', question: 'What phenomenon causes the Northern Lights?', categoryId: 'science',
        options: [{ id: 'a', text: 'Reflection' }, { id: 'b', text: 'Solar wind hitting atmosphere' }, { id: 'c', text: 'Moon reflection' }, { id: 'd', text: 'Volcanic activity' }],
        correctAnswer: 'b', explanation: 'Charged particles from the Sun hit our atmosphere!', funFact: 'The scientific name is Aurora Borealis!'
      },
      {
        type: 'true-false', question: 'Atoms are the smallest particles that exist.', categoryId: 'science',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'Atoms are made of protons, neutrons, and electrons!', funFact: 'Quarks are even smaller!'
      },
      {
        type: 'mcq', question: 'What is Newtons First Law of Motion called?', categoryId: 'science',
        options: [{ id: 'a', text: 'Law of Gravity' }, { id: 'b', text: 'Law of Inertia' }, { id: 'c', text: 'Law of Action-Reaction' }, { id: 'd', text: 'Law of Acceleration' }],
        correctAnswer: 'b', explanation: 'Objects at rest stay at rest unless acted upon!', funFact: 'Inertia is the resistance to change in motion!'
      },
      {
        type: 'mcq', question: 'What is the pH of pure water?', categoryId: 'science',
        options: [{ id: 'a', text: '5' }, { id: 'b', text: '7' }, { id: 'c', text: '9' }, { id: 'd', text: '14' }],
        correctAnswer: 'b', explanation: 'Pure water has a neutral pH of 7!', funFact: 'Below 7 is acidic, above 7 is basic!'
      },
      {
        type: 'mcq', question: 'What is the process of a liquid turning into gas called?', categoryId: 'science',
        options: [{ id: 'a', text: 'Condensation' }, { id: 'b', text: 'Evaporation' }, { id: 'c', text: 'Sublimation' }, { id: 'd', text: 'Precipitation' }],
        correctAnswer: 'b', explanation: 'Evaporation turns liquid to gas!', funFact: 'This is how water cycles back to clouds!'
      },
      {
        type: 'mcq', question: 'What type of wave is sound?', categoryId: 'science',
        options: [{ id: 'a', text: 'Transverse' }, { id: 'b', text: 'Longitudinal' }, { id: 'c', text: 'Electromagnetic' }, { id: 'd', text: 'Circular' }],
        correctAnswer: 'b', explanation: 'Sound is a longitudinal wave!', funFact: 'Sound needs a medium to travel through!'
      },
      {
        type: 'mcq', question: 'What is the SI unit of force?', categoryId: 'science',
        options: [{ id: 'a', text: 'Joule' }, { id: 'b', text: 'Watt' }, { id: 'c', text: 'Newton' }, { id: 'd', text: 'Pascal' }],
        correctAnswer: 'c', explanation: 'Force is measured in Newtons (N)!', funFact: 'Named after Sir Isaac Newton!'
      },
      {
        type: 'mcq', question: 'What organelle is responsible for protein synthesis?', categoryId: 'science',
        options: [{ id: 'a', text: 'Mitochondria' }, { id: 'b', text: 'Ribosome' }, { id: 'c', text: 'Golgi apparatus' }, { id: 'd', text: 'Lysosome' }],
        correctAnswer: 'b', explanation: 'Ribosomes make proteins!', funFact: 'They read mRNA to build proteins!'
      },
      {
        type: 'mcq', question: 'What is the half-life of Carbon-14?', categoryId: 'science',
        options: [{ id: 'a', text: '1,000 years' }, { id: 'b', text: '5,730 years' }, { id: 'c', text: '10,000 years' }, { id: 'd', text: '50,000 years' }],
        correctAnswer: 'b', explanation: 'Carbon-14 has a half-life of 5,730 years!', funFact: 'This is used in radiocarbon dating!'
      },
      {
        type: 'mcq', question: 'What is the process of cell division in body cells called?', categoryId: 'science',
        options: [{ id: 'a', text: 'Meiosis' }, { id: 'b', text: 'Mitosis' }, { id: 'c', text: 'Binary fission' }, { id: 'd', text: 'Cytokinesis' }],
        correctAnswer: 'b', explanation: 'Mitosis creates identical cells!', funFact: 'Meiosis creates sex cells with half the chromosomes!'
      },
      {
        type: 'mcq', question: 'What is absolute zero in Celsius?', categoryId: 'science',
        options: [{ id: 'a', text: '-100°C' }, { id: 'b', text: '-173°C' }, { id: 'c', text: '-273°C' }, { id: 'd', text: '-373°C' }],
        correctAnswer: 'c', explanation: 'Absolute zero is -273.15°C (0 Kelvin)!', funFact: 'At this temperature, all molecular motion stops!'
      },
      {
        type: 'mcq', question: 'What is the chemical formula for sulfuric acid?', categoryId: 'science',
        options: [{ id: 'a', text: 'HCl' }, { id: 'b', text: 'H₂SO₄' }, { id: 'c', text: 'HNO₃' }, { id: 'd', text: 'H₃PO₄' }],
        correctAnswer: 'b', explanation: 'Sulfuric acid is H₂SO₄!', funFact: 'Its used in car batteries!'
      },
      {
        type: 'mcq', question: 'What phenomenon explains why the sky is blue?', categoryId: 'science',
        options: [{ id: 'a', text: 'Reflection' }, { id: 'b', text: 'Refraction' }, { id: 'c', text: 'Rayleigh scattering' }, { id: 'd', text: 'Diffraction' }],
        correctAnswer: 'c', explanation: 'Blue light scatters more than other colors!', funFact: 'Sunsets are red because blue light scatters away!'
      },
      {
        type: 'mcq', question: 'What is the theory that explains the origin of the universe?', categoryId: 'science',
        options: [{ id: 'a', text: 'String Theory' }, { id: 'b', text: 'Big Bang Theory' }, { id: 'c', text: 'Steady State Theory' }, { id: 'd', text: 'Multiverse Theory' }],
        correctAnswer: 'b', explanation: 'The Big Bang occurred about 13.8 billion years ago!', funFact: 'The universe is still expanding!'
      },
    ];

    // JUNIORS GEOGRAPHY/WORLD EXPLORER QUESTIONS BY DIFFICULTY
    const geographyJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'How many continents are there on Earth?', categoryId: 'geography',
        options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
        correctAnswer: 'c', explanation: 'There are 7 continents!', funFact: 'Asia is the largest continent!'
      },
      {
        type: 'mcq', question: 'What is the largest ocean on Earth?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Atlantic' }, { id: 'b', text: 'Indian' }, { id: 'c', text: 'Pacific' }, { id: 'd', text: 'Arctic' }],
        correctAnswer: 'c', explanation: 'The Pacific Ocean is the largest!', funFact: 'It covers more area than all land combined!'
      },
      {
        type: 'mcq', question: 'What country is known as the Land of the Rising Sun?', categoryId: 'geography',
        options: [{ id: 'a', text: 'China' }, { id: 'b', text: 'Japan' }, { id: 'c', text: 'India' }, { id: 'd', text: 'Korea' }],
        correctAnswer: 'b', explanation: 'Japan is the Land of the Rising Sun!', funFact: 'Japan means "sun origin" in Japanese!'
      },
      {
        type: 'mcq', question: 'What is the longest river in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Amazon' }, { id: 'b', text: 'Mississippi' }, { id: 'c', text: 'Nile' }, { id: 'd', text: 'Yangtze' }],
        correctAnswer: 'c', explanation: 'The Nile River is the longest!', funFact: 'The Nile is about 6,650 km long!'
      },
      {
        type: 'mcq', question: 'Which continent is the Sahara Desert in?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Asia' }, { id: 'b', text: 'Australia' }, { id: 'c', text: 'Africa' }, { id: 'd', text: 'South America' }],
        correctAnswer: 'c', explanation: 'The Sahara is in Africa!', funFact: 'The Sahara is almost as big as the USA!'
      },
      {
        type: 'mcq', question: 'What is the capital of France?', categoryId: 'geography',
        options: [{ id: 'a', text: 'London' }, { id: 'b', text: 'Berlin' }, { id: 'c', text: 'Paris' }, { id: 'd', text: 'Rome' }],
        correctAnswer: 'c', explanation: 'Paris is the capital of France!', funFact: 'The Eiffel Tower is in Paris!'
      },
      {
        type: 'true-false', question: 'Australia is both a country and a continent.', categoryId: 'geography',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Australia is the only country that is also a continent!', funFact: 'Australia is also called "Down Under"!'
      },
      {
        type: 'mcq', question: 'What is the largest country in the world by area?', categoryId: 'geography',
        options: [{ id: 'a', text: 'China' }, { id: 'b', text: 'USA' }, { id: 'c', text: 'Canada' }, { id: 'd', text: 'Russia' }],
        correctAnswer: 'd', explanation: 'Russia is the largest country!', funFact: 'Russia spans 11 time zones!'
      },
      {
        type: 'mcq', question: 'Which ocean is the coldest?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Pacific' }, { id: 'b', text: 'Atlantic' }, { id: 'c', text: 'Indian' }, { id: 'd', text: 'Arctic' }],
        correctAnswer: 'd', explanation: 'The Arctic Ocean is the coldest!', funFact: 'Most of it is covered in ice!'
      },
      {
        type: 'mcq', question: 'What famous wall is in China?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Berlin Wall' }, { id: 'b', text: 'Great Wall' }, { id: 'c', text: 'Hadrians Wall' }, { id: 'd', text: 'Stone Wall' }],
        correctAnswer: 'b', explanation: 'The Great Wall of China!', funFact: 'It is over 13,000 miles long!'
      },
      {
        type: 'mcq', question: 'What is the hottest continent on Earth?', categoryId: 'geography',
        options: [{ id: 'a', text: 'South America' }, { id: 'b', text: 'Asia' }, { id: 'c', text: 'Africa' }, { id: 'd', text: 'Australia' }],
        correctAnswer: 'c', explanation: 'Africa is the hottest continent!', funFact: 'The highest temperature ever was recorded in Africa!'
      },
      {
        type: 'mcq', question: 'What is the smallest country in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Monaco' }, { id: 'b', text: 'Vatican City' }, { id: 'c', text: 'San Marino' }, { id: 'd', text: 'Liechtenstein' }],
        correctAnswer: 'b', explanation: 'Vatican City is the smallest country!', funFact: 'Its only 0.44 square kilometers!'
      },
    ];

    const geographyJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the capital of Australia?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Sydney' }, { id: 'b', text: 'Melbourne' }, { id: 'c', text: 'Canberra' }, { id: 'd', text: 'Perth' }],
        correctAnswer: 'c', explanation: 'Canberra is the capital, not Sydney!', funFact: 'Canberra was built as a compromise between Sydney and Melbourne!'
      },
      {
        type: 'mcq', question: 'Which country has the most people?', categoryId: 'geography',
        options: [{ id: 'a', text: 'USA' }, { id: 'b', text: 'India' }, { id: 'c', text: 'China' }, { id: 'd', text: 'Brazil' }],
        correctAnswer: 'b', explanation: 'India has the most people now!', funFact: 'India passed China in 2023!'
      },
      {
        type: 'mcq', question: 'What mountain range separates Europe from Asia?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Alps' }, { id: 'b', text: 'Himalayas' }, { id: 'c', text: 'Ural Mountains' }, { id: 'd', text: 'Andes' }],
        correctAnswer: 'c', explanation: 'The Ural Mountains separate Europe and Asia!', funFact: 'They are one of the oldest mountain ranges!'
      },
      {
        type: 'mcq', question: 'What is the largest island in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Madagascar' }, { id: 'b', text: 'Borneo' }, { id: 'c', text: 'Greenland' }, { id: 'd', text: 'New Guinea' }],
        correctAnswer: 'c', explanation: 'Greenland is the largest island!', funFact: 'Australia is a continent, not an island!'
      },
      {
        type: 'mcq', question: 'Which river flows through Egypt?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Amazon' }, { id: 'b', text: 'Nile' }, { id: 'c', text: 'Ganges' }, { id: 'd', text: 'Danube' }],
        correctAnswer: 'b', explanation: 'The Nile flows through Egypt!', funFact: 'Ancient Egypt depended on the Nile for farming!'
      },
      {
        type: 'mcq', question: 'What is the driest place on Earth?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Sahara Desert' }, { id: 'b', text: 'Death Valley' }, { id: 'c', text: 'Atacama Desert' }, { id: 'd', text: 'Gobi Desert' }],
        correctAnswer: 'c', explanation: 'The Atacama Desert in Chile is the driest!', funFact: 'Some parts havent had rain in 400 years!'
      },
      {
        type: 'mcq', question: 'What country is shaped like a boot?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Spain' }, { id: 'b', text: 'Greece' }, { id: 'c', text: 'Italy' }, { id: 'd', text: 'Portugal' }],
        correctAnswer: 'c', explanation: 'Italy is shaped like a boot!', funFact: 'The boot is kicking Sicily like a football!'
      },
      {
        type: 'mcq', question: 'What imaginary line divides Earth into Northern and Southern hemispheres?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Prime Meridian' }, { id: 'b', text: 'Equator' }, { id: 'c', text: 'Tropic of Cancer' }, { id: 'd', text: 'Arctic Circle' }],
        correctAnswer: 'b', explanation: 'The Equator divides North and South!', funFact: 'The Equator passes through 13 countries!'
      },
      {
        type: 'mcq', question: 'What is the tallest mountain in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'K2' }, { id: 'b', text: 'Kilimanjaro' }, { id: 'c', text: 'Denali' }, { id: 'd', text: 'Mount Everest' }],
        correctAnswer: 'd', explanation: 'Mount Everest is the tallest at 8,849 meters!', funFact: 'Its in the Himalayas between Nepal and Tibet!'
      },
      {
        type: 'true-false', question: 'The Amazon Rainforest is in Africa.', categoryId: 'geography',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'The Amazon is in South America!', funFact: 'Its the worlds largest tropical rainforest!'
      },
      {
        type: 'mcq', question: 'What is the capital of Japan?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Kyoto' }, { id: 'b', text: 'Osaka' }, { id: 'c', text: 'Tokyo' }, { id: 'd', text: 'Hiroshima' }],
        correctAnswer: 'c', explanation: 'Tokyo is the capital of Japan!', funFact: 'Tokyo is one of the most populated cities!'
      },
      {
        type: 'mcq', question: 'Which country has the longest coastline?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Australia' }, { id: 'b', text: 'Russia' }, { id: 'c', text: 'USA' }, { id: 'd', text: 'Canada' }],
        correctAnswer: 'd', explanation: 'Canada has the longest coastline!', funFact: 'Its over 202,000 km long!'
      },
      {
        type: 'mcq', question: 'What is the largest lake in Africa?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Lake Chad' }, { id: 'b', text: 'Lake Victoria' }, { id: 'c', text: 'Lake Tanganyika' }, { id: 'd', text: 'Lake Malawi' }],
        correctAnswer: 'b', explanation: 'Lake Victoria is the largest lake in Africa!', funFact: 'Its also the source of the Nile River!'
      },
      {
        type: 'mcq', question: 'What European country is known for windmills and tulips?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Belgium' }, { id: 'b', text: 'Denmark' }, { id: 'c', text: 'Netherlands' }, { id: 'd', text: 'Germany' }],
        correctAnswer: 'c', explanation: 'The Netherlands is famous for windmills and tulips!', funFact: 'Much of the country is below sea level!'
      },
      {
        type: 'mcq', question: 'What strait separates Europe from Africa?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Bering Strait' }, { id: 'b', text: 'Strait of Gibraltar' }, { id: 'c', text: 'English Channel' }, { id: 'd', text: 'Strait of Hormuz' }],
        correctAnswer: 'b', explanation: 'The Strait of Gibraltar separates them!', funFact: 'Its only 14 km wide at the narrowest point!'
      },
    ];

    const geographyJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the deepest point in the ocean?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Puerto Rico Trench' }, { id: 'b', text: 'Mariana Trench' }, { id: 'c', text: 'Java Trench' }, { id: 'd', text: 'Philippine Trench' }],
        correctAnswer: 'b', explanation: 'The Mariana Trench is the deepest!', funFact: 'Its about 11,000 meters deep!'
      },
      {
        type: 'mcq', question: 'Which country has the most time zones?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Russia' }, { id: 'b', text: 'USA' }, { id: 'c', text: 'France' }, { id: 'd', text: 'China' }],
        correctAnswer: 'c', explanation: 'France has 12 time zones due to overseas territories!', funFact: 'Russia has 11, but France wins with territories!'
      },
      {
        type: 'mcq', question: 'What is the capital of Mongolia?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Astana' }, { id: 'b', text: 'Bishkek' }, { id: 'c', text: 'Ulaanbaatar' }, { id: 'd', text: 'Tashkent' }],
        correctAnswer: 'c', explanation: 'Ulaanbaatar is the capital of Mongolia!', funFact: 'Its one of the coldest capitals in the world!'
      },
      {
        type: 'mcq', question: 'What is the longest mountain range in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Himalayas' }, { id: 'b', text: 'Rocky Mountains' }, { id: 'c', text: 'Andes' }, { id: 'd', text: 'Alps' }],
        correctAnswer: 'c', explanation: 'The Andes in South America is the longest!', funFact: 'Its about 7,000 km long!'
      },
      {
        type: 'mcq', question: 'Which African country was never colonized?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Kenya' }, { id: 'b', text: 'Ethiopia' }, { id: 'c', text: 'Nigeria' }, { id: 'd', text: 'Ghana' }],
        correctAnswer: 'b', explanation: 'Ethiopia was never colonized!', funFact: 'Liberia also remained largely independent!'
      },
      {
        type: 'mcq', question: 'What is the smallest continent by area?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Europe' }, { id: 'b', text: 'Antarctica' }, { id: 'c', text: 'Australia' }, { id: 'd', text: 'South America' }],
        correctAnswer: 'c', explanation: 'Australia is the smallest continent!', funFact: 'Its about 7.7 million square km!'
      },
      {
        type: 'mcq', question: 'What sea is the saltiest in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Red Sea' }, { id: 'b', text: 'Dead Sea' }, { id: 'c', text: 'Mediterranean Sea' }, { id: 'd', text: 'Black Sea' }],
        correctAnswer: 'b', explanation: 'The Dead Sea is the saltiest!', funFact: 'Its so salty you can float without trying!'
      },
      {
        type: 'mcq', question: 'Which country is known as the Land of a Thousand Lakes?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Sweden' }, { id: 'b', text: 'Canada' }, { id: 'c', text: 'Finland' }, { id: 'd', text: 'Norway' }],
        correctAnswer: 'c', explanation: 'Finland has about 188,000 lakes!', funFact: 'The nickname understates it!'
      },
      {
        type: 'mcq', question: 'What is the largest desert in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Sahara' }, { id: 'b', text: 'Arabian' }, { id: 'c', text: 'Gobi' }, { id: 'd', text: 'Antarctic' }],
        correctAnswer: 'd', explanation: 'Antarctica is technically the largest desert!', funFact: 'A desert is defined by precipitation, not heat!'
      },
      {
        type: 'mcq', question: 'What is the most visited country in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'USA' }, { id: 'b', text: 'Spain' }, { id: 'c', text: 'France' }, { id: 'd', text: 'Italy' }],
        correctAnswer: 'c', explanation: 'France is the most visited country!', funFact: 'Over 90 million tourists visit yearly!'
      },
      {
        type: 'mcq', question: 'What river flows through the most countries?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Nile' }, { id: 'b', text: 'Amazon' }, { id: 'c', text: 'Danube' }, { id: 'd', text: 'Mekong' }],
        correctAnswer: 'c', explanation: 'The Danube flows through 10 countries!', funFact: 'It flows through more capitals than any other river!'
      },
      {
        type: 'mcq', question: 'What is the highest waterfall in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Niagara Falls' }, { id: 'b', text: 'Victoria Falls' }, { id: 'c', text: 'Angel Falls' }, { id: 'd', text: 'Iguazu Falls' }],
        correctAnswer: 'c', explanation: 'Angel Falls in Venezuela is 979 meters!', funFact: 'Its named after pilot Jimmy Angel!'
      },
      {
        type: 'mcq', question: 'What is the Ring of Fire?', categoryId: 'geography',
        options: [{ id: 'a', text: 'A volcanic region around the Pacific' }, { id: 'b', text: 'A solar eclipse pattern' }, { id: 'c', text: 'A desert formation' }, { id: 'd', text: 'An ocean current' }],
        correctAnswer: 'a', explanation: 'Its a horseshoe-shaped zone of earthquakes and volcanoes!', funFact: '75% of worlds volcanoes are here!'
      },
      {
        type: 'mcq', question: 'What country is both in Europe and Asia?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Russia' }, { id: 'b', text: 'Turkey' }, { id: 'c', text: 'Kazakhstan' }, { id: 'd', text: 'All of the above' }],
        correctAnswer: 'd', explanation: 'Russia, Turkey, and Kazakhstan span both continents!', funFact: 'These are called transcontinental countries!'
      },
      {
        type: 'mcq', question: 'What is the oldest capital city in the world?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Athens' }, { id: 'b', text: 'Damascus' }, { id: 'c', text: 'Rome' }, { id: 'd', text: 'Cairo' }],
        correctAnswer: 'b', explanation: 'Damascus has been inhabited for over 11,000 years!', funFact: 'Its the capital of Syria!'
      },
      {
        type: 'true-false', question: 'The Suez Canal connects the Mediterranean Sea to the Red Sea.', categoryId: 'geography',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'The Suez Canal is a vital shipping route!', funFact: 'It was completed in 1869!'
      },
      {
        type: 'mcq', question: 'What is the largest landlocked country?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Mongolia' }, { id: 'b', text: 'Chad' }, { id: 'c', text: 'Kazakhstan' }, { id: 'd', text: 'Bolivia' }],
        correctAnswer: 'c', explanation: 'Kazakhstan is the largest landlocked country!', funFact: 'Its larger than Western Europe!'
      },
      {
        type: 'mcq', question: 'Which country has the most islands?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Indonesia' }, { id: 'b', text: 'Philippines' }, { id: 'c', text: 'Sweden' }, { id: 'd', text: 'Finland' }],
        correctAnswer: 'c', explanation: 'Sweden has about 267,570 islands!', funFact: 'Only about 1,000 are inhabited!'
      },
      {
        type: 'mcq', question: 'What peninsula contains Spain and Portugal?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Balkan' }, { id: 'b', text: 'Scandinavian' }, { id: 'c', text: 'Iberian' }, { id: 'd', text: 'Italian' }],
        correctAnswer: 'c', explanation: 'The Iberian Peninsula!', funFact: 'It also includes Andorra and Gibraltar!'
      },
      {
        type: 'mcq', question: 'What is the only country that borders both France and Germany?', categoryId: 'geography',
        options: [{ id: 'a', text: 'Belgium' }, { id: 'b', text: 'Switzerland' }, { id: 'c', text: 'Luxembourg' }, { id: 'd', text: 'All of the above' }],
        correctAnswer: 'd', explanation: 'Belgium, Switzerland, and Luxembourg all border both!', funFact: 'Europe has many small countries!'
      },
    ];

    // JUNIORS HISTORY/TIME TRAVELERS QUESTIONS BY DIFFICULTY
    const historyJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'Who built the pyramids?', categoryId: 'history',
        options: [{ id: 'a', text: 'Romans' }, { id: 'b', text: 'Greeks' }, { id: 'c', text: 'Ancient Egyptians' }, { id: 'd', text: 'Vikings' }],
        correctAnswer: 'c', explanation: 'The Ancient Egyptians built the pyramids!', funFact: 'The Great Pyramid is over 4,500 years old!'
      },
      {
        type: 'mcq', question: 'What did dinosaurs live with?', categoryId: 'history',
        options: [{ id: 'a', text: 'Humans' }, { id: 'b', text: 'Other dinosaurs' }, { id: 'c', text: 'Cars' }, { id: 'd', text: 'Phones' }],
        correctAnswer: 'b', explanation: 'Dinosaurs lived millions of years before humans!', funFact: 'Dinosaurs went extinct 65 million years ago!'
      },
      {
        type: 'mcq', question: 'Who was the first person to walk on the Moon?', categoryId: 'history',
        options: [{ id: 'a', text: 'Buzz Aldrin' }, { id: 'b', text: 'Yuri Gagarin' }, { id: 'c', text: 'Neil Armstrong' }, { id: 'd', text: 'John Glenn' }],
        correctAnswer: 'c', explanation: 'Neil Armstrong walked on the Moon in 1969!', funFact: 'He said "One small step for man, one giant leap for mankind!"'
      },
      {
        type: 'mcq', question: 'What did knights wear for protection?', categoryId: 'history',
        options: [{ id: 'a', text: 'Suits' }, { id: 'b', text: 'Armor' }, { id: 'c', text: 'T-shirts' }, { id: 'd', text: 'Robes' }],
        correctAnswer: 'b', explanation: 'Knights wore metal armor!', funFact: 'A full suit of armor could weigh over 50 pounds!'
      },
      {
        type: 'mcq', question: 'What ship famously sank in 1912?', categoryId: 'history',
        options: [{ id: 'a', text: 'Mayflower' }, { id: 'b', text: 'Titanic' }, { id: 'c', text: 'Santa Maria' }, { id: 'd', text: 'HMS Victory' }],
        correctAnswer: 'b', explanation: 'The Titanic sank after hitting an iceberg!', funFact: 'It was called "unsinkable" before it sank!'
      },
      {
        type: 'mcq', question: 'Who was known as the "King of Rock and Roll"?', categoryId: 'history',
        options: [{ id: 'a', text: 'Michael Jackson' }, { id: 'b', text: 'Elvis Presley' }, { id: 'c', text: 'The Beatles' }, { id: 'd', text: 'Chuck Berry' }],
        correctAnswer: 'b', explanation: 'Elvis Presley was the King of Rock and Roll!', funFact: 'Elvis sold over 1 billion records worldwide!'
      },
      {
        type: 'true-false', question: 'Christopher Columbus discovered America in 1492.', categoryId: 'history',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Columbus sailed the ocean blue in 1492!', funFact: 'He was looking for a route to India!'
      },
      {
        type: 'mcq', question: 'What ancient wonder was in Egypt?', categoryId: 'history',
        options: [{ id: 'a', text: 'Colosseum' }, { id: 'b', text: 'Great Pyramid' }, { id: 'c', text: 'Parthenon' }, { id: 'd', text: 'Stonehenge' }],
        correctAnswer: 'b', explanation: 'The Great Pyramid of Giza is in Egypt!', funFact: 'Its the only ancient wonder still standing!'
      },
      {
        type: 'mcq', question: 'Who was the first President of the United States?', categoryId: 'history',
        options: [{ id: 'a', text: 'Abraham Lincoln' }, { id: 'b', text: 'Thomas Jefferson' }, { id: 'c', text: 'George Washington' }, { id: 'd', text: 'John Adams' }],
        correctAnswer: 'c', explanation: 'George Washington was the first President!', funFact: 'His face is on the one dollar bill!'
      },
      {
        type: 'mcq', question: 'What did pirates sail on?', categoryId: 'history',
        options: [{ id: 'a', text: 'Airplanes' }, { id: 'b', text: 'Ships' }, { id: 'c', text: 'Trains' }, { id: 'd', text: 'Cars' }],
        correctAnswer: 'b', explanation: 'Pirates sailed on ships across the seas!', funFact: 'Pirates often flew a skull and crossbones flag!'
      },
      {
        type: 'mcq', question: 'What did cavemen use for tools?', categoryId: 'history',
        options: [{ id: 'a', text: 'Metal' }, { id: 'b', text: 'Plastic' }, { id: 'c', text: 'Stone' }, { id: 'd', text: 'Glass' }],
        correctAnswer: 'c', explanation: 'Cavemen used stones as tools!', funFact: 'This time is called the Stone Age!'
      },
      {
        type: 'mcq', question: 'Which civilization built the Colosseum?', categoryId: 'history',
        options: [{ id: 'a', text: 'Greeks' }, { id: 'b', text: 'Egyptians' }, { id: 'c', text: 'Romans' }, { id: 'd', text: 'Mayans' }],
        correctAnswer: 'c', explanation: 'The Romans built the Colosseum in Rome!', funFact: 'It could hold 50,000 spectators!'
      },
    ];

    const historyJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What year did World War II end?', categoryId: 'history',
        options: [{ id: 'a', text: '1943' }, { id: 'b', text: '1944' }, { id: 'c', text: '1945' }, { id: 'd', text: '1946' }],
        correctAnswer: 'c', explanation: 'World War II ended in 1945!', funFact: 'It lasted 6 years from 1939 to 1945!'
      },
      {
        type: 'mcq', question: 'Who painted the Mona Lisa?', categoryId: 'history',
        options: [{ id: 'a', text: 'Michelangelo' }, { id: 'b', text: 'Leonardo da Vinci' }, { id: 'c', text: 'Raphael' }, { id: 'd', text: 'Picasso' }],
        correctAnswer: 'b', explanation: 'Leonardo da Vinci painted the Mona Lisa!', funFact: 'Its in the Louvre Museum in Paris!'
      },
      {
        type: 'mcq', question: 'What empire did Julius Caesar rule?', categoryId: 'history',
        options: [{ id: 'a', text: 'Greek' }, { id: 'b', text: 'Roman' }, { id: 'c', text: 'Persian' }, { id: 'd', text: 'Ottoman' }],
        correctAnswer: 'b', explanation: 'Julius Caesar was a Roman leader!', funFact: 'July is named after Julius Caesar!'
      },
      {
        type: 'mcq', question: 'What was the name of the ship the Pilgrims sailed on?', categoryId: 'history',
        options: [{ id: 'a', text: 'Titanic' }, { id: 'b', text: 'Mayflower' }, { id: 'c', text: 'Santa Maria' }, { id: 'd', text: 'Nina' }],
        correctAnswer: 'b', explanation: 'The Pilgrims sailed on the Mayflower in 1620!', funFact: 'They celebrated the first Thanksgiving!'
      },
      {
        type: 'mcq', question: 'Who wrote the Declaration of Independence?', categoryId: 'history',
        options: [{ id: 'a', text: 'George Washington' }, { id: 'b', text: 'Benjamin Franklin' }, { id: 'c', text: 'Thomas Jefferson' }, { id: 'd', text: 'John Adams' }],
        correctAnswer: 'c', explanation: 'Thomas Jefferson wrote the Declaration!', funFact: 'It was signed on July 4, 1776!'
      },
      {
        type: 'mcq', question: 'What ancient civilization invented democracy?', categoryId: 'history',
        options: [{ id: 'a', text: 'Romans' }, { id: 'b', text: 'Egyptians' }, { id: 'c', text: 'Greeks' }, { id: 'd', text: 'Persians' }],
        correctAnswer: 'c', explanation: 'The Ancient Greeks invented democracy!', funFact: 'Democracy means "rule by the people" in Greek!'
      },
      {
        type: 'mcq', question: 'Who was Queen of England for 63 years?', categoryId: 'history',
        options: [{ id: 'a', text: 'Queen Elizabeth I' }, { id: 'b', text: 'Queen Victoria' }, { id: 'c', text: 'Queen Mary' }, { id: 'd', text: 'Queen Anne' }],
        correctAnswer: 'b', explanation: 'Queen Victoria reigned from 1837 to 1901!', funFact: 'The Victorian Era is named after her!'
      },
      {
        type: 'true-false', question: 'The Great Wall of China was built to keep out invaders.', categoryId: 'history',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'It was built to protect China from invasions!', funFact: 'Building started over 2,000 years ago!'
      },
      {
        type: 'mcq', question: 'What did Alexander Graham Bell invent?', categoryId: 'history',
        options: [{ id: 'a', text: 'Light bulb' }, { id: 'b', text: 'Telephone' }, { id: 'c', text: 'Television' }, { id: 'd', text: 'Radio' }],
        correctAnswer: 'b', explanation: 'Bell invented the telephone in 1876!', funFact: 'His first words were "Mr. Watson, come here!"'
      },
      {
        type: 'mcq', question: 'What famous leader conquered much of Europe?', categoryId: 'history',
        options: [{ id: 'a', text: 'Julius Caesar' }, { id: 'b', text: 'Napoleon Bonaparte' }, { id: 'c', text: 'Alexander the Great' }, { id: 'd', text: 'Genghis Khan' }],
        correctAnswer: 'b', explanation: 'Napoleon conquered much of Europe in the early 1800s!', funFact: 'He became Emperor of France!'
      },
      {
        type: 'mcq', question: 'What year did the Berlin Wall fall?', categoryId: 'history',
        options: [{ id: 'a', text: '1987' }, { id: 'b', text: '1988' }, { id: 'c', text: '1989' }, { id: 'd', text: '1990' }],
        correctAnswer: 'c', explanation: 'The Berlin Wall fell in 1989!', funFact: 'Germany was reunited after 28 years!'
      },
      {
        type: 'mcq', question: 'Who was the famous nurse during the Crimean War?', categoryId: 'history',
        options: [{ id: 'a', text: 'Clara Barton' }, { id: 'b', text: 'Florence Nightingale' }, { id: 'c', text: 'Mary Seacole' }, { id: 'd', text: 'Dorothea Dix' }],
        correctAnswer: 'b', explanation: 'Florence Nightingale founded modern nursing!', funFact: 'She was called "The Lady with the Lamp!"'
      },
      {
        type: 'mcq', question: 'What ancient civilization built Machu Picchu?', categoryId: 'history',
        options: [{ id: 'a', text: 'Aztecs' }, { id: 'b', text: 'Mayans' }, { id: 'c', text: 'Incas' }, { id: 'd', text: 'Olmecs' }],
        correctAnswer: 'c', explanation: 'The Incas built Machu Picchu in Peru!', funFact: 'Its called the "Lost City of the Incas!"'
      },
      {
        type: 'mcq', question: 'Who gave the famous "I Have a Dream" speech?', categoryId: 'history',
        options: [{ id: 'a', text: 'Malcolm X' }, { id: 'b', text: 'Rosa Parks' }, { id: 'c', text: 'Martin Luther King Jr.' }, { id: 'd', text: 'John F. Kennedy' }],
        correctAnswer: 'c', explanation: 'Martin Luther King Jr. gave this speech in 1963!', funFact: 'Over 250,000 people attended the march!'
      },
      {
        type: 'mcq', question: 'What empire was ruled by pharaohs?', categoryId: 'history',
        options: [{ id: 'a', text: 'Roman' }, { id: 'b', text: 'Greek' }, { id: 'c', text: 'Egyptian' }, { id: 'd', text: 'Persian' }],
        correctAnswer: 'c', explanation: 'Ancient Egypt was ruled by pharaohs!', funFact: 'Cleopatra was the last pharaoh!'
      },
    ];

    const historyJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What treaty ended World War I?', categoryId: 'history',
        options: [{ id: 'a', text: 'Treaty of Paris' }, { id: 'b', text: 'Treaty of Versailles' }, { id: 'c', text: 'Treaty of Vienna' }, { id: 'd', text: 'Treaty of Ghent' }],
        correctAnswer: 'b', explanation: 'The Treaty of Versailles ended WWI in 1919!', funFact: 'Germany had to pay huge reparations!'
      },
      {
        type: 'mcq', question: 'Who was the first Emperor of China?', categoryId: 'history',
        options: [{ id: 'a', text: 'Kublai Khan' }, { id: 'b', text: 'Qin Shi Huang' }, { id: 'c', text: 'Sun Tzu' }, { id: 'd', text: 'Confucius' }],
        correctAnswer: 'b', explanation: 'Qin Shi Huang unified China in 221 BC!', funFact: 'He built the Terracotta Army!'
      },
      {
        type: 'mcq', question: 'What year did the French Revolution begin?', categoryId: 'history',
        options: [{ id: 'a', text: '1776' }, { id: 'b', text: '1789' }, { id: 'c', text: '1799' }, { id: 'd', text: '1804' }],
        correctAnswer: 'b', explanation: 'The French Revolution began in 1789!', funFact: 'The Bastille was stormed on July 14!'
      },
      {
        type: 'mcq', question: 'Who was the longest-reigning British monarch?', categoryId: 'history',
        options: [{ id: 'a', text: 'Queen Victoria' }, { id: 'b', text: 'King George III' }, { id: 'c', text: 'Queen Elizabeth II' }, { id: 'd', text: 'King Henry VIII' }],
        correctAnswer: 'c', explanation: 'Queen Elizabeth II reigned for 70 years!', funFact: 'She reigned from 1952 to 2022!'
      },
      {
        type: 'mcq', question: 'What civilization invented writing?', categoryId: 'history',
        options: [{ id: 'a', text: 'Egyptians' }, { id: 'b', text: 'Sumerians' }, { id: 'c', text: 'Chinese' }, { id: 'd', text: 'Greeks' }],
        correctAnswer: 'b', explanation: 'The Sumerians invented cuneiform writing!', funFact: 'They lived in Mesopotamia (modern Iraq)!'
      },
      {
        type: 'mcq', question: 'What was the code of the samurai called?', categoryId: 'history',
        options: [{ id: 'a', text: 'Shogun' }, { id: 'b', text: 'Bushido' }, { id: 'c', text: 'Haiku' }, { id: 'd', text: 'Zen' }],
        correctAnswer: 'b', explanation: 'Bushido was the way of the warrior!', funFact: 'It emphasized honor, loyalty, and discipline!'
      },
      {
        type: 'mcq', question: 'Who led India to independence through nonviolent resistance?', categoryId: 'history',
        options: [{ id: 'a', text: 'Jawaharlal Nehru' }, { id: 'b', text: 'Mahatma Gandhi' }, { id: 'c', text: 'Subhas Chandra Bose' }, { id: 'd', text: 'Bhagat Singh' }],
        correctAnswer: 'b', explanation: 'Mahatma Gandhi led nonviolent protests!', funFact: 'He was called the "Father of the Nation!"'
      },
      {
        type: 'mcq', question: 'What event started World War I?', categoryId: 'history',
        options: [{ id: 'a', text: 'Sinking of Lusitania' }, { id: 'b', text: 'Assassination of Archduke Franz Ferdinand' }, { id: 'c', text: 'German invasion of Poland' }, { id: 'd', text: 'Russian Revolution' }],
        correctAnswer: 'b', explanation: 'Archduke Franz Ferdinand was assassinated in 1914!', funFact: 'He was heir to the Austro-Hungarian throne!'
      },
      {
        type: 'mcq', question: 'What ancient trade route connected China to the West?', categoryId: 'history',
        options: [{ id: 'a', text: 'Spice Route' }, { id: 'b', text: 'Silk Road' }, { id: 'c', text: 'Tea Trail' }, { id: 'd', text: 'Gold Road' }],
        correctAnswer: 'b', explanation: 'The Silk Road connected East and West!', funFact: 'It was used for over 1,500 years!'
      },
      {
        type: 'true-false', question: 'The Renaissance started in Italy.', categoryId: 'history',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'The Renaissance began in Italy in the 14th century!', funFact: 'Renaissance means "rebirth" in French!'
      },
      {
        type: 'mcq', question: 'Who discovered penicillin?', categoryId: 'history',
        options: [{ id: 'a', text: 'Louis Pasteur' }, { id: 'b', text: 'Alexander Fleming' }, { id: 'c', text: 'Jonas Salk' }, { id: 'd', text: 'Marie Curie' }],
        correctAnswer: 'b', explanation: 'Alexander Fleming discovered penicillin in 1928!', funFact: 'It was the first antibiotic!'
      },
      {
        type: 'mcq', question: 'What was the Manhattan Project?', categoryId: 'history',
        options: [{ id: 'a', text: 'Building skyscrapers' }, { id: 'b', text: 'Developing atomic bomb' }, { id: 'c', text: 'Moon landing' }, { id: 'd', text: 'Internet creation' }],
        correctAnswer: 'b', explanation: 'It was the secret project to develop nuclear weapons!', funFact: 'It was led by J. Robert Oppenheimer!'
      },
      {
        type: 'mcq', question: 'Who was the first woman to fly solo across the Atlantic?', categoryId: 'history',
        options: [{ id: 'a', text: 'Bessie Coleman' }, { id: 'b', text: 'Amelia Earhart' }, { id: 'c', text: 'Harriet Quimby' }, { id: 'd', text: 'Jacqueline Cochran' }],
        correctAnswer: 'b', explanation: 'Amelia Earhart flew solo in 1932!', funFact: 'She mysteriously disappeared in 1937!'
      },
      {
        type: 'mcq', question: 'What year did the Soviet Union collapse?', categoryId: 'history',
        options: [{ id: 'a', text: '1989' }, { id: 'b', text: '1990' }, { id: 'c', text: '1991' }, { id: 'd', text: '1992' }],
        correctAnswer: 'c', explanation: 'The Soviet Union dissolved on December 26, 1991!', funFact: 'It split into 15 independent countries!'
      },
      {
        type: 'mcq', question: 'Who unified Germany in 1871?', categoryId: 'history',
        options: [{ id: 'a', text: 'Kaiser Wilhelm I' }, { id: 'b', text: 'Otto von Bismarck' }, { id: 'c', text: 'Frederick the Great' }, { id: 'd', text: 'Charlemagne' }],
        correctAnswer: 'b', explanation: 'Bismarck unified Germany through diplomacy and war!', funFact: 'He was called the "Iron Chancellor!"'
      },
      {
        type: 'mcq', question: 'What was the Black Death?', categoryId: 'history',
        options: [{ id: 'a', text: 'A war' }, { id: 'b', text: 'A plague' }, { id: 'c', text: 'A famine' }, { id: 'd', text: 'An earthquake' }],
        correctAnswer: 'b', explanation: 'The Black Death was a devastating plague!', funFact: 'It killed about one-third of Europes population!'
      },
      {
        type: 'mcq', question: 'Who was the first person in space?', categoryId: 'history',
        options: [{ id: 'a', text: 'Neil Armstrong' }, { id: 'b', text: 'John Glenn' }, { id: 'c', text: 'Yuri Gagarin' }, { id: 'd', text: 'Buzz Aldrin' }],
        correctAnswer: 'c', explanation: 'Yuri Gagarin went to space on April 12, 1961!', funFact: 'He orbited Earth once in 108 minutes!'
      },
      {
        type: 'mcq', question: 'What ancient city was destroyed by a volcano in 79 AD?', categoryId: 'history',
        options: [{ id: 'a', text: 'Athens' }, { id: 'b', text: 'Rome' }, { id: 'c', text: 'Pompeii' }, { id: 'd', text: 'Carthage' }],
        correctAnswer: 'c', explanation: 'Mount Vesuvius destroyed Pompeii!', funFact: 'The city was buried under volcanic ash!'
      },
      {
        type: 'mcq', question: 'Who wrote "The Art of War"?', categoryId: 'history',
        options: [{ id: 'a', text: 'Confucius' }, { id: 'b', text: 'Sun Tzu' }, { id: 'c', text: 'Lao Tzu' }, { id: 'd', text: 'Mencius' }],
        correctAnswer: 'b', explanation: 'Sun Tzu wrote this famous military strategy book!', funFact: 'Its still studied by military leaders today!'
      },
      {
        type: 'mcq', question: 'What empire was Constantinople the capital of?', categoryId: 'history',
        options: [{ id: 'a', text: 'Roman' }, { id: 'b', text: 'Ottoman' }, { id: 'c', text: 'Byzantine' }, { id: 'd', text: 'All of the above' }],
        correctAnswer: 'd', explanation: 'It was capital of all three empires at different times!', funFact: 'Its now called Istanbul!'
      },
    ];

    // JUNIORS ENGLISH/WORD MASTER QUESTIONS BY DIFFICULTY
    const englishJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the opposite of "hot"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Warm' }, { id: 'b', text: 'Cold' }, { id: 'c', text: 'Cool' }, { id: 'd', text: 'Mild' }],
        correctAnswer: 'b', explanation: 'Cold is the opposite of hot!', funFact: 'These are called antonyms!'
      },
      {
        type: 'mcq', question: 'Which word is a noun?', categoryId: 'english',
        options: [{ id: 'a', text: 'Run' }, { id: 'b', text: 'Happy' }, { id: 'c', text: 'Dog' }, { id: 'd', text: 'Quickly' }],
        correctAnswer: 'c', explanation: 'Dog is a noun - a person, place, or thing!', funFact: 'Nouns are naming words!'
      },
      {
        type: 'mcq', question: 'What punctuation mark ends a question?', categoryId: 'english',
        options: [{ id: 'a', text: 'Period .' }, { id: 'b', text: 'Comma ,' }, { id: 'c', text: 'Question mark ?' }, { id: 'd', text: 'Exclamation !' }],
        correctAnswer: 'c', explanation: 'Questions end with a question mark!', funFact: 'It looks like a hook with a dot!'
      },
      {
        type: 'mcq', question: 'Which word rhymes with "cat"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Dog' }, { id: 'b', text: 'Hat' }, { id: 'c', text: 'Cup' }, { id: 'd', text: 'Run' }],
        correctAnswer: 'b', explanation: 'Cat and hat rhyme - they end with the same sound!', funFact: 'Rhyming is fun in poems and songs!'
      },
      {
        type: 'mcq', question: 'What is a word that means the same as "big"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Small' }, { id: 'b', text: 'Tiny' }, { id: 'c', text: 'Large' }, { id: 'd', text: 'Little' }],
        correctAnswer: 'c', explanation: 'Large means the same as big!', funFact: 'Words with similar meanings are synonyms!'
      },
      {
        type: 'mcq', question: 'How many vowels are in the English alphabet?', categoryId: 'english',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
        correctAnswer: 'b', explanation: 'A, E, I, O, U are the 5 vowels!', funFact: 'Sometimes Y acts like a vowel too!'
      },
      {
        type: 'true-false', question: 'A sentence always starts with a capital letter.', categoryId: 'english',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Every sentence begins with a capital letter!', funFact: 'Names also start with capital letters!'
      },
      {
        type: 'mcq', question: 'Which is a verb?', categoryId: 'english',
        options: [{ id: 'a', text: 'Table' }, { id: 'b', text: 'Jump' }, { id: 'c', text: 'Beautiful' }, { id: 'd', text: 'Slowly' }],
        correctAnswer: 'b', explanation: 'Jump is a verb - an action word!', funFact: 'Verbs show what someone does!'
      },
      {
        type: 'mcq', question: 'What is the plural of "child"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Childs' }, { id: 'b', text: 'Childes' }, { id: 'c', text: 'Children' }, { id: 'd', text: 'Childies' }],
        correctAnswer: 'c', explanation: 'Children is the plural of child!', funFact: 'Some plurals dont just add "s"!'
      },
      {
        type: 'mcq', question: 'Which sentence is correct?', categoryId: 'english',
        options: [{ id: 'a', text: 'She dont like apples.' }, { id: 'b', text: 'She doesnt like apples.' }, { id: 'c', text: 'She not like apples.' }, { id: 'd', text: 'She no like apples.' }],
        correctAnswer: 'b', explanation: 'She doesnt like apples is correct!', funFact: 'Doesnt is short for does not!'
      },
      {
        type: 'mcq', question: 'What type of word is "quickly"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Noun' }, { id: 'b', text: 'Verb' }, { id: 'c', text: 'Adjective' }, { id: 'd', text: 'Adverb' }],
        correctAnswer: 'd', explanation: 'Quickly is an adverb - it describes how!', funFact: 'Most adverbs end in -ly!'
      },
      {
        type: 'mcq', question: 'What letter comes after Q in the alphabet?', categoryId: 'english',
        options: [{ id: 'a', text: 'P' }, { id: 'b', text: 'R' }, { id: 'c', text: 'S' }, { id: 'd', text: 'T' }],
        correctAnswer: 'b', explanation: 'Q, R, S... R comes after Q!', funFact: 'Q is almost always followed by U in words!'
      },
    ];

    const englishJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is a homophone of "there"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Here' }, { id: 'b', text: 'Their' }, { id: 'c', text: 'Where' }, { id: 'd', text: 'Near' }],
        correctAnswer: 'b', explanation: 'There and their sound the same but have different meanings!', funFact: 'Theyre is also a homophone!'
      },
      {
        type: 'mcq', question: 'What is a compound word?', categoryId: 'english',
        options: [{ id: 'a', text: 'Running' }, { id: 'b', text: 'Sunshine' }, { id: 'c', text: 'Happy' }, { id: 'd', text: 'Quickly' }],
        correctAnswer: 'b', explanation: 'Sunshine is made of two words: sun + shine!', funFact: 'Butterfly is also a compound word!'
      },
      {
        type: 'mcq', question: 'Which word is spelled correctly?', categoryId: 'english',
        options: [{ id: 'a', text: 'Recieve' }, { id: 'b', text: 'Receive' }, { id: 'c', text: 'Receve' }, { id: 'd', text: 'Receeve' }],
        correctAnswer: 'b', explanation: 'Receive is spelled correctly!', funFact: 'I before E except after C!'
      },
      {
        type: 'mcq', question: 'What is the past tense of "go"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Goed' }, { id: 'b', text: 'Gone' }, { id: 'c', text: 'Went' }, { id: 'd', text: 'Going' }],
        correctAnswer: 'c', explanation: 'Went is the past tense of go!', funFact: 'Go is an irregular verb!'
      },
      {
        type: 'mcq', question: 'What does the prefix "un-" mean?', categoryId: 'english',
        options: [{ id: 'a', text: 'Again' }, { id: 'b', text: 'Not' }, { id: 'c', text: 'Before' }, { id: 'd', text: 'After' }],
        correctAnswer: 'b', explanation: 'Un- means not! Unhappy means not happy!', funFact: 'Un- is one of the most common prefixes!'
      },
      {
        type: 'mcq', question: 'Which sentence uses correct punctuation?', categoryId: 'english',
        options: [{ id: 'a', text: 'I like apples oranges and bananas.' }, { id: 'b', text: 'I like apples, oranges, and bananas.' }, { id: 'c', text: 'I like, apples oranges and bananas.' }, { id: 'd', text: 'I like apples oranges, and bananas.' }],
        correctAnswer: 'b', explanation: 'Commas separate items in a list!', funFact: 'The last comma is called an Oxford comma!'
      },
      {
        type: 'mcq', question: 'What is the superlative form of "good"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Gooder' }, { id: 'b', text: 'More good' }, { id: 'c', text: 'Best' }, { id: 'd', text: 'Most good' }],
        correctAnswer: 'c', explanation: 'Good, better, best!', funFact: 'Bad, worse, worst works the same way!'
      },
      {
        type: 'true-false', question: 'An adjective describes a noun.', categoryId: 'english',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Adjectives describe nouns - like "red ball"!', funFact: 'Beautiful, tall, and happy are all adjectives!'
      },
      {
        type: 'mcq', question: 'What is an antonym of "ancient"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Old' }, { id: 'b', text: 'Historic' }, { id: 'c', text: 'Modern' }, { id: 'd', text: 'Traditional' }],
        correctAnswer: 'c', explanation: 'Modern is the opposite of ancient!', funFact: 'Antonym comes from Greek anti- (opposite)!'
      },
      {
        type: 'mcq', question: 'What is the correct possessive form?', categoryId: 'english',
        options: [{ id: 'a', text: 'The dogs bone' }, { id: 'b', text: 'The dogs bone' }, { id: 'c', text: 'The dog bone' }, { id: 'd', text: 'The dogs bone' }],
        correctAnswer: 'b', explanation: 'Use apostrophe + s to show possession!', funFact: 'For plural possessives, the apostrophe goes after the s!'
      },
      {
        type: 'mcq', question: 'Which word contains a silent letter?', categoryId: 'english',
        options: [{ id: 'a', text: 'Lamp' }, { id: 'b', text: 'Knife' }, { id: 'c', text: 'Stop' }, { id: 'd', text: 'Frog' }],
        correctAnswer: 'b', explanation: 'The K in knife is silent!', funFact: 'Knight, know, and knee also have silent Ks!'
      },
      {
        type: 'mcq', question: 'What type of sentence is "Wow, thats amazing!"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Declarative' }, { id: 'b', text: 'Interrogative' }, { id: 'c', text: 'Imperative' }, { id: 'd', text: 'Exclamatory' }],
        correctAnswer: 'd', explanation: 'Exclamatory sentences show strong emotion!', funFact: 'They always end with an exclamation mark!'
      },
      {
        type: 'mcq', question: 'What does the suffix "-tion" often indicate?', categoryId: 'english',
        options: [{ id: 'a', text: 'A person' }, { id: 'b', text: 'An action or state' }, { id: 'c', text: 'A place' }, { id: 'd', text: 'A time' }],
        correctAnswer: 'b', explanation: '-tion turns verbs into nouns! Act → Action', funFact: 'Education, nation, and station all end in -tion!'
      },
      {
        type: 'mcq', question: 'What is the plural of "mouse"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Mouses' }, { id: 'b', text: 'Mice' }, { id: 'c', text: 'Mousies' }, { id: 'd', text: 'Mices' }],
        correctAnswer: 'b', explanation: 'Mice is the irregular plural of mouse!', funFact: 'Goose becomes geese the same way!'
      },
      {
        type: 'mcq', question: 'Which word is a conjunction?', categoryId: 'english',
        options: [{ id: 'a', text: 'Quickly' }, { id: 'b', text: 'Beautiful' }, { id: 'c', text: 'And' }, { id: 'd', text: 'Happy' }],
        correctAnswer: 'c', explanation: 'And is a conjunction that joins words or sentences!', funFact: 'But, or, and so are also conjunctions!'
      },
    ];

    const englishJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is an oxymoron?', categoryId: 'english',
        options: [{ id: 'a', text: 'A type of verb' }, { id: 'b', text: 'Contradictory terms together' }, { id: 'c', text: 'A long sentence' }, { id: 'd', text: 'A type of noun' }],
        correctAnswer: 'b', explanation: 'An oxymoron combines opposite words like "jumbo shrimp"!', funFact: '"Deafening silence" is another example!'
      },
      {
        type: 'mcq', question: 'What is the subjunctive mood?', categoryId: 'english',
        options: [{ id: 'a', text: 'Past tense' }, { id: 'b', text: 'Hypothetical situations' }, { id: 'c', text: 'Commands' }, { id: 'd', text: 'Questions' }],
        correctAnswer: 'b', explanation: 'Subjunctive is for wishes and hypotheticals!', funFact: '"If I were you" uses subjunctive!'
      },
      {
        type: 'mcq', question: 'What is onomatopoeia?', categoryId: 'english',
        options: [{ id: 'a', text: 'A comparison' }, { id: 'b', text: 'A type of rhyme' }, { id: 'c', text: 'Words that sound like their meaning' }, { id: 'd', text: 'An exaggeration' }],
        correctAnswer: 'c', explanation: 'Buzz, pop, and splash are onomatopoeia!', funFact: 'Comic books use lots of onomatopoeia!'
      },
      {
        type: 'mcq', question: 'What is the difference between "affect" and "effect"?', categoryId: 'english',
        options: [{ id: 'a', text: 'They mean the same' }, { id: 'b', text: 'Affect is a verb, effect is a noun' }, { id: 'c', text: 'Effect is a verb, affect is a noun' }, { id: 'd', text: 'Both are verbs' }],
        correctAnswer: 'b', explanation: 'Affect is usually a verb, effect is usually a noun!', funFact: 'Remember: Affect = Action!'
      },
      {
        type: 'mcq', question: 'What is a dangling modifier?', categoryId: 'english',
        options: [{ id: 'a', text: 'A modifier without a clear subject' }, { id: 'b', text: 'An adverb at the end' }, { id: 'c', text: 'Two adjectives together' }, { id: 'd', text: 'A split infinitive' }],
        correctAnswer: 'a', explanation: 'It modifies something not in the sentence!', funFact: '"Running quickly, the bus was missed" is wrong!'
      },
      {
        type: 'mcq', question: 'What literary device is "The wind whispered secrets"?', categoryId: 'english',
        options: [{ id: 'a', text: 'Simile' }, { id: 'b', text: 'Personification' }, { id: 'c', text: 'Metaphor' }, { id: 'd', text: 'Alliteration' }],
        correctAnswer: 'b', explanation: 'Personification gives human qualities to non-humans!', funFact: 'Wind cant actually whisper!'
      },
      {
        type: 'mcq', question: 'What is the difference between "who" and "whom"?', categoryId: 'english',
        options: [{ id: 'a', text: 'No difference' }, { id: 'b', text: 'Who=subject, whom=object' }, { id: 'c', text: 'Whom=subject, who=object' }, { id: 'd', text: 'Who is formal, whom is informal' }],
        correctAnswer: 'b', explanation: 'Who is subject, whom is object!', funFact: 'Try: he=who, him=whom!'
      },
      {
        type: 'true-false', question: 'A semicolon can join two independent clauses.', categoryId: 'english',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Semicolons connect related independent clauses!', funFact: 'Its stronger than a comma but weaker than a period!'
      },
      {
        type: 'mcq', question: 'What is an appositive?', categoryId: 'english',
        options: [{ id: 'a', text: 'A type of verb' }, { id: 'b', text: 'A noun phrase that renames another noun' }, { id: 'c', text: 'A type of clause' }, { id: 'd', text: 'An opposite word' }],
        correctAnswer: 'b', explanation: '"My brother, a doctor, lives nearby" - "a doctor" is appositive!', funFact: 'Appositives are set off by commas!'
      },
      {
        type: 'mcq', question: 'What is the Oxford comma?', categoryId: 'english',
        options: [{ id: 'a', text: 'A comma before "and" in a list' }, { id: 'b', text: 'A comma after a greeting' }, { id: 'c', text: 'A British punctuation mark' }, { id: 'd', text: 'A comma in dates' }],
        correctAnswer: 'a', explanation: 'Its the comma before "and" in a series!', funFact: 'Some style guides require it, others dont!'
      },
      {
        type: 'mcq', question: 'What is a portmanteau word?', categoryId: 'english',
        options: [{ id: 'a', text: 'A borrowed word' }, { id: 'b', text: 'Two words blended together' }, { id: 'c', text: 'An old English word' }, { id: 'd', text: 'A proper noun' }],
        correctAnswer: 'b', explanation: 'Brunch (breakfast + lunch) is a portmanteau!', funFact: 'Smog (smoke + fog) is another!'
      },
      {
        type: 'mcq', question: 'What is irony?', categoryId: 'english',
        options: [{ id: 'a', text: 'A direct comparison' }, { id: 'b', text: 'Exaggeration' }, { id: 'c', text: 'Opposite of what is expected' }, { id: 'd', text: 'Repetition' }],
        correctAnswer: 'c', explanation: 'Irony is when the opposite of whats expected happens!', funFact: 'A fire station burning down is ironic!'
      },
      {
        type: 'mcq', question: 'What is the passive voice of "The cat caught the mouse"?', categoryId: 'english',
        options: [{ id: 'a', text: 'The mouse caught the cat.' }, { id: 'b', text: 'The mouse was caught by the cat.' }, { id: 'c', text: 'The cat was catching the mouse.' }, { id: 'd', text: 'Catching the mouse was the cat.' }],
        correctAnswer: 'b', explanation: 'In passive voice, the object becomes the subject!', funFact: 'Active voice is usually stronger in writing!'
      },
      {
        type: 'mcq', question: 'What is a split infinitive?', categoryId: 'english',
        options: [{ id: 'a', text: 'Two verbs together' }, { id: 'b', text: 'A word between "to" and a verb' }, { id: 'c', text: 'A broken sentence' }, { id: 'd', text: 'A verb without a subject' }],
        correctAnswer: 'b', explanation: '"To boldly go" splits the infinitive "to go"!', funFact: 'Star Trek made this famous!'
      },
      {
        type: 'mcq', question: 'What does "etymology" study?', categoryId: 'english',
        options: [{ id: 'a', text: 'Insects' }, { id: 'b', text: 'Word origins' }, { id: 'c', text: 'Sentence structure' }, { id: 'd', text: 'Pronunciation' }],
        correctAnswer: 'b', explanation: 'Etymology is the study of word history and origins!', funFact: 'The word itself comes from Greek!'
      },
      {
        type: 'mcq', question: 'What is alliteration?', categoryId: 'english',
        options: [{ id: 'a', text: 'Repeating ending sounds' }, { id: 'b', text: 'Repeating beginning sounds' }, { id: 'c', text: 'Rhyming words' }, { id: 'd', text: 'Similar meanings' }],
        correctAnswer: 'b', explanation: '"Peter Piper picked" has alliteration with P!', funFact: 'Tongue twisters often use alliteration!'
      },
      {
        type: 'mcq', question: 'What is a gerund?', categoryId: 'english',
        options: [{ id: 'a', text: 'A verb ending in -ed' }, { id: 'b', text: 'A verb ending in -ing used as a noun' }, { id: 'c', text: 'A type of adjective' }, { id: 'd', text: 'A past tense verb' }],
        correctAnswer: 'b', explanation: '"Swimming is fun" - swimming is a gerund!', funFact: 'Gerunds always end in -ing!'
      },
      {
        type: 'mcq', question: 'What is a malapropism?', categoryId: 'english',
        options: [{ id: 'a', text: 'Using a wrong but similar-sounding word' }, { id: 'b', text: 'A type of metaphor' }, { id: 'c', text: 'An archaic word' }, { id: 'd', text: 'A regional dialect' }],
        correctAnswer: 'a', explanation: 'Saying "for all intensive purposes" instead of "intents and purposes"!', funFact: 'Named after Mrs. Malaprop, a character in a play!'
      },
      {
        type: 'mcq', question: 'What is synecdoche?', categoryId: 'english',
        options: [{ id: 'a', text: 'Part represents whole or vice versa' }, { id: 'b', text: 'Comparison using "like"' }, { id: 'c', text: 'An understatement' }, { id: 'd', text: 'A type of rhyme' }],
        correctAnswer: 'a', explanation: '"All hands on deck" - hands represent sailors!', funFact: 'Its a type of metonymy!'
      },
      {
        type: 'mcq', question: 'What is the pluperfect tense?', categoryId: 'english',
        options: [{ id: 'a', text: 'Simple past' }, { id: 'b', text: 'Past before another past event' }, { id: 'c', text: 'Future perfect' }, { id: 'd', text: 'Present continuous' }],
        correctAnswer: 'b', explanation: '"I had eaten before she arrived" - had eaten is pluperfect!', funFact: 'Also called past perfect!'
      },
    ];

    // JUNIORS SPACE ADVENTURE QUESTIONS BY DIFFICULTY
    const spaceJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the closest star to Earth?', categoryId: 'space',
        options: [{ id: 'a', text: 'North Star' }, { id: 'b', text: 'The Sun' }, { id: 'c', text: 'Sirius' }, { id: 'd', text: 'Alpha Centauri' }],
        correctAnswer: 'b', explanation: 'The Sun is our closest star!', funFact: 'The Sun is about 93 million miles away!'
      },
      {
        type: 'mcq', question: 'How many planets are in our solar system?', categoryId: 'space',
        options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
        correctAnswer: 'b', explanation: 'There are 8 planets in our solar system!', funFact: 'Pluto was reclassified as a dwarf planet!'
      },
      {
        type: 'mcq', question: 'Which planet is known as the Red Planet?', categoryId: 'space',
        options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Mars' }, { id: 'c', text: 'Jupiter' }, { id: 'd', text: 'Saturn' }],
        correctAnswer: 'b', explanation: 'Mars is the Red Planet!', funFact: 'Its red color comes from iron oxide (rust)!'
      },
      {
        type: 'mcq', question: 'What do astronauts wear in space?', categoryId: 'space',
        options: [{ id: 'a', text: 'Swimsuits' }, { id: 'b', text: 'Space suits' }, { id: 'c', text: 'Regular clothes' }, { id: 'd', text: 'Pajamas' }],
        correctAnswer: 'b', explanation: 'Space suits protect astronauts in space!', funFact: 'A space suit costs about $12 million!'
      },
      {
        type: 'mcq', question: 'What is Earths natural satellite?', categoryId: 'space',
        options: [{ id: 'a', text: 'The Sun' }, { id: 'b', text: 'Mars' }, { id: 'c', text: 'The Moon' }, { id: 'd', text: 'A star' }],
        correctAnswer: 'c', explanation: 'The Moon orbits around Earth!', funFact: 'The Moon is about 238,855 miles from Earth!'
      },
      {
        type: 'mcq', question: 'Which planet has beautiful rings?', categoryId: 'space',
        options: [{ id: 'a', text: 'Jupiter' }, { id: 'b', text: 'Mars' }, { id: 'c', text: 'Saturn' }, { id: 'd', text: 'Venus' }],
        correctAnswer: 'c', explanation: 'Saturn is famous for its beautiful rings!', funFact: 'Saturns rings are made of ice and rock!'
      },
      {
        type: 'true-false', question: 'The Sun is a planet.', categoryId: 'space',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'The Sun is a star, not a planet!', funFact: 'The Sun is made of hot gases!'
      },
      {
        type: 'mcq', question: 'Which planet is the largest?', categoryId: 'space',
        options: [{ id: 'a', text: 'Earth' }, { id: 'b', text: 'Saturn' }, { id: 'c', text: 'Jupiter' }, { id: 'd', text: 'Neptune' }],
        correctAnswer: 'c', explanation: 'Jupiter is the largest planet!', funFact: 'Jupiter could fit over 1,300 Earths inside it!'
      },
      {
        type: 'mcq', question: 'What is a shooting star?', categoryId: 'space',
        options: [{ id: 'a', text: 'A dying star' }, { id: 'b', text: 'A meteor' }, { id: 'c', text: 'A comet' }, { id: 'd', text: 'A planet' }],
        correctAnswer: 'b', explanation: 'Shooting stars are meteors burning up in our atmosphere!', funFact: 'They are usually tiny pieces of space dust!'
      },
      {
        type: 'mcq', question: 'What galaxy do we live in?', categoryId: 'space',
        options: [{ id: 'a', text: 'Andromeda' }, { id: 'b', text: 'Milky Way' }, { id: 'c', text: 'Triangulum' }, { id: 'd', text: 'Whirlpool' }],
        correctAnswer: 'b', explanation: 'We live in the Milky Way galaxy!', funFact: 'It contains over 100 billion stars!'
      },
      {
        type: 'mcq', question: 'Who was the first person to walk on the Moon?', categoryId: 'space',
        options: [{ id: 'a', text: 'Buzz Aldrin' }, { id: 'b', text: 'Yuri Gagarin' }, { id: 'c', text: 'Neil Armstrong' }, { id: 'd', text: 'John Glenn' }],
        correctAnswer: 'c', explanation: 'Neil Armstrong walked on the Moon in 1969!', funFact: 'He said "One small step for man"!'
      },
      {
        type: 'mcq', question: 'What planet is closest to the Sun?', categoryId: 'space',
        options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Mercury' }, { id: 'c', text: 'Earth' }, { id: 'd', text: 'Mars' }],
        correctAnswer: 'b', explanation: 'Mercury is closest to the Sun!', funFact: 'Mercury has no moons!'
      },
    ];

    const spaceJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the hottest planet in our solar system?', categoryId: 'space',
        options: [{ id: 'a', text: 'Mercury' }, { id: 'b', text: 'Venus' }, { id: 'c', text: 'Mars' }, { id: 'd', text: 'Jupiter' }],
        correctAnswer: 'b', explanation: 'Venus is hottest due to its thick atmosphere!', funFact: 'Venus is about 900°F (475°C)!'
      },
      {
        type: 'mcq', question: 'What is the Great Red Spot on Jupiter?', categoryId: 'space',
        options: [{ id: 'a', text: 'A volcano' }, { id: 'b', text: 'A giant storm' }, { id: 'c', text: 'A moon' }, { id: 'd', text: 'A crater' }],
        correctAnswer: 'b', explanation: 'Its a giant storm thats been raging for centuries!', funFact: 'The storm is bigger than Earth!'
      },
      {
        type: 'mcq', question: 'What causes the phases of the Moon?', categoryId: 'space',
        options: [{ id: 'a', text: 'Earths shadow' }, { id: 'b', text: 'The Moons orbit' }, { id: 'c', text: 'Solar eclipses' }, { id: 'd', text: 'The Suns movement' }],
        correctAnswer: 'b', explanation: 'We see different amounts of the lit side as the Moon orbits!', funFact: 'A lunar cycle takes about 29.5 days!'
      },
      {
        type: 'mcq', question: 'What is a light-year?', categoryId: 'space',
        options: [{ id: 'a', text: 'A unit of time' }, { id: 'b', text: 'A unit of distance' }, { id: 'c', text: 'A type of star' }, { id: 'd', text: 'A planet size' }],
        correctAnswer: 'b', explanation: 'A light-year is the distance light travels in one year!', funFact: 'Thats about 6 trillion miles!'
      },
      {
        type: 'mcq', question: 'Which planet spins on its side?', categoryId: 'space',
        options: [{ id: 'a', text: 'Mars' }, { id: 'b', text: 'Neptune' }, { id: 'c', text: 'Uranus' }, { id: 'd', text: 'Saturn' }],
        correctAnswer: 'c', explanation: 'Uranus rotates nearly on its side!', funFact: 'Scientists think a collision caused this!'
      },
      {
        type: 'mcq', question: 'What is the ISS?', categoryId: 'space',
        options: [{ id: 'a', text: 'A telescope' }, { id: 'b', text: 'A space station' }, { id: 'c', text: 'A rocket' }, { id: 'd', text: 'A satellite' }],
        correctAnswer: 'b', explanation: 'ISS is the International Space Station!', funFact: 'Astronauts live and work there!'
      },
      {
        type: 'mcq', question: 'How long does it take Earth to orbit the Sun?', categoryId: 'space',
        options: [{ id: 'a', text: '24 hours' }, { id: 'b', text: '30 days' }, { id: 'c', text: '365 days' }, { id: 'd', text: '7 days' }],
        correctAnswer: 'c', explanation: 'One year is one orbit around the Sun!', funFact: 'Earth travels at 67,000 mph!'
      },
      {
        type: 'mcq', question: 'What is a black hole?', categoryId: 'space',
        options: [{ id: 'a', text: 'A dead star' }, { id: 'b', text: 'Region with extreme gravity' }, { id: 'c', text: 'A dark planet' }, { id: 'd', text: 'Empty space' }],
        correctAnswer: 'b', explanation: 'Black holes have gravity so strong even light cant escape!', funFact: 'They form when massive stars collapse!'
      },
      {
        type: 'true-false', question: 'Sound can travel through space.', categoryId: 'space',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'Space is a vacuum - sound needs air to travel!', funFact: 'In space, no one can hear you scream!'
      },
      {
        type: 'mcq', question: 'What is the asteroid belt?', categoryId: 'space',
        options: [{ id: 'a', text: 'Saturns rings' }, { id: 'b', text: 'Region between Mars and Jupiter' }, { id: 'c', text: 'Neptunes moons' }, { id: 'd', text: 'The Kuiper Belt' }],
        correctAnswer: 'b', explanation: 'Millions of asteroids orbit between Mars and Jupiter!', funFact: 'The largest asteroid is Ceres!'
      },
      {
        type: 'mcq', question: 'Which planet has the most moons?', categoryId: 'space',
        options: [{ id: 'a', text: 'Jupiter' }, { id: 'b', text: 'Saturn' }, { id: 'c', text: 'Uranus' }, { id: 'd', text: 'Neptune' }],
        correctAnswer: 'b', explanation: 'Saturn has over 140 known moons!', funFact: 'Titan is Saturns largest moon!'
      },
      {
        type: 'mcq', question: 'What is a supernova?', categoryId: 'space',
        options: [{ id: 'a', text: 'A new star' }, { id: 'b', text: 'An exploding star' }, { id: 'c', text: 'A comet' }, { id: 'd', text: 'A galaxy' }],
        correctAnswer: 'b', explanation: 'A supernova is a massive star explosion!', funFact: 'They can outshine entire galaxies!'
      },
      {
        type: 'mcq', question: 'What space telescope orbits Earth?', categoryId: 'space',
        options: [{ id: 'a', text: 'Webb' }, { id: 'b', text: 'Hubble' }, { id: 'c', text: 'Kepler' }, { id: 'd', text: 'All of the above' }],
        correctAnswer: 'b', explanation: 'Hubble has orbited Earth since 1990!', funFact: 'Webb is at a special point 1 million miles away!'
      },
      {
        type: 'mcq', question: 'What are Saturns rings made of?', categoryId: 'space',
        options: [{ id: 'a', text: 'Gas' }, { id: 'b', text: 'Ice and rock' }, { id: 'c', text: 'Dust only' }, { id: 'd', text: 'Metal' }],
        correctAnswer: 'b', explanation: 'The rings are ice particles and rocky debris!', funFact: 'Some pieces are as small as sand grains!'
      },
      {
        type: 'mcq', question: 'What is the Kuiper Belt?', categoryId: 'space',
        options: [{ id: 'a', text: 'Asteroid belt' }, { id: 'b', text: 'Region beyond Neptune' }, { id: 'c', text: 'Saturns rings' }, { id: 'd', text: 'A constellation' }],
        correctAnswer: 'b', explanation: 'The Kuiper Belt is beyond Neptunes orbit!', funFact: 'Pluto is in the Kuiper Belt!'
      },
    ];

    const spaceJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the age of the universe?', categoryId: 'space',
        options: [{ id: 'a', text: '4.5 billion years' }, { id: 'b', text: '10 billion years' }, { id: 'c', text: '13.8 billion years' }, { id: 'd', text: '20 billion years' }],
        correctAnswer: 'c', explanation: 'The universe is about 13.8 billion years old!', funFact: 'Earth is only 4.5 billion years old!'
      },
      {
        type: 'mcq', question: 'What is dark matter?', categoryId: 'space',
        options: [{ id: 'a', text: 'Black holes' }, { id: 'b', text: 'Invisible matter that has gravity' }, { id: 'c', text: 'Dead stars' }, { id: 'd', text: 'Empty space' }],
        correctAnswer: 'b', explanation: 'Dark matter cant be seen but affects gravity!', funFact: 'It makes up about 27% of the universe!'
      },
      {
        type: 'mcq', question: 'What is a neutron star?', categoryId: 'space',
        options: [{ id: 'a', text: 'A new star' }, { id: 'b', text: 'Collapsed core of a massive star' }, { id: 'c', text: 'A type of planet' }, { id: 'd', text: 'A comet' }],
        correctAnswer: 'b', explanation: 'Neutron stars are incredibly dense!', funFact: 'A teaspoon would weigh billions of tons!'
      },
      {
        type: 'mcq', question: 'What causes a solar eclipse?', categoryId: 'space',
        options: [{ id: 'a', text: 'Earth blocking Moon' }, { id: 'b', text: 'Moon blocking Sun' }, { id: 'c', text: 'Sun blocking Moon' }, { id: 'd', text: 'Clouds' }],
        correctAnswer: 'b', explanation: 'The Moon passes between Earth and Sun!', funFact: 'Total eclipses are rare at any location!'
      },
      {
        type: 'mcq', question: 'What is the Oort Cloud?', categoryId: 'space',
        options: [{ id: 'a', text: 'A nebula' }, { id: 'b', text: 'Edge of the solar system' }, { id: 'c', text: 'A galaxy' }, { id: 'd', text: 'Jupiters atmosphere' }],
        correctAnswer: 'b', explanation: 'The Oort Cloud is at the very edge of our solar system!', funFact: 'Long-period comets come from there!'
      },
      {
        type: 'mcq', question: 'What is the escape velocity from Earth?', categoryId: 'space',
        options: [{ id: 'a', text: '5 km/s' }, { id: 'b', text: '11.2 km/s' }, { id: 'c', text: '25 km/s' }, { id: 'd', text: '50 km/s' }],
        correctAnswer: 'b', explanation: 'You need 11.2 km/s to escape Earths gravity!', funFact: 'Thats about 25,000 mph!'
      },
      {
        type: 'mcq', question: 'What type of galaxy is the Milky Way?', categoryId: 'space',
        options: [{ id: 'a', text: 'Elliptical' }, { id: 'b', text: 'Irregular' }, { id: 'c', text: 'Spiral' }, { id: 'd', text: 'Ring' }],
        correctAnswer: 'c', explanation: 'The Milky Way is a barred spiral galaxy!', funFact: 'We are in one of the spiral arms!'
      },
      {
        type: 'mcq', question: 'What is the Chandrasekhar limit?', categoryId: 'space',
        options: [{ id: 'a', text: 'Speed of light' }, { id: 'b', text: 'Maximum mass of white dwarf' }, { id: 'c', text: 'Size of black hole' }, { id: 'd', text: 'Distance to stars' }],
        correctAnswer: 'b', explanation: 'Its about 1.4 solar masses!', funFact: 'Beyond this, the star collapses further!'
      },
      {
        type: 'true-false', question: 'The Sun will eventually become a black hole.', categoryId: 'space',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: 'The Sun will become a white dwarf - its not massive enough!', funFact: 'Only very massive stars become black holes!'
      },
      {
        type: 'mcq', question: 'What causes auroras (Northern/Southern Lights)?', categoryId: 'space',
        options: [{ id: 'a', text: 'Moonlight' }, { id: 'b', text: 'Solar wind hitting atmosphere' }, { id: 'c', text: 'Volcanic gases' }, { id: 'd', text: 'City lights' }],
        correctAnswer: 'b', explanation: 'Charged particles from the Sun interact with our atmosphere!', funFact: 'Auroras also occur on other planets!'
      },
      {
        type: 'mcq', question: 'What is redshift?', categoryId: 'space',
        options: [{ id: 'a', text: 'Red-colored stars' }, { id: 'b', text: 'Light stretched as objects move away' }, { id: 'c', text: 'Sunset colors' }, { id: 'd', text: 'Mars appearance' }],
        correctAnswer: 'b', explanation: 'Redshift shows the universe is expanding!', funFact: 'Edwin Hubble discovered this!'
      },
      {
        type: 'mcq', question: 'What is a pulsar?', categoryId: 'space',
        options: [{ id: 'a', text: 'Exploding star' }, { id: 'b', text: 'Rotating neutron star emitting beams' }, { id: 'c', text: 'A type of galaxy' }, { id: 'd', text: 'A comet' }],
        correctAnswer: 'b', explanation: 'Pulsars spin and emit radiation beams like lighthouses!', funFact: 'Some spin hundreds of times per second!'
      },
      {
        type: 'mcq', question: 'What is the closest galaxy to Milky Way?', categoryId: 'space',
        options: [{ id: 'a', text: 'Andromeda' }, { id: 'b', text: 'Triangulum' }, { id: 'c', text: 'Canis Major Dwarf' }, { id: 'd', text: 'Large Magellanic Cloud' }],
        correctAnswer: 'c', explanation: 'The Canis Major Dwarf Galaxy is closest!', funFact: 'Andromeda is the closest large spiral galaxy!'
      },
      {
        type: 'mcq', question: 'What is Lagrange Point L2 used for?', categoryId: 'space',
        options: [{ id: 'a', text: 'Launching rockets' }, { id: 'b', text: 'Positioning space telescopes' }, { id: 'c', text: 'Mining asteroids' }, { id: 'd', text: 'Communication relays' }],
        correctAnswer: 'b', explanation: 'James Webb Space Telescope is at L2!', funFact: 'Its 1.5 million km from Earth!'
      },
      {
        type: 'mcq', question: 'What is the observable universe diameter?', categoryId: 'space',
        options: [{ id: 'a', text: '13.8 billion light-years' }, { id: 'b', text: '46 billion light-years' }, { id: 'c', text: '93 billion light-years' }, { id: 'd', text: '1 trillion light-years' }],
        correctAnswer: 'c', explanation: 'The observable universe is about 93 billion light-years across!', funFact: 'The universe has been expanding since the Big Bang!'
      },
      {
        type: 'mcq', question: 'What is cosmic microwave background radiation?', categoryId: 'space',
        options: [{ id: 'a', text: 'Heat from stars' }, { id: 'b', text: 'Leftover radiation from Big Bang' }, { id: 'c', text: 'Radiation from black holes' }, { id: 'd', text: 'Solar radiation' }],
        correctAnswer: 'b', explanation: 'Its the "afterglow" of the Big Bang!', funFact: 'Its everywhere in the universe!'
      },
      {
        type: 'mcq', question: 'What is spaghettification?', categoryId: 'space',
        options: [{ id: 'a', text: 'Making pasta in space' }, { id: 'b', text: 'Stretching by black hole gravity' }, { id: 'c', text: 'Star formation' }, { id: 'd', text: 'Galaxy collision' }],
        correctAnswer: 'b', explanation: 'Objects get stretched into long thin shapes near black holes!', funFact: 'Youd become "spaghetti" falling into one!'
      },
      {
        type: 'mcq', question: 'What is the Fermi Paradox?', categoryId: 'space',
        options: [{ id: 'a', text: 'A physics problem' }, { id: 'b', text: 'Why we havent found alien life' }, { id: 'c', text: 'Time travel theory' }, { id: 'd', text: 'Dark matter mystery' }],
        correctAnswer: 'b', explanation: 'If aliens exist, why havent we detected them?', funFact: 'Named after physicist Enrico Fermi!'
      },
      {
        type: 'mcq', question: 'What is a quasar?', categoryId: 'space',
        options: [{ id: 'a', text: 'A type of star' }, { id: 'b', text: 'Extremely bright active galactic nucleus' }, { id: 'c', text: 'A planet type' }, { id: 'd', text: 'A comet' }],
        correctAnswer: 'b', explanation: 'Quasars are powered by supermassive black holes!', funFact: 'They can outshine trillions of suns!'
      },
      {
        type: 'mcq', question: 'What is gravitational lensing?', categoryId: 'space',
        options: [{ id: 'a', text: 'A telescope type' }, { id: 'b', text: 'Light bending around massive objects' }, { id: 'c', text: 'A camera effect' }, { id: 'd', text: 'An optical illusion' }],
        correctAnswer: 'b', explanation: 'Massive objects bend light, acting like lenses!', funFact: 'Einstein predicted this!'
      },
    ];

    // JUNIORS SPORTS ARENA QUESTIONS BY DIFFICULTY
    const sportsJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'How many players are on a soccer team on the field?', categoryId: 'sports',
        options: [{ id: 'a', text: '9' }, { id: 'b', text: '10' }, { id: 'c', text: '11' }, { id: 'd', text: '12' }],
        correctAnswer: 'c', explanation: 'A soccer team has 11 players on the field!', funFact: 'Including the goalkeeper!'
      },
      {
        type: 'mcq', question: 'In which sport do you use a racket and shuttlecock?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Tennis' }, { id: 'b', text: 'Badminton' }, { id: 'c', text: 'Squash' }, { id: 'd', text: 'Table Tennis' }],
        correctAnswer: 'b', explanation: 'Badminton uses a shuttlecock!', funFact: 'Shuttlecocks can travel over 200 mph!'
      },
      {
        type: 'mcq', question: 'What sport is played at Wimbledon?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Cricket' }, { id: 'b', text: 'Tennis' }, { id: 'c', text: 'Golf' }, { id: 'd', text: 'Soccer' }],
        correctAnswer: 'b', explanation: 'Wimbledon is a famous tennis tournament!', funFact: 'Its played on grass courts!'
      },
      {
        type: 'mcq', question: 'How many points is a touchdown worth in American football?', categoryId: 'sports',
        options: [{ id: 'a', text: '3' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
        correctAnswer: 'c', explanation: 'A touchdown is worth 6 points!', funFact: 'Plus 1 or 2 extra points after!'
      },
      {
        type: 'mcq', question: 'What color is a basketball?', categoryId: 'sports',
        options: [{ id: 'a', text: 'White' }, { id: 'b', text: 'Black' }, { id: 'c', text: 'Orange' }, { id: 'd', text: 'Green' }],
        correctAnswer: 'c', explanation: 'Basketballs are orange!', funFact: 'The orange color was chosen for visibility!'
      },
      {
        type: 'mcq', question: 'In which sport would you do a slam dunk?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Volleyball' }, { id: 'b', text: 'Basketball' }, { id: 'c', text: 'Tennis' }, { id: 'd', text: 'Hockey' }],
        correctAnswer: 'b', explanation: 'Slam dunks are in basketball!', funFact: 'The ball goes through the hoop from above!'
      },
      {
        type: 'mcq', question: 'How many innings are in a standard baseball game?', categoryId: 'sports',
        options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
        correctAnswer: 'c', explanation: 'Baseball games have 9 innings!', funFact: 'Extra innings if the game is tied!'
      },
      {
        type: 'true-false', question: 'A marathon is exactly 26.2 miles.', categoryId: 'sports',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'A marathon is 26.2 miles (42.195 km)!', funFact: 'Based on the legend of Pheidippides!'
      },
      {
        type: 'mcq', question: 'Which country invented cricket?', categoryId: 'sports',
        options: [{ id: 'a', text: 'India' }, { id: 'b', text: 'Australia' }, { id: 'c', text: 'England' }, { id: 'd', text: 'Pakistan' }],
        correctAnswer: 'c', explanation: 'Cricket was invented in England!', funFact: 'It dates back to the 16th century!'
      },
      {
        type: 'mcq', question: 'What do you hit in a game of golf?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Shuttlecock' }, { id: 'b', text: 'Golf ball' }, { id: 'c', text: 'Puck' }, { id: 'd', text: 'Birdie' }],
        correctAnswer: 'b', explanation: 'Golfers hit golf balls!', funFact: 'Golf balls have dimples to fly farther!'
      },
      {
        type: 'mcq', question: 'How many periods are in an ice hockey game?', categoryId: 'sports',
        options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '5' }],
        correctAnswer: 'b', explanation: 'Hockey has 3 periods!', funFact: 'Each period is 20 minutes!'
      },
      {
        type: 'mcq', question: 'In swimming, what stroke looks like a butterfly?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Freestyle' }, { id: 'b', text: 'Backstroke' }, { id: 'c', text: 'Butterfly' }, { id: 'd', text: 'Breaststroke' }],
        correctAnswer: 'c', explanation: 'The butterfly stroke!', funFact: 'Its one of the hardest strokes!'
      },
    ];

    const sportsJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the highest score in a single frame of bowling?', categoryId: 'sports',
        options: [{ id: 'a', text: '10' }, { id: 'b', text: '20' }, { id: 'c', text: '30' }, { id: 'd', text: '50' }],
        correctAnswer: 'c', explanation: 'A perfect strike in the 10th frame can score 30!', funFact: 'A perfect game is 300 points!'
      },
      {
        type: 'mcq', question: 'What is the term for zero points in tennis?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Nil' }, { id: 'b', text: 'Zero' }, { id: 'c', text: 'Love' }, { id: 'd', text: 'Duck' }],
        correctAnswer: 'c', explanation: 'Zero in tennis is called "love"!', funFact: 'It might come from the French word for egg - loeuf!'
      },
      {
        type: 'mcq', question: 'How many holes are on a standard golf course?', categoryId: 'sports',
        options: [{ id: 'a', text: '9' }, { id: 'b', text: '12' }, { id: 'c', text: '18' }, { id: 'd', text: '21' }],
        correctAnswer: 'c', explanation: 'A full round of golf is 18 holes!', funFact: 'St Andrews in Scotland has 18 holes!'
      },
      {
        type: 'mcq', question: 'What sport uses terms like "birdie" and "eagle"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Tennis' }, { id: 'b', text: 'Golf' }, { id: 'c', text: 'Badminton' }, { id: 'd', text: 'Cricket' }],
        correctAnswer: 'b', explanation: 'Golf uses bird-themed scoring terms!', funFact: 'An albatross is 3 under par!'
      },
      {
        type: 'mcq', question: 'In which sport would you perform a "slam dunk" or "alley-oop"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Volleyball' }, { id: 'b', text: 'Basketball' }, { id: 'c', text: 'Handball' }, { id: 'd', text: 'Water polo' }],
        correctAnswer: 'b', explanation: 'These are basketball moves!', funFact: 'Michael Jordan was famous for dunks!'
      },
      {
        type: 'mcq', question: 'Which Grand Slam tennis tournament is played on clay?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Wimbledon' }, { id: 'b', text: 'US Open' }, { id: 'c', text: 'Australian Open' }, { id: 'd', text: 'French Open' }],
        correctAnswer: 'd', explanation: 'The French Open (Roland Garros) is on clay!', funFact: 'Clay courts slow down the ball!'
      },
      {
        type: 'mcq', question: 'What is the national sport of Japan?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Karate' }, { id: 'b', text: 'Judo' }, { id: 'c', text: 'Sumo wrestling' }, { id: 'd', text: 'Baseball' }],
        correctAnswer: 'c', explanation: 'Sumo wrestling is Japans national sport!', funFact: 'Sumo wrestlers follow strict traditions!'
      },
      {
        type: 'mcq', question: 'How many players are on a volleyball team on court?', categoryId: 'sports',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
        correctAnswer: 'c', explanation: 'Volleyball has 6 players per team!', funFact: 'Players rotate positions!'
      },
      {
        type: 'true-false', question: 'The Tour de France is a cycling race.', categoryId: 'sports',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Its the most famous cycling race!', funFact: 'It covers about 3,500 kilometers!'
      },
      {
        type: 'mcq', question: 'What is a "hat-trick" in soccer?', categoryId: 'sports',
        options: [{ id: 'a', text: '3 assists' }, { id: 'b', text: '3 goals by one player' }, { id: 'c', text: '3 saves' }, { id: 'd', text: '3 yellow cards' }],
        correctAnswer: 'b', explanation: 'A hat-trick is 3 goals by one player in a game!', funFact: 'The term comes from cricket!'
      },
      {
        type: 'mcq', question: 'In which sport do you use a "puck"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Field hockey' }, { id: 'b', text: 'Ice hockey' }, { id: 'c', text: 'Lacrosse' }, { id: 'd', text: 'Polo' }],
        correctAnswer: 'b', explanation: 'Ice hockey uses a puck!', funFact: 'Pucks are frozen before games to reduce bouncing!'
      },
      {
        type: 'mcq', question: 'What martial art originated in Korea?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Judo' }, { id: 'b', text: 'Karate' }, { id: 'c', text: 'Taekwondo' }, { id: 'd', text: 'Kung Fu' }],
        correctAnswer: 'c', explanation: 'Taekwondo is from Korea!', funFact: 'Tae means foot, Kwon means fist!'
      },
      {
        type: 'mcq', question: 'How many sets do men play in Grand Slam tennis finals?', categoryId: 'sports',
        options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
        correctAnswer: 'c', explanation: 'Men play best of 5 sets at Grand Slams!', funFact: 'Women play best of 3!'
      },
      {
        type: 'mcq', question: 'What is the highest possible break in snooker?', categoryId: 'sports',
        options: [{ id: 'a', text: '127' }, { id: 'b', text: '147' }, { id: 'c', text: '155' }, { id: 'd', text: '170' }],
        correctAnswer: 'b', explanation: 'A maximum break is 147!', funFact: 'It requires potting all balls in a specific order!'
      },
      {
        type: 'mcq', question: 'Which sport is known as "the beautiful game"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Basketball' }, { id: 'b', text: 'Tennis' }, { id: 'c', text: 'Soccer/Football' }, { id: 'd', text: 'Cricket' }],
        correctAnswer: 'c', explanation: 'Soccer is called "the beautiful game"!', funFact: 'Pelé popularized this phrase!'
      },
    ];

    const sportsJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'Who has won the most Grand Slam tennis titles (mens)?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Roger Federer' }, { id: 'b', text: 'Rafael Nadal' }, { id: 'c', text: 'Novak Djokovic' }, { id: 'd', text: 'Pete Sampras' }],
        correctAnswer: 'c', explanation: 'Novak Djokovic has the most mens Grand Slams!', funFact: 'He has won over 20!'
      },
      {
        type: 'mcq', question: 'What is the diameter of a basketball hoop in inches?', categoryId: 'sports',
        options: [{ id: 'a', text: '15' }, { id: 'b', text: '18' }, { id: 'c', text: '21' }, { id: 'd', text: '24' }],
        correctAnswer: 'b', explanation: 'A basketball hoop is 18 inches in diameter!', funFact: 'The ball is about 9.5 inches - almost half!'
      },
      {
        type: 'mcq', question: 'In cricket, what is a "googly"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'A fast ball' }, { id: 'b', text: 'A leg-spin that breaks opposite' }, { id: 'c', text: 'A wide delivery' }, { id: 'd', text: 'A bouncer' }],
        correctAnswer: 'b', explanation: 'A googly is a deceptive leg-spin delivery!', funFact: 'It spins the opposite way to what it appears!'
      },
      {
        type: 'mcq', question: 'Which country has won the most FIFA World Cups?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Germany' }, { id: 'b', text: 'Argentina' }, { id: 'c', text: 'Brazil' }, { id: 'd', text: 'Italy' }],
        correctAnswer: 'c', explanation: 'Brazil has won 5 World Cups!', funFact: 'They are the only team to play in every World Cup!'
      },
      {
        type: 'mcq', question: 'What is the length of an Olympic swimming pool?', categoryId: 'sports',
        options: [{ id: 'a', text: '25 meters' }, { id: 'b', text: '50 meters' }, { id: 'c', text: '75 meters' }, { id: 'd', text: '100 meters' }],
        correctAnswer: 'b', explanation: 'Olympic pools are 50 meters long!', funFact: 'Short course pools are 25 meters!'
      },
      {
        type: 'mcq', question: 'What is the only country to have played in every football World Cup?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Germany' }, { id: 'b', text: 'Italy' }, { id: 'c', text: 'Argentina' }, { id: 'd', text: 'Brazil' }],
        correctAnswer: 'd', explanation: 'Brazil has played in every World Cup since 1930!', funFact: 'Thats over 20 tournaments!'
      },
      {
        type: 'mcq', question: 'In boxing, what is the "sweet science"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'A knockout punch' }, { id: 'b', text: 'Boxing itself' }, { id: 'c', text: 'A type of training' }, { id: 'd', text: 'The ring' }],
        correctAnswer: 'b', explanation: 'Boxing is called "the sweet science"!', funFact: 'It emphasizes skill over brute force!'
      },
      {
        type: 'mcq', question: 'How many gold medals did Usain Bolt win at the Olympics?', categoryId: 'sports',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
        correctAnswer: 'b', explanation: 'Usain Bolt won 8 Olympic gold medals!', funFact: 'All in sprint events!'
      },
      {
        type: 'true-false', question: 'The modern Olympic Games started in 1896.', categoryId: 'sports',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'The first modern Olympics were in Athens 1896!', funFact: 'Pierre de Coubertin founded them!'
      },
      {
        type: 'mcq', question: 'What is the "Triple Crown" in horse racing?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Winning 3 races consecutively' }, { id: 'b', text: 'Winning 3 specific major races' }, { id: 'c', text: 'A type of trophy' }, { id: 'd', text: 'Racing 3 times in a day' }],
        correctAnswer: 'b', explanation: 'The Triple Crown is winning the Kentucky Derby, Preakness, and Belmont!', funFact: 'Very few horses have achieved this!'
      },
      {
        type: 'mcq', question: 'In which year were women first allowed to compete in the Olympics?', categoryId: 'sports',
        options: [{ id: 'a', text: '1896' }, { id: 'b', text: '1900' }, { id: 'c', text: '1920' }, { id: 'd', text: '1948' }],
        correctAnswer: 'b', explanation: 'Women first competed in Paris 1900!', funFact: 'They competed in tennis, sailing, croquet, and golf!'
      },
      {
        type: 'mcq', question: 'What is the fencing term for a touch?', categoryId: 'sports',
        options: [{ id: 'a', text: 'En garde' }, { id: 'b', text: 'Riposte' }, { id: 'c', text: 'Touché' }, { id: 'd', text: 'Parry' }],
        correctAnswer: 'c', explanation: 'Touché means a hit has been scored!', funFact: 'Its French for "touched"!'
      },
      {
        type: 'mcq', question: 'How many dimples does a regulation golf ball have?', categoryId: 'sports',
        options: [{ id: 'a', text: '252-336' }, { id: 'b', text: '336-500' }, { id: 'c', text: '100-200' }, { id: 'd', text: '500-600' }],
        correctAnswer: 'b', explanation: 'Golf balls typically have 336-500 dimples!', funFact: 'Dimples help the ball fly farther!'
      },
      {
        type: 'mcq', question: 'What is the Ironman triathlon distance?', categoryId: 'sports',
        options: [{ id: 'a', text: '1.2mi swim, 56mi bike, 13.1mi run' }, { id: 'b', text: '2.4mi swim, 112mi bike, 26.2mi run' }, { id: 'c', text: '1mi swim, 25mi bike, 6mi run' }, { id: 'd', text: '3mi swim, 150mi bike, 30mi run' }],
        correctAnswer: 'b', explanation: 'A full Ironman is 140.6 miles total!', funFact: 'It typically takes 8-17 hours!'
      },
      {
        type: 'mcq', question: 'Who is considered the "Greatest of All Time" in basketball?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Kobe Bryant' }, { id: 'b', text: 'LeBron James' }, { id: 'c', text: 'Michael Jordan' }, { id: 'd', text: 'Kareem Abdul-Jabbar' }],
        correctAnswer: 'c', explanation: 'Michael Jordan is widely considered the GOAT!', funFact: 'He won 6 NBA championships!'
      },
      {
        type: 'mcq', question: 'What is the highest possible score in Olympic diving?', categoryId: 'sports',
        options: [{ id: 'a', text: '50' }, { id: 'b', text: '100' }, { id: 'c', text: '10' }, { id: 'd', text: 'No maximum' }],
        correctAnswer: 'd', explanation: 'Theres no maximum - it depends on difficulty!', funFact: 'Scores combine judge ratings and difficulty!'
      },
      {
        type: 'mcq', question: 'In which sport would you find "the Cruyff Turn"?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Basketball' }, { id: 'b', text: 'Soccer' }, { id: 'c', text: 'Ice skating' }, { id: 'd', text: 'Tennis' }],
        correctAnswer: 'b', explanation: 'The Cruyff Turn is a famous soccer move!', funFact: 'Named after Dutch legend Johan Cruyff!'
      },
      {
        type: 'mcq', question: 'What is the weight of an official NBA basketball?', categoryId: 'sports',
        options: [{ id: 'a', text: '18-20 oz' }, { id: 'b', text: '20-22 oz' }, { id: 'c', text: '22-24 oz' }, { id: 'd', text: '24-26 oz' }],
        correctAnswer: 'b', explanation: 'An NBA basketball weighs about 22 ounces!', funFact: 'Womens basketballs are slightly smaller!'
      },
      {
        type: 'mcq', question: 'What does "ATP" stand for in tennis?', categoryId: 'sports',
        options: [{ id: 'a', text: 'All Tennis Professionals' }, { id: 'b', text: 'Association of Tennis Professionals' }, { id: 'c', text: 'American Tennis Players' }, { id: 'd', text: 'Allied Tennis Partnership' }],
        correctAnswer: 'b', explanation: 'ATP is the Association of Tennis Professionals!', funFact: 'WTA is for womens tennis!'
      },
      {
        type: 'mcq', question: 'Which athlete has won the most Olympic medals ever?', categoryId: 'sports',
        options: [{ id: 'a', text: 'Usain Bolt' }, { id: 'b', text: 'Michael Phelps' }, { id: 'c', text: 'Carl Lewis' }, { id: 'd', text: 'Simone Biles' }],
        correctAnswer: 'b', explanation: 'Michael Phelps won 28 Olympic medals!', funFact: '23 of them were gold!'
      },
    ];

    // JUNIORS TECHNOLOGY QUESTIONS BY DIFFICULTY
    const techJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What do you use to type on a computer?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Mouse' }, { id: 'b', text: 'Keyboard' }, { id: 'c', text: 'Monitor' }, { id: 'd', text: 'Speaker' }],
        correctAnswer: 'b', explanation: 'A keyboard has letters and numbers for typing!', funFact: 'The keyboard layout is called QWERTY!'
      },
      {
        type: 'mcq', question: 'What shows pictures and videos on a computer?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Keyboard' }, { id: 'b', text: 'Mouse' }, { id: 'c', text: 'Monitor/Screen' }, { id: 'd', text: 'CPU' }],
        correctAnswer: 'c', explanation: 'The monitor displays everything you see!', funFact: 'Monitors used to be big and heavy!'
      },
      {
        type: 'mcq', question: 'What do you click with to move things on screen?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Keyboard' }, { id: 'b', text: 'Mouse' }, { id: 'c', text: 'Printer' }, { id: 'd', text: 'USB' }],
        correctAnswer: 'b', explanation: 'A mouse controls the cursor on screen!', funFact: 'It was invented in 1964!'
      },
      {
        type: 'mcq', question: 'What connects computers around the world?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Television' }, { id: 'b', text: 'Radio' }, { id: 'c', text: 'Internet' }, { id: 'd', text: 'Telephone' }],
        correctAnswer: 'c', explanation: 'The Internet connects billions of computers!', funFact: 'It started as a military project!'
      },
      {
        type: 'mcq', question: 'What device do you use to make calls and play games?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Laptop' }, { id: 'b', text: 'Smartphone' }, { id: 'c', text: 'Desktop' }, { id: 'd', text: 'Printer' }],
        correctAnswer: 'b', explanation: 'Smartphones are mini computers in your pocket!', funFact: 'The first iPhone came out in 2007!'
      },
      {
        type: 'mcq', question: 'What prints documents on paper?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Scanner' }, { id: 'b', text: 'Camera' }, { id: 'c', text: 'Printer' }, { id: 'd', text: 'Speaker' }],
        correctAnswer: 'c', explanation: 'Printers put digital files on paper!', funFact: 'Some printers can print in 3D!'
      },
      {
        type: 'mcq', question: 'What do headphones do?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Show pictures' }, { id: 'b', text: 'Play sounds in your ears' }, { id: 'c', text: 'Type words' }, { id: 'd', text: 'Take photos' }],
        correctAnswer: 'b', explanation: 'Headphones let you listen privately!', funFact: 'The first headphones were invented in 1910!'
      },
      {
        type: 'mcq', question: 'What takes pictures?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Microphone' }, { id: 'b', text: 'Speaker' }, { id: 'c', text: 'Camera' }, { id: 'd', text: 'Keyboard' }],
        correctAnswer: 'c', explanation: 'Cameras capture photos and videos!', funFact: 'Your phone has a camera too!'
      },
      {
        type: 'mcq', question: 'What charges your phone when battery is low?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Headphones' }, { id: 'b', text: 'Charger' }, { id: 'c', text: 'Mouse' }, { id: 'd', text: 'Monitor' }],
        correctAnswer: 'b', explanation: 'Chargers fill up your devices battery!', funFact: 'Wireless chargers dont need cables!'
      },
      {
        type: 'mcq', question: 'What is WiFi used for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Cooking food' }, { id: 'b', text: 'Connecting to Internet wirelessly' }, { id: 'c', text: 'Playing music' }, { id: 'd', text: 'Taking pictures' }],
        correctAnswer: 'b', explanation: 'WiFi connects devices without wires!', funFact: 'WiFi uses radio waves!'
      },
      {
        type: 'mcq', question: 'What tells a computer what to do?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Screen' }, { id: 'b', text: 'Software/Programs' }, { id: 'c', text: 'Case' }, { id: 'd', text: 'Fan' }],
        correctAnswer: 'b', explanation: 'Software gives instructions to computers!', funFact: 'Games and apps are types of software!'
      },
      {
        type: 'mcq', question: 'What records your voice?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Speaker' }, { id: 'b', text: 'Microphone' }, { id: 'c', text: 'Monitor' }, { id: 'd', text: 'Keyboard' }],
        correctAnswer: 'b', explanation: 'Microphones capture sound!', funFact: 'Your phone has a tiny microphone!'
      },
    ];

    const techJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What does CPU stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Computer Personal Unit' }, { id: 'b', text: 'Central Processing Unit' }, { id: 'c', text: 'Central Power Unit' }, { id: 'd', text: 'Computer Processing Unit' }],
        correctAnswer: 'b', explanation: 'CPU is the brain of the computer!', funFact: 'CPUs can do billions of calculations per second!'
      },
      {
        type: 'mcq', question: 'What does RAM stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Random Access Memory' }, { id: 'b', text: 'Read All Memory' }, { id: 'c', text: 'Run All Memory' }, { id: 'd', text: 'Rapid Access Module' }],
        correctAnswer: 'a', explanation: 'RAM is your computers short-term memory!', funFact: 'RAM loses data when powered off!'
      },
      {
        type: 'mcq', question: 'What is a browser used for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Playing games offline' }, { id: 'b', text: 'Viewing websites' }, { id: 'c', text: 'Editing photos' }, { id: 'd', text: 'Writing documents' }],
        correctAnswer: 'b', explanation: 'Browsers like Chrome and Safari show websites!', funFact: 'The first browser was invented in 1990!'
      },
      {
        type: 'mcq', question: 'What is coding/programming?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Drawing pictures' }, { id: 'b', text: 'Writing music' }, { id: 'c', text: 'Writing instructions for computers' }, { id: 'd', text: 'Building hardware' }],
        correctAnswer: 'c', explanation: 'Coding tells computers what to do step by step!', funFact: 'There are hundreds of programming languages!'
      },
      {
        type: 'mcq', question: 'What does USB stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Universal Serial Bus' }, { id: 'b', text: 'United System Board' }, { id: 'c', text: 'Universal System Byte' }, { id: 'd', text: 'United Serial Byte' }],
        correctAnswer: 'a', explanation: 'USB connects devices to computers!', funFact: 'USB was created in 1996!'
      },
      {
        type: 'mcq', question: 'What is an operating system?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A type of computer' }, { id: 'b', text: 'Software that runs a computer' }, { id: 'c', text: 'A game' }, { id: 'd', text: 'A website' }],
        correctAnswer: 'b', explanation: 'Windows, macOS, and Linux are operating systems!', funFact: 'Phones use iOS and Android!'
      },
      {
        type: 'mcq', question: 'What is a password used for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Decoration' }, { id: 'b', text: 'Keeping accounts secure' }, { id: 'c', text: 'Making computers faster' }, { id: 'd', text: 'Connecting to WiFi only' }],
        correctAnswer: 'b', explanation: 'Passwords protect your accounts from others!', funFact: 'Strong passwords mix letters, numbers, and symbols!'
      },
      {
        type: 'mcq', question: 'What is cloud storage?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Storage in the sky' }, { id: 'b', text: 'Storing files on remote servers via internet' }, { id: 'c', text: 'A type of USB' }, { id: 'd', text: 'A computers hard drive' }],
        correctAnswer: 'b', explanation: 'Cloud storage keeps your files on the internet!', funFact: 'Google Drive and iCloud are cloud services!'
      },
      {
        type: 'mcq', question: 'What does GPS stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Global Phone System' }, { id: 'b', text: 'General Positioning Service' }, { id: 'c', text: 'Global Positioning System' }, { id: 'd', text: 'Geographic Phone Signal' }],
        correctAnswer: 'c', explanation: 'GPS uses satellites to find your location!', funFact: 'There are about 30 GPS satellites orbiting Earth!'
      },
      {
        type: 'mcq', question: 'What is a virus in computing?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A sick computer' }, { id: 'b', text: 'Harmful software that damages computers' }, { id: 'c', text: 'A type of game' }, { id: 'd', text: 'A fast computer' }],
        correctAnswer: 'b', explanation: 'Computer viruses can steal data or break things!', funFact: 'Antivirus software protects against them!'
      },
      {
        type: 'mcq', question: 'What is Bluetooth used for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Brushing teeth' }, { id: 'b', text: 'Wireless short-range communication' }, { id: 'c', text: 'Internet connection' }, { id: 'd', text: 'Charging phones' }],
        correctAnswer: 'b', explanation: 'Bluetooth connects nearby devices wirelessly!', funFact: 'Its named after a Viking king!'
      },
      {
        type: 'mcq', question: 'What does HTML stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Hyper Text Markup Language' }, { id: 'b', text: 'High Tech Modern Language' }, { id: 'c', text: 'Home Tool Markup Language' }, { id: 'd', text: 'Hyper Transfer Mail Link' }],
        correctAnswer: 'a', explanation: 'HTML is the language for creating websites!', funFact: 'Every website uses HTML!'
      },
      {
        type: 'mcq', question: 'What is an app?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A type of food' }, { id: 'b', text: 'Application software for specific tasks' }, { id: 'c', text: 'A computer part' }, { id: 'd', text: 'A website only' }],
        correctAnswer: 'b', explanation: 'Apps are programs for phones and computers!', funFact: 'There are millions of apps available!'
      },
      {
        type: 'mcq', question: 'What is a pixel?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A tiny fairy' }, { id: 'b', text: 'The smallest dot on a screen' }, { id: 'c', text: 'A type of phone' }, { id: 'd', text: 'A sound effect' }],
        correctAnswer: 'b', explanation: 'Screens are made of millions of tiny pixels!', funFact: 'More pixels means sharper images!'
      },
      {
        type: 'mcq', question: 'What is downloading?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Sending files to the internet' }, { id: 'b', text: 'Getting files from the internet' }, { id: 'c', text: 'Deleting files' }, { id: 'd', text: 'Moving files to trash' }],
        correctAnswer: 'b', explanation: 'Downloading copies files from internet to your device!', funFact: 'Uploading is the opposite - sending files up!'
      },
    ];

    const techJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What programming language is primarily used for AI and machine learning?', categoryId: 'technology',
        options: [{ id: 'a', text: 'HTML' }, { id: 'b', text: 'Python' }, { id: 'c', text: 'CSS' }, { id: 'd', text: 'SQL' }],
        correctAnswer: 'b', explanation: 'Python is the most popular language for AI!', funFact: 'Python was named after Monty Python!'
      },
      {
        type: 'mcq', question: 'What does API stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Application Programming Interface' }, { id: 'b', text: 'Advanced Program Integration' }, { id: 'c', text: 'Automated Processing Input' }, { id: 'd', text: 'Application Process Identifier' }],
        correctAnswer: 'a', explanation: 'APIs let different software communicate!', funFact: 'Weather apps use APIs to get data!'
      },
      {
        type: 'mcq', question: 'What is encryption?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Making files smaller' }, { id: 'b', text: 'Converting data into a secret code' }, { id: 'c', text: 'Deleting data permanently' }, { id: 'd', text: 'Speeding up computers' }],
        correctAnswer: 'b', explanation: 'Encryption protects data by scrambling it!', funFact: 'HTTPS websites use encryption!'
      },
      {
        type: 'mcq', question: 'What is artificial intelligence (AI)?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Robots that look human' }, { id: 'b', text: 'Computers that can learn and make decisions' }, { id: 'c', text: 'Very fast computers' }, { id: 'd', text: 'Virtual reality' }],
        correctAnswer: 'b', explanation: 'AI systems can learn from data!', funFact: 'ChatGPT and Siri use AI!'
      },
      {
        type: 'mcq', question: 'What is the difference between HTTP and HTTPS?', categoryId: 'technology',
        options: [{ id: 'a', text: 'HTTPS is faster' }, { id: 'b', text: 'HTTPS is encrypted and secure' }, { id: 'c', text: 'HTTP is newer' }, { id: 'd', text: 'They are the same' }],
        correctAnswer: 'b', explanation: 'The S in HTTPS stands for Secure!', funFact: 'Always look for HTTPS when entering passwords!'
      },
      {
        type: 'mcq', question: 'What is a firewall?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A wall that prevents fire' }, { id: 'b', text: 'Security system that monitors network traffic' }, { id: 'c', text: 'A type of virus' }, { id: 'd', text: 'A cooling system' }],
        correctAnswer: 'b', explanation: 'Firewalls protect networks from threats!', funFact: 'Both hardware and software firewalls exist!'
      },
      {
        type: 'mcq', question: 'What is binary code?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Code with only 0s and 1s' }, { id: 'b', text: 'Code with letters only' }, { id: 'c', text: 'A secret spy code' }, { id: 'd', text: 'Code written by two people' }],
        correctAnswer: 'a', explanation: 'Computers understand only 0s and 1s at the lowest level!', funFact: 'Binary means base-2 number system!'
      },
      {
        type: 'mcq', question: 'What is Moore\'s Law?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Computers double in size every year' }, { id: 'b', text: 'Transistors on chips double roughly every 2 years' }, { id: 'c', text: 'Internet speed doubles yearly' }, { id: 'd', text: 'Battery life doubles every decade' }],
        correctAnswer: 'b', explanation: 'Gordon Moore predicted this in 1965!', funFact: 'This is why computers keep getting faster!'
      },
      {
        type: 'mcq', question: 'What is blockchain technology?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A chain of computer blocks' }, { id: 'b', text: 'Distributed ledger storing data in linked blocks' }, { id: 'c', text: 'A type of firewall' }, { id: 'd', text: 'A gaming technology' }],
        correctAnswer: 'b', explanation: 'Blockchain is the technology behind cryptocurrencies!', funFact: 'Data in blockchain is nearly impossible to change!'
      },
      {
        type: 'mcq', question: 'What does SSD stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Super Speed Drive' }, { id: 'b', text: 'Solid State Drive' }, { id: 'c', text: 'System Storage Device' }, { id: 'd', text: 'Secure Storage Disk' }],
        correctAnswer: 'b', explanation: 'SSDs are faster than traditional hard drives!', funFact: 'SSDs have no moving parts!'
      },
      {
        type: 'mcq', question: 'What is virtual reality (VR)?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Reality TV shows' }, { id: 'b', text: 'Computer-generated 3D environment you can interact with' }, { id: 'c', text: 'Video games only' }, { id: 'd', text: 'Online shopping' }],
        correctAnswer: 'b', explanation: 'VR headsets immerse you in digital worlds!', funFact: 'VR is used for training pilots and surgeons!'
      },
      {
        type: 'mcq', question: 'What is the Internet of Things (IoT)?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Shopping websites' }, { id: 'b', text: 'Network of connected smart devices' }, { id: 'c', text: 'A social network' }, { id: 'd', text: 'Email service' }],
        correctAnswer: 'b', explanation: 'IoT connects everyday devices to the internet!', funFact: 'Smart fridges and thermostats are IoT devices!'
      },
      {
        type: 'mcq', question: 'What is machine learning?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Machines going to school' }, { id: 'b', text: 'Computers learning from data without explicit programming' }, { id: 'c', text: 'Building robots' }, { id: 'd', text: 'Typing faster' }],
        correctAnswer: 'b', explanation: 'ML algorithms improve through experience!', funFact: 'Netflix recommendations use machine learning!'
      },
      {
        type: 'mcq', question: 'What is two-factor authentication (2FA)?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Using two passwords' }, { id: 'b', text: 'Verifying identity with two different methods' }, { id: 'c', text: 'Having two accounts' }, { id: 'd', text: 'Logging in twice' }],
        correctAnswer: 'b', explanation: '2FA adds extra security beyond just a password!', funFact: 'Common factors: password + phone code!'
      },
      {
        type: 'mcq', question: 'What is open source software?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Software that is always open' }, { id: 'b', text: 'Software with publicly available source code' }, { id: 'c', text: 'Free games' }, { id: 'd', text: 'Beta software' }],
        correctAnswer: 'b', explanation: 'Anyone can view and modify open source code!', funFact: 'Linux and Firefox are open source!'
      },
      {
        type: 'mcq', question: 'What is latency in networking?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Internet speed' }, { id: 'b', text: 'Delay between sending and receiving data' }, { id: 'c', text: 'Amount of data transferred' }, { id: 'd', text: 'Network strength' }],
        correctAnswer: 'b', explanation: 'Low latency means faster response times!', funFact: 'Gamers care a lot about latency (ping)!'
      },
      {
        type: 'mcq', question: 'What is a VPN?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Very Private Network' }, { id: 'b', text: 'Virtual Private Network' }, { id: 'c', text: 'Virtual Public Network' }, { id: 'd', text: 'Video Processing Node' }],
        correctAnswer: 'b', explanation: 'VPNs encrypt your internet connection!', funFact: 'VPNs can make you appear in different countries!'
      },
      {
        type: 'mcq', question: 'What is quantum computing?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Very small computers' }, { id: 'b', text: 'Computing using quantum mechanical phenomena' }, { id: 'c', text: 'Faster regular computers' }, { id: 'd', text: 'Cloud computing' }],
        correctAnswer: 'b', explanation: 'Quantum computers use qubits instead of bits!', funFact: 'They could break current encryption!'
      },
      {
        type: 'mcq', question: 'What does DNS stand for?', categoryId: 'technology',
        options: [{ id: 'a', text: 'Digital Network Service' }, { id: 'b', text: 'Domain Name System' }, { id: 'c', text: 'Data Network Security' }, { id: 'd', text: 'Direct Name Server' }],
        correctAnswer: 'b', explanation: 'DNS translates website names to IP addresses!', funFact: 'Its like the internets phone book!'
      },
      {
        type: 'mcq', question: 'What is augmented reality (AR)?', categoryId: 'technology',
        options: [{ id: 'a', text: 'A better type of VR' }, { id: 'b', text: 'Digital content overlaid on the real world' }, { id: 'c', text: 'A video editing technique' }, { id: 'd', text: 'Enhanced audio' }],
        correctAnswer: 'b', explanation: 'AR adds digital elements to what you see!', funFact: 'Pokemon GO uses AR technology!'
      },
    ];

    // JUNIORS MATH QUESTIONS BY DIFFICULTY
    const mathJuniorsEasy: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is 5 + 3?', categoryId: 'math',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '9' }],
        correctAnswer: 'c', explanation: '5 + 3 = 8', funFact: 'Addition is combining numbers together!'
      },
      {
        type: 'mcq', question: 'What is 10 - 4?', categoryId: 'math',
        options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
        correctAnswer: 'b', explanation: '10 - 4 = 6', funFact: 'Subtraction is taking away!'
      },
      {
        type: 'mcq', question: 'What is 3 × 4?', categoryId: 'math',
        options: [{ id: 'a', text: '7' }, { id: 'b', text: '10' }, { id: 'c', text: '12' }, { id: 'd', text: '14' }],
        correctAnswer: 'c', explanation: '3 × 4 = 12', funFact: 'Multiplication is repeated addition!'
      },
      {
        type: 'mcq', question: 'What is 20 ÷ 5?', categoryId: 'math',
        options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
        correctAnswer: 'b', explanation: '20 ÷ 5 = 4', funFact: 'Division is sharing equally!'
      },
      {
        type: 'mcq', question: 'What is 7 + 8?', categoryId: 'math',
        options: [{ id: 'a', text: '13' }, { id: 'b', text: '14' }, { id: 'c', text: '15' }, { id: 'd', text: '16' }],
        correctAnswer: 'c', explanation: '7 + 8 = 15', funFact: '7 and 8 are consecutive numbers!'
      },
      {
        type: 'mcq', question: 'How many sides does a square have?', categoryId: 'math',
        options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
        correctAnswer: 'b', explanation: 'A square has 4 equal sides!', funFact: 'All angles in a square are 90 degrees!'
      },
      {
        type: 'mcq', question: 'What is 6 × 6?', categoryId: 'math',
        options: [{ id: 'a', text: '30' }, { id: 'b', text: '32' }, { id: 'c', text: '36' }, { id: 'd', text: '42' }],
        correctAnswer: 'c', explanation: '6 × 6 = 36', funFact: '36 is a perfect square!'
      },
      {
        type: 'mcq', question: 'What is 100 - 35?', categoryId: 'math',
        options: [{ id: 'a', text: '55' }, { id: 'b', text: '65' }, { id: 'c', text: '75' }, { id: 'd', text: '85' }],
        correctAnswer: 'b', explanation: '100 - 35 = 65', funFact: 'Subtracting from 100 is a useful skill!'
      },
      {
        type: 'true-false', question: '15 is an odd number.', categoryId: 'math',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: '15 is odd because it cannot be divided evenly by 2!', funFact: 'Odd numbers end in 1, 3, 5, 7, or 9!'
      },
      {
        type: 'mcq', question: 'What is 9 × 9?', categoryId: 'math',
        options: [{ id: 'a', text: '72' }, { id: 'b', text: '81' }, { id: 'c', text: '90' }, { id: 'd', text: '99' }],
        correctAnswer: 'b', explanation: '9 × 9 = 81', funFact: '81 is the square of 9!'
      },
      {
        type: 'mcq', question: 'What is half of 50?', categoryId: 'math',
        options: [{ id: 'a', text: '20' }, { id: 'b', text: '25' }, { id: 'c', text: '30' }, { id: 'd', text: '35' }],
        correctAnswer: 'b', explanation: 'Half of 50 is 25!', funFact: 'Finding half means dividing by 2!'
      },
      {
        type: 'mcq', question: 'How many minutes are in 1 hour?', categoryId: 'math',
        options: [{ id: 'a', text: '30' }, { id: 'b', text: '45' }, { id: 'c', text: '60' }, { id: 'd', text: '100' }],
        correctAnswer: 'c', explanation: 'There are 60 minutes in an hour!', funFact: 'And 60 seconds in a minute!'
      },
    ];

    const mathJuniorsMedium: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is 12 × 12?', categoryId: 'math',
        options: [{ id: 'a', text: '124' }, { id: 'b', text: '132' }, { id: 'c', text: '144' }, { id: 'd', text: '156' }],
        correctAnswer: 'c', explanation: '12 × 12 = 144', funFact: '144 is called a "gross" or a dozen dozens!'
      },
      {
        type: 'mcq', question: 'What is 25% of 80?', categoryId: 'math',
        options: [{ id: 'a', text: '15' }, { id: 'b', text: '20' }, { id: 'c', text: '25' }, { id: 'd', text: '30' }],
        correctAnswer: 'b', explanation: '25% of 80 = 20', funFact: '25% is the same as 1/4!'
      },
      {
        type: 'mcq', question: 'What is the square root of 64?', categoryId: 'math',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '9' }],
        correctAnswer: 'c', explanation: '√64 = 8 because 8 × 8 = 64', funFact: '64 is a perfect square!'
      },
      {
        type: 'mcq', question: 'What is 15² (15 squared)?', categoryId: 'math',
        options: [{ id: 'a', text: '215' }, { id: 'b', text: '225' }, { id: 'c', text: '235' }, { id: 'd', text: '245' }],
        correctAnswer: 'b', explanation: '15 × 15 = 225', funFact: 'Squaring means multiplying a number by itself!'
      },
      {
        type: 'mcq', question: 'What is the perimeter of a rectangle with length 8 and width 5?', categoryId: 'math',
        options: [{ id: 'a', text: '13' }, { id: 'b', text: '26' }, { id: 'c', text: '40' }, { id: 'd', text: '52' }],
        correctAnswer: 'b', explanation: 'Perimeter = 2(8+5) = 2(13) = 26', funFact: 'Perimeter is the distance around a shape!'
      },
      {
        type: 'mcq', question: 'What is 3/4 as a decimal?', categoryId: 'math',
        options: [{ id: 'a', text: '0.25' }, { id: 'b', text: '0.5' }, { id: 'c', text: '0.75' }, { id: 'd', text: '0.34' }],
        correctAnswer: 'c', explanation: '3/4 = 0.75', funFact: 'To convert, divide numerator by denominator!'
      },
      {
        type: 'mcq', question: 'What is the area of a square with side 9?', categoryId: 'math',
        options: [{ id: 'a', text: '36' }, { id: 'b', text: '72' }, { id: 'c', text: '81' }, { id: 'd', text: '90' }],
        correctAnswer: 'c', explanation: 'Area = 9 × 9 = 81 square units', funFact: 'Area measures the space inside a shape!'
      },
      {
        type: 'mcq', question: 'What is 1000 ÷ 8?', categoryId: 'math',
        options: [{ id: 'a', text: '115' }, { id: 'b', text: '120' }, { id: 'c', text: '125' }, { id: 'd', text: '130' }],
        correctAnswer: 'c', explanation: '1000 ÷ 8 = 125', funFact: '125 is 5 cubed (5³)!'
      },
      {
        type: 'true-false', question: 'A prime number has exactly 2 factors.', categoryId: 'math',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true', explanation: 'Prime numbers are divisible only by 1 and themselves!', funFact: '2 is the only even prime number!'
      },
      {
        type: 'mcq', question: 'What is the next prime number after 17?', categoryId: 'math',
        options: [{ id: 'a', text: '18' }, { id: 'b', text: '19' }, { id: 'c', text: '20' }, { id: 'd', text: '21' }],
        correctAnswer: 'b', explanation: '19 is the next prime after 17!', funFact: 'Twin primes are primes that differ by 2!'
      },
      {
        type: 'mcq', question: 'What is 2³ (2 cubed)?', categoryId: 'math',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '16' }],
        correctAnswer: 'c', explanation: '2³ = 2 × 2 × 2 = 8', funFact: 'Cubed means multiplied by itself 3 times!'
      },
      {
        type: 'mcq', question: 'What is 0.5 × 0.5?', categoryId: 'math',
        options: [{ id: 'a', text: '0.1' }, { id: 'b', text: '0.25' }, { id: 'c', text: '1' }, { id: 'd', text: '2.5' }],
        correctAnswer: 'b', explanation: '0.5 × 0.5 = 0.25', funFact: 'Multiplying decimals makes them smaller!'
      },
      {
        type: 'mcq', question: 'How many degrees are in a right angle?', categoryId: 'math',
        options: [{ id: 'a', text: '45°' }, { id: 'b', text: '90°' }, { id: 'c', text: '180°' }, { id: 'd', text: '360°' }],
        correctAnswer: 'b', explanation: 'A right angle is exactly 90°!', funFact: 'Right angles look like the letter L!'
      },
      {
        type: 'mcq', question: 'What fraction is equivalent to 50%?', categoryId: 'math',
        options: [{ id: 'a', text: '1/4' }, { id: 'b', text: '1/3' }, { id: 'c', text: '1/2' }, { id: 'd', text: '2/3' }],
        correctAnswer: 'c', explanation: '50% = 1/2', funFact: 'Percent means "per hundred"!'
      },
      {
        type: 'mcq', question: 'What is the sum of angles in a triangle?', categoryId: 'math',
        options: [{ id: 'a', text: '90°' }, { id: 'b', text: '180°' }, { id: 'c', text: '270°' }, { id: 'd', text: '360°' }],
        correctAnswer: 'b', explanation: 'Triangle angles always add up to 180°!', funFact: 'This works for ALL triangles!'
      },
    ];

    const mathJuniorsHard: Partial<Question>[] = [
      {
        type: 'mcq', question: 'What is the value of π (pi) to 2 decimal places?', categoryId: 'math',
        options: [{ id: 'a', text: '3.12' }, { id: 'b', text: '3.14' }, { id: 'c', text: '3.16' }, { id: 'd', text: '3.18' }],
        correctAnswer: 'b', explanation: 'π ≈ 3.14', funFact: 'Pi has infinite decimal places!'
      },
      {
        type: 'mcq', question: 'What is 17 × 13?', categoryId: 'math',
        options: [{ id: 'a', text: '201' }, { id: 'b', text: '211' }, { id: 'c', text: '221' }, { id: 'd', text: '231' }],
        correctAnswer: 'c', explanation: '17 × 13 = 221', funFact: 'Both 17 and 13 are prime numbers!'
      },
      {
        type: 'mcq', question: 'What is the LCM of 6 and 8?', categoryId: 'math',
        options: [{ id: 'a', text: '12' }, { id: 'b', text: '24' }, { id: 'c', text: '36' }, { id: 'd', text: '48' }],
        correctAnswer: 'b', explanation: 'LCM of 6 and 8 is 24!', funFact: 'LCM means Least Common Multiple!'
      },
      {
        type: 'mcq', question: 'What is the GCD/HCF of 36 and 48?', categoryId: 'math',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '8' }, { id: 'c', text: '12' }, { id: 'd', text: '16' }],
        correctAnswer: 'c', explanation: 'GCD of 36 and 48 is 12!', funFact: 'GCD means Greatest Common Divisor!'
      },
      {
        type: 'mcq', question: 'If x + 5 = 12, what is x?', categoryId: 'math',
        options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
        correctAnswer: 'c', explanation: 'x = 12 - 5 = 7', funFact: 'This is basic algebra!'
      },
      {
        type: 'mcq', question: 'What is the area of a circle with radius 7? (Use π = 22/7)', categoryId: 'math',
        options: [{ id: 'a', text: '144' }, { id: 'b', text: '154' }, { id: 'c', text: '164' }, { id: 'd', text: '174' }],
        correctAnswer: 'b', explanation: 'Area = πr² = (22/7) × 49 = 154', funFact: 'The formula was discovered by ancient Greeks!'
      },
      {
        type: 'mcq', question: 'What is 5! (5 factorial)?', categoryId: 'math',
        options: [{ id: 'a', text: '60' }, { id: 'b', text: '100' }, { id: 'c', text: '120' }, { id: 'd', text: '150' }],
        correctAnswer: 'c', explanation: '5! = 5×4×3×2×1 = 120', funFact: 'Factorial means multiply all numbers down to 1!'
      },
      {
        type: 'mcq', question: 'What is the cube root of 125?', categoryId: 'math',
        options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
        correctAnswer: 'c', explanation: '∛125 = 5 because 5³ = 125', funFact: '125 is a perfect cube!'
      },
      {
        type: 'mcq', question: 'In a right triangle, if two sides are 3 and 4, what is the hypotenuse?', categoryId: 'math',
        options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
        correctAnswer: 'b', explanation: '3² + 4² = 9 + 16 = 25 = 5²', funFact: '3-4-5 is a Pythagorean triple!'
      },
      {
        type: 'true-false', question: 'The square root of 2 is a rational number.', categoryId: 'math',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false', explanation: '√2 is irrational - it goes on forever!', funFact: 'It was discovered by ancient Greeks!'
      },
      {
        type: 'mcq', question: 'What is 2⁵?', categoryId: 'math',
        options: [{ id: 'a', text: '16' }, { id: 'b', text: '32' }, { id: 'c', text: '64' }, { id: 'd', text: '128' }],
        correctAnswer: 'b', explanation: '2⁵ = 2×2×2×2×2 = 32', funFact: 'Powers of 2 are important in computers!'
      },
      {
        type: 'mcq', question: 'What is the perimeter of a circle called?', categoryId: 'math',
        options: [{ id: 'a', text: 'Diameter' }, { id: 'b', text: 'Radius' }, { id: 'c', text: 'Circumference' }, { id: 'd', text: 'Area' }],
        correctAnswer: 'c', explanation: 'Circumference is the perimeter of a circle!', funFact: 'C = 2πr or πd!'
      },
      {
        type: 'mcq', question: 'What is 0.125 as a fraction in lowest terms?', categoryId: 'math',
        options: [{ id: 'a', text: '1/4' }, { id: 'b', text: '1/8' }, { id: 'c', text: '1/16' }, { id: 'd', text: '1/6' }],
        correctAnswer: 'b', explanation: '0.125 = 125/1000 = 1/8', funFact: '1/8 is one eighth!'
      },
      {
        type: 'mcq', question: 'How many edges does a cube have?', categoryId: 'math',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '8' }, { id: 'c', text: '10' }, { id: 'd', text: '12' }],
        correctAnswer: 'd', explanation: 'A cube has 12 edges!', funFact: 'It also has 6 faces and 8 vertices!'
      },
      {
        type: 'mcq', question: 'What is the sum of the first 10 natural numbers?', categoryId: 'math',
        options: [{ id: 'a', text: '45' }, { id: 'b', text: '50' }, { id: 'c', text: '55' }, { id: 'd', text: '60' }],
        correctAnswer: 'c', explanation: '1+2+3+...+10 = 55', funFact: 'Formula: n(n+1)/2 = 10×11/2 = 55!'
      },
      {
        type: 'mcq', question: 'What type of angle is 135°?', categoryId: 'math',
        options: [{ id: 'a', text: 'Acute' }, { id: 'b', text: 'Right' }, { id: 'c', text: 'Obtuse' }, { id: 'd', text: 'Reflex' }],
        correctAnswer: 'c', explanation: '135° is obtuse (between 90° and 180°)!', funFact: 'Obtuse means "blunt" in Latin!'
      },
      {
        type: 'mcq', question: 'If 3x = 27, what is x?', categoryId: 'math',
        options: [{ id: 'a', text: '6' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '9' }],
        correctAnswer: 'd', explanation: 'x = 27 ÷ 3 = 9', funFact: 'Algebra uses letters to represent unknowns!'
      },
      {
        type: 'mcq', question: 'What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ?', categoryId: 'math',
        options: [{ id: 'a', text: '11' }, { id: 'b', text: '12' }, { id: 'c', text: '13' }, { id: 'd', text: '14' }],
        correctAnswer: 'c', explanation: '5 + 8 = 13', funFact: 'Fibonacci sequence appears in nature!'
      },
      {
        type: 'mcq', question: 'What is the volume of a cube with side 4?', categoryId: 'math',
        options: [{ id: 'a', text: '16' }, { id: 'b', text: '48' }, { id: 'c', text: '64' }, { id: 'd', text: '96' }],
        correctAnswer: 'c', explanation: 'Volume = 4³ = 64 cubic units', funFact: 'Volume measures 3D space!'
      },
      {
        type: 'mcq', question: 'What is (-3) × (-4)?', categoryId: 'math',
        options: [{ id: 'a', text: '-12' }, { id: 'b', text: '-7' }, { id: 'c', text: '7' }, { id: 'd', text: '12' }],
        correctAnswer: 'd', explanation: 'Negative × Negative = Positive! -3 × -4 = 12', funFact: 'Two negatives make a positive!'
      },
    ];

    // Question banks by topic, age group, and difficulty
    if (topicKey === 'history') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return historyJuniorsEasy;
        if (difficulty === 'medium') return historyJuniorsMedium;
        if (difficulty === 'hard') return historyJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What big animals lived long, long ago? 🦕', categoryId: 'history',
            options: [{ id: 'a', text: '🐶 Dogs' }, { id: 'b', text: '🦕 Dinosaurs' }, { id: 'c', text: '🐱 Cats' }, { id: 'd', text: '🐰 Rabbits' }],
            correctAnswer: 'b', explanation: 'Dinosaurs lived millions of years ago! 🦕', funFact: 'Some dinosaurs were as big as houses!' },
          { type: 'mcq', question: 'What did kings and queens live in? 🏰', categoryId: 'history',
            options: [{ id: 'a', text: '🏠 House' }, { id: 'b', text: '🏰 Castle' }, { id: 'c', text: '🏢 Building' }, { id: 'd', text: '⛺ Tent' }],
            correctAnswer: 'b', explanation: 'Kings and queens lived in castles! 🏰', funFact: 'Castles had tall walls to keep people safe!' },
          { type: 'mcq', question: 'What did pirates look for? 🏴‍☠️', categoryId: 'history',
            options: [{ id: 'a', text: '📚 Books' }, { id: 'b', text: '💎 Treasure' }, { id: 'c', text: '🍎 Apples' }, { id: 'd', text: '🎈 Balloons' }],
            correctAnswer: 'b', explanation: 'Pirates searched for treasure! 💎', funFact: 'Pirates said "Arrr!" and "Ahoy!"' },
          { type: 'mcq', question: 'Who rides horses and wears armor? ⚔️', categoryId: 'history',
            options: [{ id: 'a', text: '👨‍🍳 Chef' }, { id: 'b', text: '⚔️ Knight' }, { id: 'c', text: '👨‍🏫 Teacher' }, { id: 'd', text: '👨‍⚕️ Doctor' }],
            correctAnswer: 'b', explanation: 'Knights wore shiny armor! ⚔️', funFact: 'Knights protected castles!' },
          { type: 'mcq', question: 'What shape are pyramids? 🔺', categoryId: 'history',
            options: [{ id: 'a', text: '⭕ Circle' }, { id: 'b', text: '⬜ Square' }, { id: 'c', text: '🔺 Triangle' }, { id: 'd', text: '⭐ Star' }],
            correctAnswer: 'c', explanation: 'Pyramids have triangle shapes! 🔺', funFact: 'Pyramids were built in Egypt!' },
          { type: 'mcq', question: 'Who sailed on ships to find new lands? ⛵', categoryId: 'history',
            options: [{ id: 'a', text: '👨‍🚀 Astronauts' }, { id: 'b', text: '⛵ Explorers' }, { id: 'c', text: '👨‍🌾 Farmers' }, { id: 'd', text: '👨‍🔬 Scientists' }],
            correctAnswer: 'b', explanation: 'Explorers sailed to discover new places! ⛵', funFact: 'Christopher Columbus was an explorer!' },
          { type: 'mcq', question: 'What did people use before cars? 🐴', categoryId: 'history',
            options: [{ id: 'a', text: '✈️ Airplanes' }, { id: 'b', text: '🚀 Rockets' }, { id: 'c', text: '🐴 Horses' }, { id: 'd', text: '🛸 UFOs' }],
            correctAnswer: 'c', explanation: 'People rode horses before cars! 🐴', funFact: 'Horses pulled wagons and carriages!' },
          { type: 'mcq', question: 'Who walked on the Moon? 🌙', categoryId: 'history',
            options: [{ id: 'a', text: '👨‍🚀 Astronauts' }, { id: 'b', text: '🐦 Birds' }, { id: 'c', text: '✈️ Pilots' }, { id: 'd', text: '🏊 Swimmers' }],
            correctAnswer: 'a', explanation: 'Astronauts walked on the Moon! 🌙', funFact: 'Neil Armstrong was the first!' },
          { type: 'mcq', question: 'What did cave people paint on walls? 🎨', categoryId: 'history',
            options: [{ id: 'a', text: '🚗 Cars' }, { id: 'b', text: '🦌 Animals' }, { id: 'c', text: '📱 Phones' }, { id: 'd', text: '🏠 Houses' }],
            correctAnswer: 'b', explanation: 'Cave people painted animals! 🎨', funFact: 'Cave paintings are thousands of years old!' },
          { type: 'mcq', question: 'What did cowboys ride? 🤠', categoryId: 'history',
            options: [{ id: 'a', text: '🚲 Bicycles' }, { id: 'b', text: '🐴 Horses' }, { id: 'c', text: '🛴 Scooters' }, { id: 'd', text: '🛹 Skateboards' }],
            correctAnswer: 'b', explanation: 'Cowboys rode horses! 🤠', funFact: 'Cowboys herded cattle on the ranch!' },
        ];
      }
    }

    if (topicKey === 'space') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return spaceJuniorsEasy;
        if (difficulty === 'medium') return spaceJuniorsMedium;
        if (difficulty === 'hard') return spaceJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What is big, bright, and in the sky during the day? ☀️', categoryId: 'space',
            options: [{ id: 'a', text: '🌙 Moon' }, { id: 'b', text: '☀️ Sun' }, { id: 'c', text: '⭐ Star' }, { id: 'd', text: '☁️ Cloud' }],
            correctAnswer: 'b', explanation: 'The Sun shines during the day! ☀️', funFact: 'The Sun is actually a star!' },
          { type: 'mcq', question: 'What shines at night and looks round? 🌙', categoryId: 'space',
            options: [{ id: 'a', text: '☀️ Sun' }, { id: 'b', text: '🌙 Moon' }, { id: 'c', text: '🏀 Ball' }, { id: 'd', text: '🍪 Cookie' }],
            correctAnswer: 'b', explanation: 'The Moon shines at night! 🌙', funFact: 'We can see the Moon from Earth!' },
          { type: 'mcq', question: 'What twinkles in the night sky? ⭐', categoryId: 'space',
            options: [{ id: 'a', text: '☁️ Clouds' }, { id: 'b', text: '🐦 Birds' }, { id: 'c', text: '⭐ Stars' }, { id: 'd', text: '✈️ Planes' }],
            correctAnswer: 'c', explanation: 'Stars twinkle in the sky! ⭐', funFact: 'There are billions of stars!' },
          { type: 'mcq', question: 'What planet do we live on? 🌍', categoryId: 'space',
            options: [{ id: 'a', text: '🔴 Mars' }, { id: 'b', text: '🌍 Earth' }, { id: 'c', text: '🟠 Jupiter' }, { id: 'd', text: '🟡 Venus' }],
            correctAnswer: 'b', explanation: 'We live on Earth! 🌍', funFact: 'Earth is blue and green from space!' },
          { type: 'mcq', question: 'Who goes to space in a rocket? 🚀', categoryId: 'space',
            options: [{ id: 'a', text: '👨‍🍳 Chef' }, { id: 'b', text: '👨‍🚀 Astronaut' }, { id: 'c', text: '👨‍🏫 Teacher' }, { id: 'd', text: '👨‍⚕️ Doctor' }],
            correctAnswer: 'b', explanation: 'Astronauts fly to space! 🚀', funFact: 'They wear special space suits!' },
          { type: 'mcq', question: 'What shape is the Moon? 🌕', categoryId: 'space',
            options: [{ id: 'a', text: '⬜ Square' }, { id: 'b', text: '🔺 Triangle' }, { id: 'c', text: '⭕ Round' }, { id: 'd', text: '⭐ Star' }],
            correctAnswer: 'c', explanation: 'The Moon is round like a ball! 🌕', funFact: 'Sometimes we see only part of it!' },
          { type: 'mcq', question: 'What has rings around it? 🪐', categoryId: 'space',
            options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '☀️ Sun' }, { id: 'c', text: '🪐 Saturn' }, { id: 'd', text: '🌙 Moon' }],
            correctAnswer: 'c', explanation: 'Saturn has beautiful rings! 🪐', funFact: 'The rings are made of ice and rock!' },
          { type: 'mcq', question: 'What color is the sky at night? 🌌', categoryId: 'space',
            options: [{ id: 'a', text: '🔵 Blue' }, { id: 'b', text: '⚫ Dark/Black' }, { id: 'c', text: '🟢 Green' }, { id: 'd', text: '🔴 Red' }],
            correctAnswer: 'b', explanation: 'The sky is dark at night! 🌌', funFact: 'Thats when we can see the stars!' },
          { type: 'mcq', question: 'What flies to space? 🚀', categoryId: 'space',
            options: [{ id: 'a', text: '🚗 Car' }, { id: 'b', text: '🚂 Train' }, { id: 'c', text: '🚀 Rocket' }, { id: 'd', text: '🚲 Bicycle' }],
            correctAnswer: 'c', explanation: 'Rockets fly to space! 🚀', funFact: 'Rockets go very, very fast!' },
          { type: 'mcq', question: 'What is the red planet called? 🔴', categoryId: 'space',
            options: [{ id: 'a', text: '🌍 Earth' }, { id: 'b', text: '🔴 Mars' }, { id: 'c', text: '🌙 Moon' }, { id: 'd', text: '☀️ Sun' }],
            correctAnswer: 'b', explanation: 'Mars is the red planet! 🔴', funFact: 'Mars looks red because of rusty dust!' },
        ];
      }
    }

    if (topicKey === 'sports') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return sportsJuniorsEasy;
        if (difficulty === 'medium') return sportsJuniorsMedium;
        if (difficulty === 'hard') return sportsJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What do you kick in soccer? ⚽', categoryId: 'sports',
            options: [{ id: 'a', text: '🏀 Basketball' }, { id: 'b', text: '⚽ Soccer ball' }, { id: 'c', text: '🏈 Football' }, { id: 'd', text: '🎾 Tennis ball' }],
            correctAnswer: 'b', explanation: 'You kick a soccer ball! ⚽', funFact: 'Soccer is the most popular sport in the world!' },
          { type: 'mcq', question: 'What do you throw into a hoop? 🏀', categoryId: 'sports',
            options: [{ id: 'a', text: '⚽ Soccer ball' }, { id: 'b', text: '🏀 Basketball' }, { id: 'c', text: '⚾ Baseball' }, { id: 'd', text: '🏐 Volleyball' }],
            correctAnswer: 'b', explanation: 'You throw a basketball into the hoop! 🏀', funFact: 'Basketball hoops are very high!' },
          { type: 'mcq', question: 'What do swimmers do? 🏊', categoryId: 'sports',
            options: [{ id: 'a', text: '🏃 Run' }, { id: 'b', text: '🚴 Bike' }, { id: 'c', text: '🏊 Swim in water' }, { id: 'd', text: '🧗 Climb' }],
            correctAnswer: 'c', explanation: 'Swimmers swim in water! 🏊', funFact: 'Swimming is great exercise!' },
          { type: 'mcq', question: 'What sport uses a bat and ball? ⚾', categoryId: 'sports',
            options: [{ id: 'a', text: '⚽ Soccer' }, { id: 'b', text: '🏀 Basketball' }, { id: 'c', text: '⚾ Baseball' }, { id: 'd', text: '🏐 Volleyball' }],
            correctAnswer: 'c', explanation: 'Baseball uses a bat and ball! ⚾', funFact: 'Youhit the ball and run!' },
          { type: 'mcq', question: 'What do runners do? 🏃', categoryId: 'sports',
            options: [{ id: 'a', text: '🏊 Swim' }, { id: 'b', text: '🏃 Run fast' }, { id: 'c', text: '🚴 Ride bikes' }, { id: 'd', text: '⛷️ Ski' }],
            correctAnswer: 'b', explanation: 'Runners run fast! 🏃', funFact: 'Running is one of the oldest sports!' },
          { type: 'mcq', question: 'What color is a tennis ball? 🎾', categoryId: 'sports',
            options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🔵 Blue' }, { id: 'c', text: '🟡 Yellow/Green' }, { id: 'd', text: '⚫ Black' }],
            correctAnswer: 'c', explanation: 'Tennis balls are yellow-green! 🎾', funFact: 'They are fuzzy!' },
          { type: 'mcq', question: 'Where do you play basketball? 🏀', categoryId: 'sports',
            options: [{ id: 'a', text: '🏊 Pool' }, { id: 'b', text: '🏟️ Court' }, { id: 'c', text: '⛳ Golf course' }, { id: 'd', text: '🏖️ Beach' }],
            correctAnswer: 'b', explanation: 'Basketball is played on a court! 🏟️', funFact: 'The court has lines and hoops!' },
          { type: 'mcq', question: 'What do you wear on your feet to run? 👟', categoryId: 'sports',
            options: [{ id: 'a', text: '🥿 Sandals' }, { id: 'b', text: '👢 Boots' }, { id: 'c', text: '👟 Sneakers' }, { id: 'd', text: '🩴 Flip flops' }],
            correctAnswer: 'c', explanation: 'Sneakers are for running! 👟', funFact: 'Good shoes help you run faster!' },
          { type: 'mcq', question: 'What do you ride in cycling? 🚴', categoryId: 'sports',
            options: [{ id: 'a', text: '🛴 Scooter' }, { id: 'b', text: '🚴 Bicycle' }, { id: 'c', text: '🏍️ Motorcycle' }, { id: 'd', text: '🚗 Car' }],
            correctAnswer: 'b', explanation: 'Cyclists ride bicycles! 🚴', funFact: 'Bikes have two wheels!' },
          { type: 'mcq', question: 'What do you bounce? 🏀', categoryId: 'sports',
            options: [{ id: 'a', text: '🏈 Football' }, { id: 'b', text: '⚾ Baseball' }, { id: 'c', text: '🏀 Basketball' }, { id: 'd', text: '🎳 Bowling ball' }],
            correctAnswer: 'c', explanation: 'You bounce a basketball! 🏀', funFact: 'Bouncing is called dribbling!' },
        ];
      }
    }

    if (topicKey === 'technology') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return techJuniorsEasy;
        if (difficulty === 'medium') return techJuniorsMedium;
        if (difficulty === 'hard') return techJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What do you watch cartoons on? 📺', categoryId: 'technology',
            options: [{ id: 'a', text: '📻 Radio' }, { id: 'b', text: '📺 TV' }, { id: 'c', text: '📚 Book' }, { id: 'd', text: '🎸 Guitar' }],
            correctAnswer: 'b', explanation: 'We watch TV for cartoons! 📺', funFact: 'TVs used to be black and white!' },
          { type: 'mcq', question: 'What do you use to call someone? 📱', categoryId: 'technology',
            options: [{ id: 'a', text: '📺 TV' }, { id: 'b', text: '📱 Phone' }, { id: 'c', text: '📻 Radio' }, { id: 'd', text: '⏰ Clock' }],
            correctAnswer: 'b', explanation: 'We use phones to call people! 📱', funFact: 'Phones can take pictures too!' },
          { type: 'mcq', question: 'What takes pictures? 📷', categoryId: 'technology',
            options: [{ id: 'a', text: '📷 Camera' }, { id: 'b', text: '📻 Radio' }, { id: 'c', text: '⏰ Clock' }, { id: 'd', text: '🔦 Flashlight' }],
            correctAnswer: 'a', explanation: 'Cameras take pictures! 📷', funFact: 'Your phone has a camera!' },
          { type: 'mcq', question: 'What plays music? 🎵', categoryId: 'technology',
            options: [{ id: 'a', text: '📺 TV' }, { id: 'b', text: '⏰ Clock' }, { id: 'c', text: '🔊 Speaker' }, { id: 'd', text: '💡 Lamp' }],
            correctAnswer: 'c', explanation: 'Speakers play music! 🎵', funFact: 'Music makes us happy!' },
          { type: 'mcq', question: 'What helps you see in the dark? 🔦', categoryId: 'technology',
            options: [{ id: 'a', text: '📻 Radio' }, { id: 'b', text: '🔦 Flashlight' }, { id: 'c', text: '📱 Phone' }, { id: 'd', text: '📺 TV' }],
            correctAnswer: 'b', explanation: 'Flashlights shine light! 🔦', funFact: 'Phones also have flashlights!' },
          { type: 'mcq', question: 'What shows the time? ⏰', categoryId: 'technology',
            options: [{ id: 'a', text: '📷 Camera' }, { id: 'b', text: '📺 TV' }, { id: 'c', text: '⏰ Clock' }, { id: 'd', text: '🔊 Speaker' }],
            correctAnswer: 'c', explanation: 'Clocks show us the time! ⏰', funFact: 'Some clocks go tick-tock!' },
          { type: 'mcq', question: 'What do you play games on? 🎮', categoryId: 'technology',
            options: [{ id: 'a', text: '📚 Book' }, { id: 'b', text: '🎮 Video game' }, { id: 'c', text: '🎸 Guitar' }, { id: 'd', text: '⚽ Ball' }],
            correctAnswer: 'b', explanation: 'Video games are fun! 🎮', funFact: 'You can play games on phones too!' },
          { type: 'mcq', question: 'What makes things cold? ❄️', categoryId: 'technology',
            options: [{ id: 'a', text: '🔥 Oven' }, { id: 'b', text: '❄️ Refrigerator' }, { id: 'c', text: '📺 TV' }, { id: 'd', text: '💡 Lamp' }],
            correctAnswer: 'b', explanation: 'Fridges keep food cold! ❄️', funFact: 'Ice cream stays frozen in the freezer!' },
          { type: 'mcq', question: 'What makes the room bright? 💡', categoryId: 'technology',
            options: [{ id: 'a', text: '📻 Radio' }, { id: 'b', text: '📺 TV' }, { id: 'c', text: '💡 Light bulb' }, { id: 'd', text: '⏰ Clock' }],
            correctAnswer: 'c', explanation: 'Light bulbs light up rooms! 💡', funFact: 'Thomas Edison invented the light bulb!' },
          { type: 'mcq', question: 'What washes clothes? 🧺', categoryId: 'technology',
            options: [{ id: 'a', text: '📺 TV' }, { id: 'b', text: '❄️ Fridge' }, { id: 'c', text: '🧺 Washing machine' }, { id: 'd', text: '🔊 Speaker' }],
            correctAnswer: 'c', explanation: 'Washing machines clean our clothes! 🧺', funFact: 'They spin really fast!' },
        ];
      }
    }

    if (topicKey === 'english') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return englishJuniorsEasy;
        if (difficulty === 'medium') return englishJuniorsMedium;
        if (difficulty === 'hard') return englishJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What letter does "Apple" start with? 🍎', categoryId: 'english',
            options: [{ id: 'a', text: '🅰️ A' }, { id: 'b', text: '🅱️ B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'D' }],
            correctAnswer: 'a', explanation: 'Apple starts with A! 🍎', funFact: 'A is the first letter of the alphabet!' },
          { type: 'mcq', question: 'What rhymes with "cat"? 🐱', categoryId: 'english',
            options: [{ id: 'a', text: '🐶 Dog' }, { id: 'b', text: '🎩 Hat' }, { id: 'c', text: '🐟 Fish' }, { id: 'd', text: '🐦 Bird' }],
            correctAnswer: 'b', explanation: 'Cat and hat rhyme! 🐱🎩', funFact: 'Rhyming words sound the same at the end!' },
          { type: 'mcq', question: 'What color starts with "B"? 🔵', categoryId: 'english',
            options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟡 Yellow' }],
            correctAnswer: 'c', explanation: 'Blue starts with B! 🔵', funFact: 'The sky is blue!' },
          { type: 'mcq', question: 'How many letters are in "DOG"? 🐕', categoryId: 'english',
            options: [{ id: 'a', text: '2️⃣' }, { id: 'b', text: '3️⃣' }, { id: 'c', text: '4️⃣' }, { id: 'd', text: '5️⃣' }],
            correctAnswer: 'b', explanation: 'D-O-G has 3 letters! 🐕', funFact: 'Can you spell your name?' },
          { type: 'mcq', question: 'What says "Moo"? 🐮', categoryId: 'english',
            options: [{ id: 'a', text: '🐶 Dog' }, { id: 'b', text: '🐱 Cat' }, { id: 'c', text: '🐮 Cow' }, { id: 'd', text: '🐷 Pig' }],
            correctAnswer: 'c', explanation: 'Cows say "Moo"! 🐮', funFact: 'This is called an animal sound!' },
          { type: 'mcq', question: 'What is the opposite of "big"? 📏', categoryId: 'english',
            options: [{ id: 'a', text: 'Tall' }, { id: 'b', text: 'Small' }, { id: 'c', text: 'Wide' }, { id: 'd', text: 'Long' }],
            correctAnswer: 'b', explanation: 'Small is the opposite of big! 📏', funFact: 'Opposite words are called antonyms!' },
          { type: 'mcq', question: 'What letter does "Sun" start with? ☀️', categoryId: 'english',
            options: [{ id: 'a', text: 'R' }, { id: 'b', text: 'S' }, { id: 'c', text: 'T' }, { id: 'd', text: 'U' }],
            correctAnswer: 'b', explanation: 'Sun starts with S! ☀️', funFact: 'Star and sky also start with S!' },
          { type: 'mcq', question: 'What rhymes with "bee"? 🐝', categoryId: 'english',
            options: [{ id: 'a', text: '🌲 Tree' }, { id: 'b', text: '🐕 Dog' }, { id: 'c', text: '🐱 Cat' }, { id: 'd', text: '🐟 Fish' }],
            correctAnswer: 'a', explanation: 'Bee and tree rhyme! 🐝🌲', funFact: 'They both end with the "ee" sound!' },
          { type: 'mcq', question: 'Which word is longer? 📝', categoryId: 'english',
            options: [{ id: 'a', text: 'Cat' }, { id: 'b', text: 'Elephant' }],
            correctAnswer: 'b', explanation: 'Elephant has 8 letters, cat has 3! 🐘', funFact: 'Longer words have more letters!' },
          { type: 'mcq', question: 'What comes after A, B, C? 🔤', categoryId: 'english',
            options: [{ id: 'a', text: 'E' }, { id: 'b', text: 'D' }, { id: 'c', text: 'F' }, { id: 'd', text: 'G' }],
            correctAnswer: 'b', explanation: 'A, B, C, D! 🔤', funFact: 'There are 26 letters in the alphabet!' },
        ];
      }
    }

    if (topicKey === 'geography') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return geographyJuniorsEasy;
        if (difficulty === 'medium') return geographyJuniorsMedium;
        if (difficulty === 'hard') return geographyJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What color is the ocean? 🌊', categoryId: 'geography',
            options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🔵 Blue' }, { id: 'c', text: '🟢 Green' }, { id: 'd', text: '🟡 Yellow' }],
            correctAnswer: 'b', explanation: 'The ocean looks blue! 🌊', funFact: 'The ocean reflects the sky!' },
          { type: 'mcq', question: 'Where do polar bears live? 🐻‍❄️', categoryId: 'geography',
            options: [{ id: 'a', text: '🏜️ Desert' }, { id: 'b', text: '🌴 Jungle' }, { id: 'c', text: '🧊 Arctic/Cold places' }, { id: 'd', text: '🏖️ Beach' }],
            correctAnswer: 'c', explanation: 'Polar bears live in cold, icy places! 🐻‍❄️', funFact: 'They live near the North Pole!' },
          { type: 'mcq', question: 'What are big areas of water called? 💧', categoryId: 'geography',
            options: [{ id: 'a', text: '🏔️ Mountains' }, { id: 'b', text: '🌊 Oceans' }, { id: 'c', text: '🏜️ Deserts' }, { id: 'd', text: '🌲 Forests' }],
            correctAnswer: 'b', explanation: 'Big areas of water are oceans! 🌊', funFact: 'Most of Earth is covered in water!' },
          { type: 'mcq', question: 'Where do kangaroos live? 🦘', categoryId: 'geography',
            options: [{ id: 'a', text: '🇺🇸 America' }, { id: 'b', text: '🇦🇺 Australia' }, { id: 'c', text: '🇬🇧 England' }, { id: 'd', text: '🇯🇵 Japan' }],
            correctAnswer: 'b', explanation: 'Kangaroos live in Australia! 🦘', funFact: 'Baby kangaroos are called joeys!' },
          { type: 'mcq', question: 'What is very tall and has snow on top? 🏔️', categoryId: 'geography',
            options: [{ id: 'a', text: '🏠 House' }, { id: 'b', text: '🌲 Tree' }, { id: 'c', text: '🏔️ Mountain' }, { id: 'd', text: '🏢 Building' }],
            correctAnswer: 'c', explanation: 'Mountains are very tall! 🏔️', funFact: 'The tallest mountain is Mount Everest!' },
          { type: 'mcq', question: 'What is a very hot and sandy place? 🏜️', categoryId: 'geography',
            options: [{ id: 'a', text: '🌲 Forest' }, { id: 'b', text: '🏜️ Desert' }, { id: 'c', text: '🌊 Ocean' }, { id: 'd', text: '🧊 Arctic' }],
            correctAnswer: 'b', explanation: 'Deserts are hot and sandy! 🏜️', funFact: 'Camels live in deserts!' },
          { type: 'mcq', question: 'Where does the Eiffel Tower live? 🗼', categoryId: 'geography',
            options: [{ id: 'a', text: '🇮🇹 Italy' }, { id: 'b', text: '🇫🇷 France' }, { id: 'c', text: '🇪🇸 Spain' }, { id: 'd', text: '🇬🇧 England' }],
            correctAnswer: 'b', explanation: 'The Eiffel Tower is in Paris, France! 🗼', funFact: 'Its made of iron!' },
          { type: 'mcq', question: 'What planet do we live on? 🌍', categoryId: 'geography',
            options: [{ id: 'a', text: '🔴 Mars' }, { id: 'b', text: '🌍 Earth' }, { id: 'c', text: '🟠 Jupiter' }, { id: 'd', text: '🌙 Moon' }],
            correctAnswer: 'b', explanation: 'We live on planet Earth! 🌍', funFact: 'Earth is the only planet with people!' },
          { type: 'mcq', question: 'What has lots of trees and animals? 🌲', categoryId: 'geography',
            options: [{ id: 'a', text: '🏜️ Desert' }, { id: 'b', text: '🌊 Ocean' }, { id: 'c', text: '🌲 Forest' }, { id: 'd', text: '🧊 Ice' }],
            correctAnswer: 'c', explanation: 'Forests have lots of trees! 🌲', funFact: 'Many animals live in forests!' },
          { type: 'mcq', question: 'Where do penguins live? 🐧', categoryId: 'geography',
            options: [{ id: 'a', text: '🏜️ Desert' }, { id: 'b', text: '🌴 Jungle' }, { id: 'c', text: '🧊 Antarctica (cold place)' }, { id: 'd', text: '🌲 Forest' }],
            correctAnswer: 'c', explanation: 'Penguins live in Antarctica! 🐧', funFact: 'Antarctica is the coldest place on Earth!' },
        ];
      }
    }

    if (topicKey === 'science') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return scienceJuniorsEasy;
        if (difficulty === 'medium') return scienceJuniorsMedium;
        if (difficulty === 'hard') return scienceJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What do you drink every day that is clear? 💧', categoryId: 'science',
            options: [{ id: 'a', text: '🧃 Juice' }, { id: 'b', text: '💧 Water' }, { id: 'c', text: '🥛 Milk' }, { id: 'd', text: '🫖 Tea' }],
            correctAnswer: 'b', explanation: 'Water is clear and keeps us healthy! 💧', funFact: 'Our body is mostly made of water!' },
          { type: 'mcq', question: 'What shines bright in the sky during the day? ☀️', categoryId: 'science',
            options: [{ id: 'a', text: '🌙 Moon' }, { id: 'b', text: '⭐ Stars' }, { id: 'c', text: '☀️ Sun' }, { id: 'd', text: '☁️ Clouds' }],
            correctAnswer: 'c', explanation: 'The Sun gives us light and warmth! ☀️', funFact: 'The Sun is actually a star!' },
          { type: 'mcq', question: 'What falls from clouds when it rains? 🌧️', categoryId: 'science',
            options: [{ id: 'a', text: '❄️ Snow' }, { id: 'b', text: '💧 Water' }, { id: 'c', text: '🍂 Leaves' }, { id: 'd', text: '🏖️ Sand' }],
            correctAnswer: 'b', explanation: 'Rain is water falling from clouds! 🌧️', funFact: 'Clouds are made of tiny water droplets!' },
          { type: 'mcq', question: 'What color is grass? 🌿', categoryId: 'science',
            options: [{ id: 'a', text: '🔵 Blue' }, { id: 'b', text: '🔴 Red' }, { id: 'c', text: '🟢 Green' }, { id: 'd', text: '🟡 Yellow' }],
            correctAnswer: 'c', explanation: 'Grass is green! 🌿', funFact: 'Plants are green because of chlorophyll!' },
          { type: 'mcq', question: 'What do butterflies have that help them fly? 🦋', categoryId: 'science',
            options: [{ id: 'a', text: '🦵 Legs' }, { id: 'b', text: '🪽 Wings' }, { id: 'c', text: 'Tails' }, { id: 'd', text: 'Fins' }],
            correctAnswer: 'b', explanation: 'Butterflies use their beautiful wings to fly! 🦋', funFact: 'Butterfly wings have tiny scales!' },
          { type: 'mcq', question: 'What do fish breathe with? 🐟', categoryId: 'science',
            options: [{ id: 'a', text: '👃 Nose' }, { id: 'b', text: '👄 Mouth' }, { id: 'c', text: 'Gills' }, { id: 'd', text: 'Fins' }],
            correctAnswer: 'c', explanation: 'Fish breathe underwater using gills! 🐟', funFact: 'Gills take oxygen from water!' },
          { type: 'mcq', question: 'What comes out of a seed when you plant it? 🌱', categoryId: 'science',
            options: [{ id: 'a', text: '🐦 A bird' }, { id: 'b', text: '🌱 A plant' }, { id: 'c', text: '🪨 A rock' }, { id: 'd', text: '💧 Water' }],
            correctAnswer: 'b', explanation: 'Seeds grow into plants! 🌱', funFact: 'Seeds need water and sunlight to grow!' },
          { type: 'mcq', question: 'What do you see in the sky at night? 🌙', categoryId: 'science',
            options: [{ id: 'a', text: '☀️ Sun' }, { id: 'b', text: '🌈 Rainbow' }, { id: 'c', text: '🌙⭐ Moon and stars' }, { id: 'd', text: '🐦 Birds' }],
            correctAnswer: 'c', explanation: 'The moon and stars shine at night! 🌙⭐', funFact: 'We can see thousands of stars on a clear night!' },
          { type: 'mcq', question: 'What do we use our eyes for? 👀', categoryId: 'science',
            options: [{ id: 'a', text: '👃 Smelling' }, { id: 'b', text: '👀 Seeing' }, { id: 'c', text: '👂 Hearing' }, { id: 'd', text: '👅 Tasting' }],
            correctAnswer: 'b', explanation: 'Our eyes help us see the world! 👀', funFact: 'Your eyes can see millions of colors!' },
          { type: 'mcq', question: 'What keeps you warm in winter? 🧥', categoryId: 'science',
            options: [{ id: 'a', text: '🧊 Ice' }, { id: 'b', text: '💨 Wind' }, { id: 'c', text: '🧥 Coat and sweater' }, { id: 'd', text: '💧 Water' }],
            correctAnswer: 'c', explanation: 'Warm clothes keep our body heat inside! 🧥', funFact: 'Fur keeps animals warm the same way!' },
        ];
      }
    }

    if (topicKey === 'math') {
      if (ageGroup === 'juniors' || ageGroup === 'teens') {
        if (difficulty === 'easy') return mathJuniorsEasy;
        if (difficulty === 'medium') return mathJuniorsMedium;
        if (difficulty === 'hard') return mathJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What is 1 + 1? 🧮', categoryId: 'math',
            options: [{ id: 'a', text: '1️⃣' }, { id: 'b', text: '2️⃣' }, { id: 'c', text: '3️⃣' }, { id: 'd', text: '4️⃣' }],
            correctAnswer: 'b', explanation: '1 + 1 = 2! ✨', funFact: 'Adding is putting things together!' },
          { type: 'mcq', question: 'How many fingers on one hand? ✋', categoryId: 'math',
            options: [{ id: 'a', text: '3️⃣' }, { id: 'b', text: '4️⃣' }, { id: 'c', text: '5️⃣' }, { id: 'd', text: '6️⃣' }],
            correctAnswer: 'c', explanation: 'We have 5 fingers! ✋', funFact: 'Two hands have 10 fingers!' },
          { type: 'mcq', question: 'What is 2 + 2? 🎯', categoryId: 'math',
            options: [{ id: 'a', text: '2️⃣' }, { id: 'b', text: '3️⃣' }, { id: 'c', text: '4️⃣' }, { id: 'd', text: '5️⃣' }],
            correctAnswer: 'c', explanation: '2 + 2 = 4! 🌟', funFact: 'Great job counting!' },
          { type: 'mcq', question: 'Which number comes after 3? 📢', categoryId: 'math',
            options: [{ id: 'a', text: '2️⃣' }, { id: 'b', text: '3️⃣' }, { id: 'c', text: '4️⃣' }, { id: 'd', text: '5️⃣' }],
            correctAnswer: 'c', explanation: '4 comes after 3!', funFact: '1, 2, 3, 4, 5...' },
          { type: 'mcq', question: 'How many wheels does a bicycle have? 🚲', categoryId: 'math',
            options: [{ id: 'a', text: '1️⃣' }, { id: 'b', text: '2️⃣' }, { id: 'c', text: '3️⃣' }, { id: 'd', text: '4️⃣' }],
            correctAnswer: 'b', explanation: 'A bicycle has 2 wheels! 🚲', funFact: 'Bi means two!' },
          { type: 'mcq', question: 'What is 3 + 2? ➕', categoryId: 'math',
            options: [{ id: 'a', text: '3️⃣' }, { id: 'b', text: '4️⃣' }, { id: 'c', text: '5️⃣' }, { id: 'd', text: '6️⃣' }],
            correctAnswer: 'c', explanation: '3 + 2 = 5! ⭐', funFact: 'You are a math star!' },
          { type: 'mcq', question: 'Which is more: 5 or 3? 🤔', categoryId: 'math',
            options: [{ id: 'a', text: '3️⃣' }, { id: 'b', text: '5️⃣' }],
            correctAnswer: 'b', explanation: '5 is more than 3! 🎉', funFact: '5 is bigger!' },
          { type: 'mcq', question: 'What shape is a ball? ⚽', categoryId: 'math',
            options: [{ id: 'a', text: '⬜ Square' }, { id: 'b', text: '🔺 Triangle' }, { id: 'c', text: '⭕ Circle' }, { id: 'd', text: '⬛ Rectangle' }],
            correctAnswer: 'c', explanation: 'A ball is round like a circle! ⭕', funFact: 'Circles have no corners!' },
          { type: 'mcq', question: 'How many sides does a triangle have? 🔺', categoryId: 'math',
            options: [{ id: 'a', text: '2️⃣' }, { id: 'b', text: '3️⃣' }, { id: 'c', text: '4️⃣' }, { id: 'd', text: '5️⃣' }],
            correctAnswer: 'b', explanation: 'A triangle has 3 sides! 🔺', funFact: 'Tri means three!' },
          { type: 'mcq', question: 'What is 5 - 2? ➖', categoryId: 'math',
            options: [{ id: 'a', text: '2️⃣' }, { id: 'b', text: '3️⃣' }, { id: 'c', text: '4️⃣' }, { id: 'd', text: '5️⃣' }],
            correctAnswer: 'b', explanation: '5 - 2 = 3! 🌈', funFact: 'Subtracting is taking away!' },
        ];
      }
    }

    if (topicKey === 'fruits-veggies') {
      if (ageGroup === 'juniors') {
        if (difficulty === 'easy') return foodJuniorsEasy;
        if (difficulty === 'medium') return foodJuniorsMedium;
        if (difficulty === 'hard') return foodJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        return [
          { type: 'mcq', question: 'What color is a banana? 🍌', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟡 Yellow' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟢 Green' }],
            correctAnswer: 'b', explanation: 'Bananas are yellow! 🍌', funFact: 'Bananas grow upside down!' },
          { type: 'mcq', question: 'Which fruit is red and round? 🍎', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🍌 Banana' }, { id: 'b', text: '🍎 Apple' }, { id: 'c', text: '🍇 Grapes' }, { id: 'd', text: '🍊 Orange' }],
            correctAnswer: 'b', explanation: 'Apples are red and round! 🍎', funFact: 'Apples float in water!' },
          { type: 'mcq', question: 'What do rabbits love to eat? 🥕', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🍕 Pizza' }, { id: 'b', text: '🥕 Carrot' }, { id: 'c', text: '🍦 Ice cream' }, { id: 'd', text: '🍩 Donut' }],
            correctAnswer: 'b', explanation: 'Rabbits love carrots! 🥕', funFact: 'Carrots help you see better!' },
          { type: 'mcq', question: 'Which fruit is orange and round? 🍊', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🍌 Banana' }, { id: 'c', text: '🍊 Orange' }, { id: 'd', text: '🍇 Grapes' }],
            correctAnswer: 'c', explanation: 'Oranges are orange! 🍊', funFact: 'Orange juice is yummy!' },
          { type: 'mcq', question: 'What fruit is big, green, and has red inside? 🍉', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🍉 Watermelon' }, { id: 'c', text: '🍌 Banana' }, { id: 'd', text: '🍇 Grapes' }],
            correctAnswer: 'b', explanation: 'Watermelons are big and juicy! 🍉', funFact: 'Watermelon is mostly water!' },
          { type: 'true-false', question: 'Strawberries are red. 🍓', categoryId: 'fruits-veggies',
            options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
            correctAnswer: 'true', explanation: 'Yes! Strawberries are red! 🍓', funFact: 'Strawberries have seeds outside!' },
          { type: 'mcq', question: 'Which vegetable is green and long? 🥒', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🥕 Carrot' }, { id: 'b', text: '🥒 Cucumber' }, { id: 'c', text: '🍅 Tomato' }, { id: 'd', text: '🧅 Onion' }],
            correctAnswer: 'b', explanation: 'Cucumbers are green and long! 🥒', funFact: 'Cucumbers are cool and crunchy!' },
          { type: 'mcq', question: 'What small fruits come in bunches? 🍇', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🍎 Apples' }, { id: 'b', text: '🍌 Bananas' }, { id: 'c', text: '🍇 Grapes' }, { id: 'd', text: '🍊 Oranges' }],
            correctAnswer: 'c', explanation: 'Grapes grow in bunches! 🍇', funFact: 'Grapes can be green or purple!' },
          { type: 'mcq', question: 'Which vegetable is red and juicy? 🍅', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🥕 Carrot' }, { id: 'b', text: '🥒 Cucumber' }, { id: 'c', text: '🍅 Tomato' }, { id: 'd', text: '🥬 Lettuce' }],
            correctAnswer: 'c', explanation: 'Tomatoes are red and juicy! 🍅', funFact: 'Tomatoes are used in ketchup!' },
          { type: 'mcq', question: 'What yellow fruit monkeys love? 🐒🍌', categoryId: 'fruits-veggies',
            options: [{ id: 'a', text: '🍎 Apple' }, { id: 'b', text: '🍌 Banana' }, { id: 'c', text: '🍊 Orange' }, { id: 'd', text: '🍇 Grapes' }],
            correctAnswer: 'b', explanation: 'Monkeys love bananas! 🍌', funFact: 'Bananas give you energy!' },
        ];
      }
    }

    if (topicKey === 'animals') {
      if (ageGroup === 'juniors') {
        if (difficulty === 'easy') return animalsJuniorsEasy;
        if (difficulty === 'medium') return animalsJuniorsMedium;
        if (difficulty === 'hard') return animalsJuniorsHard;
      }
      if (ageGroup === 'tiny-tots') {
        // Tiny tots only has easy questions
        return [
          { type: 'mcq', question: 'Which animal says "Woof Woof"? 🐕', categoryId: 'animals',
            options: [{ id: 'a', text: '🐱 Cat' }, { id: 'b', text: '🐶 Dog' }, { id: 'c', text: '🐮 Cow' }, { id: 'd', text: '🐷 Pig' }],
            correctAnswer: 'b', explanation: 'Dogs say "Woof Woof"! 🐕', funFact: 'Dogs can learn over 100 words!' },
          { type: 'mcq', question: 'Which animal loves bananas? 🍌', categoryId: 'animals',
            options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🦁 Lion' }, { id: 'c', text: '🐒 Monkey' }, { id: 'd', text: '🐟 Fish' }],
            correctAnswer: 'c', explanation: 'Monkeys LOVE bananas! 🐒🍌', funFact: 'Monkeys peel bananas from the bottom!' },
          { type: 'mcq', question: 'Which animal has a long neck? 🦒', categoryId: 'animals',
            options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🦒 Giraffe' }, { id: 'c', text: '🐻 Bear' }, { id: 'd', text: '🐰 Rabbit' }],
            correctAnswer: 'b', explanation: 'Giraffes have the longest necks! 🦒', funFact: 'A giraffe neck can be 6 feet long!' },
          { type: 'mcq', question: 'Which animal says "Meow"? 🐱', categoryId: 'animals',
            options: [{ id: 'a', text: '🐶 Dog' }, { id: 'b', text: '🐱 Cat' }, { id: 'c', text: '🐦 Bird' }, { id: 'd', text: '🐸 Frog' }],
            correctAnswer: 'b', explanation: 'Cats say "Meow"! 🐱', funFact: 'Cats sleep 70% of their lives!' },
          { type: 'mcq', question: 'Which animal lives in water? 🐟', categoryId: 'animals',
            options: [{ id: 'a', text: '🐟 Fish' }, { id: 'b', text: '🦁 Lion' }, { id: 'c', text: '🐘 Elephant' }, { id: 'd', text: '🐵 Monkey' }],
            correctAnswer: 'a', explanation: 'Fish live in water! 🐟', funFact: 'Fish breathe through gills!' },
          { type: 'true-false', question: 'Birds can fly. 🐦', categoryId: 'animals',
            options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
            correctAnswer: 'true', explanation: 'Most birds can fly! 🐦', funFact: 'Penguins cannot fly!' },
          { type: 'mcq', question: 'Which is the King of the Jungle? 👑', categoryId: 'animals',
            options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🦁 Lion' }, { id: 'c', text: '🐍 Snake' }, { id: 'd', text: '🐻 Bear' }],
            correctAnswer: 'b', explanation: 'The Lion is King! ROAR! 🦁👑', funFact: 'Lions sleep 20 hours a day!' },
          { type: 'mcq', question: 'Which animal hops? 🐰', categoryId: 'animals',
            options: [{ id: 'a', text: '🐍 Snake' }, { id: 'b', text: '🐟 Fish' }, { id: 'c', text: '🐰 Rabbit' }, { id: 'd', text: '🐢 Turtle' }],
            correctAnswer: 'c', explanation: 'Rabbits hop! Boing boing! 🐰', funFact: 'Rabbits can jump 3 feet high!' },
          { type: 'mcq', question: 'Which has black and white stripes? 🦓', categoryId: 'animals',
            options: [{ id: 'a', text: '🦁 Lion' }, { id: 'b', text: '🦓 Zebra' }, { id: 'c', text: '🐘 Elephant' }, { id: 'd', text: '🐻 Bear' }],
            correctAnswer: 'b', explanation: 'Zebras have stripes! 🦓', funFact: 'Each zebra has unique stripes!' },
          { type: 'mcq', question: 'Which animal says "Moo"? 🐮', categoryId: 'animals',
            options: [{ id: 'a', text: '🐷 Pig' }, { id: 'b', text: '🐔 Chicken' }, { id: 'c', text: '🐮 Cow' }, { id: 'd', text: '🐴 Horse' }],
            correctAnswer: 'c', explanation: 'Cows say "Moo"! 🐮', funFact: 'Cows have best friends!' },
        ];
      }
    }

    // Default fallback for other categories
    return this.getDefaultQuestions(ageGroup, difficulty);
  }

  private getDefaultQuestions(ageGroup: AgeGroup, difficulty: Difficulty): Partial<Question>[] {
    const defaults: Record<AgeGroup, Record<Difficulty, Partial<Question>[]>> = {
      'tiny-tots': {
        'easy': [
          { type: 'mcq', question: 'Which is bigger? 🐘 or 🐭', categoryId: 'general',
            options: [{ id: 'a', text: '🐘 Elephant' }, { id: 'b', text: '🐭 Mouse' }],
            correctAnswer: 'a', explanation: 'Elephants are MUCH bigger! 🐘', funFact: 'Elephants are the biggest land animals!' },
          { type: 'mcq', question: 'What color is grass? 🌿', categoryId: 'general',
            options: [{ id: 'a', text: '🔴 Red' }, { id: 'b', text: '🟢 Green' }, { id: 'c', text: '🔵 Blue' }, { id: 'd', text: '🟡 Yellow' }],
            correctAnswer: 'b', explanation: 'Grass is GREEN! 🌿', funFact: 'Plants are green because of chlorophyll!' },
          { type: 'mcq', question: 'What do we drink? 💧', categoryId: 'general',
            options: [{ id: 'a', text: '🪨 Rocks' }, { id: 'b', text: '💧 Water' }, { id: 'c', text: '🌳 Trees' }, { id: 'd', text: '☁️ Clouds' }],
            correctAnswer: 'b', explanation: 'We drink WATER! 💧', funFact: 'Our body is 60% water!' },
          { type: 'true-false', question: 'The sky is blue. ☁️', categoryId: 'general',
            options: [{ id: 'true', text: '✅ True' }, { id: 'false', text: '❌ False' }],
            correctAnswer: 'true', explanation: 'Yes! The sky is blue! ☀️', funFact: 'Sunlight makes the sky look blue!' },
          { type: 'mcq', question: 'What do bees make? 🐝', categoryId: 'general',
            options: [{ id: 'a', text: '🍯 Honey' }, { id: 'b', text: '🥛 Milk' }, { id: 'c', text: '🧀 Cheese' }, { id: 'd', text: '🍞 Bread' }],
            correctAnswer: 'a', explanation: 'Bees make HONEY! 🍯', funFact: 'Bees visit millions of flowers!' },
        ],
        'medium': [
          { type: 'mcq', question: 'How many days in a week? 📅', categoryId: 'general',
            options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
            correctAnswer: 'c', explanation: '7 days in a week!', funFact: 'Sunday is the first day!' },
        ],
        'hard': [
          { type: 'mcq', question: 'What comes after 19? 🔢', categoryId: 'general',
            options: [{ id: 'a', text: '18' }, { id: 'b', text: '20' }, { id: 'c', text: '21' }, { id: 'd', text: '29' }],
            correctAnswer: 'b', explanation: '20 comes after 19!', funFact: 'Counting is fun!' },
        ],
      },
      'juniors': {
        'easy': [
          { type: 'mcq', question: 'How many continents are there?', categoryId: 'general',
            options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
            correctAnswer: 'c', explanation: 'There are 7 continents!', funFact: 'Asia is the largest continent!' },
          { type: 'mcq', question: 'What planet do we live on?', categoryId: 'general',
            options: [{ id: 'a', text: 'Mars' }, { id: 'b', text: 'Earth' }, { id: 'c', text: 'Venus' }, { id: 'd', text: 'Jupiter' }],
            correctAnswer: 'b', explanation: 'We live on Earth!', funFact: 'Earth is the only planet with liquid water!' },
        ],
        'medium': [
          { type: 'mcq', question: 'What is the capital of France?', categoryId: 'general',
            options: [{ id: 'a', text: 'London' }, { id: 'b', text: 'Paris' }, { id: 'c', text: 'Rome' }, { id: 'd', text: 'Berlin' }],
            correctAnswer: 'b', explanation: 'Paris is the capital of France!', funFact: 'The Eiffel Tower is in Paris!' },
          { type: 'mcq', question: 'How many planets are in our solar system?', categoryId: 'general',
            options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
            correctAnswer: 'b', explanation: 'There are 8 planets!', funFact: 'Pluto was reclassified as a dwarf planet!' },
        ],
        'hard': [
          { type: 'mcq', question: 'What is the chemical symbol for water?', categoryId: 'general',
            options: [{ id: 'a', text: 'H2O' }, { id: 'b', text: 'CO2' }, { id: 'c', text: 'O2' }, { id: 'd', text: 'NaCl' }],
            correctAnswer: 'a', explanation: 'Water is H2O!', funFact: 'H2O means 2 hydrogen atoms and 1 oxygen atom!' },
          { type: 'mcq', question: 'Who painted the Mona Lisa?', categoryId: 'general',
            options: [{ id: 'a', text: 'Van Gogh' }, { id: 'b', text: 'Leonardo da Vinci' }, { id: 'c', text: 'Picasso' }, { id: 'd', text: 'Michelangelo' }],
            correctAnswer: 'b', explanation: 'Leonardo da Vinci painted the Mona Lisa!', funFact: 'It took him about 16 years!' },
        ],
      },
      'teens': {
        'easy': [
          { type: 'mcq', question: 'Who wrote "Romeo and Juliet"?', categoryId: 'general',
            options: [{ id: 'a', text: 'Charles Dickens' }, { id: 'b', text: 'William Shakespeare' }, { id: 'c', text: 'Jane Austen' }, { id: 'd', text: 'Mark Twain' }],
            correctAnswer: 'b', explanation: 'Shakespeare wrote it!', funFact: 'Shakespeare invented 1,700+ words!' },
        ],
        'medium': [
          { type: 'mcq', question: 'What is the speed of light?', categoryId: 'general',
            options: [{ id: 'a', text: '300,000 km/s' }, { id: 'b', text: '150,000 km/s' }, { id: 'c', text: '500,000 km/s' }, { id: 'd', text: '1,000,000 km/s' }],
            correctAnswer: 'a', explanation: 'Light travels at 300,000 km/s!', funFact: 'Nothing can travel faster than light!' },
        ],
        'hard': [
          { type: 'mcq', question: 'What is the atomic number of Carbon?', categoryId: 'general',
            options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '12' }],
            correctAnswer: 'b', explanation: 'Carbon has 6 protons!', funFact: 'Carbon is the basis of all organic life!' },
        ],
      },
    };

    return defaults[ageGroup]?.[difficulty] || defaults['juniors']['easy'];
  }
}

export const aiQuizGenerator = new AIQuizGenerator();
export default aiQuizGenerator;
