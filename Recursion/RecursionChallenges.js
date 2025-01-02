/**
 * Reverses a given string using recursion.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 *
 * @example
 * // Example usage:
 * console.log(reverseString("hello")); // Output: "olleh"
 */

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// iterative solution
function reverseIterative(str) {
    let reversed = '';
    console.log(str.length)
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
console.log(reverseIterative("hello")); // Output: "olleh"