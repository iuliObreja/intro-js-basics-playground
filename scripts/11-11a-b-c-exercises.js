// 11.a
const nums =  [10, 20, 30];
nums[2] = 99;
console.log(nums);

// 11.b
function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([2, 3, 5]));

// 11.c
function arraySwap(array) {
  const lastIndex = array.length - 1;

  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}

console.log(arraySwap([1, 2, 3]));

// 11.d
for (let i = 0; i <= 10; i+=2) {
  console.log(i);
}

//11.e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

//11.f
let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}


i = 5;

while (i >= 0) {
  console.log(i);
  i--;
}


//11.g
const array = [2, 3, 41, 32];
// const result = [];

// for (let i = 0; i < array.length; i++) {
//   result.push(array[i] + 1);
// }

// console.log(result);

// 11.h
const arraySecond = [12, 12, 44, 67, -2];

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }
  
  console.log(result);
}

addOne(arraySecond);

// 11.i
const array3 = [2, 5, 8];

function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }
  console.log(result);
}

addNum(array3, 3);

// 11.j
const array1 = [1, 2, 3];
const array2 = [8, 9, 10];

function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  return result;
}

console.log(addArrays(array1, array2));

// 11.k
const array5 = [2, 5, -3, 0, 1, 8, -4];

function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }

  return result;
}

console.log(countPositive(array5));

// 11.l and m
const arrayNums = [2, 8, -4, 5, -2, 10];
const arrayNull = [];
const arraySingleNum = [10]; 

function minMax(nums) {
  const minMaxObj = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    console.log(`The value is ${value}`);

    if (minMaxObj === null || value < minMaxObj.min) {
      minMaxObj.min = value;
      console.log(`Minimum num is: ${minMaxObj.min}`);
    }

    if (minMaxObj === null || value > minMaxObj.max) {
      minMaxObj.max = value;
      console.log(`Maximum num is: ${minMaxObj.max}`);
    }
  }

  return minMaxObj;
}

console.log(minMax(arrayNums));
console.log(minMax(arrayNull));
console.log(minMax(arraySingleNum));
console.log(minMax([2]));

//11.n
function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if(!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));