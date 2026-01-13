// Teens Space Questions (13+ years) - Advanced Astronomy & Space Science
import { TeensQuestionBank } from './types';

export const spaceQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is the closest star to Earth?', categoryId: 'space',
      options: [{ id: 'a', text: 'Proxima Centauri' }, { id: 'b', text: 'The Sun' }, { id: 'c', text: 'Sirius' }, { id: 'd', text: 'Alpha Centauri' }],
      correctAnswer: 'b', explanation: 'The Sun is about 150 million km away from Earth!', funFact: 'Light from the Sun takes 8 minutes 20 seconds to reach us!'
    },
    {
      type: 'mcq', question: 'How many planets are in our solar system?', categoryId: 'space',
      options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '10' }],
      correctAnswer: 'b', explanation: 'Since 2006, Pluto is classified as a dwarf planet!', funFact: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune!'
    },
    {
      type: 'mcq', question: 'What causes the phases of the Moon?', categoryId: 'space',
      options: [{ id: 'a', text: 'Earth\'s shadow' }, { id: 'b', text: 'The Sun rotating' }, { id: 'c', text: 'Moon\'s position relative to Earth and Sun' }, { id: 'd', text: 'Clouds on the Moon' }],
      correctAnswer: 'c', explanation: 'We see different portions lit as the Moon orbits Earth!', funFact: 'A complete lunar cycle takes about 29.5 days!'
    },
    {
      type: 'mcq', question: 'What is the Milky Way?', categoryId: 'space',
      options: [{ id: 'a', text: 'A constellation' }, { id: 'b', text: 'A type of star' }, { id: 'c', text: 'Our galaxy' }, { id: 'd', text: 'A nebula' }],
      correctAnswer: 'c', explanation: 'The Milky Way contains 100-400 billion stars including our Sun!', funFact: 'It\'s called Milky Way because it looks like spilled milk across the sky!'
    },
    {
      type: 'mcq', question: 'Which planet is known for its prominent rings?', categoryId: 'space',
      options: [{ id: 'a', text: 'Jupiter' }, { id: 'b', text: 'Uranus' }, { id: 'c', text: 'Saturn' }, { id: 'd', text: 'Neptune' }],
      correctAnswer: 'c', explanation: 'Saturn\'s rings are made of ice and rock particles!', funFact: 'Saturn\'s rings stretch 282,000 km but are only about 10 meters thick!'
    },
    {
      type: 'mcq', question: 'What is a light-year?', categoryId: 'space',
      options: [{ id: 'a', text: 'A unit of time' }, { id: 'b', text: 'A unit of distance' }, { id: 'c', text: 'A unit of brightness' }, { id: 'd', text: 'A year on a light planet' }],
      correctAnswer: 'b', explanation: 'The distance light travels in one year - about 9.46 trillion km!', funFact: 'Proxima Centauri is 4.24 light-years away!'
    },
    {
      type: 'mcq', question: 'What causes a solar eclipse?', categoryId: 'space',
      options: [{ id: 'a', text: 'Moon passing between Earth and Sun' }, { id: 'b', text: 'Earth passing between Moon and Sun' }, { id: 'c', text: 'Sun passing behind Earth' }, { id: 'd', text: 'Clouds blocking the Sun' }],
      correctAnswer: 'a', explanation: 'The Moon blocks the Sun\'s light from reaching Earth!', funFact: 'Total solar eclipses last at most 7.5 minutes!'
    },
    {
      type: 'mcq', question: 'What is the largest planet in our solar system?', categoryId: 'space',
      options: [{ id: 'a', text: 'Saturn' }, { id: 'b', text: 'Neptune' }, { id: 'c', text: 'Jupiter' }, { id: 'd', text: 'Uranus' }],
      correctAnswer: 'c', explanation: 'Jupiter is so large that 1,300 Earths could fit inside!', funFact: 'Jupiter\'s Great Red Spot is a storm larger than Earth!'
    },
    {
      type: 'mcq', question: 'What is an asteroid?', categoryId: 'space',
      options: [{ id: 'a', text: 'An icy body with a tail' }, { id: 'b', text: 'A rocky object orbiting the Sun' }, { id: 'c', text: 'A type of star' }, { id: 'd', text: 'A moon fragment' }],
      correctAnswer: 'b', explanation: 'Asteroids are remnants from the early solar system!', funFact: 'Most asteroids are in the belt between Mars and Jupiter!'
    },
    {
      type: 'mcq', question: 'How long does Earth take to orbit the Sun?', categoryId: 'space',
      options: [{ id: 'a', text: '24 hours' }, { id: 'b', text: '30 days' }, { id: 'c', text: '365.25 days' }, { id: 'd', text: '100 days' }],
      correctAnswer: 'c', explanation: 'This is why we have leap years every 4 years!', funFact: 'Earth travels at about 107,000 km/h around the Sun!'
    },
    {
      type: 'mcq', question: 'What is the name of NASA\'s famous space telescope launched in 1990?', categoryId: 'space',
      options: [{ id: 'a', text: 'Kepler' }, { id: 'b', text: 'Hubble' }, { id: 'c', text: 'James Webb' }, { id: 'd', text: 'Chandra' }],
      correctAnswer: 'b', explanation: 'Hubble has captured some of the most iconic images of space!', funFact: 'Hubble orbits Earth at 27,000 km/h!'
    },
    {
      type: 'mcq', question: 'What is the atmosphere of Mars primarily composed of?', categoryId: 'space',
      options: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Nitrogen' }, { id: 'c', text: 'Carbon dioxide' }, { id: 'd', text: 'Helium' }],
      correctAnswer: 'c', explanation: 'Mars\' atmosphere is about 96% carbon dioxide!', funFact: 'Mars\' atmosphere is about 100 times thinner than Earth\'s!'
    },
    {
      type: 'mcq', question: 'What is a comet\'s tail made of?', categoryId: 'space',
      options: [{ id: 'a', text: 'Fire' }, { id: 'b', text: 'Smoke' }, { id: 'c', text: 'Gas and dust' }, { id: 'd', text: 'Water' }],
      correctAnswer: 'c', explanation: 'The Sun\'s heat vaporizes the comet\'s icy nucleus!', funFact: 'Comet tails always point away from the Sun!'
    },
    {
      type: 'mcq', question: 'Which planet rotates on its side?', categoryId: 'space',
      options: [{ id: 'a', text: 'Neptune' }, { id: 'b', text: 'Saturn' }, { id: 'c', text: 'Uranus' }, { id: 'd', text: 'Venus' }],
      correctAnswer: 'c', explanation: 'Uranus has an axial tilt of about 98 degrees!', funFact: 'A collision with an Earth-sized object may have caused this!'
    },
    {
      type: 'true-false', question: 'Sound can travel through space.', categoryId: 'space',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'Space is a vacuum - sound needs a medium to travel!', funFact: 'In space, no one can hear you scream!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is a neutron star?', categoryId: 'space',
      options: [{ id: 'a', text: 'A star made of neutrons' }, { id: 'b', text: 'A collapsed core of a massive star' }, { id: 'c', text: 'A young star' }, { id: 'd', text: 'A dying star' }],
      correctAnswer: 'b', explanation: 'Neutron stars are incredibly dense - a teaspoon would weigh billions of tons!', funFact: 'A neutron star is about 20 km in diameter but more massive than the Sun!'
    },
    {
      type: 'mcq', question: 'What is the event horizon of a black hole?', categoryId: 'space',
      options: [{ id: 'a', text: 'Its surface' }, { id: 'b', text: 'The point of no return' }, { id: 'c', text: 'Its center' }, { id: 'd', text: 'Its outer atmosphere' }],
      correctAnswer: 'b', explanation: 'Beyond this boundary, even light cannot escape!', funFact: 'The term was coined by physicist Wolfgang Rindler in 1956!'
    },
    {
      type: 'mcq', question: 'What is the Kuiper Belt?', categoryId: 'space',
      options: [{ id: 'a', text: 'An asteroid belt' }, { id: 'b', text: 'A region of icy objects beyond Neptune' }, { id: 'c', text: 'A ring around Saturn' }, { id: 'd', text: 'A constellation' }],
      correctAnswer: 'b', explanation: 'Pluto is a Kuiper Belt Object (KBO)!', funFact: 'The Kuiper Belt extends from Neptune to about 50 AU from the Sun!'
    },
    {
      type: 'mcq', question: 'What type of galaxy is the Milky Way?', categoryId: 'space',
      options: [{ id: 'a', text: 'Elliptical' }, { id: 'b', text: 'Irregular' }, { id: 'c', text: 'Barred spiral' }, { id: 'd', text: 'Ring' }],
      correctAnswer: 'c', explanation: 'The Milky Way has a bar-shaped core with spiral arms!', funFact: 'Our solar system is in the Orion Arm, about 26,000 light-years from the center!'
    },
    {
      type: 'mcq', question: 'What is the approximate age of the Sun?', categoryId: 'space',
      options: [{ id: 'a', text: '1 billion years' }, { id: 'b', text: '4.6 billion years' }, { id: 'c', text: '10 billion years' }, { id: 'd', text: '100 million years' }],
      correctAnswer: 'b', explanation: 'The Sun is about halfway through its main-sequence life!', funFact: 'The Sun will become a red giant in about 5 billion years!'
    },
    {
      type: 'mcq', question: 'What powers the Sun?', categoryId: 'space',
      options: [{ id: 'a', text: 'Burning gas' }, { id: 'b', text: 'Nuclear fission' }, { id: 'c', text: 'Nuclear fusion' }, { id: 'd', text: 'Chemical reactions' }],
      correctAnswer: 'c', explanation: 'Hydrogen atoms fuse into helium, releasing enormous energy!', funFact: 'The Sun converts 600 million tons of hydrogen into helium every second!'
    },
    {
      type: 'mcq', question: 'What is the Oort Cloud?', categoryId: 'space',
      options: [{ id: 'a', text: 'A nebula' }, { id: 'b', text: 'A theoretical cloud of icy objects at the solar system\'s edge' }, { id: 'c', text: 'A type of galaxy' }, { id: 'd', text: 'A gas cloud on Jupiter' }],
      correctAnswer: 'b', explanation: 'It\'s believed to be the source of long-period comets!', funFact: 'The Oort Cloud may extend up to 1-2 light-years from the Sun!'
    },
    {
      type: 'mcq', question: 'What is the difference between a meteor and a meteorite?', categoryId: 'space',
      options: [{ id: 'a', text: 'Size' }, { id: 'b', text: 'Meteor is in space, meteorite is on Earth' }, { id: 'c', text: 'Meteor is the streak in sky, meteorite is what lands' }, { id: 'd', text: 'They are the same' }],
      correctAnswer: 'c', explanation: 'Meteoroid → Meteor (in atmosphere) → Meteorite (on ground)!', funFact: 'About 48 tons of meteoric material fall on Earth each day!'
    },
    {
      type: 'mcq', question: 'Which moon in our solar system is most likely to have life?', categoryId: 'space',
      options: [{ id: 'a', text: 'Our Moon' }, { id: 'b', text: 'Europa' }, { id: 'c', text: 'Phobos' }, { id: 'd', text: 'Titan' }],
      correctAnswer: 'b', explanation: 'Europa (Jupiter\'s moon) has a subsurface ocean of liquid water!', funFact: 'Europa may have 2-3 times more water than Earth!'
    },
    {
      type: 'mcq', question: 'What is the "habitable zone"?', categoryId: 'space',
      options: [{ id: 'a', text: 'Where humans can breathe' }, { id: 'b', text: 'Distance from a star where liquid water can exist' }, { id: 'c', text: 'A space station' }, { id: 'd', text: 'Earth\'s atmosphere' }],
      correctAnswer: 'b', explanation: 'Also called the "Goldilocks zone" - not too hot, not too cold!', funFact: 'Earth is in the Sun\'s habitable zone!'
    },
    {
      type: 'mcq', question: 'What is the Great Red Spot on Jupiter?', categoryId: 'space',
      options: [{ id: 'a', text: 'A volcano' }, { id: 'b', text: 'An impact crater' }, { id: 'c', text: 'A giant storm' }, { id: 'd', text: 'A moon shadow' }],
      correctAnswer: 'c', explanation: 'It\'s a storm larger than Earth that has lasted hundreds of years!', funFact: 'Winds in the Great Red Spot reach up to 680 km/h!'
    },
    {
      type: 'mcq', question: 'What is a supernova?', categoryId: 'space',
      options: [{ id: 'a', text: 'A new star forming' }, { id: 'b', text: 'An exploding massive star' }, { id: 'c', text: 'A fast-moving star' }, { id: 'd', text: 'A very bright star' }],
      correctAnswer: 'b', explanation: 'A supernova can briefly outshine an entire galaxy!', funFact: 'Heavy elements like gold and platinum are created in supernovae!'
    },
    {
      type: 'mcq', question: 'What is the Chandrayaan program?', categoryId: 'space',
      options: [{ id: 'a', text: 'China\'s Mars mission' }, { id: 'b', text: 'India\'s lunar exploration program' }, { id: 'c', text: 'Japan\'s space station' }, { id: 'd', text: 'Russia\'s Venus probe' }],
      correctAnswer: 'b', explanation: 'India\'s ISRO has launched successful Moon missions!', funFact: 'Chandrayaan-3 successfully landed on the Moon\'s south pole in 2023!'
    },
    {
      type: 'mcq', question: 'How far is the Moon from Earth?', categoryId: 'space',
      options: [{ id: 'a', text: 'About 38,000 km' }, { id: 'b', text: 'About 384,000 km' }, { id: 'c', text: 'About 3.84 million km' }, { id: 'd', text: 'About 38.4 million km' }],
      correctAnswer: 'b', explanation: 'The average distance is about 384,400 km!', funFact: 'You could fit all the planets in our solar system between Earth and the Moon!'
    },
    {
      type: 'mcq', question: 'What is orbital velocity?', categoryId: 'space',
      options: [{ id: 'a', text: 'Speed of rotation' }, { id: 'b', text: 'Speed needed to stay in orbit' }, { id: 'c', text: 'Speed of light' }, { id: 'd', text: 'Speed of escape from a planet' }],
      correctAnswer: 'b', explanation: 'For low Earth orbit, it\'s about 28,000 km/h!', funFact: 'The ISS orbits Earth every 90 minutes at this speed!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the Schwarzschild radius?', categoryId: 'space',
      options: [{ id: 'a', text: 'Radius of the Sun' }, { id: 'b', text: 'The event horizon radius of a black hole' }, { id: 'c', text: 'Orbital radius' }, { id: 'd', text: 'Galaxy radius' }],
      correctAnswer: 'b', explanation: 'R = 2GM/c² - the radius at which escape velocity equals the speed of light!', funFact: 'For Earth, the Schwarzschild radius is about 9 millimeters!'
    },
    {
      type: 'mcq', question: 'What is the Fermi Paradox?', categoryId: 'space',
      options: [{ id: 'a', text: 'A physics puzzle' }, { id: 'b', text: 'The contradiction between the lack of evidence for extraterrestrial life and high probability estimates' }, { id: 'c', text: 'A time travel problem' }, { id: 'd', text: 'A math equation' }],
      correctAnswer: 'b', explanation: 'If the universe is so vast, where is everybody?', funFact: 'Named after physicist Enrico Fermi who posed this question in 1950!'
    },
    {
      type: 'mcq', question: 'What is the cosmic microwave background radiation?', categoryId: 'space',
      options: [{ id: 'a', text: 'Radiation from the Sun' }, { id: 'b', text: 'Leftover glow from the Big Bang' }, { id: 'c', text: 'Radio waves from black holes' }, { id: 'd', text: 'Microwave signals from satellites' }],
      correctAnswer: 'b', explanation: 'This thermal radiation is about 2.7 Kelvin (-270.45°C)!', funFact: 'It was discovered accidentally in 1965 by Penzias and Wilson!'
    },
    {
      type: 'mcq', question: 'What is gravitational lensing?', categoryId: 'space',
      options: [{ id: 'a', text: 'A telescope type' }, { id: 'b', text: 'Light bending around massive objects' }, { id: 'c', text: 'A type of lens in space' }, { id: 'd', text: 'Gravity measurement' }],
      correctAnswer: 'b', explanation: 'Massive objects warp spacetime, bending light around them!', funFact: 'Einstein predicted this, and it was confirmed in 1919!'
    },
    {
      type: 'mcq', question: 'What is the Hubble constant measuring?', categoryId: 'space',
      options: [{ id: 'a', text: 'Star brightness' }, { id: 'b', text: 'The rate of universe expansion' }, { id: 'c', text: 'Galaxy size' }, { id: 'd', text: 'Light speed' }],
      correctAnswer: 'b', explanation: 'H₀ ≈ 70 km/s/Mpc - galaxies recede faster the farther they are!', funFact: 'The exact value is still being refined by astronomers!'
    },
    {
      type: 'mcq', question: 'What is the Roche limit?', categoryId: 'space',
      options: [{ id: 'a', text: 'Maximum speed in space' }, { id: 'b', text: 'Distance within which a celestial body will disintegrate due to tidal forces' }, { id: 'c', text: 'Edge of the solar system' }, { id: 'd', text: 'Fuel limit for rockets' }],
      correctAnswer: 'b', explanation: 'Saturn\'s rings may be debris from a moon that passed inside Saturn\'s Roche limit!', funFact: 'Comet Shoemaker-Levy 9 broke apart inside Jupiter\'s Roche limit!'
    },
    {
      type: 'mcq', question: 'What is the Drake Equation used for?', categoryId: 'space',
      options: [{ id: 'a', text: 'Calculating rocket trajectories' }, { id: 'b', text: 'Estimating the number of communicating civilizations in our galaxy' }, { id: 'c', text: 'Measuring star distances' }, { id: 'd', text: 'Calculating orbital periods' }],
      correctAnswer: 'b', explanation: 'It considers factors like star formation rate and habitable planets!', funFact: 'Estimates range from zero to millions of civilizations!'
    },
    {
      type: 'mcq', question: 'What is the approximate escape velocity from Earth?', categoryId: 'space',
      options: [{ id: 'a', text: '11.2 km/s' }, { id: 'b', text: '7.9 km/s' }, { id: 'c', text: '30 km/s' }, { id: 'd', text: '3.2 km/s' }],
      correctAnswer: 'a', explanation: 'You need to reach 11.2 km/s to escape Earth\'s gravity!', funFact: 'This is about 40,000 km/h!'
    },
    {
      type: 'mcq', question: 'What is a quasar?', categoryId: 'space',
      options: [{ id: 'a', text: 'A type of star' }, { id: 'b', text: 'An extremely luminous active galactic nucleus' }, { id: 'c', text: 'A small galaxy' }, { id: 'd', text: 'A neutron star' }],
      correctAnswer: 'b', explanation: 'Quasars are powered by supermassive black holes eating material!', funFact: 'Some quasars are brighter than a trillion Suns!'
    },
    {
      type: 'mcq', question: 'What is the Hertzsprung-Russell diagram?', categoryId: 'space',
      options: [{ id: 'a', text: 'A map of the galaxy' }, { id: 'b', text: 'A plot of stellar luminosity vs. temperature' }, { id: 'c', text: 'An orbital diagram' }, { id: 'd', text: 'A constellation chart' }],
      correctAnswer: 'b', explanation: 'It classifies stars by their evolutionary stage!', funFact: 'Our Sun is on the main sequence, a diagonal band on the diagram!'
    },
    {
      type: 'mcq', question: 'What are Lagrange points?', categoryId: 'space',
      options: [{ id: 'a', text: 'Points on Earth' }, { id: 'b', text: 'Positions where gravitational forces balance' }, { id: 'c', text: 'Types of stars' }, { id: 'd', text: 'Points on the Moon' }],
      correctAnswer: 'b', explanation: 'There are 5 Lagrange points in any two-body system like Earth-Sun!', funFact: 'James Webb Space Telescope is at L2, 1.5 million km from Earth!'
    },
    {
      type: 'mcq', question: 'What is dark energy?', categoryId: 'space',
      options: [{ id: 'a', text: 'Energy from black holes' }, { id: 'b', text: 'A hypothetical form of energy causing accelerating expansion' }, { id: 'c', text: 'Energy from dark matter' }, { id: 'd', text: 'Negative energy' }],
      correctAnswer: 'b', explanation: 'Dark energy makes up about 68% of the universe!', funFact: 'Its discovery won the 2011 Nobel Prize in Physics!'
    },
    {
      type: 'mcq', question: 'What is the James Webb Space Telescope primarily designed to observe?', categoryId: 'space',
      options: [{ id: 'a', text: 'X-rays' }, { id: 'b', text: 'Infrared light' }, { id: 'c', text: 'Visible light only' }, { id: 'd', text: 'Gamma rays' }],
      correctAnswer: 'b', explanation: 'JWST sees in infrared to peer through cosmic dust and observe distant galaxies!', funFact: 'Its mirror is 6.5 meters wide, made of 18 gold-plated segments!'
    },
    {
      type: 'mcq', question: 'What is the significance of the 2019 Event Horizon Telescope image?', categoryId: 'space',
      options: [{ id: 'a', text: 'First image of Mars' }, { id: 'b', text: 'First direct image of a black hole\'s shadow' }, { id: 'c', text: 'First image of a quasar' }, { id: 'd', text: 'First image of dark matter' }],
      correctAnswer: 'b', explanation: 'It captured the shadow of the black hole at the center of galaxy M87!', funFact: 'The black hole is 55 million light-years away and 6.5 billion times the Sun\'s mass!'
    },
    {
      type: 'mcq', question: 'What is the Chandrasekhar limit?', categoryId: 'space',
      options: [{ id: 'a', text: 'Distance limit for space travel' }, { id: 'b', text: 'Maximum mass of a white dwarf star' }, { id: 'c', text: 'Speed limit in space' }, { id: 'd', text: 'Temperature limit of a star' }],
      correctAnswer: 'b', explanation: 'About 1.4 solar masses - above this, the star becomes a neutron star or black hole!', funFact: 'Subrahmanyan Chandrasekhar calculated this at age 19!'
    },
  ],
};
