// write a function called same, which accepts two arrays. 
// The function should return true if every value true in the array has it's corresponding
//  value squared in the second array.The freq of values must be te same.

same([1,2,4], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1],[4,4,1]) //true
 

// A naive solution

function same(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false
    }

    for(let i =0; i<arr1.length; i++){
        let valuePresent = arr2.indexOf(arr1[i]**2);
        if(valuePresent == -1){
            return false
        }
        arr2.splice(valuePresent, 1)
    }
    return true
}

// Test cases
// console.log(same([1, 2, 4], [4, 1, 16])); // true
// console.log(same([1, 2, 3], [1, 9,])); // false
// console.log(same([1, 2, 1], [4, 1, 1])); // true


// Refactored solution

  
function sameRefactored(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        console.log(val)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
    }

    return true
}

//Test cases

console.log(sameRefactored([1, 2, 4], [4, 1, 16])); // true
console.log(sameRefactored([1, 2, 3], [1, 9,])); // false
console.log(sameRefactored([1, 2, 1], [4, 1, 1])); // true