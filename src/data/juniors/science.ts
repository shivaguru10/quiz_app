// Juniors Science Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const scienceQuestions: JuniorsQuestionBank = {
  easy: [
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
  ],
  medium: [
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
  ],
  hard: [
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
  ],
};
