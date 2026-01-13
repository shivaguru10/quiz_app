// Juniors Geography Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const geographyQuestions: JuniorsQuestionBank = {
  easy: [
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
  ],
  medium: [
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
  ],
  hard: [
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
  ],
};
