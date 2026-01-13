// Juniors Technology Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const technologyQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What does "www" stand for in a website address?', categoryId: 'technology',
      options: [{ id: 'a', text: 'World Wide Web' }, { id: 'b', text: 'Web World Wide' }, { id: 'c', text: 'Wide World Web' }, { id: 'd', text: 'World Web Wide' }],
      correctAnswer: 'a', explanation: 'WWW stands for World Wide Web!', funFact: 'It was invented by Tim Berners-Lee in 1989!'
    },
    {
      type: 'mcq', question: 'What do you use to type on a computer?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Mouse' }, { id: 'b', text: 'Monitor' }, { id: 'c', text: 'Keyboard' }, { id: 'd', text: 'Printer' }],
      correctAnswer: 'c', explanation: 'A keyboard is used for typing!', funFact: 'QWERTY keyboards are named after the top row of letters!'
    },
    {
      type: 'mcq', question: 'What does CPU stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Computer Personal Unit' }, { id: 'b', text: 'Central Processing Unit' }, { id: 'c', text: 'Central Program Unit' }, { id: 'd', text: 'Computer Processing Unit' }],
      correctAnswer: 'b', explanation: 'CPU is the Central Processing Unit!', funFact: 'Its called the "brain" of the computer!'
    },
    {
      type: 'mcq', question: 'What device helps you point and click on a computer screen?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Keyboard' }, { id: 'b', text: 'Speaker' }, { id: 'c', text: 'Mouse' }, { id: 'd', text: 'Webcam' }],
      correctAnswer: 'c', explanation: 'A mouse helps you point and click!', funFact: 'The first computer mouse was wooden!'
    },
    {
      type: 'mcq', question: 'What do you call a small program that can harm your computer?', categoryId: 'technology',
      options: [{ id: 'a', text: 'App' }, { id: 'b', text: 'Virus' }, { id: 'c', text: 'Browser' }, { id: 'd', text: 'Email' }],
      correctAnswer: 'b', explanation: 'A computer virus can damage your system!', funFact: 'Antivirus software helps protect your computer!'
    },
    {
      type: 'mcq', question: 'What is an app?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A type of phone' }, { id: 'b', text: 'A software application' }, { id: 'c', text: 'A fruit' }, { id: 'd', text: 'A battery' }],
      correctAnswer: 'b', explanation: 'An app is a software application!', funFact: 'There are millions of apps available!'
    },
    {
      type: 'true-false', question: 'The internet and the World Wide Web are the same thing.', categoryId: 'technology',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'The Web is just one part of the Internet!', funFact: 'Email and streaming also use the Internet!'
    },
    {
      type: 'mcq', question: 'What company made the iPhone?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Microsoft' }, { id: 'b', text: 'Google' }, { id: 'c', text: 'Apple' }, { id: 'd', text: 'Samsung' }],
      correctAnswer: 'c', explanation: 'Apple makes the iPhone!', funFact: 'The first iPhone was released in 2007!'
    },
    {
      type: 'mcq', question: 'What is Wi-Fi used for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Making calls' }, { id: 'b', text: 'Wireless internet connection' }, { id: 'c', text: 'Taking photos' }, { id: 'd', text: 'Playing music' }],
      correctAnswer: 'b', explanation: 'Wi-Fi provides wireless internet access!', funFact: 'Wi-Fi doesnt actually stand for anything!'
    },
    {
      type: 'mcq', question: 'What is the name of Googles web browser?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Safari' }, { id: 'b', text: 'Firefox' }, { id: 'c', text: 'Chrome' }, { id: 'd', text: 'Edge' }],
      correctAnswer: 'c', explanation: 'Google Chrome is Googles browser!', funFact: 'Chrome is the most popular web browser!'
    },
    {
      type: 'mcq', question: 'What does USB stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Universal System Bus' }, { id: 'b', text: 'Universal Serial Bus' }, { id: 'c', text: 'United Serial Bus' }, { id: 'd', text: 'Universal Storage Base' }],
      correctAnswer: 'b', explanation: 'USB means Universal Serial Bus!', funFact: 'USB was invented in 1996!'
    },
    {
      type: 'mcq', question: 'What is a selfie?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A video game' }, { id: 'b', text: 'A photo of yourself' }, { id: 'c', text: 'A phone call' }, { id: 'd', text: 'An app' }],
      correctAnswer: 'b', explanation: 'A selfie is a photo you take of yourself!', funFact: 'The word "selfie" was added to dictionaries in 2013!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What does HTML stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Hyper Text Markup Language' }, { id: 'b', text: 'High Tech Modern Language' }, { id: 'c', text: 'Hyper Transfer Markup Language' }, { id: 'd', text: 'Home Tool Markup Language' }],
      correctAnswer: 'a', explanation: 'HTML is Hyper Text Markup Language!', funFact: 'HTML is the foundation of all websites!'
    },
    {
      type: 'mcq', question: 'What is the binary number system based on?', categoryId: 'technology',
      options: [{ id: 'a', text: '0 and 1' }, { id: 'b', text: '1 and 2' }, { id: 'c', text: '0 through 9' }, { id: 'd', text: '1 through 10' }],
      correctAnswer: 'a', explanation: 'Binary uses only 0 and 1!', funFact: 'All computer data is stored in binary!'
    },
    {
      type: 'mcq', question: 'What does RAM stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Read Access Memory' }, { id: 'b', text: 'Random Access Memory' }, { id: 'c', text: 'Run Application Memory' }, { id: 'd', text: 'Rapid Access Module' }],
      correctAnswer: 'b', explanation: 'RAM is Random Access Memory!', funFact: 'RAM is cleared when you turn off the computer!'
    },
    {
      type: 'mcq', question: 'What is cloud computing?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Computing in the sky' }, { id: 'b', text: 'Using remote servers over the internet' }, { id: 'c', text: 'Weather prediction software' }, { id: 'd', text: 'A type of computer' }],
      correctAnswer: 'b', explanation: 'Cloud computing uses remote servers!', funFact: 'Services like Google Drive use the cloud!'
    },
    {
      type: 'mcq', question: 'What is an IP address?', categoryId: 'technology',
      options: [{ id: 'a', text: 'An email address' }, { id: 'b', text: 'A unique identifier for devices on a network' }, { id: 'c', text: 'A website name' }, { id: 'd', text: 'A password' }],
      correctAnswer: 'b', explanation: 'IP addresses identify devices on networks!', funFact: 'IP stands for Internet Protocol!'
    },
    {
      type: 'mcq', question: 'What programming language is known for making websites interactive?', categoryId: 'technology',
      options: [{ id: 'a', text: 'HTML' }, { id: 'b', text: 'CSS' }, { id: 'c', text: 'JavaScript' }, { id: 'd', text: 'Python' }],
      correctAnswer: 'c', explanation: 'JavaScript makes websites interactive!', funFact: 'Despite the name, its not related to Java!'
    },
    {
      type: 'mcq', question: 'What does GPS stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Global Positioning System' }, { id: 'b', text: 'General Processing System' }, { id: 'c', text: 'Geographic Position Service' }, { id: 'd', text: 'Global Program System' }],
      correctAnswer: 'a', explanation: 'GPS is Global Positioning System!', funFact: 'GPS uses satellites to determine location!'
    },
    {
      type: 'mcq', question: 'What is a hashtag used for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'To call someone' }, { id: 'b', text: 'To categorize content on social media' }, { id: 'c', text: 'To delete posts' }, { id: 'd', text: 'To send emails' }],
      correctAnswer: 'b', explanation: 'Hashtags help categorize and find content!', funFact: 'The # symbol was first used on Twitter in 2007!'
    },
    {
      type: 'mcq', question: 'What does PDF stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Portable Document Format' }, { id: 'b', text: 'Print Document File' }, { id: 'c', text: 'Personal Data File' }, { id: 'd', text: 'Program Document Format' }],
      correctAnswer: 'a', explanation: 'PDF is Portable Document Format!', funFact: 'Adobe created the PDF format in 1993!'
    },
    {
      type: 'true-false', question: 'A gigabyte is larger than a megabyte.', categoryId: 'technology',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: '1 GB = 1,024 MB!', funFact: 'A terabyte is even larger than a gigabyte!'
    },
    {
      type: 'mcq', question: 'What company developed Windows operating system?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Microsoft' }, { id: 'c', text: 'Google' }, { id: 'd', text: 'IBM' }],
      correctAnswer: 'b', explanation: 'Microsoft developed Windows!', funFact: 'Windows 1.0 was released in 1985!'
    },
    {
      type: 'mcq', question: 'What is artificial intelligence (AI)?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A type of robot' }, { id: 'b', text: 'Computer systems that can perform human-like tasks' }, { id: 'c', text: 'A video game' }, { id: 'd', text: 'A programming language' }],
      correctAnswer: 'b', explanation: 'AI systems can learn and make decisions!', funFact: 'AI is used in virtual assistants like Siri!'
    },
    {
      type: 'mcq', question: 'What is malware?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Good software' }, { id: 'b', text: 'Malicious software designed to harm' }, { id: 'c', text: 'A type of browser' }, { id: 'd', text: 'An email service' }],
      correctAnswer: 'b', explanation: 'Malware is malicious software!', funFact: 'Viruses, trojans, and ransomware are types of malware!'
    },
    {
      type: 'mcq', question: 'What does VR stand for in gaming?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Video Recording' }, { id: 'b', text: 'Virtual Reality' }, { id: 'c', text: 'Visual Response' }, { id: 'd', text: 'Variable Rate' }],
      correctAnswer: 'b', explanation: 'VR is Virtual Reality!', funFact: 'VR headsets immerse you in digital worlds!'
    },
    {
      type: 'mcq', question: 'What is a browser cookie?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A snack you eat' }, { id: 'b', text: 'Data stored by websites on your computer' }, { id: 'c', text: 'A type of virus' }, { id: 'd', text: 'A bookmark' }],
      correctAnswer: 'b', explanation: 'Cookies store website data on your device!', funFact: 'They help websites remember you!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is a blockchain?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A type of firewall' }, { id: 'b', text: 'A distributed digital ledger' }, { id: 'c', text: 'A password manager' }, { id: 'd', text: 'A gaming console' }],
      correctAnswer: 'b', explanation: 'Blockchain is a distributed ledger technology!', funFact: 'Bitcoin uses blockchain technology!'
    },
    {
      type: 'mcq', question: 'What does API stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Application Programming Interface' }, { id: 'b', text: 'Advanced Program Integration' }, { id: 'c', text: 'Automated Processing Input' }, { id: 'd', text: 'Application Process Integration' }],
      correctAnswer: 'a', explanation: 'API is Application Programming Interface!', funFact: 'APIs let different software communicate!'
    },
    {
      type: 'mcq', question: 'What is machine learning?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Teaching robots to walk' }, { id: 'b', text: 'AI systems that improve from experience' }, { id: 'c', text: 'Computer repair' }, { id: 'd', text: 'Online education' }],
      correctAnswer: 'b', explanation: 'Machine learning improves through experience!', funFact: 'It powers recommendations on Netflix and Spotify!'
    },
    {
      type: 'mcq', question: 'What is encryption?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Deleting data' }, { id: 'b', text: 'Converting data into a coded format' }, { id: 'c', text: 'Compressing files' }, { id: 'd', text: 'Downloading files' }],
      correctAnswer: 'b', explanation: 'Encryption protects data by encoding it!', funFact: 'HTTPS websites use encryption!'
    },
    {
      type: 'mcq', question: 'What is the IoT?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Internet of Things' }, { id: 'b', text: 'Information on Technology' }, { id: 'c', text: 'Internal Operating Terminal' }, { id: 'd', text: 'Integrated Online Tech' }],
      correctAnswer: 'a', explanation: 'IoT connects everyday devices to the internet!', funFact: 'Smart fridges and thermostats are part of IoT!'
    },
    {
      type: 'mcq', question: 'What programming language is known for data science?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Java' }, { id: 'b', text: 'Python' }, { id: 'c', text: 'C++' }, { id: 'd', text: 'Ruby' }],
      correctAnswer: 'b', explanation: 'Python is popular for data science!', funFact: 'Its also used in AI and machine learning!'
    },
    {
      type: 'mcq', question: 'What is a firewall?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A burning wall' }, { id: 'b', text: 'Network security that monitors traffic' }, { id: 'c', text: 'A type of virus' }, { id: 'd', text: 'A web browser' }],
      correctAnswer: 'b', explanation: 'Firewalls protect networks from threats!', funFact: 'They filter incoming and outgoing traffic!'
    },
    {
      type: 'mcq', question: 'What does SSD stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Super Speed Drive' }, { id: 'b', text: 'Solid State Drive' }, { id: 'c', text: 'System Storage Device' }, { id: 'd', text: 'Secure System Drive' }],
      correctAnswer: 'b', explanation: 'SSD is Solid State Drive!', funFact: 'SSDs are faster than traditional hard drives!'
    },
    {
      type: 'mcq', question: 'What is two-factor authentication?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Using two passwords' }, { id: 'b', text: 'Verifying identity using two different methods' }, { id: 'c', text: 'Logging in twice' }, { id: 'd', text: 'Using two devices' }],
      correctAnswer: 'b', explanation: '2FA uses two verification methods!', funFact: 'Common methods are password + phone code!'
    },
    {
      type: 'true-false', question: 'Quantum computers use quantum bits (qubits) instead of regular bits.', categoryId: 'technology',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Qubits can exist in multiple states simultaneously!', funFact: 'This allows quantum computers to solve complex problems faster!'
    },
    {
      type: 'mcq', question: 'What is phishing?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A fishing game' }, { id: 'b', text: 'Fraudulent attempts to steal personal information' }, { id: 'c', text: 'A type of software' }, { id: 'd', text: 'Finding files online' }],
      correctAnswer: 'b', explanation: 'Phishing tries to trick you into revealing data!', funFact: 'Always check email sender addresses carefully!'
    },
    {
      type: 'mcq', question: 'What is open source software?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Free software' }, { id: 'b', text: 'Software with publicly available source code' }, { id: 'c', text: 'Online software' }, { id: 'd', text: 'Simple software' }],
      correctAnswer: 'b', explanation: 'Open source code is freely available to view and modify!', funFact: 'Linux and Firefox are open source!'
    },
    {
      type: 'mcq', question: 'What is bandwidth?', categoryId: 'technology',
      options: [{ id: 'a', text: 'The width of a computer' }, { id: 'b', text: 'Maximum data transfer rate' }, { id: 'c', text: 'A music genre' }, { id: 'd', text: 'Computer memory' }],
      correctAnswer: 'b', explanation: 'Bandwidth measures data transfer capacity!', funFact: 'Higher bandwidth means faster downloads!'
    },
    {
      type: 'mcq', question: 'What does URL stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Universal Resource Locator' }, { id: 'b', text: 'Uniform Resource Locator' }, { id: 'c', text: 'United Resource Link' }, { id: 'd', text: 'Universal Reference Link' }],
      correctAnswer: 'b', explanation: 'URL is Uniform Resource Locator!', funFact: 'URLs are web addresses!'
    },
    {
      type: 'mcq', question: 'What is a VPN used for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Speeding up internet' }, { id: 'b', text: 'Creating a secure, private network connection' }, { id: 'c', text: 'Storing files' }, { id: 'd', text: 'Playing games' }],
      correctAnswer: 'b', explanation: 'VPNs create secure, encrypted connections!', funFact: 'VPN stands for Virtual Private Network!'
    },
    {
      type: 'mcq', question: 'What is debugging in programming?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Adding bugs to code' }, { id: 'b', text: 'Finding and fixing errors in code' }, { id: 'c', text: 'Deleting code' }, { id: 'd', text: 'Writing code' }],
      correctAnswer: 'b', explanation: 'Debugging fixes errors in programs!', funFact: 'The term came from an actual bug found in a computer in 1947!'
    },
    {
      type: 'mcq', question: 'What is the dark web?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Websites with dark themes' }, { id: 'b', text: 'Part of internet requiring special software to access' }, { id: 'c', text: 'Offline websites' }, { id: 'd', text: 'Slow internet' }],
      correctAnswer: 'b', explanation: 'The dark web requires special browsers like Tor!', funFact: 'Its different from the "deep web" of unindexed sites!'
    },
    {
      type: 'mcq', question: 'What does HTTPS mean?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Hyper Text Transfer Protocol Secure' }, { id: 'b', text: 'High Tech Transfer Protocol System' }, { id: 'c', text: 'Hyper Transfer Text Protocol Secure' }, { id: 'd', text: 'Home Text Transfer Protocol Secure' }],
      correctAnswer: 'a', explanation: 'HTTPS is the secure version of HTTP!', funFact: 'The S means the connection is encrypted!'
    },
    {
      type: 'mcq', question: 'What is an algorithm?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A type of computer' }, { id: 'b', text: 'A step-by-step procedure to solve a problem' }, { id: 'c', text: 'A programming language' }, { id: 'd', text: 'A website' }],
      correctAnswer: 'b', explanation: 'Algorithms are instructions to solve problems!', funFact: 'Google uses algorithms to rank search results!'
    },
    {
      type: 'mcq', question: 'What is augmented reality (AR)?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Completely virtual world' }, { id: 'b', text: 'Digital content overlaid on the real world' }, { id: 'c', text: 'A video game' }, { id: 'd', text: 'A type of camera' }],
      correctAnswer: 'b', explanation: 'AR adds digital elements to the real world!', funFact: 'Pokemon Go uses augmented reality!'
    },
  ],
};
