var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";
var grilledCheeseIngredients = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'];
var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano'];
var chocolatBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var myArray = [1,2,3];


function addElementToBeginningOfArray(myArray,x){
  
  var myNewArray = myArray;myArray.unshift(`x`);
  return myNewArray;
}


function destructivelyAddElementToEndOfArray(myArray,y){
  myArray[0] = `y`;
  return myArray;
}
