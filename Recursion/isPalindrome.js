/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters 
 * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 *
 * @param {string} str - The string to check for palindrome properties.
 * @returns {boolean} - Returns true if the string is a palindrome, otherwise false.
 */

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

// iterative soln

function isPalindromeIterative(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("madam"));   // true
// console.log(isPalindrome("a"));       // true
// console.log(isPalindrome("ab"));      // false

// console.log(isPalindromeIterative("racecar")); // true
// console.log(isPalindromeIterative("hello"));   // false
// console.log(isPalindromeIterative("madam"));   // true
// console.log(isPalindromeIterative("a"));       // true
// console.log(isPalindromeIterative("ab"));      // false

// someRecursive Solution
// Write a function someRecursive that accepts an array and a callback function. 
// The function should return true if any element in the array
//  returns true when passed to the callback function. 
//  Otherwise, it should return false. The function should use recursion to solve the problem.

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

const isGreaterThanTen = val => val => 10;
console.log(someRecursive([1, 2, 10, 4], isGreaterThanTen)); // true