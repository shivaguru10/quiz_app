// Juniors History Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const historyQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'Who was the first President of the United States?', categoryId: 'history',
      options: [{ id: 'a', text: 'Abraham Lincoln' }, { id: 'b', text: 'George Washington' }, { id: 'c', text: 'Thomas Jefferson' }, { id: 'd', text: 'John Adams' }],
      correctAnswer: 'b', explanation: 'George Washington was the first President!', funFact: 'He served from 1789 to 1797!'
    },
    {
      type: 'mcq', question: 'What ancient civilization built the pyramids?', categoryId: 'history',
      options: [{ id: 'a', text: 'Romans' }, { id: 'b', text: 'Greeks' }, { id: 'c', text: 'Egyptians' }, { id: 'd', text: 'Mayans' }],
      correctAnswer: 'c', explanation: 'The ancient Egyptians built the pyramids!', funFact: 'The Great Pyramid is over 4,500 years old!'
    },
    {
      type: 'mcq', question: 'What ship brought the Pilgrims to America in 1620?', categoryId: 'history',
      options: [{ id: 'a', text: 'Titanic' }, { id: 'b', text: 'Mayflower' }, { id: 'c', text: 'Santa Maria' }, { id: 'd', text: 'Victory' }],
      correctAnswer: 'b', explanation: 'The Mayflower brought the Pilgrims!', funFact: 'The journey took 66 days!'
    },
    {
      type: 'mcq', question: 'Who discovered America in 1492?', categoryId: 'history',
      options: [{ id: 'a', text: 'Magellan' }, { id: 'b', text: 'Columbus' }, { id: 'c', text: 'Vespucci' }, { id: 'd', text: 'Cook' }],
      correctAnswer: 'b', explanation: 'Christopher Columbus sailed to America in 1492!', funFact: 'He thought he had reached India!'
    },
    {
      type: 'mcq', question: 'What holiday celebrates American independence?', categoryId: 'history',
      options: [{ id: 'a', text: 'Memorial Day' }, { id: 'b', text: 'Veterans Day' }, { id: 'c', text: 'Fourth of July' }, { id: 'd', text: 'Labor Day' }],
      correctAnswer: 'c', explanation: 'July 4th celebrates American independence!', funFact: 'The Declaration was signed in 1776!'
    },
    {
      type: 'mcq', question: 'What were Egyptian kings called?', categoryId: 'history',
      options: [{ id: 'a', text: 'Emperors' }, { id: 'b', text: 'Pharaohs' }, { id: 'c', text: 'Sultans' }, { id: 'd', text: 'Czars' }],
      correctAnswer: 'b', explanation: 'Egyptian kings were called Pharaohs!', funFact: 'Pharaoh means "great house"!'
    },
    {
      type: 'true-false', question: 'Dinosaurs and humans lived at the same time.', categoryId: 'history',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'Dinosaurs died out 65 million years before humans!', funFact: 'Birds are modern dinosaur descendants!'
    },
    {
      type: 'mcq', question: 'What ancient wonder was in Babylon?', categoryId: 'history',
      options: [{ id: 'a', text: 'Pyramids' }, { id: 'b', text: 'Hanging Gardens' }, { id: 'c', text: 'Colosseum' }, { id: 'd', text: 'Great Wall' }],
      correctAnswer: 'b', explanation: 'The Hanging Gardens were in Babylon!', funFact: 'We are not even sure they existed!'
    },
    {
      type: 'mcq', question: 'What did ancient Romans wear?', categoryId: 'history',
      options: [{ id: 'a', text: 'Kilts' }, { id: 'b', text: 'Togas' }, { id: 'c', text: 'Tunics only' }, { id: 'd', text: 'Armor' }],
      correctAnswer: 'b', explanation: 'Romans wore togas for formal occasions!', funFact: 'Only Roman citizens could wear togas!'
    },
    {
      type: 'mcq', question: 'Who painted the Mona Lisa?', categoryId: 'history',
      options: [{ id: 'a', text: 'Michelangelo' }, { id: 'b', text: 'Leonardo da Vinci' }, { id: 'c', text: 'Raphael' }, { id: 'd', text: 'Picasso' }],
      correctAnswer: 'b', explanation: 'Leonardo da Vinci painted the Mona Lisa!', funFact: 'It hangs in the Louvre Museum in Paris!'
    },
    {
      type: 'mcq', question: 'What is the oldest civilization in Mesopotamia?', categoryId: 'history',
      options: [{ id: 'a', text: 'Babylonians' }, { id: 'b', text: 'Assyrians' }, { id: 'c', text: 'Sumerians' }, { id: 'd', text: 'Persians' }],
      correctAnswer: 'c', explanation: 'The Sumerians were the first civilization there!', funFact: 'They invented writing around 3400 BCE!'
    },
    {
      type: 'mcq', question: 'What ancient Greek city was famous for warriors?', categoryId: 'history',
      options: [{ id: 'a', text: 'Athens' }, { id: 'b', text: 'Sparta' }, { id: 'c', text: 'Corinth' }, { id: 'd', text: 'Thebes' }],
      correctAnswer: 'b', explanation: 'Sparta was famous for its warriors!', funFact: 'Spartan boys started military training at age 7!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What year did World War II end?', categoryId: 'history',
      options: [{ id: 'a', text: '1943' }, { id: 'b', text: '1944' }, { id: 'c', text: '1945' }, { id: 'd', text: '1946' }],
      correctAnswer: 'c', explanation: 'WWII ended in 1945!', funFact: 'VE Day was May 8, VJ Day was August 15!'
    },
    {
      type: 'mcq', question: 'Who wrote the Declaration of Independence?', categoryId: 'history',
      options: [{ id: 'a', text: 'Benjamin Franklin' }, { id: 'b', text: 'John Adams' }, { id: 'c', text: 'Thomas Jefferson' }, { id: 'd', text: 'James Madison' }],
      correctAnswer: 'c', explanation: 'Thomas Jefferson was the main author!', funFact: 'It took him 17 days to write the draft!'
    },
    {
      type: 'mcq', question: 'What empire was ruled by Julius Caesar?', categoryId: 'history',
      options: [{ id: 'a', text: 'Greek Empire' }, { id: 'b', text: 'Roman Empire' }, { id: 'c', text: 'Persian Empire' }, { id: 'd', text: 'Ottoman Empire' }],
      correctAnswer: 'b', explanation: 'Julius Caesar ruled the Roman Empire!', funFact: 'He was assassinated in 44 BCE!'
    },
    {
      type: 'mcq', question: 'What famous queen ruled ancient Egypt?', categoryId: 'history',
      options: [{ id: 'a', text: 'Nefertiti' }, { id: 'b', text: 'Cleopatra' }, { id: 'c', text: 'Hatshepsut' }, { id: 'd', text: 'All of the above' }],
      correctAnswer: 'd', explanation: 'All three were famous Egyptian queens!', funFact: 'Cleopatra was the last pharaoh of Egypt!'
    },
    {
      type: 'mcq', question: 'What war was fought between the North and South in America?', categoryId: 'history',
      options: [{ id: 'a', text: 'Revolutionary War' }, { id: 'b', text: 'Civil War' }, { id: 'c', text: 'World War I' }, { id: 'd', text: 'War of 1812' }],
      correctAnswer: 'b', explanation: 'The Civil War was fought from 1861-1865!', funFact: 'It was about slavery and states rights!'
    },
    {
      type: 'mcq', question: 'Who was the first person to walk on the moon?', categoryId: 'history',
      options: [{ id: 'a', text: 'Buzz Aldrin' }, { id: 'b', text: 'John Glenn' }, { id: 'c', text: 'Neil Armstrong' }, { id: 'd', text: 'Yuri Gagarin' }],
      correctAnswer: 'c', explanation: 'Neil Armstrong walked on the moon in 1969!', funFact: 'He said "Thats one small step for man..."!'
    },
    {
      type: 'mcq', question: 'What period came after the Middle Ages?', categoryId: 'history',
      options: [{ id: 'a', text: 'Dark Ages' }, { id: 'b', text: 'Renaissance' }, { id: 'c', text: 'Industrial Revolution' }, { id: 'd', text: 'Bronze Age' }],
      correctAnswer: 'b', explanation: 'The Renaissance followed the Middle Ages!', funFact: 'Renaissance means "rebirth" in French!'
    },
    {
      type: 'mcq', question: 'Who was the leader of Nazi Germany?', categoryId: 'history',
      options: [{ id: 'a', text: 'Mussolini' }, { id: 'b', text: 'Stalin' }, { id: 'c', text: 'Hitler' }, { id: 'd', text: 'Franco' }],
      correctAnswer: 'c', explanation: 'Adolf Hitler led Nazi Germany!', funFact: 'He started World War II in 1939!'
    },
    {
      type: 'mcq', question: 'What ancient wonder was in Rhodes?', categoryId: 'history',
      options: [{ id: 'a', text: 'Lighthouse' }, { id: 'b', text: 'Colossus' }, { id: 'c', text: 'Temple' }, { id: 'd', text: 'Mausoleum' }],
      correctAnswer: 'b', explanation: 'The Colossus of Rhodes was a giant statue!', funFact: 'It was destroyed by an earthquake in 226 BCE!'
    },
    {
      type: 'mcq', question: 'Who invented the printing press?', categoryId: 'history',
      options: [{ id: 'a', text: 'Benjamin Franklin' }, { id: 'b', text: 'Johannes Gutenberg' }, { id: 'c', text: 'Thomas Edison' }, { id: 'd', text: 'Leonardo da Vinci' }],
      correctAnswer: 'b', explanation: 'Gutenberg invented it around 1440!', funFact: 'This invention spread knowledge rapidly!'
    },
    {
      type: 'true-false', question: 'The Titanic sank on its first voyage.', categoryId: 'history',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'The Titanic sank on April 15, 1912!', funFact: 'Over 1,500 people died in the disaster!'
    },
    {
      type: 'mcq', question: 'What empire was Genghis Khan known for building?', categoryId: 'history',
      options: [{ id: 'a', text: 'Roman Empire' }, { id: 'b', text: 'Mongol Empire' }, { id: 'c', text: 'Ottoman Empire' }, { id: 'd', text: 'British Empire' }],
      correctAnswer: 'b', explanation: 'Genghis Khan built the Mongol Empire!', funFact: 'It was the largest contiguous land empire ever!'
    },
    {
      type: 'mcq', question: 'What document did King John sign in 1215?', categoryId: 'history',
      options: [{ id: 'a', text: 'Constitution' }, { id: 'b', text: 'Bill of Rights' }, { id: 'c', text: 'Magna Carta' }, { id: 'd', text: 'Treaty of Paris' }],
      correctAnswer: 'c', explanation: 'The Magna Carta limited the kings power!', funFact: 'It influenced democracy around the world!'
    },
    {
      type: 'mcq', question: 'What city was destroyed by a volcano in 79 AD?', categoryId: 'history',
      options: [{ id: 'a', text: 'Rome' }, { id: 'b', text: 'Athens' }, { id: 'c', text: 'Pompeii' }, { id: 'd', text: 'Alexandria' }],
      correctAnswer: 'c', explanation: 'Mount Vesuvius buried Pompeii!', funFact: 'The ruins were perfectly preserved!'
    },
    {
      type: 'mcq', question: 'Who was known as the "Sun King" of France?', categoryId: 'history',
      options: [{ id: 'a', text: 'Louis XIII' }, { id: 'b', text: 'Louis XIV' }, { id: 'c', text: 'Louis XVI' }, { id: 'd', text: 'Napoleon' }],
      correctAnswer: 'b', explanation: 'Louis XIV was the Sun King!', funFact: 'He ruled for 72 years - the longest in European history!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What year did the French Revolution begin?', categoryId: 'history',
      options: [{ id: 'a', text: '1776' }, { id: 'b', text: '1789' }, { id: 'c', text: '1799' }, { id: 'd', text: '1804' }],
      correctAnswer: 'b', explanation: 'The French Revolution began in 1789!', funFact: 'The Bastille was stormed on July 14!'
    },
    {
      type: 'mcq', question: 'Who was the first Emperor of China?', categoryId: 'history',
      options: [{ id: 'a', text: 'Kublai Khan' }, { id: 'b', text: 'Qin Shi Huang' }, { id: 'c', text: 'Sun Yat-sen' }, { id: 'd', text: 'Confucius' }],
      correctAnswer: 'b', explanation: 'Qin Shi Huang unified China in 221 BCE!', funFact: 'He built the Terracotta Army and started the Great Wall!'
    },
    {
      type: 'mcq', question: 'What treaty ended World War I?', categoryId: 'history',
      options: [{ id: 'a', text: 'Treaty of Paris' }, { id: 'b', text: 'Treaty of Versailles' }, { id: 'c', text: 'Treaty of Ghent' }, { id: 'd', text: 'Treaty of Vienna' }],
      correctAnswer: 'b', explanation: 'The Treaty of Versailles ended WWI in 1919!', funFact: 'It blamed Germany for the war!'
    },
    {
      type: 'mcq', question: 'What ancient civilization used cuneiform writing?', categoryId: 'history',
      options: [{ id: 'a', text: 'Egyptians' }, { id: 'b', text: 'Greeks' }, { id: 'c', text: 'Sumerians' }, { id: 'd', text: 'Chinese' }],
      correctAnswer: 'c', explanation: 'The Sumerians invented cuneiform!', funFact: 'They pressed wedge-shaped marks into clay tablets!'
    },
    {
      type: 'mcq', question: 'What was the name of the allied D-Day invasion?', categoryId: 'history',
      options: [{ id: 'a', text: 'Operation Barbarossa' }, { id: 'b', text: 'Operation Overlord' }, { id: 'c', text: 'Operation Market Garden' }, { id: 'd', text: 'Operation Torch' }],
      correctAnswer: 'b', explanation: 'D-Day was Operation Overlord on June 6, 1944!', funFact: 'It was the largest seaborne invasion in history!'
    },
    {
      type: 'mcq', question: 'Who was the longest-reigning British monarch?', categoryId: 'history',
      options: [{ id: 'a', text: 'Queen Victoria' }, { id: 'b', text: 'Queen Elizabeth II' }, { id: 'c', text: 'King George III' }, { id: 'd', text: 'King Henry VIII' }],
      correctAnswer: 'b', explanation: 'Queen Elizabeth II reigned for over 70 years!', funFact: 'She became Queen in 1952!'
    },
    {
      type: 'mcq', question: 'What battle was Napoleons final defeat?', categoryId: 'history',
      options: [{ id: 'a', text: 'Battle of Austerlitz' }, { id: 'b', text: 'Battle of Trafalgar' }, { id: 'c', text: 'Battle of Waterloo' }, { id: 'd', text: 'Battle of Leipzig' }],
      correctAnswer: 'c', explanation: 'Napoleon was defeated at Waterloo in 1815!', funFact: 'He was then exiled to Saint Helena!'
    },
    {
      type: 'mcq', question: 'What ancient wonder was a lighthouse?', categoryId: 'history',
      options: [{ id: 'a', text: 'Colossus of Rhodes' }, { id: 'b', text: 'Pharos of Alexandria' }, { id: 'c', text: 'Temple of Artemis' }, { id: 'd', text: 'Statue of Zeus' }],
      correctAnswer: 'b', explanation: 'The Pharos was a famous lighthouse!', funFact: 'It was one of the tallest structures of its time!'
    },
    {
      type: 'mcq', question: 'What dynasty built most of the Great Wall of China?', categoryId: 'history',
      options: [{ id: 'a', text: 'Han' }, { id: 'b', text: 'Tang' }, { id: 'c', text: 'Ming' }, { id: 'd', text: 'Qing' }],
      correctAnswer: 'c', explanation: 'The Ming Dynasty built most of what we see today!', funFact: 'Earlier walls were built by the Qin Dynasty!'
    },
    {
      type: 'mcq', question: 'What city was the capital of the Byzantine Empire?', categoryId: 'history',
      options: [{ id: 'a', text: 'Rome' }, { id: 'b', text: 'Constantinople' }, { id: 'c', text: 'Athens' }, { id: 'd', text: 'Alexandria' }],
      correctAnswer: 'b', explanation: 'Constantinople was the Byzantine capital!', funFact: 'Its now called Istanbul, Turkey!'
    },
    {
      type: 'mcq', question: 'What code of laws did Hammurabi create?', categoryId: 'history',
      options: [{ id: 'a', text: 'Ten Commandments' }, { id: 'b', text: 'Code of Hammurabi' }, { id: 'c', text: 'Twelve Tables' }, { id: 'd', text: 'Justinian Code' }],
      correctAnswer: 'b', explanation: 'The Code of Hammurabi was one of the first written laws!', funFact: 'It included "an eye for an eye"!'
    },
    {
      type: 'mcq', question: 'Who was the first woman to fly solo across the Atlantic?', categoryId: 'history',
      options: [{ id: 'a', text: 'Amelia Earhart' }, { id: 'b', text: 'Harriet Quimby' }, { id: 'c', text: 'Bessie Coleman' }, { id: 'd', text: 'Jacqueline Cochran' }],
      correctAnswer: 'a', explanation: 'Amelia Earhart flew solo across the Atlantic in 1932!', funFact: 'She disappeared mysteriously in 1937!'
    },
    {
      type: 'true-false', question: 'The Roman Empire split into Eastern and Western parts.', categoryId: 'history',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'The empire split in 285 AD!', funFact: 'The Eastern part became the Byzantine Empire!'
    },
    {
      type: 'mcq', question: 'What was the Cold War primarily between?', categoryId: 'history',
      options: [{ id: 'a', text: 'USA and China' }, { id: 'b', text: 'USA and USSR' }, { id: 'c', text: 'Britain and Germany' }, { id: 'd', text: 'France and Russia' }],
      correctAnswer: 'b', explanation: 'The Cold War was between the USA and Soviet Union!', funFact: 'It lasted from 1947 to 1991!'
    },
    {
      type: 'mcq', question: 'What ancient empire was based in modern-day Iran?', categoryId: 'history',
      options: [{ id: 'a', text: 'Assyrian Empire' }, { id: 'b', text: 'Persian Empire' }, { id: 'c', text: 'Babylonian Empire' }, { id: 'd', text: 'Egyptian Empire' }],
      correctAnswer: 'b', explanation: 'The Persian Empire was based in Iran!', funFact: 'At its peak, it was the largest empire ever!'
    },
    {
      type: 'mcq', question: 'Who led India to independence through nonviolent protest?', categoryId: 'history',
      options: [{ id: 'a', text: 'Jawaharlal Nehru' }, { id: 'b', text: 'Subhas Chandra Bose' }, { id: 'c', text: 'Mahatma Gandhi' }, { id: 'd', text: 'Indira Gandhi' }],
      correctAnswer: 'c', explanation: 'Mahatma Gandhi led peaceful protests!', funFact: 'India gained independence in 1947!'
    },
    {
      type: 'mcq', question: 'What event started World War I?', categoryId: 'history',
      options: [{ id: 'a', text: 'Invasion of Poland' }, { id: 'b', text: 'Assassination of Archduke Franz Ferdinand' }, { id: 'c', text: 'Sinking of the Lusitania' }, { id: 'd', text: 'Russian Revolution' }],
      correctAnswer: 'b', explanation: 'The assassination in Sarajevo started WWI!', funFact: 'He was killed on June 28, 1914!'
    },
    {
      type: 'mcq', question: 'What was the Silk Road?', categoryId: 'history',
      options: [{ id: 'a', text: 'A clothing brand' }, { id: 'b', text: 'An ancient trade route' }, { id: 'c', text: 'A type of fabric' }, { id: 'd', text: 'A Chinese dynasty' }],
      correctAnswer: 'b', explanation: 'The Silk Road was an ancient trade route!', funFact: 'It connected China to the Mediterranean!'
    },
    {
      type: 'mcq', question: 'Who was the famous nurse in the Crimean War?', categoryId: 'history',
      options: [{ id: 'a', text: 'Clara Barton' }, { id: 'b', text: 'Florence Nightingale' }, { id: 'c', text: 'Mary Seacole' }, { id: 'd', text: 'Dorothea Dix' }],
      correctAnswer: 'b', explanation: 'Florence Nightingale reformed nursing!', funFact: 'She was called "The Lady with the Lamp"!'
    },
    {
      type: 'mcq', question: 'What year did the Berlin Wall fall?', categoryId: 'history',
      options: [{ id: 'a', text: '1985' }, { id: 'b', text: '1987' }, { id: 'c', text: '1989' }, { id: 'd', text: '1991' }],
      correctAnswer: 'c', explanation: 'The Berlin Wall fell on November 9, 1989!', funFact: 'This led to German reunification!'
    },
  ],
};
