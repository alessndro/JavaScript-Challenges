import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    const savoryArrayTotal = arr.reduce((acc, item) => {
        if (item.type === 'savory') {
            console.log(item.price)
            return acc + item.price
        }
        return acc
    }, 0)
    return savoryArrayTotal
}

console.log(totalSavory(shoppingCart));

