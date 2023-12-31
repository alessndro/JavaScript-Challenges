import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    let total = arr.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price
    }, 0)
    
    return total.toFixed(2)
}

console.log(total(shoppingCart));
