// Teens English Questions (13+ years) - Advanced Language & Literature
import { TeensQuestionBank } from './types';

export const englishQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is a synonym?', categoryId: 'english',
      options: [{ id: 'a', text: 'A word with opposite meaning' }, { id: 'b', text: 'A word with similar meaning' }, { id: 'c', text: 'A word that sounds alike' }, { id: 'd', text: 'A punctuation mark' }],
      correctAnswer: 'b', explanation: 'Synonyms are words with similar meanings, like "happy" and "joyful"!', funFact: 'English has more synonyms than most languages due to its history!'
    },
    {
      type: 'mcq', question: 'Which of these is a conjunction?', categoryId: 'english',
      options: [{ id: 'a', text: 'Quickly' }, { id: 'b', text: 'However' }, { id: 'c', text: 'Beautiful' }, { id: 'd', text: 'Run' }],
      correctAnswer: 'b', explanation: 'Conjunctions connect words, phrases, or clauses!', funFact: 'FANBOYS (For, And, Nor, But, Or, Yet, So) are coordinating conjunctions!'
    },
    {
      type: 'mcq', question: 'What is the plural of "child"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Childs' }, { id: 'b', text: 'Children' }, { id: 'c', text: 'Childes' }, { id: 'd', text: 'Childen' }],
      correctAnswer: 'b', explanation: 'Child → Children is an irregular plural!', funFact: 'This irregular form comes from Old English!'
    },
    {
      type: 'mcq', question: 'What type of sentence asks a question?', categoryId: 'english',
      options: [{ id: 'a', text: 'Declarative' }, { id: 'b', text: 'Imperative' }, { id: 'c', text: 'Interrogative' }, { id: 'd', text: 'Exclamatory' }],
      correctAnswer: 'c', explanation: 'Interrogative sentences ask questions and end with ?', funFact: 'The word comes from Latin "interrogare" meaning "to ask"!'
    },
    {
      type: 'mcq', question: 'Who wrote "Romeo and Juliet"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Charles Dickens' }, { id: 'b', text: 'William Shakespeare' }, { id: 'c', text: 'Jane Austen' }, { id: 'd', text: 'Mark Twain' }],
      correctAnswer: 'b', explanation: 'Shakespeare wrote it around 1594-1596!', funFact: 'Shakespeare invented over 1,700 words still used today!'
    },
    {
      type: 'mcq', question: 'What is an antonym for "brave"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Bold' }, { id: 'b', text: 'Courageous' }, { id: 'c', text: 'Cowardly' }, { id: 'd', text: 'Fearless' }],
      correctAnswer: 'c', explanation: 'Antonyms are words with opposite meanings!', funFact: 'Anti- means "against" in Greek!'
    },
    {
      type: 'mcq', question: 'What is a simile?', categoryId: 'english',
      options: [{ id: 'a', text: 'A type of poem' }, { id: 'b', text: 'Comparison using "like" or "as"' }, { id: 'c', text: 'A long sentence' }, { id: 'd', text: 'Words that rhyme' }],
      correctAnswer: 'b', explanation: 'Example: "She runs like the wind" or "As brave as a lion"!', funFact: 'Similes are explicit comparisons, while metaphors are implied!'
    },
    {
      type: 'mcq', question: 'Which word is an adverb?', categoryId: 'english',
      options: [{ id: 'a', text: 'Happy' }, { id: 'b', text: 'Happiness' }, { id: 'c', text: 'Happily' }, { id: 'd', text: 'Happier' }],
      correctAnswer: 'c', explanation: 'Adverbs modify verbs, adjectives, or other adverbs. Many end in "-ly"!', funFact: 'Not all adverbs end in -ly: fast, well, very are also adverbs!'
    },
    {
      type: 'mcq', question: 'What does the prefix "un-" mean?', categoryId: 'english',
      options: [{ id: 'a', text: 'Before' }, { id: 'b', text: 'After' }, { id: 'c', text: 'Not' }, { id: 'd', text: 'Again' }],
      correctAnswer: 'c', explanation: '"Un-" negates the meaning: unhappy = not happy!', funFact: 'There are over 150 common English prefixes!'
    },
    {
      type: 'mcq', question: 'What is the past tense of "write"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Writed' }, { id: 'b', text: 'Written' }, { id: 'c', text: 'Wrote' }, { id: 'd', text: 'Writing' }],
      correctAnswer: 'c', explanation: 'Write is an irregular verb: write → wrote → written!', funFact: 'Irregular verbs are some of the most commonly used words!'
    },
    {
      type: 'mcq', question: 'Which sentence uses correct subject-verb agreement?', categoryId: 'english',
      options: [{ id: 'a', text: 'The dogs runs fast.' }, { id: 'b', text: 'The dog run fast.' }, { id: 'c', text: 'The dogs run fast.' }, { id: 'd', text: 'The dog were fast.' }],
      correctAnswer: 'c', explanation: 'Plural subject (dogs) takes plural verb (run)!', funFact: 'Subject-verb agreement is crucial for clear communication!'
    },
    {
      type: 'mcq', question: 'What is alliteration?', categoryId: 'english',
      options: [{ id: 'a', text: 'Repeating vowel sounds' }, { id: 'b', text: 'Repeating consonant sounds at word beginnings' }, { id: 'c', text: 'Rhyming words' }, { id: 'd', text: 'Opposite meanings' }],
      correctAnswer: 'b', explanation: 'Example: "Peter Piper picked a peck of pickled peppers"!', funFact: 'Alliteration makes text more memorable and rhythmic!'
    },
    {
      type: 'mcq', question: 'What is the contraction for "they are"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Their' }, { id: 'b', text: 'There' }, { id: 'c', text: 'They\'re' }, { id: 'd', text: 'Theyre' }],
      correctAnswer: 'c', explanation: 'They\'re = they are (apostrophe shows missing letter)!', funFact: 'Their, there, they\'re are called homophones - same sound, different meanings!'
    },
    {
      type: 'mcq', question: 'What genre is "The Lord of the Rings"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Science Fiction' }, { id: 'b', text: 'Fantasy' }, { id: 'c', text: 'Mystery' }, { id: 'd', text: 'Historical Fiction' }],
      correctAnswer: 'b', explanation: 'Fantasy features magical elements in imaginary worlds!', funFact: 'Tolkien invented complete languages for his fantasy world!'
    },
    {
      type: 'true-false', question: 'A metaphor uses "like" or "as" for comparison.', categoryId: 'english',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'That\'s a simile! Metaphors directly say something IS something else!', funFact: 'Metaphor: "Life is a journey." Simile: "Life is like a journey."'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is dramatic irony?', categoryId: 'english',
      options: [{ id: 'a', text: 'When the ending is unexpected' }, { id: 'b', text: 'When the audience knows something characters don\'t' }, { id: 'c', text: 'When characters are sarcastic' }, { id: 'd', text: 'When the narrator is unreliable' }],
      correctAnswer: 'b', explanation: 'Example: In horror movies when we know the killer is behind the door!', funFact: 'Shakespeare used dramatic irony extensively in his tragedies!'
    },
    {
      type: 'mcq', question: 'What is the main purpose of a thesis statement?', categoryId: 'english',
      options: [{ id: 'a', text: 'To conclude an essay' }, { id: 'b', text: 'To state the main argument or point' }, { id: 'c', text: 'To provide examples' }, { id: 'd', text: 'To cite sources' }],
      correctAnswer: 'b', explanation: 'A thesis statement presents the central claim of an essay!', funFact: 'Strong essays can often be summarized by their thesis statement!'
    },
    {
      type: 'mcq', question: 'Who wrote "1984"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Aldous Huxley' }, { id: 'b', text: 'George Orwell' }, { id: 'c', text: 'Ray Bradbury' }, { id: 'd', text: 'H.G. Wells' }],
      correctAnswer: 'b', explanation: 'Orwell wrote this dystopian novel in 1949!', funFact: 'Terms like "Big Brother" and "Newspeak" came from this book!'
    },
    {
      type: 'mcq', question: 'What is a soliloquy?', categoryId: 'english',
      options: [{ id: 'a', text: 'A conversation between two characters' }, { id: 'b', text: 'A speech given to an audience' }, { id: 'c', text: 'When a character speaks thoughts aloud, alone' }, { id: 'd', text: 'A type of poem' }],
      correctAnswer: 'c', explanation: '"To be or not to be" from Hamlet is a famous soliloquy!', funFact: 'Soliloquy comes from Latin "solus" (alone) + "loqui" (speak)!'
    },
    {
      type: 'mcq', question: 'What is the difference between "affect" and "effect"?', categoryId: 'english',
      options: [{ id: 'a', text: 'They mean the same thing' }, { id: 'b', text: 'Affect is a noun, effect is a verb' }, { id: 'c', text: 'Affect is usually a verb, effect is usually a noun' }, { id: 'd', text: 'Effect is British, affect is American' }],
      correctAnswer: 'c', explanation: 'The weather affects my mood. The effect was dramatic!', funFact: 'Remember: Affect = Action (verb), Effect = End result (noun)!'
    },
    {
      type: 'mcq', question: 'What is personification?', categoryId: 'english',
      options: [{ id: 'a', text: 'Comparing two things' }, { id: 'b', text: 'Giving human qualities to non-human things' }, { id: 'c', text: 'Using exaggeration' }, { id: 'd', text: 'Repeating words' }],
      correctAnswer: 'b', explanation: 'Example: "The wind whispered through the trees"!', funFact: 'Personification makes writing more vivid and relatable!'
    },
    {
      type: 'mcq', question: 'What is the main theme of "To Kill a Mockingbird"?', categoryId: 'english',
      options: [{ id: 'a', text: 'War' }, { id: 'b', text: 'Racial injustice and moral courage' }, { id: 'c', text: 'Adventure' }, { id: 'd', text: 'Romance' }],
      correctAnswer: 'b', explanation: 'Harper Lee\'s novel explores racism in 1930s Alabama!', funFact: 'The mockingbird symbolizes innocence that should not be destroyed!'
    },
    {
      type: 'mcq', question: 'What is the subjunctive mood used for?', categoryId: 'english',
      options: [{ id: 'a', text: 'Stating facts' }, { id: 'b', text: 'Expressing wishes, demands, or hypotheticals' }, { id: 'c', text: 'Asking questions' }, { id: 'd', text: 'Giving commands' }],
      correctAnswer: 'b', explanation: 'Example: "If I were rich..." (not "was" - this is subjunctive)!', funFact: 'The subjunctive is used more in formal writing than everyday speech!'
    },
    {
      type: 'mcq', question: 'What is an oxymoron?', categoryId: 'english',
      options: [{ id: 'a', text: 'A comparison' }, { id: 'b', text: 'Contradictory terms together' }, { id: 'c', text: 'An exaggeration' }, { id: 'd', text: 'A question' }],
      correctAnswer: 'b', explanation: 'Examples: "deafening silence," "bittersweet," "living dead"!', funFact: '"Oxymoron" itself comes from Greek words meaning "sharp" + "dull"!'
    },
    {
      type: 'mcq', question: 'Which sentence is in passive voice?', categoryId: 'english',
      options: [{ id: 'a', text: 'The dog bit the man.' }, { id: 'b', text: 'The man was bitten by the dog.' }, { id: 'c', text: 'The dog is biting.' }, { id: 'd', text: 'Bite the dog!' }],
      correctAnswer: 'b', explanation: 'Passive voice: subject receives the action rather than performing it!', funFact: 'Active voice is usually preferred in writing for clarity!'
    },
    {
      type: 'mcq', question: 'What is foreshadowing?', categoryId: 'english',
      options: [{ id: 'a', text: 'Looking back at past events' }, { id: 'b', text: 'Hints about future events in the story' }, { id: 'c', text: 'Character description' }, { id: 'd', text: 'Setting description' }],
      correctAnswer: 'b', explanation: 'Foreshadowing creates suspense and prepares readers for what\'s coming!', funFact: 'Dark clouds in chapter 1 might foreshadow trouble ahead!'
    },
    {
      type: 'mcq', question: 'What is the difference between "who" and "whom"?', categoryId: 'english',
      options: [{ id: 'a', text: 'They are interchangeable' }, { id: 'b', text: 'Who is subject, whom is object' }, { id: 'c', text: 'Whom is for questions only' }, { id: 'd', text: 'Who is formal, whom is informal' }],
      correctAnswer: 'b', explanation: 'Who did this? To whom did you speak? (he/who, him/whom)!', funFact: 'Trick: If you can answer with "him," use "whom"!'
    },
    {
      type: 'mcq', question: 'What is a protagonist?', categoryId: 'english',
      options: [{ id: 'a', text: 'The villain' }, { id: 'b', text: 'The main character' }, { id: 'c', text: 'The narrator' }, { id: 'd', text: 'A minor character' }],
      correctAnswer: 'b', explanation: 'The protagonist is the central character around whom the story revolves!', funFact: 'From Greek: "protos" (first) + "agonistes" (actor/competitor)!'
    },
    {
      type: 'mcq', question: 'What is a split infinitive?', categoryId: 'english',
      options: [{ id: 'a', text: 'An incomplete sentence' }, { id: 'b', text: 'When a word comes between "to" and the verb' }, { id: 'c', text: 'A broken grammar rule' }, { id: 'd', text: 'Using two verbs together' }],
      correctAnswer: 'b', explanation: 'Example: "to boldly go" instead of "to go boldly"!', funFact: 'Split infinitives are now widely accepted, despite old grammar rules!'
    },
    {
      type: 'mcq', question: 'Who is the author of "Pride and Prejudice"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Charlotte Brontë' }, { id: 'b', text: 'Jane Austen' }, { id: 'c', text: 'Emily Brontë' }, { id: 'd', text: 'Virginia Woolf' }],
      correctAnswer: 'b', explanation: 'Jane Austen published it in 1813!', funFact: 'Austen\'s books were initially published anonymously, "By a Lady"!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is a bildungsroman?', categoryId: 'english',
      options: [{ id: 'a', text: 'A romance novel' }, { id: 'b', text: 'A coming-of-age story' }, { id: 'c', text: 'A horror story' }, { id: 'd', text: 'A historical novel' }],
      correctAnswer: 'b', explanation: 'German for "novel of education" - follows a protagonist\'s moral and psychological growth!', funFact: 'Harry Potter and The Catcher in the Rye are bildungsromans!'
    },
    {
      type: 'mcq', question: 'What literary device is "The pen is mightier than the sword"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Personification' }, { id: 'b', text: 'Metonymy' }, { id: 'c', text: 'Alliteration' }, { id: 'd', text: 'Onomatopoeia' }],
      correctAnswer: 'b', explanation: 'Metonymy substitutes something closely associated (pen = writing, sword = violence)!', funFact: 'Metonymy differs from metaphor - it\'s association, not comparison!'
    },
    {
      type: 'mcq', question: 'What is stream of consciousness?', categoryId: 'english',
      options: [{ id: 'a', text: 'Third-person narration' }, { id: 'b', text: 'A character\'s uninterrupted flow of thoughts' }, { id: 'c', text: 'Dialogue between characters' }, { id: 'd', text: 'A type of poetry' }],
      correctAnswer: 'b', explanation: 'It mimics natural thought patterns, often without punctuation or logic!', funFact: 'James Joyce\'s "Ulysses" is famous for this technique!'
    },
    {
      type: 'mcq', question: 'What is the difference between denotation and connotation?', categoryId: 'english',
      options: [{ id: 'a', text: 'Denotation is formal, connotation is informal' }, { id: 'b', text: 'Denotation is literal meaning, connotation is associated feeling' }, { id: 'c', text: 'They are the same' }, { id: 'd', text: 'Connotation is the dictionary definition' }],
      correctAnswer: 'b', explanation: '"Home" and "house" have similar denotations but different connotations!', funFact: 'Advertisers carefully choose words with positive connotations!'
    },
    {
      type: 'mcq', question: 'What is an unreliable narrator?', categoryId: 'english',
      options: [{ id: 'a', text: 'A narrator who speaks quietly' }, { id: 'b', text: 'A narrator whose credibility is questionable' }, { id: 'c', text: 'A narrator who changes' }, { id: 'd', text: 'A narrator who is a minor character' }],
      correctAnswer: 'b', explanation: 'Readers must question what this narrator tells them!', funFact: 'Gone Girl and The Catcher in the Rye feature unreliable narrators!'
    },
    {
      type: 'mcq', question: 'What is the term for a recurring symbol or idea in literature?', categoryId: 'english',
      options: [{ id: 'a', text: 'Theme' }, { id: 'b', text: 'Motif' }, { id: 'c', text: 'Plot' }, { id: 'd', text: 'Metaphor' }],
      correctAnswer: 'b', explanation: 'A motif is a recurring element that reinforces the theme!', funFact: 'The green light in The Great Gatsby is a famous motif!'
    },
    {
      type: 'mcq', question: 'What is the tragic flaw (hamartia) of Shakespeare\'s Macbeth?', categoryId: 'english',
      options: [{ id: 'a', text: 'Pride' }, { id: 'b', text: 'Jealousy' }, { id: 'c', text: 'Ambition' }, { id: 'd', text: 'Laziness' }],
      correctAnswer: 'c', explanation: 'Macbeth\'s unchecked ambition leads to his downfall!', funFact: 'Aristotle first described hamartia in his "Poetics"!'
    },
    {
      type: 'mcq', question: 'What literary period is known for ornate, elaborate style and emotional appeal?', categoryId: 'english',
      options: [{ id: 'a', text: 'Modernism' }, { id: 'b', text: 'Baroque' }, { id: 'c', text: 'Romanticism' }, { id: 'd', text: 'Realism' }],
      correctAnswer: 'c', explanation: 'Romanticism (late 18th-19th century) emphasized emotion and individualism!', funFact: 'Romantic poets include Wordsworth, Keats, Shelley, and Byron!'
    },
    {
      type: 'mcq', question: 'What is chiasmus?', categoryId: 'english',
      options: [{ id: 'a', text: 'Repeating sounds' }, { id: 'b', text: 'Reversing grammatical structure in successive phrases' }, { id: 'c', text: 'Using contradictions' }, { id: 'd', text: 'Exaggeration' }],
      correctAnswer: 'b', explanation: 'JFK: "Ask not what your country can do for you - ask what you can do for your country"!', funFact: 'Chiasmus is named after the Greek letter chi (X) for its crossing pattern!'
    },
    {
      type: 'mcq', question: 'What is the difference between satire and parody?', categoryId: 'english',
      options: [{ id: 'a', text: 'They are the same' }, { id: 'b', text: 'Satire critiques society; parody imitates style' }, { id: 'c', text: 'Parody is serious; satire is funny' }, { id: 'd', text: 'Satire is older than parody' }],
      correctAnswer: 'b', explanation: 'Satire uses humor to critique; parody mocks by imitation!', funFact: 'Weird Al Yankovic makes parodies; The Daily Show makes satire!'
    },
    {
      type: 'mcq', question: 'What is anachronism in literature?', categoryId: 'english',
      options: [{ id: 'a', text: 'A type of flashback' }, { id: 'b', text: 'Something placed in the wrong time period' }, { id: 'c', text: 'An old word' }, { id: 'd', text: 'A prophecy' }],
      correctAnswer: 'b', explanation: 'Example: A clock in Shakespeare\'s Julius Caesar (clocks didn\'t exist in ancient Rome)!', funFact: 'Sometimes anachronisms are intentional for creative effect!'
    },
    {
      type: 'mcq', question: 'What literary movement rejected traditional forms and explored subjective experience?', categoryId: 'english',
      options: [{ id: 'a', text: 'Victorian' }, { id: 'b', text: 'Naturalism' }, { id: 'c', text: 'Modernism' }, { id: 'd', text: 'Neoclassicism' }],
      correctAnswer: 'c', explanation: 'Modernism (early 20th century) broke with conventions after WWI!', funFact: 'Modernists include Virginia Woolf, T.S. Eliot, and James Joyce!'
    },
    {
      type: 'mcq', question: 'What is the purpose of a foil character?', categoryId: 'english',
      options: [{ id: 'a', text: 'To be the villain' }, { id: 'b', text: 'To highlight the protagonist\'s qualities through contrast' }, { id: 'c', text: 'To provide comic relief' }, { id: 'd', text: 'To narrate the story' }],
      correctAnswer: 'b', explanation: 'Draco Malfoy is a foil to Harry Potter!', funFact: '"Foil" comes from the practice of backing gems with metal foil to make them shine!'
    },
    {
      type: 'mcq', question: 'What is the narrative technique "in medias res"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Starting at the end' }, { id: 'b', text: 'Starting in the middle of the action' }, { id: 'c', text: 'Multiple narrators' }, { id: 'd', text: 'Non-linear timeline' }],
      correctAnswer: 'b', explanation: 'Latin for "in the middle of things" - story begins mid-action!', funFact: 'Homer\'s Odyssey and Iliad both use this technique!'
    },
    {
      type: 'mcq', question: 'What is Catharsis in literature?', categoryId: 'english',
      options: [{ id: 'a', text: 'The climax of the story' }, { id: 'b', text: 'Emotional release experienced by the audience' }, { id: 'c', text: 'The ending' }, { id: 'd', text: 'Character development' }],
      correctAnswer: 'b', explanation: 'Aristotle described catharsis as the purging of emotions through tragedy!', funFact: 'Catharsis comes from Greek "katharsis" meaning purification!'
    },
  ],
};
