// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exp){
    let ans = 1;
    if(exp === 0) return ans;
    ans = ans * base;
    return ans * power(base, exp-1)
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16




// factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    let ans = 1;
    if (num === 0) return 1
    ans = ans * num;
    return ans * factorial(num-1); 
 }
 
//  productOfArray
//  Write a function called productOfArray which takes in an array of numbers and returns the product of them all.


 // productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if (arr.length === 0) return 1;
    let product = 1;
    product = product * arr[0];
    return product * productOfArray(arr.slice(1));
    
}
 


// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    if (num == 0) return 0;
    let sum = 0;
    sum = sum + num;
    return sum + recursiveRange(num - 1)
 }
 


/**   fib
 Write a recursive function called fib which accepts a number and returns the nth number in
 numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number
 the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole
 thereafter is equal to the sum of the previous two numbers. */

 // fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
 


