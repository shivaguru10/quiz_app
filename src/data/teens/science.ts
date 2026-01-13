// Teens Science Questions (13+ years) - Advanced Scientific Concepts
import { TeensQuestionBank } from './types';

export const scienceQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is the chemical formula for carbon dioxide?', categoryId: 'science',
      options: [{ id: 'a', text: 'CO' }, { id: 'b', text: 'CO2' }, { id: 'c', text: 'C2O' }, { id: 'd', text: 'O2C' }],
      correctAnswer: 'b', explanation: 'Carbon dioxide is CO2 - one carbon and two oxygen atoms!', funFact: 'Plants absorb CO2 for photosynthesis!'
    },
    {
      type: 'mcq', question: 'What type of blood cells fight infection?', categoryId: 'science',
      options: [{ id: 'a', text: 'Red blood cells' }, { id: 'b', text: 'Platelets' }, { id: 'c', text: 'White blood cells' }, { id: 'd', text: 'Plasma' }],
      correctAnswer: 'c', explanation: 'White blood cells (leukocytes) are our immune defenders!', funFact: 'We produce about 100 billion white blood cells daily!'
    },
    {
      type: 'mcq', question: 'What is the powerhouse of the cell?', categoryId: 'science',
      options: [{ id: 'a', text: 'Nucleus' }, { id: 'b', text: 'Ribosome' }, { id: 'c', text: 'Mitochondria' }, { id: 'd', text: 'Golgi body' }],
      correctAnswer: 'c', explanation: 'Mitochondria produce ATP - cellular energy!', funFact: 'Mitochondria have their own DNA separate from the nucleus!'
    },
    {
      type: 'mcq', question: 'What gas do plants release during photosynthesis?', categoryId: 'science',
      options: [{ id: 'a', text: 'Carbon dioxide' }, { id: 'b', text: 'Nitrogen' }, { id: 'c', text: 'Oxygen' }, { id: 'd', text: 'Hydrogen' }],
      correctAnswer: 'c', explanation: 'Plants release oxygen as a byproduct of photosynthesis!', funFact: 'A single tree can produce enough oxygen for 2 people per year!'
    },
    {
      type: 'mcq', question: 'What is the center of an atom called?', categoryId: 'science',
      options: [{ id: 'a', text: 'Electron' }, { id: 'b', text: 'Proton' }, { id: 'c', text: 'Nucleus' }, { id: 'd', text: 'Neutron' }],
      correctAnswer: 'c', explanation: 'The nucleus contains protons and neutrons!', funFact: 'The nucleus is 10,000 times smaller than the atom but contains 99.9% of its mass!'
    },
    {
      type: 'mcq', question: 'What is the pH of pure water?', categoryId: 'science',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '7' }, { id: 'c', text: '9' }, { id: 'd', text: '14' }],
      correctAnswer: 'b', explanation: 'Pure water is neutral with a pH of 7!', funFact: 'The pH scale ranges from 0 (most acidic) to 14 (most alkaline)!'
    },
    {
      type: 'mcq', question: 'Which planet is known as the "Red Planet"?', categoryId: 'science',
      options: [{ id: 'a', text: 'Venus' }, { id: 'b', text: 'Jupiter' }, { id: 'c', text: 'Mars' }, { id: 'd', text: 'Saturn' }],
      correctAnswer: 'c', explanation: 'Mars appears red due to iron oxide (rust) on its surface!', funFact: 'Mars has the largest volcano in the solar system - Olympus Mons!'
    },
    {
      type: 'true-false', question: 'Sound travels faster in water than in air.', categoryId: 'science',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Sound travels about 4x faster in water than in air!', funFact: 'Whales can hear each other from hundreds of miles away!'
    },
    {
      type: 'mcq', question: 'What force keeps planets in orbit around the Sun?', categoryId: 'science',
      options: [{ id: 'a', text: 'Magnetic force' }, { id: 'b', text: 'Gravity' }, { id: 'c', text: 'Friction' }, { id: 'd', text: 'Nuclear force' }],
      correctAnswer: 'b', explanation: 'Gravity is the force of attraction between masses!', funFact: 'Without gravity, you would float off into space!'
    },
    {
      type: 'mcq', question: 'What is the largest organ in the human body?', categoryId: 'science',
      options: [{ id: 'a', text: 'Liver' }, { id: 'b', text: 'Brain' }, { id: 'c', text: 'Skin' }, { id: 'd', text: 'Lungs' }],
      correctAnswer: 'c', explanation: 'Skin covers about 2 square meters and weighs about 3.6 kg!', funFact: 'You shed about 40,000 dead skin cells every minute!'
    },
    {
      type: 'mcq', question: 'What is the chemical symbol for sodium?', categoryId: 'science',
      options: [{ id: 'a', text: 'So' }, { id: 'b', text: 'Na' }, { id: 'c', text: 'Sd' }, { id: 'd', text: 'S' }],
      correctAnswer: 'b', explanation: 'Na comes from the Latin word "natrium"!', funFact: 'Sodium is so reactive it explodes when it touches water!'
    },
    {
      type: 'mcq', question: 'How many bones are in the adult human body?', categoryId: 'science',
      options: [{ id: 'a', text: '186' }, { id: 'b', text: '206' }, { id: 'c', text: '226' }, { id: 'd', text: '256' }],
      correctAnswer: 'b', explanation: 'Adults have 206 bones (babies have about 270 that fuse together)!', funFact: 'Your smallest bone is in your ear - the stirrup bone!'
    },
    {
      type: 'mcq', question: 'What is the process by which water changes from liquid to gas?', categoryId: 'science',
      options: [{ id: 'a', text: 'Condensation' }, { id: 'b', text: 'Evaporation' }, { id: 'c', text: 'Precipitation' }, { id: 'd', text: 'Sublimation' }],
      correctAnswer: 'b', explanation: 'Evaporation occurs when liquid molecules gain enough energy to escape into the air!', funFact: 'The oceans lose about 500,000 cubic km of water to evaporation each year!'
    },
    {
      type: 'mcq', question: 'Which element is most abundant in the Earth\'s crust?', categoryId: 'science',
      options: [{ id: 'a', text: 'Iron' }, { id: 'b', text: 'Silicon' }, { id: 'c', text: 'Oxygen' }, { id: 'd', text: 'Aluminum' }],
      correctAnswer: 'c', explanation: 'Oxygen makes up about 46% of the Earth\'s crust by mass!', funFact: 'Most of this oxygen is bound in rocks and minerals, not in the air!'
    },
    {
      type: 'mcq', question: 'What is the main function of red blood cells?', categoryId: 'science',
      options: [{ id: 'a', text: 'Fight infections' }, { id: 'b', text: 'Clot blood' }, { id: 'c', text: 'Carry oxygen' }, { id: 'd', text: 'Digest food' }],
      correctAnswer: 'c', explanation: 'Red blood cells contain hemoglobin which binds to oxygen!', funFact: 'Your body produces about 2 million red blood cells every second!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the speed of light in a vacuum?', categoryId: 'science',
      options: [{ id: 'a', text: '3×10⁶ m/s' }, { id: 'b', text: '3×10⁸ m/s' }, { id: 'c', text: '3×10¹⁰ m/s' }, { id: 'd', text: '3×10⁴ m/s' }],
      correctAnswer: 'b', explanation: 'Light travels at approximately 300,000 km/s or 3×10⁸ m/s!', funFact: 'Light from the Sun takes 8 minutes to reach Earth!'
    },
    {
      type: 'mcq', question: 'What is the molecular formula of glucose?', categoryId: 'science',
      options: [{ id: 'a', text: 'C6H12O6' }, { id: 'b', text: 'C12H22O11' }, { id: 'c', text: 'CH4' }, { id: 'd', text: 'C2H5OH' }],
      correctAnswer: 'a', explanation: 'Glucose (C6H12O6) is a simple sugar and energy source for cells!', funFact: 'Your brain uses about 120 grams of glucose per day!'
    },
    {
      type: 'mcq', question: 'Which organelle is responsible for protein synthesis?', categoryId: 'science',
      options: [{ id: 'a', text: 'Mitochondria' }, { id: 'b', text: 'Ribosome' }, { id: 'c', text: 'Lysosome' }, { id: 'd', text: 'Vacuole' }],
      correctAnswer: 'b', explanation: 'Ribosomes read mRNA and assemble amino acids into proteins!', funFact: 'A single cell can contain millions of ribosomes!'
    },
    {
      type: 'mcq', question: 'What is the unit of electrical resistance?', categoryId: 'science',
      options: [{ id: 'a', text: 'Volt' }, { id: 'b', text: 'Ampere' }, { id: 'c', text: 'Ohm' }, { id: 'd', text: 'Watt' }],
      correctAnswer: 'c', explanation: 'Resistance (R) is measured in Ohms (Ω)!', funFact: 'The ohm is named after German physicist Georg Ohm!'
    },
    {
      type: 'mcq', question: 'What type of bond forms when electrons are shared between atoms?', categoryId: 'science',
      options: [{ id: 'a', text: 'Ionic bond' }, { id: 'b', text: 'Covalent bond' }, { id: 'c', text: 'Metallic bond' }, { id: 'd', text: 'Hydrogen bond' }],
      correctAnswer: 'b', explanation: 'Covalent bonds involve sharing electrons between atoms!', funFact: 'Diamond is so hard because of its strong covalent bonds!'
    },
    {
      type: 'mcq', question: 'What is the function of DNA polymerase?', categoryId: 'science',
      options: [{ id: 'a', text: 'Breaks down DNA' }, { id: 'b', text: 'Replicates DNA' }, { id: 'c', text: 'Translates DNA to protein' }, { id: 'd', text: 'Repairs cell membranes' }],
      correctAnswer: 'b', explanation: 'DNA polymerase copies DNA during cell division!', funFact: 'DNA polymerase can copy about 1,000 nucleotides per second!'
    },
    {
      type: 'mcq', question: 'What phenomenon causes the sky to appear blue?', categoryId: 'science',
      options: [{ id: 'a', text: 'Reflection' }, { id: 'b', text: 'Refraction' }, { id: 'c', text: 'Rayleigh scattering' }, { id: 'd', text: 'Absorption' }],
      correctAnswer: 'c', explanation: 'Blue light is scattered more than other colors by atmospheric molecules!', funFact: 'On Mars, the sky appears butterscotch during the day due to dust particles!'
    },
    {
      type: 'mcq', question: 'What is the half-life of Carbon-14?', categoryId: 'science',
      options: [{ id: 'a', text: '573 years' }, { id: 'b', text: '5,730 years' }, { id: 'c', text: '57,300 years' }, { id: 'd', text: '573,000 years' }],
      correctAnswer: 'b', explanation: 'Carbon-14 has a half-life of about 5,730 years, used in radiocarbon dating!', funFact: 'Carbon dating can determine ages up to about 50,000 years!'
    },
    {
      type: 'mcq', question: 'Which law states that energy cannot be created or destroyed?', categoryId: 'science',
      options: [{ id: 'a', text: 'Newton\'s First Law' }, { id: 'b', text: 'Law of Conservation of Mass' }, { id: 'c', text: 'First Law of Thermodynamics' }, { id: 'd', text: 'Ohm\'s Law' }],
      correctAnswer: 'c', explanation: 'The First Law of Thermodynamics states energy is conserved - only transformed!', funFact: 'This means the total energy in the universe is constant!'
    },
    {
      type: 'mcq', question: 'What is the process by which mRNA is made from DNA?', categoryId: 'science',
      options: [{ id: 'a', text: 'Translation' }, { id: 'b', text: 'Replication' }, { id: 'c', text: 'Transcription' }, { id: 'd', text: 'Mutation' }],
      correctAnswer: 'c', explanation: 'Transcription creates mRNA copies of DNA sequences!', funFact: 'Transcription occurs in the nucleus, but translation happens in the cytoplasm!'
    },
    {
      type: 'mcq', question: 'What is the charge of a proton?', categoryId: 'science',
      options: [{ id: 'a', text: 'Negative' }, { id: 'b', text: 'Positive' }, { id: 'c', text: 'Neutral' }, { id: 'd', text: 'Variable' }],
      correctAnswer: 'b', explanation: 'Protons have a positive charge of +1!', funFact: 'The number of protons defines what element an atom is!'
    },
    {
      type: 'mcq', question: 'What type of wave is sound?', categoryId: 'science',
      options: [{ id: 'a', text: 'Transverse wave' }, { id: 'b', text: 'Longitudinal wave' }, { id: 'c', text: 'Electromagnetic wave' }, { id: 'd', text: 'Standing wave' }],
      correctAnswer: 'b', explanation: 'Sound waves are longitudinal - compressions and rarefactions of molecules!', funFact: 'Sound cannot travel in a vacuum because there are no molecules to vibrate!'
    },
    {
      type: 'mcq', question: 'What is the SI unit of force?', categoryId: 'science',
      options: [{ id: 'a', text: 'Joule' }, { id: 'b', text: 'Newton' }, { id: 'c', text: 'Pascal' }, { id: 'd', text: 'Watt' }],
      correctAnswer: 'b', explanation: 'Force is measured in Newtons (N) = kg·m/s²!', funFact: 'One Newton is roughly the force of gravity on a small apple!'
    },
    {
      type: 'mcq', question: 'Which blood type is the universal donor?', categoryId: 'science',
      options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'AB' }, { id: 'd', text: 'O' }],
      correctAnswer: 'd', explanation: 'Type O negative blood can be given to anyone!', funFact: 'Only about 7% of people have O negative blood!'
    },
    {
      type: 'mcq', question: 'What is the acceleration due to gravity on Earth?', categoryId: 'science',
      options: [{ id: 'a', text: '9.8 m/s²' }, { id: 'b', text: '10.8 m/s²' }, { id: 'c', text: '8.8 m/s²' }, { id: 'd', text: '11.8 m/s²' }],
      correctAnswer: 'a', explanation: 'Objects fall at approximately 9.8 m/s² near Earth\'s surface!', funFact: 'This value varies slightly depending on location and altitude!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the Heisenberg Uncertainty Principle about?', categoryId: 'science',
      options: [{ id: 'a', text: 'Energy conservation' }, { id: 'b', text: 'Position and momentum cannot both be precisely measured' }, { id: 'c', text: 'Speed of light is constant' }, { id: 'd', text: 'Matter cannot be created' }],
      correctAnswer: 'b', explanation: 'You cannot simultaneously know both position and momentum with perfect precision!', funFact: 'This is a fundamental limit of nature, not a measurement limitation!'
    },
    {
      type: 'mcq', question: 'What is the Krebs cycle also known as?', categoryId: 'science',
      options: [{ id: 'a', text: 'Glycolysis' }, { id: 'b', text: 'Citric acid cycle' }, { id: 'c', text: 'Calvin cycle' }, { id: 'd', text: 'Electron transport chain' }],
      correctAnswer: 'b', explanation: 'The Krebs/Citric Acid cycle is the second stage of cellular respiration!', funFact: 'It produces 2 ATP but generates electron carriers for much more ATP production!'
    },
    {
      type: 'mcq', question: 'What is the hybridization of carbon in methane (CH4)?', categoryId: 'science',
      options: [{ id: 'a', text: 'sp' }, { id: 'b', text: 'sp²' }, { id: 'c', text: 'sp³' }, { id: 'd', text: 'sp³d' }],
      correctAnswer: 'c', explanation: 'Carbon in methane has sp³ hybridization with tetrahedral geometry!', funFact: 'The bond angle in methane is exactly 109.5°!'
    },
    {
      type: 'mcq', question: 'What is the Chandrasekhar limit?', categoryId: 'science',
      options: [{ id: 'a', text: 'Maximum mass of a white dwarf star' }, { id: 'b', text: 'Speed of light' }, { id: 'c', text: 'Size of the observable universe' }, { id: 'd', text: 'Temperature of absolute zero' }],
      correctAnswer: 'a', explanation: 'About 1.4 solar masses - beyond this, a white dwarf collapses into a neutron star!', funFact: 'Subrahmanyan Chandrasekhar won the Nobel Prize for this discovery at age 19!'
    },
    {
      type: 'mcq', question: 'What is the principle behind MRI scans?', categoryId: 'science',
      options: [{ id: 'a', text: 'X-ray absorption' }, { id: 'b', text: 'Nuclear magnetic resonance' }, { id: 'c', text: 'Ultrasonic waves' }, { id: 'd', text: 'Gamma ray emission' }],
      correctAnswer: 'b', explanation: 'MRI uses strong magnetic fields and radio waves to image hydrogen atoms in the body!', funFact: 'MRI magnets are about 30,000 times stronger than Earth\'s magnetic field!'
    },
    {
      type: 'mcq', question: 'What is the Schwarzschild radius?', categoryId: 'science',
      options: [{ id: 'a', text: 'Radius of the Sun' }, { id: 'b', text: 'Event horizon of a black hole' }, { id: 'c', text: 'Radius of an electron orbit' }, { id: 'd', text: 'Distance light travels in one year' }],
      correctAnswer: 'b', explanation: 'It\'s the radius at which gravity becomes so strong that nothing can escape - the event horizon!', funFact: 'Earth would need to be compressed to about 9mm to become a black hole!'
    },
    {
      type: 'mcq', question: 'What is the approximate age of the universe?', categoryId: 'science',
      options: [{ id: 'a', text: '4.5 billion years' }, { id: 'b', text: '10.8 billion years' }, { id: 'c', text: '13.8 billion years' }, { id: 'd', text: '20 billion years' }],
      correctAnswer: 'c', explanation: 'The Big Bang occurred approximately 13.8 billion years ago!', funFact: 'The cosmic microwave background radiation is our earliest visible "snapshot" of the universe!'
    },
    {
      type: 'mcq', question: 'What enzyme breaks down starch into sugars?', categoryId: 'science',
      options: [{ id: 'a', text: 'Lipase' }, { id: 'b', text: 'Amylase' }, { id: 'c', text: 'Protease' }, { id: 'd', text: 'Lactase' }],
      correctAnswer: 'b', explanation: 'Amylase is found in saliva and pancreatic juice!', funFact: 'Chewing bread longer makes it taste sweeter as amylase breaks down the starch!'
    },
    {
      type: 'mcq', question: 'What is the oxidation state of oxygen in a peroxide?', categoryId: 'science',
      options: [{ id: 'a', text: '-2' }, { id: 'b', text: '-1' }, { id: 'c', text: '0' }, { id: 'd', text: '+1' }],
      correctAnswer: 'b', explanation: 'In peroxides like H2O2, oxygen has an oxidation state of -1!', funFact: 'Hydrogen peroxide is used as rocket fuel when concentrated!'
    },
    {
      type: 'mcq', question: 'What is the photoelectric effect?', categoryId: 'science',
      options: [{ id: 'a', text: 'Light bending around objects' }, { id: 'b', text: 'Electrons ejected when light hits a metal' }, { id: 'c', text: 'Light traveling in a straight line' }, { id: 'd', text: 'Light creating heat' }],
      correctAnswer: 'b', explanation: 'Einstein explained this with photons - earning his Nobel Prize!', funFact: 'This effect proves light has particle-like properties (wave-particle duality)!'
    },
    {
      type: 'mcq', question: 'What is the Hardy-Weinberg principle used for?', categoryId: 'science',
      options: [{ id: 'a', text: 'Predicting weather patterns' }, { id: 'b', text: 'Calculating allele frequencies in populations' }, { id: 'c', text: 'Measuring atomic mass' }, { id: 'd', text: 'Determining chemical reactions' }],
      correctAnswer: 'b', explanation: 'It describes genetic equilibrium in ideal, non-evolving populations!', funFact: 'Deviations from Hardy-Weinberg equilibrium indicate evolution is occurring!'
    },
    {
      type: 'mcq', question: 'What is the Doppler effect?', categoryId: 'science',
      options: [{ id: 'a', text: 'Change in wave frequency due to relative motion' }, { id: 'b', text: 'Bending of light through glass' }, { id: 'c', text: 'Absorption of light by matter' }, { id: 'd', text: 'Reflection of sound waves' }],
      correctAnswer: 'a', explanation: 'Moving toward you = higher frequency; moving away = lower frequency!', funFact: 'Astronomers use redshift (Doppler effect) to measure how fast galaxies are moving away!'
    },
    {
      type: 'mcq', question: 'What is CRISPR-Cas9?', categoryId: 'science',
      options: [{ id: 'a', text: 'A type of microscope' }, { id: 'b', text: 'A gene-editing technology' }, { id: 'c', text: 'A cancer treatment' }, { id: 'd', text: 'A computer programming language' }],
      correctAnswer: 'b', explanation: 'CRISPR allows precise editing of DNA sequences!', funFact: 'CRISPR was adapted from a natural bacterial defense system against viruses!'
    },
    {
      type: 'mcq', question: 'What is the relationship described by E=mc²?', categoryId: 'science',
      options: [{ id: 'a', text: 'Kinetic energy' }, { id: 'b', text: 'Mass-energy equivalence' }, { id: 'c', text: 'Gravitational potential' }, { id: 'd', text: 'Electrical resistance' }],
      correctAnswer: 'b', explanation: 'Einstein\'s equation shows mass and energy are interchangeable!', funFact: 'A paper clip contains enough energy to power a city for a day if fully converted!'
    },
    {
      type: 'mcq', question: 'What particle is responsible for the strong nuclear force?', categoryId: 'science',
      options: [{ id: 'a', text: 'Photon' }, { id: 'b', text: 'Gluon' }, { id: 'c', text: 'W boson' }, { id: 'd', text: 'Graviton' }],
      correctAnswer: 'b', explanation: 'Gluons "glue" quarks together inside protons and neutrons!', funFact: 'The strong force is 100 times stronger than electromagnetism!'
    },
  ],
};
