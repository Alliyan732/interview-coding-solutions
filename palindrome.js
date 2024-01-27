/*
9. Palindrome Number
Given an integer x, return true if x is a 
palindrome, and false otherwise.

*/

/*
var isPalindrome = function(x) {
    const intString = x.toString();
    const reverseStr = intString.split('').reverse().join('');
    const reverseNumber = parseInt(reverseStr)
    
    return reverseNumber === x
    
}; 

const x = 121
console.log(isPalindrome(x))
*/


var isPalindrome = function(x) {

    if (x < 0) {
        return false
    }

    let orignal = x
    let reverse = 0
    
    while(x > 0){
        let digit = x % 10
        reverse = reverse * 10 + digit
        x = Math.floor(x / 10)
    }

    console.log("reverse: ", reverse, " orignal: ", orignal)
    return reverse === orignal
}

const x = 121
console.log(isPalindrome(x))