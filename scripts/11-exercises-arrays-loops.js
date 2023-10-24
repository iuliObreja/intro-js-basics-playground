// 11.o and 11.p
const words = ['toolbar','home','search','logo', 'search'];

let index = -1; 

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);

// 11.q
/*
function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      index = i;
      break;
    }
  }
  return index;
}


const words2 = ['car', 'engine', 'wheel', 'username', 'light', 'username'];

console.log(findIndex(words2, 'username'));
*/

// 11.r and 11.s and 11.t and 11.u
function removeEgg(foods) {
  const reversedFoods = foods.slice().reverse();
  
  const result = [];
  let eggsRemoved = 0;
  for (let i = 0; i < reversedFoods.length; i++) {
    if(reversedFoods[i] === 'eggs' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    } 
      result.push(reversedFoods[i]);
  }
  return result.reverse();
}

const groceryList = [
  'ham', 
  'eggs', 
  'eggs', 
  'spinach', 
  'juice', 
  'eggs', 
  'tomatoes'
];

console.log(removeEgg(groceryList));
console.log(groceryList);

// 11.v -- Fizz-Buzz Game
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');

  } else if (i % 3 === 0) {
    console.log('Fizz');

  } else if (i % 5 === 0) {
    console.log('Buzz');

  } else {
    console.log(i);
  }
 }


// 11.w
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      return i;
    }
  }

  return -1;
}

function unique(array) {
  const result = [];

  for(let i = 0; i < array.length; i++) {
    const word = array[i];

    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }
  return result;
}

const newWords = ['age', 'sex', 'address', 'age', 'place of birth'];
console.log(findIndex(newWords, 'age'));
console.log(unique(newWords));
