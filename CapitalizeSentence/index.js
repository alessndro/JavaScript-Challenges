// Function to capitalize first letter of word
function capitalizeWord(word){
    // Get first letter of string, capitalize
    return word[0].toUpperCase() + word.slice(1)
}

// Function to capitalize every words' first letter in sentence
function toTitleCase(str){
    
    // Split string into array with different words
    let strArray = str.split(' ')
    
    // Map over each word in array, use capitalize function, join into one string
    return strArray.map((word) => {
        return capitalizeWord(word)
    }).join(" ")

}

// // Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));