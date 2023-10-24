/*
greeting(); //hi
function greeting() {
  console.log('hi');
}

greeting(); //hi

const num = 2;
const function1 = function() {
  console.log('hello');
}

function1();

const object1 = {
  num: 2,
  fun: function() {
    console.log('hellloo');
  }
};

object1.fun(); // hellloo

function display(param) {
  console.log(param);
}

display('Ciao'); // Ciao
display(object1.num); // 2

function run(param) {
  param();
}
run(function() {
  console.log('hello 4th july!');
});
*/

// //////////////////////

/*
setTimeout(function() {
  console.log('timeout');
  console.log('timeout two');
}, 3000);

console.log('next line');

setInterval(function() {
  console.log('interval');
}, 3000);

console.log('next line 2');
*/

// /////////////////////////

// .forEach() method
/*
const chores = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];
chores.forEach((value, index) => {
  if(value === 'wash dishes') {
    return; // skip
  }

  console.log(value, index);
});

const updatedChoresList = chores.filter(value => value !== 'wash dishes');

console.log(chores);
console.log(updatedChoresList);

// Arrow functions
const regularFunction = function(param, param2) {
  console.log('ciao');
  return 5;
};

const arrowFunction = (param, param2) => {
  console.log('Ciao');
  return 5;
};

arrowFunction();

const oneParam = param => {
  console.log(param + 1);
};

oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
  // method: () => {
    
  // },
  method() {

  }
};
*/

/*
const buttonElement = document.querySelector('.js-button');

const eventListener = () => {
  console.log('click');
};
const eventListener2 = () => {
  console.log('click 2');
}
buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', eventListener2);
*/

// /////////////////////

// .filter()
console.log([1, -3, 5].filter((value, index) => value >= 0));

// .map()
console.log([1, 1, 3].map(value => value * 2));

// .filter() + .map()
console.log([1, -3, 5].filter(value => value >= 0)
                      .map(value => value * 2));

// Closure:
//  - if a functions has acces to a value
//  - it will always have acces to that value
