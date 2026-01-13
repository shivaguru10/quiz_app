// Juniors Space Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const spaceQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is the center of our solar system?', categoryId: 'space',
      options: [{ id: 'a', text: 'Earth' }, { id: 'b', text: 'Moon' }, { id: 'c', text: 'Sun' }, { id: 'd', text: 'Mars' }],
      correctAnswer: 'c', explanation: 'The Sun is at the center of our solar system!', funFact: 'All planets orbit around the Sun!'
    },
    {
      type: 'mcq', question: 'What planet is known for its rings?', categoryId: 'space',
      options: [{ id: 'a', text: 'Mars' }, { id: 'b', text: 'Jupiter' }, { id: 'c', text: 'Saturn' }, { id: 'd', text: 'Neptune' }],
      correctAnswer: 'c', explanation: 'Saturn has beautiful rings!', funFact: 'Saturns rings are made of ice and rock!'
    },
    {
      type: 'mcq', question: 'What do we call a person who travels to space?', categoryId: 'space',
      options: [{ id: 'a', text: 'Pilot' }, { id: 'b', text: 'Astronaut' }, { id: 'c', text: 'Navigator' }, { id: 'd', text: 'Captain' }],
      correctAnswer: 'b', explanation: 'Astronauts travel to space!', funFact: 'The word comes from Greek meaning "star sailor"!'
    },
    {
      type: 'mcq', question: 'What is the closest planet to the Sun?', categoryId: 'space',
      options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Mars' }, { id: 'c', text: 'Mercury' }, { id: 'd', text: 'Earth' }],
      correctAnswer: 'c', explanation: 'Mercury is closest to the Sun!', funFact: 'A year on Mercury is only 88 Earth days!'
    },
    {
      type: 'mcq', question: 'What lights up the night sky and orbits Earth?', categoryId: 'space',
      options: [{ id: 'a', text: 'Sun' }, { id: 'b', text: 'Moon' }, { id: 'c', text: 'Stars' }, { id: 'd', text: 'Mars' }],
      correctAnswer: 'b', explanation: 'The Moon orbits Earth!', funFact: 'The Moon takes about 27 days to orbit Earth!'
    },
    {
      type: 'mcq', question: 'What galaxy do we live in?', categoryId: 'space',
      options: [{ id: 'a', text: 'Andromeda' }, { id: 'b', text: 'Milky Way' }, { id: 'c', text: 'Whirlpool' }, { id: 'd', text: 'Sombrero' }],
      correctAnswer: 'b', explanation: 'We live in the Milky Way galaxy!', funFact: 'It has over 200 billion stars!'
    },
    {
      type: 'true-false', question: 'The Sun is a star.', categoryId: 'space',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'The Sun is the closest star to Earth!', funFact: 'Stars produce their own light and heat!'
    },
    {
      type: 'mcq', question: 'What is a shooting star actually?', categoryId: 'space',
      options: [{ id: 'a', text: 'A falling star' }, { id: 'b', text: 'A meteor' }, { id: 'c', text: 'A comet' }, { id: 'd', text: 'A planet' }],
      correctAnswer: 'b', explanation: 'Shooting stars are meteors burning up!', funFact: 'They burn in Earths atmosphere!'
    },
    {
      type: 'mcq', question: 'Which planet is called the Red Planet?', categoryId: 'space',
      options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Jupiter' }, { id: 'c', text: 'Mars' }, { id: 'd', text: 'Mercury' }],
      correctAnswer: 'c', explanation: 'Mars is the Red Planet!', funFact: 'Its red color comes from iron oxide (rust)!'
    },
    {
      type: 'mcq', question: 'How many planets are in our solar system?', categoryId: 'space',
      options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
      correctAnswer: 'b', explanation: 'There are 8 planets!', funFact: 'Pluto was reclassified as a dwarf planet!'
    },
    {
      type: 'mcq', question: 'What is the largest planet in our solar system?', categoryId: 'space',
      options: [{ id: 'a', text: 'Saturn' }, { id: 'b', text: 'Neptune' }, { id: 'c', text: 'Jupiter' }, { id: 'd', text: 'Uranus' }],
      correctAnswer: 'c', explanation: 'Jupiter is the largest planet!', funFact: 'Over 1,300 Earths could fit inside Jupiter!'
    },
    {
      type: 'mcq', question: 'What causes day and night on Earth?', categoryId: 'space',
      options: [{ id: 'a', text: 'Earths orbit' }, { id: 'b', text: 'Earths rotation' }, { id: 'c', text: 'Moons orbit' }, { id: 'd', text: 'Suns movement' }],
      correctAnswer: 'b', explanation: 'Earth rotates on its axis causing day and night!', funFact: 'One rotation takes about 24 hours!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the International Space Station (ISS)?', categoryId: 'space',
      options: [{ id: 'a', text: 'A satellite' }, { id: 'b', text: 'A space laboratory' }, { id: 'c', text: 'A rocket' }, { id: 'd', text: 'A planet' }],
      correctAnswer: 'b', explanation: 'The ISS is a space station where astronauts live and work!', funFact: 'It orbits Earth every 90 minutes!'
    },
    {
      type: 'mcq', question: 'What is a light-year?', categoryId: 'space',
      options: [{ id: 'a', text: 'A year on a planet' }, { id: 'b', text: 'Distance light travels in one year' }, { id: 'c', text: 'Brightness of a star' }, { id: 'd', text: 'Speed of a rocket' }],
      correctAnswer: 'b', explanation: 'A light-year is a distance measurement!', funFact: 'Light travels about 9.5 trillion km in a year!'
    },
    {
      type: 'mcq', question: 'What is a black hole?', categoryId: 'space',
      options: [{ id: 'a', text: 'A dark planet' }, { id: 'b', text: 'An empty area in space' }, { id: 'c', text: 'A region with extreme gravity' }, { id: 'd', text: 'A type of star' }],
      correctAnswer: 'c', explanation: 'Black holes have gravity so strong nothing can escape!', funFact: 'Not even light can escape a black hole!'
    },
    {
      type: 'mcq', question: 'What planet rotates on its side?', categoryId: 'space',
      options: [{ id: 'a', text: 'Neptune' }, { id: 'b', text: 'Uranus' }, { id: 'c', text: 'Saturn' }, { id: 'd', text: 'Jupiter' }],
      correctAnswer: 'b', explanation: 'Uranus rotates almost completely on its side!', funFact: 'Its axial tilt is about 98 degrees!'
    },
    {
      type: 'mcq', question: 'What causes solar eclipses?', categoryId: 'space',
      options: [{ id: 'a', text: 'Earth blocking Sun' }, { id: 'b', text: 'Moon blocking Sun' }, { id: 'c', text: 'Mars blocking Sun' }, { id: 'd', text: 'Clouds blocking Sun' }],
      correctAnswer: 'b', explanation: 'The Moon passes between Earth and Sun!', funFact: 'Total solar eclipses are rare at any location!'
    },
    {
      type: 'mcq', question: 'What is the asteroid belt?', categoryId: 'space',
      options: [{ id: 'a', text: 'A ring around Saturn' }, { id: 'b', text: 'Space junk around Earth' }, { id: 'c', text: 'Region between Mars and Jupiter' }, { id: 'd', text: 'Comets near the Sun' }],
      correctAnswer: 'c', explanation: 'The asteroid belt is between Mars and Jupiter!', funFact: 'It contains millions of asteroids!'
    },
    {
      type: 'mcq', question: 'What is a supernova?', categoryId: 'space',
      options: [{ id: 'a', text: 'A new planet' }, { id: 'b', text: 'An exploding star' }, { id: 'c', text: 'A type of galaxy' }, { id: 'd', text: 'A large asteroid' }],
      correctAnswer: 'b', explanation: 'A supernova is a massive star explosion!', funFact: 'Supernovae can outshine entire galaxies!'
    },
    {
      type: 'mcq', question: 'Which space agency landed humans on the Moon?', categoryId: 'space',
      options: [{ id: 'a', text: 'ESA' }, { id: 'b', text: 'NASA' }, { id: 'c', text: 'JAXA' }, { id: 'd', text: 'Roscosmos' }],
      correctAnswer: 'b', explanation: 'NASA landed humans on the Moon in 1969!', funFact: 'The Apollo 11 mission was the first!'
    },
    {
      type: 'mcq', question: 'What is the Kuiper Belt?', categoryId: 'space',
      options: [{ id: 'a', text: 'A ring of Saturn' }, { id: 'b', text: 'Region beyond Neptune' }, { id: 'c', text: 'Inside the asteroid belt' }, { id: 'd', text: 'Around the Sun' }],
      correctAnswer: 'b', explanation: 'The Kuiper Belt is beyond Neptunes orbit!', funFact: 'Pluto is in the Kuiper Belt!'
    },
    {
      type: 'true-false', question: 'Venus is hotter than Mercury even though Mercury is closer to the Sun.', categoryId: 'space',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Venus has a thick atmosphere that traps heat!', funFact: 'Venus surface temperature is about 465°C!'
    },
    {
      type: 'mcq', question: 'What is the Great Red Spot on Jupiter?', categoryId: 'space',
      options: [{ id: 'a', text: 'A volcano' }, { id: 'b', text: 'A giant storm' }, { id: 'c', text: 'A crater' }, { id: 'd', text: 'A moon' }],
      correctAnswer: 'b', explanation: 'Its a massive storm thats lasted hundreds of years!', funFact: 'The storm is bigger than Earth!'
    },
    {
      type: 'mcq', question: 'How long does it take light from the Sun to reach Earth?', categoryId: 'space',
      options: [{ id: 'a', text: '1 minute' }, { id: 'b', text: '8 minutes' }, { id: 'c', text: '1 hour' }, { id: 'd', text: '1 day' }],
      correctAnswer: 'b', explanation: 'Sunlight takes about 8 minutes to reach Earth!', funFact: 'The Sun is about 150 million km away!'
    },
    {
      type: 'mcq', question: 'What are the inner rocky planets called?', categoryId: 'space',
      options: [{ id: 'a', text: 'Gas giants' }, { id: 'b', text: 'Terrestrial planets' }, { id: 'c', text: 'Ice giants' }, { id: 'd', text: 'Dwarf planets' }],
      correctAnswer: 'b', explanation: 'Mercury, Venus, Earth, and Mars are terrestrial!', funFact: 'Terrestrial means Earth-like!'
    },
    {
      type: 'mcq', question: 'What is the closest galaxy to the Milky Way?', categoryId: 'space',
      options: [{ id: 'a', text: 'Sombrero Galaxy' }, { id: 'b', text: 'Andromeda Galaxy' }, { id: 'c', text: 'Whirlpool Galaxy' }, { id: 'd', text: 'Pinwheel Galaxy' }],
      correctAnswer: 'b', explanation: 'Andromeda is our nearest large galaxy neighbor!', funFact: 'Its about 2.5 million light-years away!'
    },
    {
      type: 'mcq', question: 'What planet has the most moons?', categoryId: 'space',
      options: [{ id: 'a', text: 'Jupiter' }, { id: 'b', text: 'Saturn' }, { id: 'c', text: 'Uranus' }, { id: 'd', text: 'Neptune' }],
      correctAnswer: 'b', explanation: 'Saturn has the most known moons!', funFact: 'As of 2023, Saturn has over 140 moons!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the Oort Cloud?', categoryId: 'space',
      options: [{ id: 'a', text: 'A nebula' }, { id: 'b', text: 'A distant spherical shell of icy objects' }, { id: 'c', text: 'A dust cloud near Earth' }, { id: 'd', text: 'Gas around the Sun' }],
      correctAnswer: 'b', explanation: 'The Oort Cloud is at the edge of our solar system!', funFact: 'Many comets come from the Oort Cloud!'
    },
    {
      type: 'mcq', question: 'What is the escape velocity from Earths surface?', categoryId: 'space',
      options: [{ id: 'a', text: '7 km/s' }, { id: 'b', text: '11.2 km/s' }, { id: 'c', text: '15 km/s' }, { id: 'd', text: '20 km/s' }],
      correctAnswer: 'b', explanation: 'Objects need 11.2 km/s to escape Earths gravity!', funFact: 'Thats about 40,320 km/h!'
    },
    {
      type: 'mcq', question: 'What is a neutron star?', categoryId: 'space',
      options: [{ id: 'a', text: 'A young star' }, { id: 'b', text: 'Collapsed core of a massive star' }, { id: 'c', text: 'A type of planet' }, { id: 'd', text: 'A dim star' }],
      correctAnswer: 'b', explanation: 'Neutron stars are incredibly dense stellar remnants!', funFact: 'A teaspoon would weigh billions of tons!'
    },
    {
      type: 'mcq', question: 'What causes the aurora borealis?', categoryId: 'space',
      options: [{ id: 'a', text: 'Moonlight reflection' }, { id: 'b', text: 'Solar wind particles' }, { id: 'c', text: 'Volcanic eruptions' }, { id: 'd', text: 'Ocean currents' }],
      correctAnswer: 'b', explanation: 'Solar wind particles interact with atmosphere!', funFact: 'They follow Earths magnetic field lines!'
    },
    {
      type: 'mcq', question: 'What is the Chandrasekhar limit?', categoryId: 'space',
      options: [{ id: 'a', text: 'Speed of light barrier' }, { id: 'b', text: 'Maximum mass of a white dwarf' }, { id: 'c', text: 'Edge of the universe' }, { id: 'd', text: 'Black hole size limit' }],
      correctAnswer: 'b', explanation: 'Its about 1.4 solar masses for white dwarfs!', funFact: 'Above this, they collapse into neutron stars!'
    },
    {
      type: 'mcq', question: 'What is redshift in astronomy?', categoryId: 'space',
      options: [{ id: 'a', text: 'Stars turning red' }, { id: 'b', text: 'Light stretching as objects move away' }, { id: 'c', text: 'Mars orbit change' }, { id: 'd', text: 'Solar flare color' }],
      correctAnswer: 'b', explanation: 'Redshift shows objects moving away from us!', funFact: 'Its evidence the universe is expanding!'
    },
    {
      type: 'mcq', question: 'What is the largest known star?', categoryId: 'space',
      options: [{ id: 'a', text: 'VY Canis Majoris' }, { id: 'b', text: 'UY Scuti' }, { id: 'c', text: 'Betelgeuse' }, { id: 'd', text: 'Stephenson 2-18' }],
      correctAnswer: 'd', explanation: 'Stephenson 2-18 is one of the largest known stars!', funFact: 'Its radius is over 2,000 times the Suns!'
    },
    {
      type: 'mcq', question: 'What is dark matter?', categoryId: 'space',
      options: [{ id: 'a', text: 'Black holes' }, { id: 'b', text: 'Invisible matter with gravitational effects' }, { id: 'c', text: 'Empty space' }, { id: 'd', text: 'Dust clouds' }],
      correctAnswer: 'b', explanation: 'Dark matter has mass but doesnt emit light!', funFact: 'It makes up about 27% of the universe!'
    },
    {
      type: 'mcq', question: 'What is a pulsar?', categoryId: 'space',
      options: [{ id: 'a', text: 'A dying star' }, { id: 'b', text: 'A rotating neutron star emitting radiation' }, { id: 'c', text: 'A black hole' }, { id: 'd', text: 'A type of galaxy' }],
      correctAnswer: 'b', explanation: 'Pulsars emit regular pulses of radiation!', funFact: 'They can spin hundreds of times per second!'
    },
    {
      type: 'mcq', question: 'What is the habitable zone also called?', categoryId: 'space',
      options: [{ id: 'a', text: 'Death zone' }, { id: 'b', text: 'Goldilocks zone' }, { id: 'c', text: 'Life belt' }, { id: 'd', text: 'Green zone' }],
      correctAnswer: 'b', explanation: 'Its where conditions are "just right" for liquid water!', funFact: 'Earth is in our Suns habitable zone!'
    },
    {
      type: 'true-false', question: 'Gravitational waves were first directly detected in 2015.', categoryId: 'space',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'LIGO detected gravitational waves from merging black holes!', funFact: 'Einstein predicted them 100 years earlier!'
    },
    {
      type: 'mcq', question: 'What is the age of our solar system?', categoryId: 'space',
      options: [{ id: 'a', text: '3.6 billion years' }, { id: 'b', text: '4.6 billion years' }, { id: 'c', text: '5.6 billion years' }, { id: 'd', text: '6.6 billion years' }],
      correctAnswer: 'b', explanation: 'Our solar system is about 4.6 billion years old!', funFact: 'The Sun will last another 5 billion years!'
    },
    {
      type: 'mcq', question: 'What is the cosmic microwave background radiation?', categoryId: 'space',
      options: [{ id: 'a', text: 'Radiation from stars' }, { id: 'b', text: 'Afterglow of the Big Bang' }, { id: 'c', text: 'Radio signals from aliens' }, { id: 'd', text: 'Solar radiation' }],
      correctAnswer: 'b', explanation: 'Its leftover radiation from the early universe!', funFact: 'Its about 380,000 years after the Big Bang!'
    },
    {
      type: 'mcq', question: 'What is a quasar?', categoryId: 'space',
      options: [{ id: 'a', text: 'A type of star' }, { id: 'b', text: 'An extremely bright active galactic nucleus' }, { id: 'c', text: 'A moon' }, { id: 'd', text: 'A nebula' }],
      correctAnswer: 'b', explanation: 'Quasars are powered by supermassive black holes!', funFact: 'They can be brighter than entire galaxies!'
    },
    {
      type: 'mcq', question: 'What is the Fermi Paradox about?', categoryId: 'space',
      options: [{ id: 'a', text: 'Black holes' }, { id: 'b', text: 'Lack of evidence for extraterrestrial life' }, { id: 'c', text: 'Dark matter' }, { id: 'd', text: 'The Big Bang' }],
      correctAnswer: 'b', explanation: 'Why havent we found aliens if the universe is so vast?', funFact: 'There are billions of potentially habitable planets!'
    },
    {
      type: 'mcq', question: 'What is a planetary nebula?', categoryId: 'space',
      options: [{ id: 'a', text: 'A forming planet' }, { id: 'b', text: 'Gas expelled by a dying star' }, { id: 'c', text: 'A type of galaxy' }, { id: 'd', text: 'Space dust' }],
      correctAnswer: 'b', explanation: 'Planetary nebulae form when Sun-like stars die!', funFact: 'Our Sun will create one in about 5 billion years!'
    },
    {
      type: 'mcq', question: 'What is the Schwarzschild radius?', categoryId: 'space',
      options: [{ id: 'a', text: 'Size of a neutron star' }, { id: 'b', text: 'Event horizon radius of a black hole' }, { id: 'c', text: 'Sun\'s radius' }, { id: 'd', text: 'Galaxy size' }],
      correctAnswer: 'b', explanation: 'Its the point of no return for a black hole!', funFact: 'For Earth to become a black hole, its radius would be 9mm!'
    },
    {
      type: 'mcq', question: 'What is tidal locking?', categoryId: 'space',
      options: [{ id: 'a', text: 'Ocean tides' }, { id: 'b', text: 'When one side always faces another body' }, { id: 'c', text: 'Gravitational pull' }, { id: 'd', text: 'Orbit speed' }],
      correctAnswer: 'b', explanation: 'Our Moon is tidally locked to Earth!', funFact: 'We always see the same side of the Moon!'
    },
    {
      type: 'mcq', question: 'What is the Drake Equation used for?', categoryId: 'space',
      options: [{ id: 'a', text: 'Calculating star distances' }, { id: 'b', text: 'Estimating number of alien civilizations' }, { id: 'c', text: 'Measuring black holes' }, { id: 'd', text: 'Dating stars' }],
      correctAnswer: 'b', explanation: 'It estimates communicative civilizations in our galaxy!', funFact: 'Most variables are still uncertain!'
    },
    {
      type: 'mcq', question: 'What causes a gamma-ray burst?', categoryId: 'space',
      options: [{ id: 'a', text: 'Solar flares' }, { id: 'b', text: 'Massive star collapse or neutron star mergers' }, { id: 'c', text: 'Asteroid impacts' }, { id: 'd', text: 'Planet formation' }],
      correctAnswer: 'b', explanation: 'Theyre the most energetic events in the universe!', funFact: 'They can release more energy than the Sun will in its lifetime!'
    },
  ],
};
