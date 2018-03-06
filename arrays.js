
//var grilledCheeseIngredients = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'];
//var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano'];

var chocolatBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var myArray = [1,2,3];


function addElementToBeginningOfArray(myArray,x){
  var myNewArray = myArray;
  myNewArray.unshift("x");
  return myNewArray;
}


function destructivelyAddElementToEndOfArray(myArray,y){
  myArray[0] = `y`;
  return myArray;
}

function addElementToEndOfArray(myArray, z){
  var myNewEndArray=myArray;
  myNewEndArray.push("z");
  return myNewEndArray;
}

function destructivelyAddElemntToEndOfArray(myArray, i){
  myArray[2] = "i";
  return myArray;
}

function accessElementInArray(myArray, i){
  return myArray[i];
  
}