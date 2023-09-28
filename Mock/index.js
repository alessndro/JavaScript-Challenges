/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

// Take in string
function altCaps(str){
    
    // Initialize newString
    let newString = ''
    
    // Loop over all letters
    for (let i = 0; i < str.length; i++)
    {
        // Capitalize every even index's letter
        if (i % 2 === 0) {
            newString = newString + str[i].toUpperCase()
        }
        else {
            newString = newString + str[i]
        }
    }
    
    // Return complete new string
    return newString
}

// Write test cases 
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"))