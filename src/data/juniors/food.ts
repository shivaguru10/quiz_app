// Juniors Food/Fruits & Veggies Questions by Difficulty
import { JuniorsQuestionBank } from './types';

export const foodQuestions: JuniorsQuestionBank = {
  easy: [
    {
      type: 'mcq', question: 'What color is a ripe banana?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Red' }, { id: 'b', text: 'Yellow' }, { id: 'c', text: 'Blue' }, { id: 'd', text: 'Green' }],
      correctAnswer: 'b', explanation: 'Ripe bananas are yellow!', funFact: 'Bananas are actually berries!'
    },
    {
      type: 'mcq', question: 'Which fruit is red and keeps the doctor away?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Orange' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Apple' }, { id: 'd', text: 'Grape' }],
      correctAnswer: 'c', explanation: 'An apple a day keeps the doctor away!', funFact: 'There are over 7,500 varieties of apples!'
    },
    {
      type: 'mcq', question: 'What vegetable do rabbits love to eat?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Potato' }, { id: 'b', text: 'Carrot' }, { id: 'c', text: 'Onion' }, { id: 'd', text: 'Garlic' }],
      correctAnswer: 'b', explanation: 'Rabbits love carrots!', funFact: 'Carrots were originally purple, not orange!'
    },
    {
      type: 'mcq', question: 'Which fruit has its seeds on the outside?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Orange' }, { id: 'c', text: 'Strawberry' }, { id: 'd', text: 'Grape' }],
      correctAnswer: 'c', explanation: 'Strawberries have seeds on the outside!', funFact: 'One strawberry has about 200 seeds!'
    },
    {
      type: 'mcq', question: 'What vegetable makes you cry when you cut it?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Tomato' }, { id: 'b', text: 'Cucumber' }, { id: 'c', text: 'Onion' }, { id: 'd', text: 'Lettuce' }],
      correctAnswer: 'c', explanation: 'Onions release a chemical that makes us cry!', funFact: 'Chilling onions before cutting reduces tears!'
    },
    {
      type: 'true-false', question: 'Tomatoes are fruits.', categoryId: 'fruits-veggies',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Tomatoes are technically fruits!', funFact: 'Botanically, they are berries!'
    },
    {
      type: 'mcq', question: 'What fruit do we get orange juice from?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Orange' }, { id: 'c', text: 'Grape' }, { id: 'd', text: 'Lemon' }],
      correctAnswer: 'b', explanation: 'Orange juice comes from oranges!', funFact: 'Brazil produces the most oranges in the world!'
    },
    {
      type: 'mcq', question: 'Which vegetable is orange and good for your eyes?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Broccoli' }, { id: 'b', text: 'Spinach' }, { id: 'c', text: 'Carrot' }, { id: 'd', text: 'Cabbage' }],
      correctAnswer: 'c', explanation: 'Carrots are great for eye health!', funFact: 'Carrots contain beta-carotene which helps vision!'
    },
    {
      type: 'mcq', question: 'What is the most popular fruit in the world?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Orange' }, { id: 'd', text: 'Mango' }],
      correctAnswer: 'b', explanation: 'Bananas are the most popular fruit!', funFact: 'Over 100 billion bananas are eaten yearly!'
    },
    {
      type: 'mcq', question: 'Which green vegetable looks like a tiny tree?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Spinach' }, { id: 'b', text: 'Broccoli' }, { id: 'c', text: 'Lettuce' }, { id: 'd', text: 'Peas' }],
      correctAnswer: 'b', explanation: 'Broccoli looks like tiny trees!', funFact: 'Broccoli is a superfood packed with vitamins!'
    },
    {
      type: 'mcq', question: 'What fruit is traditionally carved on Halloween?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Watermelon' }, { id: 'b', text: 'Pumpkin' }, { id: 'c', text: 'Apple' }, { id: 'd', text: 'Orange' }],
      correctAnswer: 'b', explanation: 'Pumpkins are carved into jack-o-lanterns!', funFact: 'Pumpkins are 90% water!'
    },
    {
      type: 'mcq', question: 'Which fruit is known as the "King of Fruits"?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Mango' }, { id: 'c', text: 'Durian' }, { id: 'd', text: 'Pineapple' }],
      correctAnswer: 'b', explanation: 'Mango is called the King of Fruits!', funFact: 'India produces the most mangoes!'
    },
  ],
  medium: [
    {
      type: 'mcq', question: 'Which vitamin is abundant in citrus fruits?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Vitamin A' }, { id: 'b', text: 'Vitamin B' }, { id: 'c', text: 'Vitamin C' }, { id: 'd', text: 'Vitamin D' }],
      correctAnswer: 'c', explanation: 'Citrus fruits are rich in Vitamin C!', funFact: 'Vitamin C boosts your immune system!'
    },
    {
      type: 'mcq', question: 'What gives chili peppers their spicy taste?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Vitamin C' }, { id: 'b', text: 'Capsaicin' }, { id: 'c', text: 'Sugar' }, { id: 'd', text: 'Salt' }],
      correctAnswer: 'b', explanation: 'Capsaicin makes peppers spicy!', funFact: 'Milk helps reduce the burning sensation!'
    },
    {
      type: 'mcq', question: 'Which fruit contains the most water?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Watermelon' }, { id: 'd', text: 'Grape' }],
      correctAnswer: 'c', explanation: 'Watermelon is 92% water!', funFact: 'Watermelons are both a fruit and a vegetable!'
    },
    {
      type: 'mcq', question: 'What part of the plant is a potato?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Root' }, { id: 'b', text: 'Stem' }, { id: 'c', text: 'Leaf' }, { id: 'd', text: 'Fruit' }],
      correctAnswer: 'b', explanation: 'Potatoes are underground stems called tubers!', funFact: 'Potatoes were the first vegetable grown in space!'
    },
    {
      type: 'mcq', question: 'Which country is the largest producer of rice?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'India' }, { id: 'b', text: 'China' }, { id: 'c', text: 'Japan' }, { id: 'd', text: 'Thailand' }],
      correctAnswer: 'b', explanation: 'China produces the most rice!', funFact: 'Rice feeds more than half the world!'
    },
    {
      type: 'mcq', question: 'What is the hottest chili pepper in the world?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Jalapeno' }, { id: 'b', text: 'Habanero' }, { id: 'c', text: 'Carolina Reaper' }, { id: 'd', text: 'Ghost Pepper' }],
      correctAnswer: 'c', explanation: 'Carolina Reaper is the hottest pepper!', funFact: 'It measures over 2 million Scoville units!'
    },
    {
      type: 'true-false', question: 'Avocados are vegetables.', categoryId: 'fruits-veggies',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'false', explanation: 'Avocados are actually fruits!', funFact: 'They are also known as "alligator pears"!'
    },
    {
      type: 'mcq', question: 'Which fruit is used to make wine?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Grape' }, { id: 'c', text: 'Orange' }, { id: 'd', text: 'Peach' }],
      correctAnswer: 'b', explanation: 'Grapes are used to make wine!', funFact: 'Wine has been made for over 8,000 years!'
    },
    {
      type: 'mcq', question: 'What vegetable is Popeye famous for eating?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Broccoli' }, { id: 'b', text: 'Spinach' }, { id: 'c', text: 'Kale' }, { id: 'd', text: 'Lettuce' }],
      correctAnswer: 'b', explanation: 'Popeye loves spinach!', funFact: 'Spinach is rich in iron and vitamins!'
    },
    {
      type: 'mcq', question: 'Which nut grows underground?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Almond' }, { id: 'b', text: 'Walnut' }, { id: 'c', text: 'Peanut' }, { id: 'd', text: 'Cashew' }],
      correctAnswer: 'c', explanation: 'Peanuts grow underground!', funFact: 'Peanuts are actually legumes, not nuts!'
    },
    {
      type: 'mcq', question: 'What fruit is dried to make raisins?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Grape' }, { id: 'c', text: 'Plum' }, { id: 'd', text: 'Apricot' }],
      correctAnswer: 'b', explanation: 'Raisins are dried grapes!', funFact: 'It takes 4 pounds of grapes to make 1 pound of raisins!'
    },
    {
      type: 'mcq', question: 'Which vegetable is used to make french fries?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Sweet Potato' }, { id: 'b', text: 'Potato' }, { id: 'c', text: 'Carrot' }, { id: 'd', text: 'Turnip' }],
      correctAnswer: 'b', explanation: 'French fries are made from potatoes!', funFact: 'Americans eat 4.5 billion pounds of fries yearly!'
    },
    {
      type: 'mcq', question: 'What is the main ingredient in guacamole?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Tomato' }, { id: 'b', text: 'Avocado' }, { id: 'c', text: 'Pepper' }, { id: 'd', text: 'Onion' }],
      correctAnswer: 'b', explanation: 'Guacamole is made from avocados!', funFact: 'The word comes from Aztec "ahuacamolli"!'
    },
    {
      type: 'mcq', question: 'Which fruit has a crown and is tropical?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Mango' }, { id: 'b', text: 'Papaya' }, { id: 'c', text: 'Pineapple' }, { id: 'd', text: 'Coconut' }],
      correctAnswer: 'c', explanation: 'Pineapples have a leafy crown!', funFact: 'It takes 2-3 years for a pineapple to grow!'
    },
    {
      type: 'mcq', question: 'What vegetable is used to make pickles?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Zucchini' }, { id: 'b', text: 'Cucumber' }, { id: 'c', text: 'Squash' }, { id: 'd', text: 'Eggplant' }],
      correctAnswer: 'b', explanation: 'Pickles are made from cucumbers!', funFact: 'Cleopatra believed pickles made her beautiful!'
    },
  ],
  hard: [
    {
      type: 'mcq', question: 'What is the process of turning grapes into wine called?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Pasteurization' }, { id: 'b', text: 'Fermentation' }, { id: 'c', text: 'Distillation' }, { id: 'd', text: 'Oxidation' }],
      correctAnswer: 'b', explanation: 'Fermentation converts sugar to alcohol!', funFact: 'Yeast is essential for fermentation!'
    },
    {
      type: 'mcq', question: 'Which compound gives turmeric its yellow color?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Chlorophyll' }, { id: 'b', text: 'Curcumin' }, { id: 'c', text: 'Carotene' }, { id: 'd', text: 'Lycopene' }],
      correctAnswer: 'b', explanation: 'Curcumin gives turmeric its color!', funFact: 'Curcumin has anti-inflammatory properties!'
    },
    {
      type: 'mcq', question: 'What fruit is known as a "modified berry"?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Strawberry' }, { id: 'b', text: 'Banana' }, { id: 'c', text: 'Raspberry' }, { id: 'd', text: 'Blueberry' }],
      correctAnswer: 'b', explanation: 'Bananas are botanically modified berries!', funFact: 'Strawberries and raspberries are not true berries!'
    },
    {
      type: 'mcq', question: 'Which pigment makes tomatoes red?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Chlorophyll' }, { id: 'b', text: 'Anthocyanin' }, { id: 'c', text: 'Lycopene' }, { id: 'd', text: 'Carotene' }],
      correctAnswer: 'c', explanation: 'Lycopene gives tomatoes their red color!', funFact: 'Lycopene is a powerful antioxidant!'
    },
    {
      type: 'mcq', question: 'What is the Scoville scale used to measure?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Sweetness' }, { id: 'b', text: 'Acidity' }, { id: 'c', text: 'Spiciness' }, { id: 'd', text: 'Bitterness' }],
      correctAnswer: 'c', explanation: 'The Scoville scale measures pepper heat!', funFact: 'Bell peppers have zero Scoville units!'
    },
    {
      type: 'mcq', question: 'Which fruit contains the enzyme bromelain?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Papaya' }, { id: 'b', text: 'Pineapple' }, { id: 'c', text: 'Mango' }, { id: 'd', text: 'Kiwi' }],
      correctAnswer: 'b', explanation: 'Pineapple contains bromelain!', funFact: 'Bromelain can tenderize meat!'
    },
    {
      type: 'true-false', question: 'Botanically, strawberries are not true berries.', categoryId: 'fruits-veggies',
      options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
      correctAnswer: 'true', explanation: 'Strawberries are "accessory fruits"!', funFact: 'True berries include bananas and grapes!'
    },
    {
      type: 'mcq', question: 'What causes fruit to ripen faster when stored together?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Ethylene gas' }, { id: 'c', text: 'Carbon dioxide' }, { id: 'd', text: 'Nitrogen' }],
      correctAnswer: 'b', explanation: 'Ethylene gas triggers ripening!', funFact: 'Apples produce lots of ethylene!'
    },
    {
      type: 'mcq', question: 'Which vegetable family includes cabbage, broccoli, and cauliflower?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Nightshade' }, { id: 'b', text: 'Cruciferous' }, { id: 'c', text: 'Allium' }, { id: 'd', text: 'Legume' }],
      correctAnswer: 'b', explanation: 'They belong to the cruciferous family!', funFact: 'The name means "cross-bearing" from flower shape!'
    },
    {
      type: 'mcq', question: 'What is the worlds most expensive spice by weight?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Vanilla' }, { id: 'b', text: 'Cardamom' }, { id: 'c', text: 'Saffron' }, { id: 'd', text: 'Cinnamon' }],
      correctAnswer: 'c', explanation: 'Saffron is the most expensive spice!', funFact: 'It takes 75,000 flowers to make 1 pound!'
    },
    {
      type: 'mcq', question: 'Which fruit is known as the "superfruit" for its antioxidants?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Apple' }, { id: 'b', text: 'Acai' }, { id: 'c', text: 'Banana' }, { id: 'd', text: 'Orange' }],
      correctAnswer: 'b', explanation: 'Acai berries are packed with antioxidants!', funFact: 'They grow on palm trees in the Amazon!'
    },
    {
      type: 'mcq', question: 'What compound in garlic gives it its distinctive smell?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Sulfur compounds' }, { id: 'b', text: 'Nitrogen' }, { id: 'c', text: 'Carbon' }, { id: 'd', text: 'Phosphorus' }],
      correctAnswer: 'a', explanation: 'Sulfur compounds create garlics smell!', funFact: 'Allicin is released when garlic is crushed!'
    },
    {
      type: 'mcq', question: 'Which fruit was once so valuable it was called "black gold"?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Coffee' }, { id: 'b', text: 'Pepper' }, { id: 'c', text: 'Cacao' }, { id: 'd', text: 'Vanilla' }],
      correctAnswer: 'b', explanation: 'Peppercorns were once called black gold!', funFact: 'They were used as currency in ancient times!'
    },
    {
      type: 'mcq', question: 'What is the term for plants that complete their life cycle in one year?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Perennial' }, { id: 'b', text: 'Annual' }, { id: 'c', text: 'Biennial' }, { id: 'd', text: 'Evergreen' }],
      correctAnswer: 'b', explanation: 'Annual plants live for one growing season!', funFact: 'Most vegetables are annuals!'
    },
    {
      type: 'mcq', question: 'Which nutrient makes leafy greens green?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Iron' }, { id: 'b', text: 'Chlorophyll' }, { id: 'c', text: 'Magnesium' }, { id: 'd', text: 'Calcium' }],
      correctAnswer: 'b', explanation: 'Chlorophyll gives plants their green color!', funFact: 'Chlorophyll absorbs light for photosynthesis!'
    },
    {
      type: 'mcq', question: 'What percentage of an apple is water?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: '65%' }, { id: 'b', text: '75%' }, { id: 'c', text: '85%' }, { id: 'd', text: '95%' }],
      correctAnswer: 'c', explanation: 'Apples are about 85% water!', funFact: 'Thats why they are so refreshing!'
    },
    {
      type: 'mcq', question: 'Which vitamin is synthesized in the body through sun exposure?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Vitamin A' }, { id: 'b', text: 'Vitamin C' }, { id: 'c', text: 'Vitamin D' }, { id: 'd', text: 'Vitamin E' }],
      correctAnswer: 'c', explanation: 'Vitamin D is made from sunlight!', funFact: 'Mushrooms exposed to UV light contain Vitamin D!'
    },
    {
      type: 'mcq', question: 'What is the botanical classification of a coconut?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Nut' }, { id: 'b', text: 'Fruit' }, { id: 'c', text: 'Seed' }, { id: 'd', text: 'All of the above' }],
      correctAnswer: 'd', explanation: 'Coconut is a fruit, nut, AND seed!', funFact: 'Its technically a "drupe" or stone fruit!'
    },
    {
      type: 'mcq', question: 'Which country is the origin of the tomato?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Italy' }, { id: 'b', text: 'Spain' }, { id: 'c', text: 'Mexico/Peru' }, { id: 'd', text: 'India' }],
      correctAnswer: 'c', explanation: 'Tomatoes originated in South America!', funFact: 'Europeans once thought tomatoes were poisonous!'
    },
    {
      type: 'mcq', question: 'What is the process called when vegetables are briefly boiled then cooled?', categoryId: 'fruits-veggies',
      options: [{ id: 'a', text: 'Sauteing' }, { id: 'b', text: 'Blanching' }, { id: 'c', text: 'Braising' }, { id: 'd', text: 'Steaming' }],
      correctAnswer: 'b', explanation: 'Blanching preserves color and nutrients!', funFact: 'Its often done before freezing vegetables!'
    },
  ],
};
