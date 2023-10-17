/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){

    // Even number
    if (str.length % 2 == 0)
    {
        const splitIndex = (str.length / 2 ) 
        const part1 = str.substring(0, splitIndex)
        const part2 = str.substring(splitIndex, str.lenght)

        if (part2.split('').reverse().join('') === part1)
        {
            return true
        }
        return false
    }

    // Odd number
    else {
        console.log('odd')
        const splitIndex = Math.ceil((str.length / 2 )) 
        const part1 = str.substring(0, splitIndex)
        const part2 = str.substring((splitIndex - 1), str.lenght)
        
        if (part2.split('').reverse().join('') === part1)
        {
            return true
        }
        return false
    }
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
