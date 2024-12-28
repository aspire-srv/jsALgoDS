/** Write a function called sumZero which accepts a sorted array of integers.
* The function should find the first pair where the sum is 0. 
* Return an array that includes both values that sum to zero or undefined if a pair does not exist. */

//sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
//sumZero([-2, 0, 1, 3]) // undefined
//sumZero([1,2,3]) // undefined

// Naive solution

// function sumOfPairsZero(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j] == 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }

// }

// console.log(sumOfPairsZero([-3, -2, -1, 0, 1, 2, 3, 5]));

// refactored solution

function sumOfPairsZeroRefactored(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(arr[right] + arr[left] == 0){
            return [arr[left], arr[right]]
        }
        if(arr[right]+arr[left] > 0){
            right--;
        } else {
            left++;
        }
    }
}
console.log(sumOfPairsZeroRefactored([-4,-3, -2, -1, 0, 1, 2, 3, 5]));