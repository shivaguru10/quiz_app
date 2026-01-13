// Juniors Animals Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const animalsQuestions: JuniorsQuestionBank = {
  easy: [
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
  ],
  medium: [
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
  ],
  hard: [
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
  ],
};
