// 21.a - b
 const add = () => console.log(2 + 3);

//  add();
//  add();

 function runTwice(fun) {
    fun();
    fun();
 }

 runTwice(() => console.log('12B'));

 runTwice(add);

//  12.c - d

document.querySelector('.js-start-button')
 .addEventListener('click', () => changeText());

function changeText() {
  const buttonElement = document.querySelector('.js-start-button');
  
  setTimeout(() => {
    buttonElement.innerHTML = 'Finished!';
  }, 1000);

  buttonElement.innerHTML = 'Loading...';
}

// 12.e
let timeoutId;

document.querySelector('.js-add-to-cart-button')
 .addEventListener('click', () => displayMessage());

function displayMessage() {
  const buttonElement = document.querySelector('.js-add-to-cart-status');
  buttonElement.innerHTML = 'Added!'
  
  //First, cancel the previous timeout so that
  //it doesn't remove the message too quickly
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
      buttonElement.innerHTML = '';
  }, 2000);
}

// 12.f - g - h - i
let messages = 2;

// Save the intervalId in case we need to cancel it.
let intervalId;

// We'll use this variable to keep track of wether
// or not we're displaying the notification
let isDisplayingNotification;

displayNotification();

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    messages++;
    displayNotification();
  });

function displayNotification() {
  // if we're already displaying the notification
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if(isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(() => {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}


document.querySelector('.js-remove-button')
  .addEventListener('click', () => {
    if (messages > 0) {
      messages--;

      if (messages === 0) {
        stopNotification();
      }
    }
  });

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = 'App';
}


// 12.j and 12.k
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 5));

// 12.l
const countPositive = nums => {
  let positiveNums = [];
  nums.forEach((num) => {
    if (num > 0) {
      positiveNums.push(num);
    }
  });

  return positiveNums.length;
};

// or

const countPositive2 = nums => {
  let positiveNums = 0;

  nums.forEach(num => {
    if (num > 0) {
      positiveNums++;
    }
  })

  return positiveNums;
};

// or

const countPositive3 = nums => {
  const positiveNums = nums.filter(num => num > 0);
  return positiveNums.length;
};

console.log(countPositive([2, -3, 6, 7, -1, 0, 12]));
console.log(countPositive2([2, -3, 6, 7, -1, 0, 12]));
console.log(countPositive3([2, -3, 6, 7, -1, 0, 12]));

// 12.m
const addNum = (array, num) => array.map(value => value + num);
const addText = (array, text) => array.map(value => text);

console.log(addNum([1, 2, 3], ' is my lucky number'));

// 12. n and 12.o
const grocery = ['potatoes', 'egg', 'egg', 'fish', 'egg', 'apples'];


const removeEgg = (foods => foods.filter(food => food !== 'egg'));

console.log(removeEgg(grocery));


function removeFirstEggs(foods) {
  let eggsRemoved = 0;

  return foods.filter(food => {
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  })
};

console.log(removeFirstEggs(grocery));