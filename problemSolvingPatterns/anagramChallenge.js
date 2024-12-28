/**
 * Anagram Challenge
 * 
 * Write a function called `validAnagram` that takes in two strings and checks whether they are anagrams of each other.
 * 
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * 
 * Example:
 * 
 * validAnagram('listen', 'silent') // true
 * validAnagram('hello', 'billion') // false
 * 
 * The function should return true if the two strings are anagrams, and false otherwise.
 */

function validAnagram(first, second){
   if(first.length !== second.length){
    return false;
   }

   const lookup = {};

   for(let i =0; i<first.length; i++){
    let letter = first[i]; 
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }

   for(let i = 0; i<second.length; i++){
    let letter = second[i];
   // can't find letter or letter is zero then it's not an anagram
   if (!(lookup[letter])) {
      return false;
   } else {
      lookup[letter] -= 1;
   }
   }
   return true;
}
console.log(validAnagram('listen', 'silentt'))// true
console.log(validAnagram('sourabh', 'bhsouran')) // false