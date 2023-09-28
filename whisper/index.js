/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// transform to lower, add shhh, and remove !
function whisper(sentence) {
    // check whether !
    if (sentence.endsWith('!'))
    {
        sentence = sentence.slice(0, - 1) 
    }
    // return lower case sentence potentially without !
    return `shh... ${sentence.toLowerCase()}`
}

console.log(whisper('hallo, my name is!'))

