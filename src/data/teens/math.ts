// Teens Math Questions (13+ years) - Advanced Mathematics
import { TeensQuestionBank } from './types';

export const mathQuestions: TeensQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is the value of x in: 2x + 6 = 14?', categoryId: 'math',
      options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }],
      correctAnswer: 'b', explanation: '2x = 14 - 6 = 8, so x = 4!', funFact: 'Algebra comes from the Arabic word "al-jabr" meaning "reunion of broken parts"!'
    },
    {
      type: 'mcq', question: 'What is 25% of 80?', categoryId: 'math',
      options: [{ id: 'a', text: '15' }, { id: 'b', text: '20' }, { id: 'c', text: '25' }, { id: 'd', text: '30' }],
      correctAnswer: 'b', explanation: '25% = 0.25, and 0.25 × 80 = 20!', funFact: '25% is the same as dividing by 4!'
    },
    {
      type: 'mcq', question: 'What is the square root of 144?', categoryId: 'math',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '11' }, { id: 'c', text: '12' }, { id: 'd', text: '14' }],
      correctAnswer: 'c', explanation: '12 × 12 = 144!', funFact: '144 is called a "gross" - 12 dozen!'
    },
    {
      type: 'mcq', question: 'What is the area of a rectangle with length 8 and width 5?', categoryId: 'math',
      options: [{ id: 'a', text: '13' }, { id: 'b', text: '26' }, { id: 'c', text: '40' }, { id: 'd', text: '45' }],
      correctAnswer: 'c', explanation: 'Area = length × width = 8 × 5 = 40 square units!', funFact: 'Rectangle comes from Latin "rectus" (right) and "angulus" (angle)!'
    },
    {
      type: 'mcq', question: 'Simplify: 3² + 4²', categoryId: 'math',
      options: [{ id: 'a', text: '14' }, { id: 'b', text: '25' }, { id: 'c', text: '49' }, { id: 'd', text: '7' }],
      correctAnswer: 'b', explanation: '3² + 4² = 9 + 16 = 25!', funFact: 'This is part of the famous 3-4-5 Pythagorean triple!'
    },
    {
      type: 'mcq', question: 'What is the LCM of 4 and 6?', categoryId: 'math',
      options: [{ id: 'a', text: '8' }, { id: 'b', text: '10' }, { id: 'c', text: '12' }, { id: 'd', text: '24' }],
      correctAnswer: 'c', explanation: 'LCM(4,6) = 12 - the smallest number divisible by both!', funFact: 'LCM is used to find common denominators when adding fractions!'
    },
    {
      type: 'mcq', question: 'If f(x) = 2x + 3, what is f(5)?', categoryId: 'math',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '11' }, { id: 'c', text: '13' }, { id: 'd', text: '15' }],
      correctAnswer: 'c', explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13!', funFact: 'Function notation was introduced by Leonhard Euler in the 1700s!'
    },
    {
      type: 'mcq', question: 'What is 2³ × 2²?', categoryId: 'math',
      options: [{ id: 'a', text: '2⁵' }, { id: 'b', text: '2⁶' }, { id: 'c', text: '4⁵' }, { id: 'd', text: '4⁶' }],
      correctAnswer: 'a', explanation: 'When multiplying powers with the same base, add exponents: 3 + 2 = 5!', funFact: 'This rule makes large number calculations much easier!'
    },
    {
      type: 'mcq', question: 'What is the slope of the line y = 3x - 7?', categoryId: 'math',
      options: [{ id: 'a', text: '-7' }, { id: 'b', text: '3' }, { id: 'c', text: '7' }, { id: 'd', text: '-3' }],
      correctAnswer: 'b', explanation: 'In y = mx + b, m is the slope. Here m = 3!', funFact: 'Slope tells you how steep a line is - rise over run!'
    },
    {
      type: 'mcq', question: 'Solve: |-8| + |3|', categoryId: 'math',
      options: [{ id: 'a', text: '-5' }, { id: 'b', text: '5' }, { id: 'c', text: '11' }, { id: 'd', text: '-11' }],
      correctAnswer: 'c', explanation: '|-8| = 8 and |3| = 3, so 8 + 3 = 11!', funFact: 'Absolute value represents distance from zero on a number line!'
    },
    {
      type: 'mcq', question: 'What is the perimeter of a square with side 7?', categoryId: 'math',
      options: [{ id: 'a', text: '14' }, { id: 'b', text: '21' }, { id: 'c', text: '28' }, { id: 'd', text: '49' }],
      correctAnswer: 'c', explanation: 'Perimeter = 4 × side = 4 × 7 = 28!', funFact: 'Perimeter comes from Greek words meaning "around measure"!'
    },
    {
      type: 'mcq', question: 'Convert 3/4 to a decimal.', categoryId: 'math',
      options: [{ id: 'a', text: '0.34' }, { id: 'b', text: '0.75' }, { id: 'c', text: '0.80' }, { id: 'd', text: '0.43' }],
      correctAnswer: 'b', explanation: '3 ÷ 4 = 0.75!', funFact: 'Decimals were first used in China over 2000 years ago!'
    },
    {
      type: 'mcq', question: 'What is 15% of 200?', categoryId: 'math',
      options: [{ id: 'a', text: '25' }, { id: 'b', text: '30' }, { id: 'c', text: '35' }, { id: 'd', text: '40' }],
      correctAnswer: 'b', explanation: '0.15 × 200 = 30!', funFact: 'Tip: 10% + 5% = 20 + 10 = 30 is an easier mental calculation!'
    },
    {
      type: 'mcq', question: 'What is the next number in the sequence: 2, 6, 12, 20, ...?', categoryId: 'math',
      options: [{ id: 'a', text: '28' }, { id: 'b', text: '30' }, { id: 'c', text: '32' }, { id: 'd', text: '36' }],
      correctAnswer: 'b', explanation: 'Pattern: n(n+1) where n = 1,2,3,4,5... So 5×6 = 30!', funFact: 'These are called pronic numbers or oblong numbers!'
    },
    {
      type: 'true-false', question: 'The sum of angles in any triangle is 180°.', categoryId: 'math',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'This is true for all triangles in Euclidean geometry!', funFact: 'On a sphere, triangles can have angle sums greater than 180°!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'Solve for x: x² - 9 = 0', categoryId: 'math',
      options: [{ id: 'a', text: 'x = 3' }, { id: 'b', text: 'x = -3' }, { id: 'c', text: 'x = ±3' }, { id: 'd', text: 'x = 9' }],
      correctAnswer: 'c', explanation: 'x² = 9, so x = +3 or x = -3!', funFact: 'This is a difference of squares: x² - 9 = (x+3)(x-3)!'
    },
    {
      type: 'mcq', question: 'What is the distance between points (0, 0) and (3, 4)?', categoryId: 'math',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '7' }, { id: 'c', text: '12' }, { id: 'd', text: '25' }],
      correctAnswer: 'a', explanation: 'Distance = √(3² + 4²) = √(9 + 16) = √25 = 5!', funFact: 'This is the distance formula derived from Pythagoras!'
    },
    {
      type: 'mcq', question: 'Simplify: (x³)² / x²', categoryId: 'math',
      options: [{ id: 'a', text: 'x³' }, { id: 'b', text: 'x⁴' }, { id: 'c', text: 'x⁵' }, { id: 'd', text: 'x⁶' }],
      correctAnswer: 'b', explanation: '(x³)² = x⁶, then x⁶/x² = x⁴!', funFact: 'Exponent rules make complex calculations simple!'
    },
    {
      type: 'mcq', question: 'What is the value of sin(30°)?', categoryId: 'math',
      options: [{ id: 'a', text: '0' }, { id: 'b', text: '1/2' }, { id: 'c', text: '√3/2' }, { id: 'd', text: '1' }],
      correctAnswer: 'b', explanation: 'sin(30°) = 1/2 is one of the special angle values!', funFact: 'These special angles come from the 30-60-90 and 45-45-90 triangles!'
    },
    {
      type: 'mcq', question: 'If a die is rolled, what is the probability of getting an even number?', categoryId: 'math',
      options: [{ id: 'a', text: '1/6' }, { id: 'b', text: '1/3' }, { id: 'c', text: '1/2' }, { id: 'd', text: '2/3' }],
      correctAnswer: 'c', explanation: 'Even numbers: 2, 4, 6 = 3 outcomes out of 6 = 1/2!', funFact: 'Probability theory was developed for gambling in the 1600s!'
    },
    {
      type: 'mcq', question: 'Factor: x² + 5x + 6', categoryId: 'math',
      options: [{ id: 'a', text: '(x+2)(x+3)' }, { id: 'b', text: '(x+1)(x+6)' }, { id: 'c', text: '(x-2)(x-3)' }, { id: 'd', text: '(x+3)(x+3)' }],
      correctAnswer: 'a', explanation: 'Find two numbers that multiply to 6 and add to 5: 2 and 3!', funFact: 'Factoring is like "un-FOILing" - finding the original multiplication!'
    },
    {
      type: 'mcq', question: 'What is the area of a circle with radius 5? (Use π ≈ 3.14)', categoryId: 'math',
      options: [{ id: 'a', text: '31.4 square units' }, { id: 'b', text: '78.5 square units' }, { id: 'c', text: '157 square units' }, { id: 'd', text: '25 square units' }],
      correctAnswer: 'b', explanation: 'Area = πr² = 3.14 × 25 = 78.5 square units!', funFact: 'The area formula was proven by Archimedes over 2200 years ago!'
    },
    {
      type: 'mcq', question: 'Solve: 3(x - 2) = 2x + 1', categoryId: 'math',
      options: [{ id: 'a', text: 'x = 5' }, { id: 'b', text: 'x = 7' }, { id: 'c', text: 'x = -5' }, { id: 'd', text: 'x = -7' }],
      correctAnswer: 'b', explanation: '3x - 6 = 2x + 1, so 3x - 2x = 1 + 6, x = 7!', funFact: 'Always check your answer by substituting back!'
    },
    {
      type: 'mcq', question: 'What is log₁₀(1000)?', categoryId: 'math',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '10' }],
      correctAnswer: 'b', explanation: 'log₁₀(1000) = 3 because 10³ = 1000!', funFact: 'Logarithms were invented by John Napier to simplify calculations!'
    },
    {
      type: 'mcq', question: 'What is the volume of a cube with edge 4?', categoryId: 'math',
      options: [{ id: 'a', text: '12' }, { id: 'b', text: '16' }, { id: 'c', text: '48' }, { id: 'd', text: '64' }],
      correctAnswer: 'd', explanation: 'Volume = s³ = 4³ = 64 cubic units!', funFact: 'A Rubik\'s cube has 64 visible unit cubes!'
    },
    {
      type: 'mcq', question: 'What is the y-intercept of y = 2x - 5?', categoryId: 'math',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '-2' }, { id: 'c', text: '5' }, { id: 'd', text: '-5' }],
      correctAnswer: 'd', explanation: 'In y = mx + b, b is the y-intercept. Here b = -5!', funFact: 'The y-intercept is where the line crosses the y-axis (when x = 0)!'
    },
    {
      type: 'mcq', question: 'Simplify: √50', categoryId: 'math',
      options: [{ id: 'a', text: '5√2' }, { id: 'b', text: '2√5' }, { id: 'c', text: '25' }, { id: 'd', text: '10√5' }],
      correctAnswer: 'a', explanation: '√50 = √(25×2) = √25 × √2 = 5√2!', funFact: 'Simplifying radicals helps in exact calculations!'
    },
    {
      type: 'mcq', question: 'What is the sum of interior angles of a hexagon?', categoryId: 'math',
      options: [{ id: 'a', text: '540°' }, { id: 'b', text: '720°' }, { id: 'c', text: '900°' }, { id: 'd', text: '1080°' }],
      correctAnswer: 'b', explanation: 'Sum = (n-2) × 180° = (6-2) × 180° = 720°!', funFact: 'Bees use hexagons because they\'re the most efficient shape for storage!'
    },
    {
      type: 'mcq', question: 'If 2ˣ = 32, what is x?', categoryId: 'math',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '16' }],
      correctAnswer: 'b', explanation: '2⁵ = 32, so x = 5!', funFact: '32 is the 5th power of 2, important in computing (32-bit systems)!'
    },
    {
      type: 'mcq', question: 'What is cos(60°)?', categoryId: 'math',
      options: [{ id: 'a', text: '0' }, { id: 'b', text: '1/2' }, { id: 'c', text: '√3/2' }, { id: 'd', text: '1' }],
      correctAnswer: 'b', explanation: 'cos(60°) = 1/2 - another special angle value!', funFact: 'Note: sin(30°) = cos(60°) because they are complementary angles!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'Solve: x² - 5x + 6 = 0', categoryId: 'math',
      options: [{ id: 'a', text: 'x = 1, 6' }, { id: 'b', text: 'x = 2, 3' }, { id: 'c', text: 'x = -2, -3' }, { id: 'd', text: 'x = -1, 6' }],
      correctAnswer: 'b', explanation: 'Factors: (x-2)(x-3) = 0, so x = 2 or x = 3!', funFact: 'The quadratic formula always works: x = (-b ± √(b²-4ac)) / 2a!'
    },
    {
      type: 'mcq', question: 'What is the derivative of x³?', categoryId: 'math',
      options: [{ id: 'a', text: '3x' }, { id: 'b', text: '3x²' }, { id: 'c', text: 'x²' }, { id: 'd', text: '3x³' }],
      correctAnswer: 'b', explanation: 'd/dx(xⁿ) = nxⁿ⁻¹, so d/dx(x³) = 3x²!', funFact: 'Calculus was developed independently by Newton and Leibniz!'
    },
    {
      type: 'mcq', question: 'What is i² (where i is the imaginary unit)?', categoryId: 'math',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '-1' }, { id: 'c', text: 'i' }, { id: 'd', text: '-i' }],
      correctAnswer: 'b', explanation: 'i is defined as √(-1), so i² = -1!', funFact: 'Imaginary numbers are essential in electrical engineering and quantum physics!'
    },
    {
      type: 'mcq', question: 'What is lim(x→0) (sin x)/x?', categoryId: 'math',
      options: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: '∞' }, { id: 'd', text: 'undefined' }],
      correctAnswer: 'b', explanation: 'This famous limit equals 1 (when x is in radians)!', funFact: 'This limit is fundamental to proving derivatives of trig functions!'
    },
    {
      type: 'mcq', question: 'In a geometric sequence 2, 6, 18, ..., what is the 5th term?', categoryId: 'math',
      options: [{ id: 'a', text: '54' }, { id: 'b', text: '108' }, { id: 'c', text: '162' }, { id: 'd', text: '324' }],
      correctAnswer: 'c', explanation: 'Common ratio = 3. Term 5 = 2 × 3⁴ = 2 × 81 = 162!', funFact: 'Geometric sequences appear in population growth and compound interest!'
    },
    {
      type: 'mcq', question: 'What is the integral of 2x?', categoryId: 'math',
      options: [{ id: 'a', text: 'x²' }, { id: 'b', text: 'x² + C' }, { id: 'c', text: '2' }, { id: 'd', text: '2x² + C' }],
      correctAnswer: 'b', explanation: '∫2x dx = x² + C (don\'t forget the constant of integration)!', funFact: 'Integration is the reverse of differentiation!'
    },
    {
      type: 'mcq', question: 'What is the standard deviation a measure of?', categoryId: 'math',
      options: [{ id: 'a', text: 'Central tendency' }, { id: 'b', text: 'Spread/dispersion' }, { id: 'c', text: 'Probability' }, { id: 'd', text: 'Correlation' }],
      correctAnswer: 'b', explanation: 'Standard deviation measures how spread out data is from the mean!', funFact: 'In a normal distribution, 68% of data falls within 1 standard deviation of the mean!'
    },
    {
      type: 'mcq', question: 'Solve: log₂(x) = 5', categoryId: 'math',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '25' }, { id: 'c', text: '32' }, { id: 'd', text: '64' }],
      correctAnswer: 'c', explanation: 'log₂(x) = 5 means 2⁵ = x, so x = 32!', funFact: 'Binary (base-2) logarithms are crucial in computer science!'
    },
    {
      type: 'mcq', question: 'What is the period of y = sin(2x)?', categoryId: 'math',
      options: [{ id: 'a', text: 'π' }, { id: 'b', text: '2π' }, { id: 'c', text: 'π/2' }, { id: 'd', text: '4π' }],
      correctAnswer: 'a', explanation: 'Period = 2π/b = 2π/2 = π!', funFact: 'Changing the coefficient of x stretches or compresses the wave horizontally!'
    },
    {
      type: 'mcq', question: 'How many ways can 5 books be arranged on a shelf?', categoryId: 'math',
      options: [{ id: 'a', text: '25' }, { id: 'b', text: '60' }, { id: 'c', text: '120' }, { id: 'd', text: '720' }],
      correctAnswer: 'c', explanation: '5! = 5×4×3×2×1 = 120 arrangements!', funFact: 'This is called a permutation - order matters!'
    },
    {
      type: 'mcq', question: 'What is the value of e (Euler\'s number) approximately?', categoryId: 'math',
      options: [{ id: 'a', text: '2.14' }, { id: 'b', text: '2.71' }, { id: 'c', text: '3.14' }, { id: 'd', text: '1.62' }],
      correctAnswer: 'b', explanation: 'e ≈ 2.71828... is the base of natural logarithms!', funFact: 'e appears naturally in compound interest and population growth!'
    },
    {
      type: 'mcq', question: 'What is the determinant of matrix [[2,3],[1,4]]?', categoryId: 'math',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '8' }, { id: 'c', text: '10' }, { id: 'd', text: '11' }],
      correctAnswer: 'a', explanation: 'det = (2×4) - (3×1) = 8 - 3 = 5!', funFact: 'Determinants tell us if a system of equations has a unique solution!'
    },
    {
      type: 'mcq', question: 'What is the sum of the infinite series: 1 + 1/2 + 1/4 + 1/8 + ...?', categoryId: 'math',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '∞' }, { id: 'd', text: '3' }],
      correctAnswer: 'b', explanation: 'Sum = a/(1-r) = 1/(1-0.5) = 2 for this geometric series!', funFact: 'This is one of Zeno\'s paradoxes - infinite terms but finite sum!'
    },
    {
      type: 'mcq', question: 'What is tan(45°)?', categoryId: 'math',
      options: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: '√2' }, { id: 'd', text: 'undefined' }],
      correctAnswer: 'b', explanation: 'tan(45°) = sin(45°)/cos(45°) = 1!', funFact: 'In a 45-45-90 triangle, the two legs are equal!'
    },
    {
      type: 'mcq', question: 'How many ways can a committee of 3 be chosen from 7 people?', categoryId: 'math',
      options: [{ id: 'a', text: '21' }, { id: 'b', text: '35' }, { id: 'c', text: '210' }, { id: 'd', text: '343' }],
      correctAnswer: 'b', explanation: 'C(7,3) = 7!/(3!×4!) = 35 combinations!', funFact: 'This is a combination - order doesn\'t matter unlike permutations!'
    },
  ],
};
