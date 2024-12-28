// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,1,1,2])
// countUniqueValues([1,2,3,4,4,4,4,4,7,7,12,12,13])
// countUniqueValues([])
// countUniqueValues([-2,-1,-1,0,1]) 

function countUniqueValues(arr){
    if(arr.length == 0){
        return 0;
    }
    let firstPointer = 0;
    for(let j = 1; j<arr.length; j++){
        if(arr[firstPointer] !== arr[j]){
            firstPointer++;
            arr[firstPointer] = arr[j];
        }
        console.log(firstPointer, j)
    }
    return firstPointer+1;
}
console.log(countUniqueValues([1, 1000, 100000, 10000]))