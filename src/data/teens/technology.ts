// Teens Technology Questions (13+ years) - Tech, Coding & Digital Literacy
import { TeensQuestionBank } from './types';

export const technologyQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What does CPU stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Central Processing Unit' }, { id: 'b', text: 'Computer Personal Unit' }, { id: 'c', text: 'Central Power Unit' }, { id: 'd', text: 'Computer Processing Utility' }],
      correctAnswer: 'a', explanation: 'The CPU is the "brain" of the computer that processes instructions!', funFact: 'Modern CPUs can execute billions of instructions per second!'
    },
    {
      type: 'mcq', question: 'What programming language is most commonly used for web page styling?', categoryId: 'technology',
      options: [{ id: 'a', text: 'HTML' }, { id: 'b', text: 'CSS' }, { id: 'c', text: 'JavaScript' }, { id: 'd', text: 'Python' }],
      correctAnswer: 'b', explanation: 'CSS (Cascading Style Sheets) controls colors, layouts, and fonts!', funFact: 'CSS was first proposed in 1994!'
    },
    {
      type: 'mcq', question: 'What does HTTP stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'HyperText Transfer Protocol' }, { id: 'b', text: 'High Tech Transfer Protocol' }, { id: 'c', text: 'HyperText Transmission Program' }, { id: 'd', text: 'Home Text Transfer Protocol' }],
      correctAnswer: 'a', explanation: 'HTTP is the foundation of data communication on the web!', funFact: 'HTTPS adds encryption for security!'
    },
    {
      type: 'mcq', question: 'What is RAM used for in a computer?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Long-term storage' }, { id: 'b', text: 'Temporary working memory' }, { id: 'c', text: 'Processing calculations' }, { id: 'd', text: 'Displaying graphics' }],
      correctAnswer: 'b', explanation: 'RAM temporarily stores data for quick access while programs run!', funFact: 'RAM is "volatile" - it loses data when powered off!'
    },
    {
      type: 'mcq', question: 'What company created the iPhone?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Google' }, { id: 'b', text: 'Microsoft' }, { id: 'c', text: 'Apple' }, { id: 'd', text: 'Samsung' }],
      correctAnswer: 'c', explanation: 'Apple released the first iPhone in 2007!', funFact: 'Steve Jobs unveiled it saying it was three products in one!'
    },
    {
      type: 'mcq', question: 'What does Wi-Fi stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Wireless Fidelity' }, { id: 'b', text: 'It\'s just a brand name' }, { id: 'c', text: 'Wireless Frequency' }, { id: 'd', text: 'Wide Frequency' }],
      correctAnswer: 'b', explanation: 'Wi-Fi is a trademark and doesn\'t actually stand for anything!', funFact: 'Many people believe it means Wireless Fidelity, but that\'s a common myth!'
    },
    {
      type: 'mcq', question: 'What is an algorithm?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A type of computer virus' }, { id: 'b', text: 'A step-by-step set of instructions' }, { id: 'c', text: 'A programming language' }, { id: 'd', text: 'A type of hardware' }],
      correctAnswer: 'b', explanation: 'Algorithms are the logic behind all computer programs!', funFact: 'The word comes from the 9th-century mathematician Al-Khwarizmi!'
    },
    {
      type: 'mcq', question: 'What file extension is used for Python files?', categoryId: 'technology',
      options: [{ id: 'a', text: '.java' }, { id: 'b', text: '.js' }, { id: 'c', text: '.py' }, { id: 'd', text: '.pt' }],
      correctAnswer: 'c', explanation: 'Python files use the .py extension!', funFact: 'Python was named after Monty Python, not the snake!'
    },
    {
      type: 'mcq', question: 'What does GPU stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'General Processing Unit' }, { id: 'b', text: 'Graphics Processing Unit' }, { id: 'c', text: 'Gaming Performance Unit' }, { id: 'd', text: 'Global Processing Utility' }],
      correctAnswer: 'b', explanation: 'GPUs handle graphics and are also used for AI!', funFact: 'Modern GPUs can have thousands of cores compared to a CPU\'s few!'
    },
    {
      type: 'mcq', question: 'What is the purpose of a firewall?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Cool down the computer' }, { id: 'b', text: 'Block unauthorized network access' }, { id: 'c', text: 'Speed up internet' }, { id: 'd', text: 'Store passwords' }],
      correctAnswer: 'b', explanation: 'Firewalls monitor and filter network traffic for security!', funFact: 'The term comes from walls that prevent fire from spreading in buildings!'
    },
    {
      type: 'mcq', question: 'What is cloud computing?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Computing in the sky' }, { id: 'b', text: 'Using remote servers via the internet' }, { id: 'c', text: 'Weather prediction software' }, { id: 'd', text: 'A type of hardware' }],
      correctAnswer: 'b', explanation: 'Cloud computing provides services via the internet instead of local hardware!', funFact: 'Amazon Web Services (AWS) launched in 2006 and pioneered cloud computing!'
    },
    {
      type: 'mcq', question: 'What does URL stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Universal Resource Locator' }, { id: 'b', text: 'Uniform Resource Locator' }, { id: 'c', text: 'United Resource Link' }, { id: 'd', text: 'Universal Reference Link' }],
      correctAnswer: 'b', explanation: 'URLs are web addresses that locate resources on the internet!', funFact: 'The first URL was created by Tim Berners-Lee in 1990!'
    },
    {
      type: 'mcq', question: 'Which of these is an open-source operating system?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Windows' }, { id: 'b', text: 'macOS' }, { id: 'c', text: 'Linux' }, { id: 'd', text: 'iOS' }],
      correctAnswer: 'c', explanation: 'Linux is free and open-source, with code anyone can view and modify!', funFact: 'Linux runs on most of the world\'s servers and supercomputers!'
    },
    {
      type: 'mcq', question: 'What is a byte?', categoryId: 'technology',
      options: [{ id: 'a', text: '1 bit' }, { id: 'b', text: '4 bits' }, { id: 'c', text: '8 bits' }, { id: 'd', text: '16 bits' }],
      correctAnswer: 'c', explanation: 'A byte is 8 bits and can represent a single character!', funFact: 'A kilobyte is 1,024 bytes, not 1,000!'
    },
    {
      type: 'true-false', question: 'HTML is a programming language.', categoryId: 'technology',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'HTML is a markup language, not a programming language!', funFact: 'HTML structures content; it doesn\'t have logic like programming languages!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the time complexity of binary search?', categoryId: 'technology',
      options: [{ id: 'a', text: 'O(n)' }, { id: 'b', text: 'O(log n)' }, { id: 'c', text: 'O(n²)' }, { id: 'd', text: 'O(1)' }],
      correctAnswer: 'b', explanation: 'Binary search halves the search space each time - logarithmic time!', funFact: 'Binary search on 1 million items takes at most 20 comparisons!'
    },
    {
      type: 'mcq', question: 'What is the difference between stack and heap memory?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Stack is bigger than heap' }, { id: 'b', text: 'Stack is for static allocation, heap for dynamic' }, { id: 'c', text: 'They are the same' }, { id: 'd', text: 'Heap is faster than stack' }],
      correctAnswer: 'b', explanation: 'Stack handles function calls and local variables; heap handles dynamic memory!', funFact: 'Stack memory is automatically managed, heap requires manual allocation!'
    },
    {
      type: 'mcq', question: 'What is Git?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A programming language' }, { id: 'b', text: 'A version control system' }, { id: 'c', text: 'A web browser' }, { id: 'd', text: 'An operating system' }],
      correctAnswer: 'b', explanation: 'Git tracks code changes and enables collaboration!', funFact: 'Git was created by Linus Torvalds (creator of Linux) in 2005!'
    },
    {
      type: 'mcq', question: 'What is an API?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A type of computer chip' }, { id: 'b', text: 'Application Programming Interface' }, { id: 'c', text: 'Advanced Processing Integration' }, { id: 'd', text: 'A programming language' }],
      correctAnswer: 'b', explanation: 'APIs allow different software systems to communicate!', funFact: 'When you use weather apps, they get data from weather APIs!'
    },
    {
      type: 'mcq', question: 'What does SQL stand for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Simple Query Language' }, { id: 'b', text: 'Structured Query Language' }, { id: 'c', text: 'System Query Logic' }, { id: 'd', text: 'Standard Question Language' }],
      correctAnswer: 'b', explanation: 'SQL is used to manage and query databases!', funFact: 'SQL was developed at IBM in the 1970s!'
    },
    {
      type: 'mcq', question: 'What is recursion in programming?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A loop that runs forever' }, { id: 'b', text: 'A function that calls itself' }, { id: 'c', text: 'A type of variable' }, { id: 'd', text: 'A debugging technique' }],
      correctAnswer: 'b', explanation: 'Recursion breaks problems into smaller, similar subproblems!', funFact: 'Recursion is elegant but can cause stack overflow if not careful!'
    },
    {
      type: 'mcq', question: 'What is machine learning?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Teaching computers to think like humans' }, { id: 'b', text: 'Systems that learn from data without explicit programming' }, { id: 'c', text: 'Robots learning to walk' }, { id: 'd', text: 'Automated software updates' }],
      correctAnswer: 'b', explanation: 'ML algorithms improve through experience with data!', funFact: 'Netflix\'s recommendation system uses machine learning!'
    },
    {
      type: 'mcq', question: 'What is the purpose of a database index?', categoryId: 'technology',
      options: [{ id: 'a', text: 'To number rows' }, { id: 'b', text: 'To speed up data retrieval' }, { id: 'c', text: 'To encrypt data' }, { id: 'd', text: 'To compress data' }],
      correctAnswer: 'b', explanation: 'Indexes create quick lookup tables for faster queries!', funFact: 'Like a book index, database indexes avoid reading every page!'
    },
    {
      type: 'mcq', question: 'What is a container in software?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A storage device' }, { id: 'b', text: 'A lightweight, portable runtime environment' }, { id: 'c', text: 'A type of folder' }, { id: 'd', text: 'A database table' }],
      correctAnswer: 'b', explanation: 'Containers package code with dependencies for consistent deployment!', funFact: 'Docker, released in 2013, popularized containerization!'
    },
    {
      type: 'mcq', question: 'What is a boolean data type?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A number type' }, { id: 'b', text: 'True or false values only' }, { id: 'c', text: 'A text type' }, { id: 'd', text: 'A list type' }],
      correctAnswer: 'b', explanation: 'Booleans represent logical true/false states!', funFact: 'Named after mathematician George Boole, founder of Boolean algebra!'
    },
    {
      type: 'mcq', question: 'What is the difference between HTTP and HTTPS?', categoryId: 'technology',
      options: [{ id: 'a', text: 'HTTPS is faster' }, { id: 'b', text: 'HTTPS is encrypted' }, { id: 'c', text: 'HTTP is newer' }, { id: 'd', text: 'They are the same' }],
      correctAnswer: 'b', explanation: 'HTTPS uses SSL/TLS encryption to secure data in transit!', funFact: 'Look for the padlock icon in your browser for HTTPS!'
    },
    {
      type: 'mcq', question: 'What is an IDE?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Internet Development Environment' }, { id: 'b', text: 'Integrated Development Environment' }, { id: 'c', text: 'Internal Debug Engine' }, { id: 'd', text: 'Interactive Data Editor' }],
      correctAnswer: 'b', explanation: 'IDEs provide tools for writing, testing, and debugging code!', funFact: 'Popular IDEs include VS Code, IntelliJ, and PyCharm!'
    },
    {
      type: 'mcq', question: 'What is the purpose of a VPN?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Speed up internet' }, { id: 'b', text: 'Create a secure, encrypted connection' }, { id: 'c', text: 'Block ads' }, { id: 'd', text: 'Store files' }],
      correctAnswer: 'b', explanation: 'VPNs encrypt your traffic and hide your IP address!', funFact: 'VPN stands for Virtual Private Network!'
    },
    {
      type: 'mcq', question: 'What is the difference between compiled and interpreted languages?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Compiled is always faster' }, { id: 'b', text: 'Compiled converts to machine code before running; interpreted runs line by line' }, { id: 'c', text: 'Interpreted languages can\'t have errors' }, { id: 'd', text: 'They produce the same result' }],
      correctAnswer: 'b', explanation: 'C++ is compiled; Python is interpreted!', funFact: 'Java uses both - it compiles to bytecode, then the JVM interprets it!'
    },
    {
      type: 'mcq', question: 'What is a framework in programming?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A computer part' }, { id: 'b', text: 'A pre-built structure for developing applications' }, { id: 'c', text: 'A type of loop' }, { id: 'd', text: 'A debugging tool' }],
      correctAnswer: 'b', explanation: 'Frameworks provide reusable code and conventions!', funFact: 'React, Angular, and Django are popular frameworks!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the CAP theorem in distributed systems?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A rule about file sizes' }, { id: 'b', text: 'You can only guarantee 2 of 3: Consistency, Availability, Partition tolerance' }, { id: 'c', text: 'A security protocol' }, { id: 'd', text: 'A networking standard' }],
      correctAnswer: 'b', explanation: 'Distributed systems must trade off between these three guarantees!', funFact: 'Also known as Brewer\'s theorem, proposed in 2000!'
    },
    {
      type: 'mcq', question: 'What is the difference between mutex and semaphore?', categoryId: 'technology',
      options: [{ id: 'a', text: 'They are the same' }, { id: 'b', text: 'Mutex is for single access; semaphore can allow multiple' }, { id: 'c', text: 'Semaphore is faster' }, { id: 'd', text: 'Mutex is older' }],
      correctAnswer: 'b', explanation: 'Mutex = mutual exclusion (one at a time); semaphore counts available resources!', funFact: 'These concepts are fundamental to concurrent programming!'
    },
    {
      type: 'mcq', question: 'What is the purpose of a hash function?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Encrypt data' }, { id: 'b', text: 'Map data to fixed-size values for quick lookup' }, { id: 'c', text: 'Compress files' }, { id: 'd', text: 'Sort data' }],
      correctAnswer: 'b', explanation: 'Hash functions are used in hash tables, password storage, and more!', funFact: 'A good hash function minimizes collisions!'
    },
    {
      type: 'mcq', question: 'What is polymorphism in OOP?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Having multiple classes' }, { id: 'b', text: 'Objects taking many forms; same interface, different implementations' }, { id: 'c', text: 'Creating copies of objects' }, { id: 'd', text: 'Hiding internal data' }],
      correctAnswer: 'b', explanation: 'A method can behave differently based on the object calling it!', funFact: 'Polymorphism comes from Greek: "many forms"!'
    },
    {
      type: 'mcq', question: 'What is Big O notation used for?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Measuring code quality' }, { id: 'b', text: 'Describing algorithm efficiency/scalability' }, { id: 'c', text: 'Counting lines of code' }, { id: 'd', text: 'Measuring memory size' }],
      correctAnswer: 'b', explanation: 'It describes how runtime or space grows with input size!', funFact: 'O(n²) becomes impractical for large datasets!'
    },
    {
      type: 'mcq', question: 'What is the difference between process and thread?', categoryId: 'technology',
      options: [{ id: 'a', text: 'They are the same' }, { id: 'b', text: 'Processes are independent; threads share memory within a process' }, { id: 'c', text: 'Threads are slower' }, { id: 'd', text: 'Processes can\'t communicate' }],
      correctAnswer: 'b', explanation: 'Threads are "lightweight processes" sharing resources!', funFact: 'Multi-threading can speed up programs on multi-core CPUs!'
    },
    {
      type: 'mcq', question: 'What is a neural network?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A computer network' }, { id: 'b', text: 'A computing system inspired by biological brains' }, { id: 'c', text: 'A type of database' }, { id: 'd', text: 'A security system' }],
      correctAnswer: 'b', explanation: 'Neural networks use layers of interconnected nodes to learn patterns!', funFact: 'Deep learning uses neural networks with many layers!'
    },
    {
      type: 'mcq', question: 'What is garbage collection in programming?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Deleting old files' }, { id: 'b', text: 'Automatic memory management that frees unused memory' }, { id: 'c', text: 'Removing bugs' }, { id: 'd', text: 'Compressing data' }],
      correctAnswer: 'b', explanation: 'Languages like Java and Python automatically reclaim unused memory!', funFact: 'C and C++ don\'t have automatic garbage collection!'
    },
    {
      type: 'mcq', question: 'What is the purpose of the TCP/IP handshake?', categoryId: 'technology',
      options: [{ id: 'a', text: 'To encrypt data' }, { id: 'b', text: 'To establish a reliable connection before data transfer' }, { id: 'c', text: 'To speed up transfer' }, { id: 'd', text: 'To authenticate users' }],
      correctAnswer: 'b', explanation: 'The three-way handshake (SYN, SYN-ACK, ACK) ensures both sides are ready!', funFact: 'TCP guarantees ordered, error-checked delivery!'
    },
    {
      type: 'mcq', question: 'What is a design pattern in software engineering?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A UI template' }, { id: 'b', text: 'A reusable solution to common software design problems' }, { id: 'c', text: 'A coding style' }, { id: 'd', text: 'A testing method' }],
      correctAnswer: 'b', explanation: 'Examples: Singleton, Factory, Observer patterns!', funFact: 'The "Gang of Four" book introduced 23 classic design patterns!'
    },
    {
      type: 'mcq', question: 'What is the principle of least privilege?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Using simple passwords' }, { id: 'b', text: 'Giving users only the minimum access needed' }, { id: 'c', text: 'Limiting computer speed' }, { id: 'd', text: 'Reducing code complexity' }],
      correctAnswer: 'b', explanation: 'This security principle minimizes potential damage from breaches!', funFact: 'It applies to users, processes, and systems!'
    },
    {
      type: 'mcq', question: 'What is a microservice architecture?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Very small programs' }, { id: 'b', text: 'Breaking applications into independent, loosely coupled services' }, { id: 'c', text: 'Using microprocessors' }, { id: 'd', text: 'A type of database' }],
      correctAnswer: 'b', explanation: 'Each microservice handles a specific function and can be developed/deployed independently!', funFact: 'Netflix and Amazon pioneered microservices!'
    },
    {
      type: 'mcq', question: 'What is the purpose of Kubernetes?', categoryId: 'technology',
      options: [{ id: 'a', text: 'A programming language' }, { id: 'b', text: 'Container orchestration - managing containerized applications' }, { id: 'c', text: 'A database system' }, { id: 'd', text: 'A web browser' }],
      correctAnswer: 'b', explanation: 'Kubernetes automates deployment, scaling, and management of containers!', funFact: 'Kubernetes means "helmsman" in Greek - Google created it!'
    },
    {
      type: 'mcq', question: 'What is quantum computing?', categoryId: 'technology',
      options: [{ id: 'a', text: 'Very fast regular computing' }, { id: 'b', text: 'Computing using quantum mechanical phenomena like superposition' }, { id: 'c', text: 'A type of AI' }, { id: 'd', text: 'Nano-scale computing' }],
      correctAnswer: 'b', explanation: 'Quantum computers use qubits that can be 0, 1, or both simultaneously!', funFact: 'Quantum computers could break current encryption methods!'
    },
    {
      type: 'mcq', question: 'What is the difference between SQL and NoSQL databases?', categoryId: 'technology',
      options: [{ id: 'a', text: 'NoSQL is newer' }, { id: 'b', text: 'SQL uses structured tables; NoSQL uses flexible document/key-value stores' }, { id: 'c', text: 'SQL is faster' }, { id: 'd', text: 'NoSQL can\'t store data' }],
      correctAnswer: 'b', explanation: 'SQL = relational, structured; NoSQL = flexible, scalable!', funFact: 'MongoDB and Redis are popular NoSQL databases!'
    },
  ],
};
