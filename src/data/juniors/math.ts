// Juniors Math Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const mathQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What is 7 × 8?', categoryId: 'math',
      options: [{ id: 'a', text: '54' }, { id: 'b', text: '56' }, { id: 'c', text: '58' }, { id: 'd', text: '64' }],
      correctAnswer: 'b', explanation: '7 × 8 = 56!', funFact: 'Multiplication is repeated addition!'
    },
    {
      type: 'mcq', question: 'What is the next number: 2, 4, 6, 8, __?', categoryId: 'math',
      options: [{ id: 'a', text: '9' }, { id: 'b', text: '10' }, { id: 'c', text: '11' }, { id: 'd', text: '12' }],
      correctAnswer: 'b', explanation: 'The pattern is adding 2 each time!', funFact: 'These are even numbers!'
    },
    {
      type: 'mcq', question: 'How many sides does a hexagon have?', categoryId: 'math',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'b', explanation: 'A hexagon has 6 sides!', funFact: 'Honeycomb cells are hexagons!'
    },
    {
      type: 'mcq', question: 'What is 100 ÷ 5?', categoryId: 'math',
      options: [{ id: 'a', text: '15' }, { id: 'b', text: '20' }, { id: 'c', text: '25' }, { id: 'd', text: '30' }],
      correctAnswer: 'b', explanation: '100 ÷ 5 = 20!', funFact: 'Division is splitting into equal groups!'
    },
    {
      type: 'mcq', question: 'What is 1/2 + 1/2?', categoryId: 'math',
      options: [{ id: 'a', text: '1/4' }, { id: 'b', text: '2/4' }, { id: 'c', text: '1' }, { id: 'd', text: '2' }],
      correctAnswer: 'c', explanation: 'Two halves make a whole!', funFact: '1/2 is also written as 0.5!'
    },
    {
      type: 'mcq', question: 'What is the perimeter of a square with sides of 5 cm?', categoryId: 'math',
      options: [{ id: 'a', text: '10 cm' }, { id: 'b', text: '15 cm' }, { id: 'c', text: '20 cm' }, { id: 'd', text: '25 cm' }],
      correctAnswer: 'c', explanation: 'Perimeter = 4 × 5 = 20 cm!', funFact: 'Perimeter is the distance around a shape!'
    },
    {
      type: 'true-false', question: 'A triangle has 4 angles.', categoryId: 'math',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'A triangle has 3 angles!', funFact: 'The angles add up to 180°!'
    },
    {
      type: 'mcq', question: 'What is 25% of 100?', categoryId: 'math',
      options: [{ id: 'a', text: '20' }, { id: 'b', text: '25' }, { id: 'c', text: '30' }, { id: 'd', text: '50' }],
      correctAnswer: 'b', explanation: '25% of 100 is 25!', funFact: 'Percent means "per hundred"!'
    },
    {
      type: 'mcq', question: 'What is the smallest prime number?', categoryId: 'math',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '5' }],
      correctAnswer: 'b', explanation: '2 is the smallest prime number!', funFact: 'Its also the only even prime number!'
    },
    {
      type: 'mcq', question: 'What is 15 - 8?', categoryId: 'math',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'c', explanation: '15 - 8 = 7!', funFact: 'Subtraction is the opposite of addition!'
    },
    {
      type: 'mcq', question: 'How many degrees are in a right angle?', categoryId: 'math',
      options: [{ id: 'a', text: '45°' }, { id: 'b', text: '90°' }, { id: 'c', text: '180°' }, { id: 'd', text: '360°' }],
      correctAnswer: 'b', explanation: 'A right angle is 90 degrees!', funFact: 'The corner of a square is a right angle!'
    },
    {
      type: 'mcq', question: 'What is 3²?', categoryId: 'math',
      options: [{ id: 'a', text: '6' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '12' }],
      correctAnswer: 'c', explanation: '3² = 3 × 3 = 9!', funFact: 'The small 2 means "squared"!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'What is the area of a rectangle with length 8 and width 5?', categoryId: 'math',
      options: [{ id: 'a', text: '13' }, { id: 'b', text: '26' }, { id: 'c', text: '40' }, { id: 'd', text: '48' }],
      correctAnswer: 'c', explanation: 'Area = 8 × 5 = 40 square units!', funFact: 'Area is measured in square units!'
    },
    {
      type: 'mcq', question: 'What is the value of π (pi) rounded to two decimal places?', categoryId: 'math',
      options: [{ id: 'a', text: '3.12' }, { id: 'b', text: '3.14' }, { id: 'c', text: '3.16' }, { id: 'd', text: '3.18' }],
      correctAnswer: 'b', explanation: 'Pi is approximately 3.14!', funFact: 'Pi has infinite decimal places!'
    },
    {
      type: 'mcq', question: 'What is 2/3 of 24?', categoryId: 'math',
      options: [{ id: 'a', text: '12' }, { id: 'b', text: '14' }, { id: 'c', text: '16' }, { id: 'd', text: '18' }],
      correctAnswer: 'c', explanation: '(2/3) × 24 = 16!', funFact: 'Divide by 3 first, then multiply by 2!'
    },
    {
      type: 'mcq', question: 'What is the square root of 144?', categoryId: 'math',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '11' }, { id: 'c', text: '12' }, { id: 'd', text: '14' }],
      correctAnswer: 'c', explanation: '√144 = 12 because 12 × 12 = 144!', funFact: '144 is a perfect square!'
    },
    {
      type: 'mcq', question: 'What type of angle is greater than 90° but less than 180°?', categoryId: 'math',
      options: [{ id: 'a', text: 'Acute' }, { id: 'b', text: 'Right' }, { id: 'c', text: 'Obtuse' }, { id: 'd', text: 'Straight' }],
      correctAnswer: 'c', explanation: 'Obtuse angles are between 90° and 180°!', funFact: 'Acute angles are less than 90°!'
    },
    {
      type: 'mcq', question: 'If x + 5 = 12, what is x?', categoryId: 'math',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '17' }],
      correctAnswer: 'b', explanation: 'x = 12 - 5 = 7!', funFact: 'This is called solving for x!'
    },
    {
      type: 'mcq', question: 'What is 0.75 as a fraction?', categoryId: 'math',
      options: [{ id: 'a', text: '1/2' }, { id: 'b', text: '2/3' }, { id: 'c', text: '3/4' }, { id: 'd', text: '7/10' }],
      correctAnswer: 'c', explanation: '0.75 = 75/100 = 3/4!', funFact: 'Decimals and fractions represent the same values!'
    },
    {
      type: 'mcq', question: 'What is the mean of 2, 4, 6, 8, 10?', categoryId: 'math',
      options: [{ id: 'a', text: '5' }, { id: 'b', text: '6' }, { id: 'c', text: '7' }, { id: 'd', text: '8' }],
      correctAnswer: 'b', explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6!', funFact: 'Mean is also called average!'
    },
    {
      type: 'mcq', question: 'How many faces does a cube have?', categoryId: 'math',
      options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '8' }],
      correctAnswer: 'c', explanation: 'A cube has 6 faces!', funFact: 'All faces of a cube are squares!'
    },
    {
      type: 'true-false', question: 'The sum of angles in a triangle is 180 degrees.', categoryId: 'math',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Triangle angles always add to 180°!', funFact: 'This works for all triangles!'
    },
    {
      type: 'mcq', question: 'What is 5! (5 factorial)?', categoryId: 'math',
      options: [{ id: 'a', text: '25' }, { id: 'b', text: '60' }, { id: 'c', text: '100' }, { id: 'd', text: '120' }],
      correctAnswer: 'd', explanation: '5! = 5×4×3×2×1 = 120!', funFact: 'Factorial means multiply all numbers down to 1!'
    },
    {
      type: 'mcq', question: 'What is the circumference formula for a circle?', categoryId: 'math',
      options: [{ id: 'a', text: 'πr²' }, { id: 'b', text: '2πr' }, { id: 'c', text: 'πd²' }, { id: 'd', text: '4πr' }],
      correctAnswer: 'b', explanation: 'Circumference = 2πr (or πd)!', funFact: 'Circumference is the distance around a circle!'
    },
    {
      type: 'mcq', question: 'What is the greatest common factor of 12 and 18?', categoryId: 'math',
      options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '6' }, { id: 'd', text: '9' }],
      correctAnswer: 'c', explanation: 'GCF of 12 and 18 is 6!', funFact: 'Both 12 and 18 are divisible by 6!'
    },
    {
      type: 'mcq', question: 'What is -5 + (-3)?', categoryId: 'math',
      options: [{ id: 'a', text: '-8' }, { id: 'b', text: '-2' }, { id: 'c', text: '2' }, { id: 'd', text: '8' }],
      correctAnswer: 'a', explanation: '-5 + (-3) = -8!', funFact: 'Adding negatives goes further from zero!'
    },
    {
      type: 'mcq', question: 'What is the least common multiple of 4 and 6?', categoryId: 'math',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '12' }, { id: 'c', text: '18' }, { id: 'd', text: '24' }],
      correctAnswer: 'b', explanation: 'LCM of 4 and 6 is 12!', funFact: '12 is the smallest number divisible by both!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the Pythagorean theorem?', categoryId: 'math',
      options: [{ id: 'a', text: 'a + b = c' }, { id: 'b', text: 'a² + b² = c²' }, { id: 'c', text: 'a × b = c' }, { id: 'd', text: 'a² - b² = c²' }],
      correctAnswer: 'b', explanation: 'a² + b² = c² for right triangles!', funFact: 'c is always the hypotenuse (longest side)!'
    },
    {
      type: 'mcq', question: 'What is the slope-intercept form of a linear equation?', categoryId: 'math',
      options: [{ id: 'a', text: 'ax + by = c' }, { id: 'b', text: 'y = mx + b' }, { id: 'c', text: 'x + y = m' }, { id: 'd', text: 'y - y₁ = m(x - x₁)' }],
      correctAnswer: 'b', explanation: 'y = mx + b where m is slope, b is y-intercept!', funFact: 'This form makes graphing easy!'
    },
    {
      type: 'mcq', question: 'What is the sum of interior angles in a pentagon?', categoryId: 'math',
      options: [{ id: 'a', text: '360°' }, { id: 'b', text: '450°' }, { id: 'c', text: '540°' }, { id: 'd', text: '720°' }],
      correctAnswer: 'c', explanation: '(5-2) × 180° = 540°!', funFact: 'The formula is (n-2) × 180° for n-sided polygons!'
    },
    {
      type: 'mcq', question: 'What is the value of 2³ × 2²?', categoryId: 'math',
      options: [{ id: 'a', text: '2⁵' }, { id: 'b', text: '2⁶' }, { id: 'c', text: '4⁵' }, { id: 'd', text: '4⁶' }],
      correctAnswer: 'a', explanation: 'When multiplying, add the exponents: 2³⁺² = 2⁵!', funFact: '2⁵ = 32!'
    },
    {
      type: 'mcq', question: 'What is the quadratic formula?', categoryId: 'math',
      options: [{ id: 'a', text: 'x = -b/2a' }, { id: 'b', text: 'x = (-b ± √(b²-4ac))/2a' }, { id: 'c', text: 'x = b² - 4ac' }, { id: 'd', text: 'x = -b ± √(b² - ac)' }],
      correctAnswer: 'b', explanation: 'The quadratic formula solves ax² + bx + c = 0!', funFact: 'It always works for quadratic equations!'
    },
    {
      type: 'mcq', question: 'What is sin(30°)?', categoryId: 'math',
      options: [{ id: 'a', text: '1/4' }, { id: 'b', text: '1/2' }, { id: 'c', text: '√2/2' }, { id: 'd', text: '√3/2' }],
      correctAnswer: 'b', explanation: 'sin(30°) = 1/2 = 0.5!', funFact: 'Sine is opposite over hypotenuse!'
    },
    {
      type: 'mcq', question: 'What is the volume of a cube with side 4 cm?', categoryId: 'math',
      options: [{ id: 'a', text: '12 cm³' }, { id: 'b', text: '16 cm³' }, { id: 'c', text: '48 cm³' }, { id: 'd', text: '64 cm³' }],
      correctAnswer: 'd', explanation: 'Volume = 4³ = 64 cm³!', funFact: 'Volume is measured in cubic units!'
    },
    {
      type: 'mcq', question: 'What is log₁₀(100)?', categoryId: 'math',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '10' }, { id: 'd', text: '100' }],
      correctAnswer: 'b', explanation: 'log₁₀(100) = 2 because 10² = 100!', funFact: 'Logarithms are the inverse of exponents!'
    },
    {
      type: 'mcq', question: 'What is the derivative of x²?', categoryId: 'math',
      options: [{ id: 'a', text: 'x' }, { id: 'b', text: '2x' }, { id: 'c', text: 'x²' }, { id: 'd', text: '2x²' }],
      correctAnswer: 'b', explanation: 'The derivative of x² is 2x!', funFact: 'Derivatives measure rate of change!'
    },
    {
      type: 'true-false', question: 'The number e (Eulers number) is approximately 2.718.', categoryId: 'math',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'e ≈ 2.71828...', funFact: 'e is important in calculus and compound interest!'
    },
    {
      type: 'mcq', question: 'What is the probability of rolling a 6 on a fair die?', categoryId: 'math',
      options: [{ id: 'a', text: '1/2' }, { id: 'b', text: '1/4' }, { id: 'c', text: '1/6' }, { id: 'd', text: '1/12' }],
      correctAnswer: 'c', explanation: 'There is 1 favorable outcome out of 6!', funFact: 'Each number has an equal chance!'
    },
    {
      type: 'mcq', question: 'What is an irrational number?', categoryId: 'math',
      options: [{ id: 'a', text: 'A negative number' }, { id: 'b', text: 'A number that cannot be expressed as a simple fraction' }, { id: 'c', text: 'A number less than zero' }, { id: 'd', text: 'An imaginary number' }],
      correctAnswer: 'b', explanation: 'Irrational numbers have non-repeating decimals!', funFact: 'π and √2 are irrational!'
    },
    {
      type: 'mcq', question: 'What is the formula for the area of a circle?', categoryId: 'math',
      options: [{ id: 'a', text: '2πr' }, { id: 'b', text: 'πd' }, { id: 'c', text: 'πr²' }, { id: 'd', text: '4πr²' }],
      correctAnswer: 'c', explanation: 'Area = πr²!', funFact: 'r is the radius of the circle!'
    },
    {
      type: 'mcq', question: 'What is i² in complex numbers?', categoryId: 'math',
      options: [{ id: 'a', text: '1' }, { id: 'b', text: '-1' }, { id: 'c', text: '2i' }, { id: 'd', text: '0' }],
      correctAnswer: 'b', explanation: 'i² = -1 by definition!', funFact: 'i is the imaginary unit!'
    },
    {
      type: 'mcq', question: 'What is the sum of the first 10 positive integers?', categoryId: 'math',
      options: [{ id: 'a', text: '45' }, { id: 'b', text: '50' }, { id: 'c', text: '55' }, { id: 'd', text: '60' }],
      correctAnswer: 'c', explanation: '1+2+...+10 = n(n+1)/2 = 55!', funFact: 'This formula was discovered by Gauss as a child!'
    },
    {
      type: 'mcq', question: 'What is the cos(60°)?', categoryId: 'math',
      options: [{ id: 'a', text: '0' }, { id: 'b', text: '1/2' }, { id: 'c', text: '√2/2' }, { id: 'd', text: '√3/2' }],
      correctAnswer: 'b', explanation: 'cos(60°) = 1/2!', funFact: 'Cosine is adjacent over hypotenuse!'
    },
    {
      type: 'mcq', question: 'What is the relationship between radius and diameter?', categoryId: 'math',
      options: [{ id: 'a', text: 'd = r/2' }, { id: 'b', text: 'd = 2r' }, { id: 'c', text: 'd = r²' }, { id: 'd', text: 'd = πr' }],
      correctAnswer: 'b', explanation: 'Diameter = 2 × radius!', funFact: 'The diameter passes through the center!'
    },
    {
      type: 'mcq', question: 'What is the median of 3, 7, 9, 12, 15?', categoryId: 'math',
      options: [{ id: 'a', text: '7' }, { id: 'b', text: '9' }, { id: 'c', text: '9.2' }, { id: 'd', text: '12' }],
      correctAnswer: 'b', explanation: 'The median is the middle value: 9!', funFact: 'For even sets, average the two middle numbers!'
    },
    {
      type: 'mcq', question: 'If f(x) = 3x + 2, what is f(4)?', categoryId: 'math',
      options: [{ id: 'a', text: '10' }, { id: 'b', text: '12' }, { id: 'c', text: '14' }, { id: 'd', text: '16' }],
      correctAnswer: 'c', explanation: 'f(4) = 3(4) + 2 = 14!', funFact: 'This is called function notation!'
    },
    {
      type: 'mcq', question: 'What is the surface area formula for a sphere?', categoryId: 'math',
      options: [{ id: 'a', text: '2πr²' }, { id: 'b', text: '4πr²' }, { id: 'c', text: 'πr³' }, { id: 'd', text: '4/3πr³' }],
      correctAnswer: 'b', explanation: 'Surface area of a sphere = 4πr²!', funFact: '4/3πr³ is the volume formula!'
    },
  ],
};
