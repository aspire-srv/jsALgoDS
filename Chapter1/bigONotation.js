// function addUpTo(n){
//     let total = 0;
//     for (let i = 1; i <=n; i++) {
//      total +=i 
//     }
//     return total;
// }

//numbers of operations is bounded by multiple of n(say)

//performance.now works in browser window
// var t1 = performance.now();
// console.log(addUpTo(100000000000))
// var t2 = performance.now();

// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

 
//  function addUpTo(n) {
//     return n*(n+1)/2
//  }

 //always 3 operation  O(1)


//  function countUpAndDown(n) {
//     console.log("Going Up!");
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
//     console.log("Going Down!")
//     for(let j=n-1; j>=0; j--){
//         console.log(j)
//     }
//     console.log("Back down, Bye!")
//  }
//  countUpAndDown(10) 


 function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
            console.log(i,j);
       }
    }
 }
 printAllPairs(8)