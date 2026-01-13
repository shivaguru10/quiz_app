// Juniors English Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const englishQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is a noun?', categoryId: 'english',
      options: [{ id: 'a', text: 'An action word' }, { id: 'b', text: 'A person, place, or thing' }, { id: 'c', text: 'A describing word' }, { id: 'd', text: 'A connecting word' }],
      correctAnswer: 'b', explanation: 'A noun is a person, place, or thing!', funFact: 'Dog, city, and book are all nouns!'
    },
    {
      type: 'mcq', question: 'What is the opposite of "hot"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Warm' }, { id: 'b', text: 'Cold' }, { id: 'c', text: 'Cool' }, { id: 'd', text: 'Mild' }],
      correctAnswer: 'b', explanation: 'Cold is the opposite of hot!', funFact: 'Opposite words are called antonyms!'
    },
    {
      type: 'mcq', question: 'Which word is spelled correctly?', categoryId: 'english',
      options: [{ id: 'a', text: 'Freind' }, { id: 'b', text: 'Frend' }, { id: 'c', text: 'Friend' }, { id: 'd', text: 'Frined' }],
      correctAnswer: 'c', explanation: 'Friend is spelled F-R-I-E-N-D!', funFact: 'Remember: I before E except after C!'
    },
    {
      type: 'mcq', question: 'What punctuation ends a question?', categoryId: 'english',
      options: [{ id: 'a', text: 'Period' }, { id: 'b', text: 'Comma' }, { id: 'c', text: 'Exclamation mark' }, { id: 'd', text: 'Question mark' }],
      correctAnswer: 'd', explanation: 'Questions end with question marks!', funFact: 'The question mark is also called an interrogation point!'
    },
    {
      type: 'mcq', question: 'What is a verb?', categoryId: 'english',
      options: [{ id: 'a', text: 'A naming word' }, { id: 'b', text: 'An action word' }, { id: 'c', text: 'A describing word' }, { id: 'd', text: 'A joining word' }],
      correctAnswer: 'b', explanation: 'Verbs are action words!', funFact: 'Run, jump, and think are all verbs!'
    },
    {
      type: 'mcq', question: 'What word means the same as "happy"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Sad' }, { id: 'b', text: 'Angry' }, { id: 'c', text: 'Joyful' }, { id: 'd', text: 'Tired' }],
      correctAnswer: 'c', explanation: 'Joyful means the same as happy!', funFact: 'Words with similar meanings are called synonyms!'
    },
    {
      type: 'true-false', question: 'A sentence always starts with a capital letter.', categoryId: 'english',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Sentences begin with capital letters!', funFact: 'Capital letters are also called uppercase!'
    },
    {
      type: 'mcq', question: 'What is an adjective?', categoryId: 'english',
      options: [{ id: 'a', text: 'A word that describes a noun' }, { id: 'b', text: 'A word that shows action' }, { id: 'c', text: 'A naming word' }, { id: 'd', text: 'A connecting word' }],
      correctAnswer: 'a', explanation: 'Adjectives describe nouns!', funFact: 'Big, red, and beautiful are adjectives!'
    },
    {
      type: 'mcq', question: 'Which is a compound word?', categoryId: 'english',
      options: [{ id: 'a', text: 'Running' }, { id: 'b', text: 'Butterfly' }, { id: 'c', text: 'Quickly' }, { id: 'd', text: 'Happily' }],
      correctAnswer: 'b', explanation: 'Butterfly is made of "butter" and "fly"!', funFact: 'Compound words combine two words into one!'
    },
    {
      type: 'mcq', question: 'How many vowels are in the English alphabet?', categoryId: 'english',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '7' }],
      correctAnswer: 'b', explanation: 'A, E, I, O, U are the 5 vowels!', funFact: 'Y is sometimes a vowel too!'
    },
    {
      type: 'mcq', question: 'What is the plural of "child"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Childs' }, { id: 'b', text: 'Children' }, { id: 'c', text: 'Childes' }, { id: 'd', text: 'Childrens' }],
      correctAnswer: 'b', explanation: 'Child becomes children!', funFact: 'This is an irregular plural!'
    },
    {
      type: 'mcq', question: 'What type of sentence shows excitement?', categoryId: 'english',
      options: [{ id: 'a', text: 'Question' }, { id: 'b', text: 'Statement' }, { id: 'c', text: 'Exclamatory' }, { id: 'd', text: 'Command' }],
      correctAnswer: 'c', explanation: 'Exclamatory sentences show strong feelings!', funFact: 'They end with exclamation marks!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is an adverb?', categoryId: 'english',
      options: [{ id: 'a', text: 'Describes a noun' }, { id: 'b', text: 'Describes a verb' }, { id: 'c', text: 'Names a person' }, { id: 'd', text: 'Joins sentences' }],
      correctAnswer: 'b', explanation: 'Adverbs describe verbs, adjectives, or other adverbs!', funFact: 'Many adverbs end in "-ly"!'
    },
    {
      type: 'mcq', question: 'What is a pronoun?', categoryId: 'english',
      options: [{ id: 'a', text: 'A word that replaces a noun' }, { id: 'b', text: 'A type of verb' }, { id: 'c', text: 'A describing word' }, { id: 'd', text: 'A type of sentence' }],
      correctAnswer: 'a', explanation: 'Pronouns replace nouns!', funFact: 'He, she, it, and they are pronouns!'
    },
    {
      type: 'mcq', question: 'Which sentence is correct?', categoryId: 'english',
      options: [{ id: 'a', text: 'Their going to the park' }, { id: 'b', text: 'Theyre going to the park' }, { id: 'c', text: 'Theyre going to the park' }, { id: 'd', text: 'They are going to the park' }],
      correctAnswer: 'd', explanation: '"They are" is correct for this sentence!', funFact: 'Their, there, and they are are often confused!'
    },
    {
      type: 'mcq', question: 'What is a simile?', categoryId: 'english',
      options: [{ id: 'a', text: 'Comparing using "like" or "as"' }, { id: 'b', text: 'Exaggeration' }, { id: 'c', text: 'Giving human traits to objects' }, { id: 'd', text: 'Repeating sounds' }],
      correctAnswer: 'a', explanation: 'Similes use "like" or "as" to compare!', funFact: '"Busy as a bee" is a simile!'
    },
    {
      type: 'mcq', question: 'What is the past tense of "run"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Runned' }, { id: 'b', text: 'Ran' }, { id: 'c', text: 'Running' }, { id: 'd', text: 'Runs' }],
      correctAnswer: 'b', explanation: 'The past tense of run is ran!', funFact: 'Run is an irregular verb!'
    },
    {
      type: 'mcq', question: 'What is alliteration?', categoryId: 'english',
      options: [{ id: 'a', text: 'Rhyming words' }, { id: 'b', text: 'Repeating beginning sounds' }, { id: 'c', text: 'Opposite meanings' }, { id: 'd', text: 'Exaggeration' }],
      correctAnswer: 'b', explanation: 'Alliteration repeats beginning sounds!', funFact: '"Peter Piper picked" is alliteration!'
    },
    {
      type: 'mcq', question: 'What is a homophone?', categoryId: 'english',
      options: [{ id: 'a', text: 'Words spelled the same' }, { id: 'b', text: 'Words that sound the same' }, { id: 'c', text: 'Words with opposite meanings' }, { id: 'd', text: 'Words with similar meanings' }],
      correctAnswer: 'b', explanation: 'Homophones sound the same but are spelled differently!', funFact: 'Their, there, and theyre are homophones!'
    },
    {
      type: 'mcq', question: 'What is a prefix?', categoryId: 'english',
      options: [{ id: 'a', text: 'Added at the end of a word' }, { id: 'b', text: 'Added at the beginning of a word' }, { id: 'c', text: 'The root of a word' }, { id: 'd', text: 'A compound word' }],
      correctAnswer: 'b', explanation: 'Prefixes go at the beginning!', funFact: '"Un-" in unhappy is a prefix!'
    },
    {
      type: 'true-false', question: 'An apostrophe is used to show possession.', categoryId: 'english',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Apostrophes show ownership!', funFact: 'Johns book means the book belongs to John!'
    },
    {
      type: 'mcq', question: 'What is a metaphor?', categoryId: 'english',
      options: [{ id: 'a', text: 'Comparing using like or as' }, { id: 'b', text: 'Directly calling something else' }, { id: 'c', text: 'Repeating sounds' }, { id: 'd', text: 'Exaggerating' }],
      correctAnswer: 'b', explanation: 'Metaphors say something IS something else!', funFact: '"Life is a journey" is a metaphor!'
    },
    {
      type: 'mcq', question: 'What is a suffix?', categoryId: 'english',
      options: [{ id: 'a', text: 'Added at the beginning' }, { id: 'b', text: 'Added at the end' }, { id: 'c', text: 'The main part' }, { id: 'd', text: 'A small word' }],
      correctAnswer: 'b', explanation: 'Suffixes are added at the end!', funFact: '"-ful" in beautiful is a suffix!'
    },
    {
      type: 'mcq', question: 'What type of noun names a specific person or place?', categoryId: 'english',
      options: [{ id: 'a', text: 'Common noun' }, { id: 'b', text: 'Proper noun' }, { id: 'c', text: 'Collective noun' }, { id: 'd', text: 'Abstract noun' }],
      correctAnswer: 'b', explanation: 'Proper nouns name specific things!', funFact: 'Proper nouns are always capitalized!'
    },
    {
      type: 'mcq', question: 'What is onomatopoeia?', categoryId: 'english',
      options: [{ id: 'a', text: 'Repeating sounds' }, { id: 'b', text: 'Words that imitate sounds' }, { id: 'c', text: 'Comparing things' }, { id: 'd', text: 'Exaggeration' }],
      correctAnswer: 'b', explanation: 'Onomatopoeia words sound like what they describe!', funFact: 'Buzz, splash, and bang are onomatopoeia!'
    },
    {
      type: 'mcq', question: 'What is the contraction of "cannot"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Canot' }, { id: 'b', text: 'Cant' }, { id: 'c', text: 'Cannot' }, { id: 'd', text: 'Cann\'t' }],
      correctAnswer: 'b', explanation: 'Cannot becomes cant!', funFact: 'The apostrophe replaces the missing letters!'
    },
    {
      type: 'mcq', question: 'Which word is an antonym of "ancient"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Old' }, { id: 'b', text: 'Historic' }, { id: 'c', text: 'Modern' }, { id: 'd', text: 'Classic' }],
      correctAnswer: 'c', explanation: 'Modern is the opposite of ancient!', funFact: 'Antonyms are words with opposite meanings!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is a subordinate clause?', categoryId: 'english',
      options: [{ id: 'a', text: 'A complete sentence' }, { id: 'b', text: 'A clause that cant stand alone' }, { id: 'c', text: 'The main idea' }, { id: 'd', text: 'A type of phrase' }],
      correctAnswer: 'b', explanation: 'Subordinate clauses depend on main clauses!', funFact: 'They often start with words like "because" or "although"!'
    },
    {
      type: 'mcq', question: 'What is personification?', categoryId: 'english',
      options: [{ id: 'a', text: 'Comparing two things' }, { id: 'b', text: 'Giving human traits to non-human things' }, { id: 'c', text: 'Repeating sounds' }, { id: 'd', text: 'Extreme exaggeration' }],
      correctAnswer: 'b', explanation: 'Personification gives human qualities to things!', funFact: '"The wind whispered" is personification!'
    },
    {
      type: 'mcq', question: 'What is the subjunctive mood used for?', categoryId: 'english',
      options: [{ id: 'a', text: 'Commands' }, { id: 'b', text: 'Wishes or hypothetical situations' }, { id: 'c', text: 'Questions' }, { id: 'd', text: 'Past events' }],
      correctAnswer: 'b', explanation: 'Subjunctive is for unreal situations!', funFact: '"If I were you" uses subjunctive mood!'
    },
    {
      type: 'mcq', question: 'What is a gerund?', categoryId: 'english',
      options: [{ id: 'a', text: 'A verb acting as a noun' }, { id: 'b', text: 'A type of adjective' }, { id: 'c', text: 'A linking word' }, { id: 'd', text: 'A past tense verb' }],
      correctAnswer: 'a', explanation: 'Gerunds are -ing verbs used as nouns!', funFact: '"Swimming is fun" - swimming is a gerund!'
    },
    {
      type: 'mcq', question: 'What is an oxymoron?', categoryId: 'english',
      options: [{ id: 'a', text: 'Repeating words' }, { id: 'b', text: 'Contradictory terms together' }, { id: 'c', text: 'Comparing unlike things' }, { id: 'd', text: 'Sound words' }],
      correctAnswer: 'b', explanation: 'Oxymorons combine opposite ideas!', funFact: '"Jumbo shrimp" and "deafening silence" are oxymorons!'
    },
    {
      type: 'mcq', question: 'What is the passive voice?', categoryId: 'english',
      options: [{ id: 'a', text: 'Subject does the action' }, { id: 'b', text: 'Subject receives the action' }, { id: 'c', text: 'No subject' }, { id: 'd', text: 'Future tense' }],
      correctAnswer: 'b', explanation: 'In passive voice, the subject receives the action!', funFact: '"The ball was thrown" is passive voice!'
    },
    {
      type: 'mcq', question: 'What is an infinitive?', categoryId: 'english',
      options: [{ id: 'a', text: 'A verb with "-ing"' }, { id: 'b', text: 'The base form with "to"' }, { id: 'c', text: 'Past tense verb' }, { id: 'd', text: 'A type of noun' }],
      correctAnswer: 'b', explanation: 'Infinitives are "to + verb"!', funFact: '"To run", "to eat", and "to sleep" are infinitives!'
    },
    {
      type: 'mcq', question: 'What is hyperbole?', categoryId: 'english',
      options: [{ id: 'a', text: 'Understatement' }, { id: 'b', text: 'Extreme exaggeration' }, { id: 'c', text: 'Comparison' }, { id: 'd', text: 'Repetition' }],
      correctAnswer: 'b', explanation: 'Hyperbole is extreme exaggeration!', funFact: '"Im so hungry I could eat a horse" is hyperbole!'
    },
    {
      type: 'true-false', question: 'A participle can function as an adjective.', categoryId: 'english',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Participles can describe nouns!', funFact: '"The running water" - running is a participle!'
    },
    {
      type: 'mcq', question: 'What is an independent clause?', categoryId: 'english',
      options: [{ id: 'a', text: 'A phrase without a verb' }, { id: 'b', text: 'A clause that can stand alone' }, { id: 'c', text: 'A dependent thought' }, { id: 'd', text: 'A type of sentence fragment' }],
      correctAnswer: 'b', explanation: 'Independent clauses are complete thoughts!', funFact: 'They have a subject and predicate!'
    },
    {
      type: 'mcq', question: 'What literary device is "the classroom was a zoo"?', categoryId: 'english',
      options: [{ id: 'a', text: 'Simile' }, { id: 'b', text: 'Metaphor' }, { id: 'c', text: 'Hyperbole' }, { id: 'd', text: 'Personification' }],
      correctAnswer: 'b', explanation: 'This directly calls the classroom a zoo!', funFact: 'No "like" or "as" means its a metaphor!'
    },
    {
      type: 'mcq', question: 'What is a split infinitive?', categoryId: 'english',
      options: [{ id: 'a', text: 'Breaking a verb in half' }, { id: 'b', text: 'Putting a word between "to" and the verb' }, { id: 'c', text: 'Using two infinitives' }, { id: 'd', text: 'A grammar error' }],
      correctAnswer: 'b', explanation: '"To boldly go" splits the infinitive!', funFact: 'Star Trek made split infinitives famous!'
    },
    {
      type: 'mcq', question: 'What is irony?', categoryId: 'english',
      options: [{ id: 'a', text: 'Saying the opposite of what you mean' }, { id: 'b', text: 'Exaggeration' }, { id: 'c', text: 'Comparing things' }, { id: 'd', text: 'Repeating sounds' }],
      correctAnswer: 'a', explanation: 'Irony involves unexpected contrasts!', funFact: 'A fire station burning down is ironic!'
    },
    {
      type: 'mcq', question: 'What is the difference between "who" and "whom"?', categoryId: 'english',
      options: [{ id: 'a', text: 'No difference' }, { id: 'b', text: 'Who = subject, whom = object' }, { id: 'c', text: 'Whom = subject, who = object' }, { id: 'd', text: 'One is plural' }],
      correctAnswer: 'b', explanation: 'Who does the action, whom receives it!', funFact: 'Try replacing with he/him to check!'
    },
    {
      type: 'mcq', question: 'What is an appositive?', categoryId: 'english',
      options: [{ id: 'a', text: 'A type of verb' }, { id: 'b', text: 'A noun that renames another noun' }, { id: 'c', text: 'An adverb phrase' }, { id: 'd', text: 'A linking word' }],
      correctAnswer: 'b', explanation: 'Appositives rename or explain nouns!', funFact: '"My friend, Sarah, is here" - Sarah is an appositive!'
    },
    {
      type: 'mcq', question: 'What is a dangling modifier?', categoryId: 'english',
      options: [{ id: 'a', text: 'A modifier in the wrong place' }, { id: 'b', text: 'A modifier without a clear subject' }, { id: 'c', text: 'An extra adjective' }, { id: 'd', text: 'A split infinitive' }],
      correctAnswer: 'b', explanation: 'Dangling modifiers dont clearly modify anything!', funFact: '"Walking to school, the rain started" has a dangling modifier!'
    },
    {
      type: 'mcq', question: 'What is the present perfect tense?', categoryId: 'english',
      options: [{ id: 'a', text: 'Past action' }, { id: 'b', text: 'Future action' }, { id: 'c', text: 'Past action connected to present' }, { id: 'd', text: 'Current action' }],
      correctAnswer: 'c', explanation: 'Present perfect links past to now!', funFact: '"I have eaten" is present perfect!'
    },
    {
      type: 'mcq', question: 'What is an ellipsis used for?', categoryId: 'english',
      options: [{ id: 'a', text: 'Showing possession' }, { id: 'b', text: 'Indicating omitted words or pause' }, { id: 'c', text: 'Ending sentences' }, { id: 'd', text: 'Asking questions' }],
      correctAnswer: 'b', explanation: 'Ellipsis (...) shows omission or trailing off!', funFact: 'Its three dots, not more or less!'
    },
    {
      type: 'mcq', question: 'What is a euphemism?', categoryId: 'english',
      options: [{ id: 'a', text: 'A harsh word' }, { id: 'b', text: 'A mild word for something unpleasant' }, { id: 'c', text: 'A funny word' }, { id: 'd', text: 'A made-up word' }],
      correctAnswer: 'b', explanation: 'Euphemisms soften harsh realities!', funFact: '"Passed away" is a euphemism for "died"!'
    },
    {
      type: 'mcq', question: 'What is parallel structure?', categoryId: 'english',
      options: [{ id: 'a', text: 'Two sentences' }, { id: 'b', text: 'Using same grammatical form in a list' }, { id: 'c', text: 'Opposite ideas' }, { id: 'd', text: 'Repeating words' }],
      correctAnswer: 'b', explanation: 'Parallel structure keeps lists consistent!', funFact: '"I like running, swimming, and biking" is parallel!'
    },
  ],
};
