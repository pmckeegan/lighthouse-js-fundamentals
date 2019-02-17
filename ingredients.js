var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

//let number = 0;
//while (number < 8) {
//  console.log(ingredients[number]);
//  number = number + 1;
//}

// Write a for loop that prints out the contents of ingredients:

//for (let number = 0; number < 8; number = number + 1) {
//  console.log(ingredients[number]);
//}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let number = ingredients.length - 1; number >= 0; number = number - 1){
    console.log(ingredients[number])
}

console.log (ingredients.length + " things to buy at the store.");
