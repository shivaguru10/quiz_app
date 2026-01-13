// Teens Geography Questions (13+ years) - World Geography & Advanced Topics
import { TeensQuestionBank } from './types';

export const geographyQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is the largest country in the world by area?', categoryId: 'geography',
      options: [{ id: 'a', text: 'China' }, { id: 'b', text: 'Canada' }, { id: 'c', text: 'Russia' }, { id: 'd', text: 'USA' }],
      correctAnswer: 'c', explanation: 'Russia spans 17.1 million km² across 11 time zones!', funFact: 'Russia is so big it borders 14 countries!'
    },
    {
      type: 'mcq', question: 'What is the longest river in Africa?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Congo' }, { id: 'b', text: 'Niger' }, { id: 'c', text: 'Nile' }, { id: 'd', text: 'Zambezi' }],
      correctAnswer: 'c', explanation: 'The Nile is about 6,650 km long!', funFact: 'Ancient Egyptian civilization developed along the Nile!'
    },
    {
      type: 'mcq', question: 'Which ocean is the largest?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Atlantic' }, { id: 'b', text: 'Indian' }, { id: 'c', text: 'Pacific' }, { id: 'd', text: 'Arctic' }],
      correctAnswer: 'c', explanation: 'The Pacific Ocean covers about 165 million km²!', funFact: 'The Pacific is larger than all landmasses combined!'
    },
    {
      type: 'mcq', question: 'What is the capital of Australia?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Sydney' }, { id: 'b', text: 'Melbourne' }, { id: 'c', text: 'Canberra' }, { id: 'd', text: 'Brisbane' }],
      correctAnswer: 'c', explanation: 'Canberra was purpose-built as the capital between Sydney and Melbourne!', funFact: 'Canberra means "meeting place" in the local Aboriginal language!'
    },
    {
      type: 'mcq', question: 'On which continent is the Sahara Desert located?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Asia' }, { id: 'b', text: 'Africa' }, { id: 'c', text: 'Australia' }, { id: 'd', text: 'South America' }],
      correctAnswer: 'b', explanation: 'The Sahara is in northern Africa, covering 9 million km²!', funFact: 'The Sahara is about the same size as the United States!'
    },
    {
      type: 'mcq', question: 'What mountain range separates Europe from Asia?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Alps' }, { id: 'b', text: 'Himalayas' }, { id: 'c', text: 'Ural Mountains' }, { id: 'd', text: 'Andes' }],
      correctAnswer: 'c', explanation: 'The Ural Mountains form the traditional boundary between Europe and Asia!', funFact: 'The Urals are one of the oldest mountain ranges in the world!'
    },
    {
      type: 'mcq', question: 'What is the smallest continent?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Europe' }, { id: 'b', text: 'Antarctica' }, { id: 'c', text: 'Australia' }, { id: 'd', text: 'South America' }],
      correctAnswer: 'c', explanation: 'Australia is about 7.7 million km²!', funFact: 'Australia is both a continent and a country!'
    },
    {
      type: 'mcq', question: 'What is the highest waterfall in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Niagara Falls' }, { id: 'b', text: 'Victoria Falls' }, { id: 'c', text: 'Angel Falls' }, { id: 'd', text: 'Iguazu Falls' }],
      correctAnswer: 'c', explanation: 'Angel Falls in Venezuela drops 979 meters!', funFact: 'It\'s named after US aviator Jimmie Angel who flew over it in 1933!'
    },
    {
      type: 'mcq', question: 'Which country has the most time zones?', categoryId: 'geography',
      options: [{ id: 'a', text: 'USA' }, { id: 'b', text: 'Russia' }, { id: 'c', text: 'France' }, { id: 'd', text: 'China' }],
      correctAnswer: 'c', explanation: 'France has 12 time zones due to its overseas territories!', funFact: 'China uses only one time zone despite spanning 5 geographically!'
    },
    {
      type: 'mcq', question: 'What is the Ring of Fire?', categoryId: 'geography',
      options: [{ id: 'a', text: 'A desert in Africa' }, { id: 'b', text: 'A volcanic zone around the Pacific' }, { id: 'c', text: 'A mountain range in Asia' }, { id: 'd', text: 'A river in South America' }],
      correctAnswer: 'b', explanation: 'The Ring of Fire has 75% of the world\'s volcanoes and 90% of earthquakes!', funFact: 'It stretches for 40,000 km around the Pacific Ocean!'
    },
    {
      type: 'mcq', question: 'Which strait connects the Atlantic and Pacific Oceans at the southern tip of South America?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Bering Strait' }, { id: 'b', text: 'Gibraltar Strait' }, { id: 'c', text: 'Magellan Strait' }, { id: 'd', text: 'Hormuz Strait' }],
      correctAnswer: 'c', explanation: 'The Strait of Magellan was discovered by Ferdinand Magellan in 1520!', funFact: 'Before the Panama Canal, ships had to go around South America!'
    },
    {
      type: 'mcq', question: 'What is the capital of Brazil?', categoryId: 'geography',
      options: [{ id: 'a', text: 'São Paulo' }, { id: 'b', text: 'Rio de Janeiro' }, { id: 'c', text: 'Brasília' }, { id: 'd', text: 'Salvador' }],
      correctAnswer: 'c', explanation: 'Brasília was built in 41 months and became capital in 1960!', funFact: 'The city was designed to look like an airplane from above!'
    },
    {
      type: 'mcq', question: 'Which is the deepest lake in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Lake Superior' }, { id: 'b', text: 'Lake Victoria' }, { id: 'c', text: 'Lake Baikal' }, { id: 'd', text: 'Caspian Sea' }],
      correctAnswer: 'c', explanation: 'Lake Baikal in Russia is 1,642 meters deep!', funFact: 'It contains about 20% of the world\'s unfrozen fresh water!'
    },
    {
      type: 'true-false', question: 'The Amazon River is longer than the Nile River.', categoryId: 'geography',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'The Nile (6,650 km) is slightly longer than the Amazon (6,400 km)!', funFact: 'However, the Amazon carries more water than any other river!'
    },
    {
      type: 'mcq', question: 'What country is home to the Great Barrier Reef?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Indonesia' }, { id: 'b', text: 'Australia' }, { id: 'c', text: 'Philippines' }, { id: 'd', text: 'Thailand' }],
      correctAnswer: 'b', explanation: 'The Great Barrier Reef stretches for 2,300 km off Australia\'s coast!', funFact: 'It\'s the largest living structure on Earth, visible from space!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the most densely populated country in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Bangladesh' }, { id: 'b', text: 'Monaco' }, { id: 'c', text: 'Singapore' }, { id: 'd', text: 'India' }],
      correctAnswer: 'b', explanation: 'Monaco has about 26,000 people per km²!', funFact: 'Monaco is smaller than New York\'s Central Park!'
    },
    {
      type: 'mcq', question: 'What is a landlocked country?', categoryId: 'geography',
      options: [{ id: 'a', text: 'A country with no rivers' }, { id: 'b', text: 'A country with no coastline' }, { id: 'c', text: 'An island nation' }, { id: 'd', text: 'A country with only lakes' }],
      correctAnswer: 'b', explanation: 'Landlocked countries have no access to the ocean!', funFact: 'There are 44 landlocked countries in the world!'
    },
    {
      type: 'mcq', question: 'What causes tectonic plates to move?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Gravity' }, { id: 'b', text: 'Wind' }, { id: 'c', text: 'Convection currents in the mantle' }, { id: 'd', text: 'Ocean waves' }],
      correctAnswer: 'c', explanation: 'Hot magma rises, cools, and sinks, creating convection currents!', funFact: 'Plates move about as fast as your fingernails grow!'
    },
    {
      type: 'mcq', question: 'What is the driest desert in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Sahara' }, { id: 'b', text: 'Atacama' }, { id: 'c', text: 'Gobi' }, { id: 'd', text: 'Arabian' }],
      correctAnswer: 'b', explanation: 'The Atacama Desert in Chile has areas that haven\'t seen rain in centuries!', funFact: 'It\'s so dry that NASA tests Mars rovers there!'
    },
    {
      type: 'mcq', question: 'Which line of latitude divides the Earth into Northern and Southern hemispheres?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Tropic of Cancer' }, { id: 'b', text: 'Prime Meridian' }, { id: 'c', text: 'Equator' }, { id: 'd', text: 'Arctic Circle' }],
      correctAnswer: 'c', explanation: 'The Equator is at 0° latitude!', funFact: 'Water spins differently in drains on each side of the equator!'
    },
    {
      type: 'mcq', question: 'What is the capital of South Korea?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Busan' }, { id: 'b', text: 'Incheon' }, { id: 'c', text: 'Seoul' }, { id: 'd', text: 'Daegu' }],
      correctAnswer: 'c', explanation: 'Seoul is home to about 10 million people!', funFact: 'Seoul has been continuously inhabited for over 2,000 years!'
    },
    {
      type: 'mcq', question: 'What type of climate does the Mediterranean region have?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Hot and humid year-round' }, { id: 'b', text: 'Cold and dry' }, { id: 'c', text: 'Hot dry summers, mild wet winters' }, { id: 'd', text: 'Constant rainfall' }],
      correctAnswer: 'c', explanation: 'Mediterranean climate is characterized by dry summers and wet winters!', funFact: 'Only 2% of Earth\'s land has Mediterranean climate, but it\'s very biodiverse!'
    },
    {
      type: 'mcq', question: 'Which African country was never colonized by a European power?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Nigeria' }, { id: 'b', text: 'Ethiopia' }, { id: 'c', text: 'Kenya' }, { id: 'd', text: 'South Africa' }],
      correctAnswer: 'b', explanation: 'Ethiopia successfully resisted Italian invasion in 1896!', funFact: 'Ethiopia is one of only two African countries never colonized (along with Liberia)!'
    },
    {
      type: 'mcq', question: 'What is the term for the point on Earth\'s surface directly above an earthquake\'s origin?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Focus' }, { id: 'b', text: 'Epicenter' }, { id: 'c', text: 'Fault' }, { id: 'd', text: 'Seismic center' }],
      correctAnswer: 'b', explanation: 'The epicenter is directly above the focus (hypocenter) underground!', funFact: 'The epicenter usually experiences the strongest shaking!'
    },
    {
      type: 'mcq', question: 'What is the largest island in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Madagascar' }, { id: 'b', text: 'Borneo' }, { id: 'c', text: 'Greenland' }, { id: 'd', text: 'New Guinea' }],
      correctAnswer: 'c', explanation: 'Greenland is about 2.16 million km²!', funFact: 'Australia is larger but considered a continent, not an island!'
    },
    {
      type: 'mcq', question: 'Which country has the longest coastline in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Russia' }, { id: 'b', text: 'Australia' }, { id: 'c', text: 'Indonesia' }, { id: 'd', text: 'Canada' }],
      correctAnswer: 'd', explanation: 'Canada has about 202,080 km of coastline!', funFact: 'If you walked 20 km per day, it would take 27 years to walk Canada\'s coast!'
    },
    {
      type: 'mcq', question: 'What is the capital of Turkey?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Istanbul' }, { id: 'b', text: 'Ankara' }, { id: 'c', text: 'Izmir' }, { id: 'd', text: 'Antalya' }],
      correctAnswer: 'b', explanation: 'Ankara became the capital in 1923 when Turkey was founded!', funFact: 'Istanbul is the largest city but Ankara is the capital!'
    },
    {
      type: 'mcq', question: 'What is the Mariana Trench?', categoryId: 'geography',
      options: [{ id: 'a', text: 'A mountain range' }, { id: 'b', text: 'The deepest part of the ocean' }, { id: 'c', text: 'A river valley' }, { id: 'd', text: 'A desert canyon' }],
      correctAnswer: 'b', explanation: 'Challenger Deep in the Mariana Trench is about 11,000 meters deep!', funFact: 'Mount Everest could fit inside with room to spare!'
    },
    {
      type: 'mcq', question: 'What is an archipelago?', categoryId: 'geography',
      options: [{ id: 'a', text: 'A mountain range' }, { id: 'b', text: 'A chain of islands' }, { id: 'c', text: 'A type of desert' }, { id: 'd', text: 'A river delta' }],
      correctAnswer: 'b', explanation: 'An archipelago is a group or chain of islands!', funFact: 'Indonesia is the world\'s largest archipelago with over 17,000 islands!'
    },
    {
      type: 'mcq', question: 'Which country is known as the "Land of the Rising Sun"?', categoryId: 'geography',
      options: [{ id: 'a', text: 'China' }, { id: 'b', text: 'Thailand' }, { id: 'c', text: 'Japan' }, { id: 'd', text: 'South Korea' }],
      correctAnswer: 'c', explanation: 'Japan\'s name "Nihon" means "origin of the sun"!', funFact: 'Japan sees the sunrise before most other Asian countries!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the highest capital city in the world?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Quito, Ecuador' }, { id: 'b', text: 'Bogotá, Colombia' }, { id: 'c', text: 'La Paz, Bolivia' }, { id: 'd', text: 'Kathmandu, Nepal' }],
      correctAnswer: 'c', explanation: 'La Paz sits at about 3,640 meters above sea level!', funFact: 'The air in La Paz has 40% less oxygen than at sea level!'
    },
    {
      type: 'mcq', question: 'What is the Coriolis effect?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Ocean heating by the sun' }, { id: 'b', text: 'Deflection of winds due to Earth\'s rotation' }, { id: 'c', text: 'Mountain formation' }, { id: 'd', text: 'Tidal patterns' }],
      correctAnswer: 'b', explanation: 'Earth\'s rotation causes moving objects to curve right in the Northern Hemisphere!', funFact: 'This is why hurricanes spin counterclockwise in the north!'
    },
    {
      type: 'mcq', question: 'What is the primary cause of desertification?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Only climate change' }, { id: 'b', text: 'Human activities and climate factors combined' }, { id: 'c', text: 'Volcanic eruptions' }, { id: 'd', text: 'Asteroid impacts' }],
      correctAnswer: 'b', explanation: 'Overgrazing, deforestation, and climate change all contribute!', funFact: 'About 12 million hectares of productive land are lost to desertification yearly!'
    },
    {
      type: 'mcq', question: 'What country has the most UNESCO World Heritage Sites?', categoryId: 'geography',
      options: [{ id: 'a', text: 'France' }, { id: 'b', text: 'China' }, { id: 'c', text: 'Italy' }, { id: 'd', text: 'Spain' }],
      correctAnswer: 'c', explanation: 'Italy has over 55 UNESCO World Heritage Sites!', funFact: 'Italy and China are always competing for the top spot!'
    },
    {
      type: 'mcq', question: 'What is a subduction zone?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Where plates move apart' }, { id: 'b', text: 'Where one plate slides under another' }, { id: 'c', text: 'A volcanic crater' }, { id: 'd', text: 'An underwater mountain' }],
      correctAnswer: 'b', explanation: 'Subduction zones create deep ocean trenches and volcanic arcs!', funFact: 'The Pacific Ring of Fire is mostly made of subduction zones!'
    },
    {
      type: 'mcq', question: 'Which city is built on 14 islands connected by 57 bridges?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Venice' }, { id: 'b', text: 'Amsterdam' }, { id: 'c', text: 'Stockholm' }, { id: 'd', text: 'Copenhagen' }],
      correctAnswer: 'c', explanation: 'Stockholm, Sweden\'s capital, spans 14 islands!', funFact: 'It\'s sometimes called the "Venice of the North"!'
    },
    {
      type: 'mcq', question: 'What percentage of Earth\'s water is fresh water?', categoryId: 'geography',
      options: [{ id: 'a', text: 'About 3%' }, { id: 'b', text: 'About 10%' }, { id: 'c', text: 'About 25%' }, { id: 'd', text: 'About 50%' }],
      correctAnswer: 'a', explanation: 'Only about 2.5-3% is fresh water, and most of that is frozen!', funFact: 'Less than 1% of all water is accessible freshwater for human use!'
    },
    {
      type: 'mcq', question: 'What is the term for the movement of people from rural to urban areas?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Emigration' }, { id: 'b', text: 'Immigration' }, { id: 'c', text: 'Urbanization' }, { id: 'd', text: 'Migration' }],
      correctAnswer: 'c', explanation: 'Urbanization is the shift from rural to urban living!', funFact: 'Over 55% of the world\'s population now lives in urban areas!'
    },
    {
      type: 'mcq', question: 'What is the Gulf Stream?', categoryId: 'geography',
      options: [{ id: 'a', text: 'A wind pattern' }, { id: 'b', text: 'A warm ocean current' }, { id: 'c', text: 'A type of storm' }, { id: 'd', text: 'An oil field' }],
      correctAnswer: 'b', explanation: 'The Gulf Stream carries warm water from the Gulf of Mexico to Europe!', funFact: 'It keeps Western Europe much warmer than areas at the same latitude!'
    },
    {
      type: 'mcq', question: 'What is the Köppen climate classification system?', categoryId: 'geography',
      options: [{ id: 'a', text: 'A way to measure earthquakes' }, { id: 'b', text: 'A system for categorizing climate types' }, { id: 'c', text: 'A method for predicting weather' }, { id: 'd', text: 'A way to measure ocean depth' }],
      correctAnswer: 'b', explanation: 'It divides Earth into climate zones based on temperature and precipitation!', funFact: 'There are 5 main climate types: Tropical, Dry, Temperate, Continental, and Polar!'
    },
    {
      type: 'mcq', question: 'What is continental drift?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Erosion of coastlines' }, { id: 'b', text: 'The theory that continents move over time' }, { id: 'c', text: 'Sea level rise' }, { id: 'd', text: 'Wind patterns across continents' }],
      correctAnswer: 'b', explanation: 'Alfred Wegener proposed that continents were once joined as Pangaea!', funFact: 'South America and Africa fit together like puzzle pieces!'
    },
    {
      type: 'mcq', question: 'What is the difference between weather and climate?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Weather is warmer' }, { id: 'b', text: 'Weather is short-term, climate is long-term patterns' }, { id: 'c', text: 'Climate only occurs in summer' }, { id: 'd', text: 'There is no difference' }],
      correctAnswer: 'b', explanation: 'Climate is the average weather over 30+ years!', funFact: 'Climate is what you expect, weather is what you get!'
    },
    {
      type: 'mcq', question: 'What is the most spoken language in South America?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Spanish' }, { id: 'b', text: 'Portuguese' }, { id: 'c', text: 'English' }, { id: 'd', text: 'French' }],
      correctAnswer: 'b', explanation: 'Portuguese is spoken by about 210 million people in Brazil!', funFact: 'Brazil is the only Portuguese-speaking country in the Americas!'
    },
    {
      type: 'mcq', question: 'What causes the Northern and Southern Lights?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Reflection of sunlight' }, { id: 'b', text: 'Solar particles interacting with the atmosphere' }, { id: 'c', text: 'Volcanic activity' }, { id: 'd', text: 'Bioluminescent organisms' }],
      correctAnswer: 'b', explanation: 'Charged particles from the sun excite atmospheric gases!', funFact: 'Different gases produce different colors - oxygen makes green!'
    },
    {
      type: 'mcq', question: 'What is the only continent with no active volcanoes?', categoryId: 'geography',
      options: [{ id: 'a', text: 'Europe' }, { id: 'b', text: 'Australia' }, { id: 'c', text: 'Africa' }, { id: 'd', text: 'South America' }],
      correctAnswer: 'b', explanation: 'Australia sits in the middle of a tectonic plate with no volcanic activity!', funFact: 'The last volcanic eruption in mainland Australia was about 5,000 years ago!'
    },
  ],
};
