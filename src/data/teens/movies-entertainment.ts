// Teens Movies & Entertainment Questions (13+ years) - Film, TV, Music & Pop Culture
import { TeensQuestionBank } from './types';

export const moviesEntertainmentQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What company produces the Marvel Cinematic Universe (MCU) films?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Warner Bros' }, { id: 'b', text: 'Marvel Studios/Disney' }, { id: 'c', text: 'Universal' }, { id: 'd', text: 'Sony' }],
      correctAnswer: 'b', explanation: 'Disney acquired Marvel Entertainment in 2009!', funFact: 'The MCU is the highest-grossing film franchise of all time!'
    },
    {
      type: 'mcq', question: 'What streaming platform produces "Stranger Things"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Amazon Prime' }, { id: 'b', text: 'Hulu' }, { id: 'c', text: 'Netflix' }, { id: 'd', text: 'Disney+' }],
      correctAnswer: 'c', explanation: 'Stranger Things debuted on Netflix in 2016!', funFact: 'The show was rejected by 15-20 networks before Netflix picked it up!'
    },
    {
      type: 'mcq', question: 'Who directed the "Star Wars" original trilogy?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Steven Spielberg' }, { id: 'b', text: 'George Lucas' }, { id: 'c', text: 'James Cameron' }, { id: 'd', text: 'Christopher Nolan' }],
      correctAnswer: 'b', explanation: 'George Lucas created the Star Wars universe in 1977!', funFact: 'Lucas sold Lucasfilm to Disney for $4 billion in 2012!'
    },
    {
      type: 'mcq', question: 'What is the highest-grossing film of all time (not adjusted for inflation)?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Avengers: Endgame' }, { id: 'b', text: 'Avatar' }, { id: 'c', text: 'Titanic' }, { id: 'd', text: 'Star Wars: The Force Awakens' }],
      correctAnswer: 'b', explanation: 'Avatar (2009) earned over $2.9 billion!', funFact: 'Avatar held the record, lost it to Endgame, then reclaimed it with a re-release!'
    },
    {
      type: 'mcq', question: 'Which band performed "Bohemian Rhapsody"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'The Beatles' }, { id: 'b', text: 'Led Zeppelin' }, { id: 'c', text: 'Queen' }, { id: 'd', text: 'Pink Floyd' }],
      correctAnswer: 'c', explanation: 'Queen released it in 1975 with lead singer Freddie Mercury!', funFact: 'The song has no chorus and changes musical style multiple times!'
    },
    {
      type: 'mcq', question: 'What anime series follows a boy who wants to become the Hokage?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'One Piece' }, { id: 'b', text: 'Dragon Ball' }, { id: 'c', text: 'Naruto' }, { id: 'd', text: 'My Hero Academia' }],
      correctAnswer: 'c', explanation: 'Naruto Uzumaki dreams of being the greatest ninja leader!', funFact: 'The manga ran for 15 years with 700 chapters!'
    },
    {
      type: 'mcq', question: 'What is the name of the virtual world in the film "The Matrix"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'The Oasis' }, { id: 'b', text: 'The Grid' }, { id: 'c', text: 'The Matrix' }, { id: 'd', text: 'Cyberspace' }],
      correctAnswer: 'c', explanation: 'The Matrix is a simulated reality created by machines!', funFact: 'The film popularized "bullet time" special effects!'
    },
    {
      type: 'mcq', question: 'Which pop star is known as the "Queen of Pop"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Beyoncé' }, { id: 'b', text: 'Lady Gaga' }, { id: 'c', text: 'Madonna' }, { id: 'd', text: 'Taylor Swift' }],
      correctAnswer: 'c', explanation: 'Madonna has been a pop icon since the 1980s!', funFact: 'She\'s sold over 300 million records worldwide!'
    },
    {
      type: 'mcq', question: 'What film studio created "Toy Story"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'DreamWorks' }, { id: 'b', text: 'Pixar' }, { id: 'c', text: 'Warner Bros Animation' }, { id: 'd', text: 'Illumination' }],
      correctAnswer: 'b', explanation: 'Toy Story (1995) was the first fully computer-animated feature film!', funFact: 'Pixar started as a division of Lucasfilm!'
    },
    {
      type: 'mcq', question: 'Which K-pop group performed "Dynamite"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'BLACKPINK' }, { id: 'b', text: 'EXO' }, { id: 'c', text: 'BTS' }, { id: 'd', text: 'TWICE' }],
      correctAnswer: 'c', explanation: 'BTS released Dynamite in 2020 - their first all-English single!', funFact: 'It debuted at #1 on the Billboard Hot 100!'
    },
    {
      type: 'mcq', question: 'What award is considered the highest honor in film?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Golden Globe' }, { id: 'b', text: 'BAFTA' }, { id: 'c', text: 'Academy Award (Oscar)' }, { id: 'd', text: 'Screen Actors Guild' }],
      correctAnswer: 'c', explanation: 'The Oscars have been awarded since 1929!', funFact: 'The statuette is officially named the Academy Award of Merit!'
    },
    {
      type: 'mcq', question: 'Which superhero is known as the "Dark Knight"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Superman' }, { id: 'b', text: 'Batman' }, { id: 'c', text: 'Spider-Man' }, { id: 'd', text: 'Iron Man' }],
      correctAnswer: 'b', explanation: 'Batman operates in Gotham City without superpowers!', funFact: 'The Dark Knight (2008) was the first superhero film to gross $1 billion!'
    },
    {
      type: 'mcq', question: 'What video game franchise features a plumber named Mario?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Sonic' }, { id: 'b', text: 'Zelda' }, { id: 'c', text: 'Super Mario' }, { id: 'd', text: 'Donkey Kong' }],
      correctAnswer: 'c', explanation: 'Mario first appeared in Donkey Kong (1981)!', funFact: 'The Super Mario Bros. Movie (2023) grossed over $1.3 billion!'
    },
    {
      type: 'mcq', question: 'Who played Jack in the movie "Titanic"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Brad Pitt' }, { id: 'b', text: 'Tom Cruise' }, { id: 'c', text: 'Leonardo DiCaprio' }, { id: 'd', text: 'Johnny Depp' }],
      correctAnswer: 'c', explanation: 'DiCaprio starred alongside Kate Winslet in the 1997 film!', funFact: 'Titanic won 11 Academy Awards!'
    },
    {
      type: 'true-false', question: 'The first "Harry Potter" film was released in 2001.', categoryId: 'movies-entertainment',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Harry Potter and the Philosopher\'s Stone premiered on November 4, 2001!', funFact: 'The film series earned nearly $8 billion at the box office!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What technique did "Black Panther" use for the ancestral plane scenes?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Stop motion' }, { id: 'b', text: 'Practical sets with CGI enhancement' }, { id: 'c', text: 'Full CGI' }, { id: 'd', text: 'Rotoscoping' }],
      correctAnswer: 'c', explanation: 'The ancestral plane was created entirely with visual effects!', funFact: 'Black Panther won 3 Oscars including Best Costume Design!'
    },
    {
      type: 'mcq', question: 'What is the "Wilhelm Scream"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A famous movie director' }, { id: 'b', text: 'A stock sound effect used in many films' }, { id: 'c', text: 'A horror movie' }, { id: 'd', text: 'An acting technique' }],
      correctAnswer: 'b', explanation: 'It\'s been used in over 400 films and TV shows!', funFact: 'Originally recorded in 1951 for "Distant Drums"!'
    },
    {
      type: 'mcq', question: 'Who composed the musical score for "The Lord of the Rings" trilogy?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'John Williams' }, { id: 'b', text: 'Hans Zimmer' }, { id: 'c', text: 'Howard Shore' }, { id: 'd', text: 'Danny Elfman' }],
      correctAnswer: 'c', explanation: 'Howard Shore won 3 Academy Awards for the trilogy!', funFact: 'The score includes 50+ different leitmotifs!'
    },
    {
      type: 'mcq', question: 'What film technique shows events from a character\'s visual perspective?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Third person' }, { id: 'b', text: 'POV (Point of View) shot' }, { id: 'c', text: 'Over-the-shoulder' }, { id: 'd', text: 'Wide shot' }],
      correctAnswer: 'b', explanation: 'POV shots let audiences see through the character\'s eyes!', funFact: 'Hardcore Henry (2015) was filmed entirely in first-person POV!'
    },
    {
      type: 'mcq', question: 'What anime film holds the record as highest-grossing anime movie?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Spirited Away' }, { id: 'b', text: 'Your Name' }, { id: 'c', text: 'Demon Slayer: Mugen Train' }, { id: 'd', text: 'Pokemon: The First Movie' }],
      correctAnswer: 'c', explanation: 'Demon Slayer: Mugen Train grossed over $500 million!', funFact: 'It became the highest-grossing film in Japan in 2020!'
    },
    {
      type: 'mcq', question: 'What is a "MacGuffin" in storytelling?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A plot hole' }, { id: 'b', text: 'An object that drives the plot but has no other significance' }, { id: 'c', text: 'The main character' }, { id: 'd', text: 'The climax of a story' }],
      correctAnswer: 'b', explanation: 'Examples: the briefcase in Pulp Fiction, the Infinity Stones!', funFact: 'Alfred Hitchcock popularized the term!'
    },
    {
      type: 'mcq', question: 'Which streaming service produces "The Mandalorian"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Netflix' }, { id: 'b', text: 'HBO Max' }, { id: 'c', text: 'Disney+' }, { id: 'd', text: 'Apple TV+' }],
      correctAnswer: 'c', explanation: 'The Mandalorian launched with Disney+ in 2019!', funFact: 'Baby Yoda (Grogu) became a viral sensation!'
    },
    {
      type: 'mcq', question: 'What musical term describes a song repeated throughout a film for a character or theme?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Refrain' }, { id: 'b', text: 'Leitmotif' }, { id: 'c', text: 'Chorus' }, { id: 'd', text: 'Overture' }],
      correctAnswer: 'b', explanation: 'Think of the Imperial March for Darth Vader!', funFact: 'Richard Wagner pioneered leitmotifs in opera!'
    },
    {
      type: 'mcq', question: 'What was revolutionary about "Avatar" (2009)?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'First color film' }, { id: 'b', text: 'Advanced 3D and performance capture technology' }, { id: 'c', text: 'First CGI film' }, { id: 'd', text: 'First sound film' }],
      correctAnswer: 'b', explanation: 'James Cameron developed new technology for the film!', funFact: 'Cameron waited over a decade for technology to catch up to his vision!'
    },
    {
      type: 'mcq', question: 'Which TV series is known for unexpected character deaths and complex political plots?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Friends' }, { id: 'b', text: 'Game of Thrones' }, { id: 'c', text: 'The Office' }, { id: 'd', text: 'Breaking Bad' }],
      correctAnswer: 'b', explanation: 'Game of Thrones adapted George R.R. Martin\'s books!', funFact: 'The final season had episodes costing $15 million each!'
    },
    {
      type: 'mcq', question: 'What is "method acting"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Acting without scripts' }, { id: 'b', text: 'Technique where actors stay in character off-camera' }, { id: 'c', text: 'Using body doubles' }, { id: 'd', text: 'Voice acting' }],
      correctAnswer: 'b', explanation: 'Famous method actors include Daniel Day-Lewis and Christian Bale!', funFact: 'Day-Lewis stayed in a wheelchair for "My Left Foot"!'
    },
    {
      type: 'mcq', question: 'What film pioneered the use of CGI dinosaurs in 1993?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'The Land Before Time' }, { id: 'b', text: 'Jurassic Park' }, { id: 'c', text: 'Dinosaur' }, { id: 'd', text: 'King Kong' }],
      correctAnswer: 'b', explanation: 'Spielberg\'s Jurassic Park revolutionized visual effects!', funFact: 'The film used only 14 minutes of dinosaur footage!'
    },
    {
      type: 'mcq', question: 'What music genre originated in the Bronx, New York in the 1970s?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Rock' }, { id: 'b', text: 'Hip-hop' }, { id: 'c', text: 'Jazz' }, { id: 'd', text: 'Electronic' }],
      correctAnswer: 'b', explanation: 'Hip-hop includes DJing, MCing, breakdancing, and graffiti!', funFact: 'DJ Kool Herc is considered the father of hip-hop!'
    },
    {
      type: 'mcq', question: 'What is a "bottle episode" in TV production?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'An episode about alcohol' }, { id: 'b', text: 'A low-budget episode set in limited locations' }, { id: 'c', text: 'A special effects episode' }, { id: 'd', text: 'A pilot episode' }],
      correctAnswer: 'b', explanation: 'They\'re cost-saving episodes that can be very creative!', funFact: 'Breaking Bad\'s "Fly" episode is a famous bottle episode!'
    },
    {
      type: 'mcq', question: 'Which platform made "streaming" the primary way to watch content?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'YouTube' }, { id: 'b', text: 'Netflix' }, { id: 'c', text: 'Hulu' }, { id: 'd', text: 'Amazon' }],
      correctAnswer: 'b', explanation: 'Netflix shifted from DVD rental to streaming in 2007!', funFact: 'Netflix now has over 200 million subscribers worldwide!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the "180-degree rule" in filmmaking?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Camera rotation technique' }, { id: 'b', text: 'Keeping the camera on one side of an imaginary line for spatial consistency' }, { id: 'c', text: 'Lighting at 180 degrees' }, { id: 'd', text: 'A screen aspect ratio' }],
      correctAnswer: 'b', explanation: 'Breaking this rule can disorient viewers!', funFact: 'Some directors intentionally break it for dramatic effect!'
    },
    {
      type: 'mcq', question: 'What is "chiaroscuro" in cinematography?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A camera lens' }, { id: 'b', text: 'Strong contrasts between light and dark' }, { id: 'c', text: 'A film genre' }, { id: 'd', text: 'Sound design' }],
      correctAnswer: 'b', explanation: 'It creates dramatic mood and depth in scenes!', funFact: 'The technique originated in Renaissance painting!'
    },
    {
      type: 'mcq', question: 'What is "Kuleshov Effect"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A sound technique' }, { id: 'b', text: 'Viewers derive meaning from the interaction of sequential shots' }, { id: 'c', text: 'A camera movement' }, { id: 'd', text: 'Color grading' }],
      correctAnswer: 'b', explanation: 'The same actor\'s face can seem to show different emotions based on adjacent shots!', funFact: 'Named after Soviet filmmaker Lev Kuleshov!'
    },
    {
      type: 'mcq', question: 'What film movement was characterized by low budgets, location shooting, and non-professional actors?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Hollywood Golden Age' }, { id: 'b', text: 'French New Wave' }, { id: 'c', text: 'Italian Neorealism' }, { id: 'd', text: 'German Expressionism' }],
      correctAnswer: 'c', explanation: 'Italian Neorealism emerged after WWII with films like "Bicycle Thieves"!', funFact: 'It heavily influenced the French New Wave!'
    },
    {
      type: 'mcq', question: 'What is "diegetic sound" in film?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Background music' }, { id: 'b', text: 'Sound that exists within the story world' }, { id: 'c', text: 'Sound effects' }, { id: 'd', text: 'Narration' }],
      correctAnswer: 'b', explanation: 'A radio playing in a scene is diegetic; a score is non-diegetic!', funFact: 'Baby Driver (2017) uses diegetic music throughout!'
    },
    {
      type: 'mcq', question: 'What is the "auteur theory"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Films should have no director' }, { id: 'b', text: 'The director is the primary creative force behind a film' }, { id: 'c', text: 'Actors should write their own lines' }, { id: 'd', text: 'Studios control everything' }],
      correctAnswer: 'b', explanation: 'Auteurs like Kubrick and Tarantino have distinctive styles!', funFact: 'The theory was developed by French critics in the 1950s!'
    },
    {
      type: 'mcq', question: 'What technology did "The Curious Case of Benjamin Button" pioneer?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Motion capture' }, { id: 'b', text: 'Digital face replacement and de-aging' }, { id: 'c', text: '3D filming' }, { id: 'd', text: 'Stop motion' }],
      correctAnswer: 'b', explanation: 'Brad Pitt\'s face was digitally placed on different actors\' bodies!', funFact: 'This technology is now common in Marvel films for de-aging actors!'
    },
    {
      type: 'mcq', question: 'What is a "foley artist"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A set designer' }, { id: 'b', text: 'Someone who creates sound effects by physical performance' }, { id: 'c', text: 'A stunt coordinator' }, { id: 'd', text: 'A makeup artist' }],
      correctAnswer: 'b', explanation: 'They recreate everyday sounds like footsteps and rustling clothes!', funFact: 'Named after Jack Foley, who pioneered the technique in the 1920s!'
    },
    {
      type: 'mcq', question: 'What is the "uncanny valley" effect in animation?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A film genre' }, { id: 'b', text: 'Revulsion caused by almost-but-not-quite-realistic human figures' }, { id: 'c', text: 'A camera technique' }, { id: 'd', text: 'A sound effect' }],
      correctAnswer: 'b', explanation: 'It explains why some CGI humans feel "creepy"!', funFact: 'The Polar Express is often cited as an uncanny valley example!'
    },
    {
      type: 'mcq', question: 'What narrative structure does "Pulp Fiction" famously use?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Linear' }, { id: 'b', text: 'Non-linear/fragmented' }, { id: 'c', text: 'Flashback only' }, { id: 'd', text: 'Real-time' }],
      correctAnswer: 'b', explanation: 'Tarantino presents the story out of chronological order!', funFact: 'The opening and closing scenes take place during the same robbery!'
    },
    {
      type: 'mcq', question: 'What is the "Golden Age of Hollywood" typically considered?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: '1910s-1920s' }, { id: 'b', text: '1930s-1960s' }, { id: 'c', text: '1970s-1990s' }, { id: 'd', text: '2000s-present' }],
      correctAnswer: 'b', explanation: 'The studio system dominated with stars under exclusive contracts!', funFact: 'Studios owned theaters until antitrust laws forced them to divest!'
    },
    {
      type: 'mcq', question: 'What innovative technique did "The Matrix" introduce to action cinema?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Green screen' }, { id: 'b', text: 'Bullet time/virtual cinematography' }, { id: 'c', text: 'Dolby sound' }, { id: 'd', text: 'IMAX' }],
      correctAnswer: 'b', explanation: 'Bullet time creates the illusion of frozen time while the camera moves!', funFact: 'It was achieved using 120 cameras firing in rapid sequence!'
    },
    {
      type: 'mcq', question: 'What is "mise-en-scène" in film studies?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'Script writing' }, { id: 'b', text: 'Everything visible in a frame: sets, lighting, costumes, actors' }, { id: 'c', text: 'Sound design' }, { id: 'd', text: 'Editing' }],
      correctAnswer: 'b', explanation: 'Directors like Wes Anderson are known for distinctive mise-en-scène!', funFact: 'The term comes from French theater meaning "placing on stage"!'
    },
    {
      type: 'mcq', question: 'What is the "Bechdel Test"?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A film quality rating' }, { id: 'b', text: 'A measure of female representation: two women talk about something other than men' }, { id: 'c', text: 'A box office predictor' }, { id: 'd', text: 'A technical quality test' }],
      correctAnswer: 'b', explanation: 'Many acclaimed films fail this simple test!', funFact: 'Named after cartoonist Alison Bechdel who popularized it in 1985!'
    },
    {
      type: 'mcq', question: 'What is a "oner" or "one-take" in filmmaking?', categoryId: 'movies-entertainment',
      options: [{ id: 'a', text: 'A single actor scene' }, { id: 'b', text: 'A long continuous shot without visible cuts' }, { id: 'c', text: 'The first take' }, { id: 'd', text: 'A monologue' }],
      correctAnswer: 'b', explanation: '1917 was designed to look like one continuous shot!', funFact: 'The hallway fight in Oldboy (2003) is a famous oner!'
    },
  ],
};
