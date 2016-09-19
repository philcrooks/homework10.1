// #JS Day 1 Homework

// Go through each sample code and work out what the output will be and explain what happened.

// ### Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// Prediction: 'My name is Keith'
// Actual: as prediction


// ### Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// Prediction: 3
// Actual: as prediction


// ### Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// Prediction:
// 0: Ducks
// 1: Dogs
// 2: Lions
// Actual: as prediction


// ### Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// Prediction:
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is:Keith
// Actual: as prediction


// ### Episode 5

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// Prediction: Poirot
// Actual: as prediction


// ### Episode 6

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// Prediction: the murderer is  rick
// Actual: as prediction


// ### Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var murderer = 'rick';

var anotherFunction = function (aFunction) {
  aFunction();
}

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  anotherFunction(innerFunction);
  return murderer;
}

console.log('the murderer is ' + outerFunction());

// Prediction: the murderer is valerie
// Actual: as prediction but this is far from obvious - this is a closure!!!
