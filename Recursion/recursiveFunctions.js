function countDown(num){
    if(num == 0){
        console.log("All done !!")
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
// countDown(10);

function countDown(num){
    for(let i = num; i>0; i--){
        console.log(i)
    }
    console.log("All Done")
}

function sumRange(num){
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}
// 10 + 9 +8 +7 +6 +5 +4 +3 +2 +1 = 55

// console.log(sumRange(10));

function factorial(num){
    let total = 1
    for(let i = num; i>1; i-- ){
        total *= i;
    }
    return total;
}
// console.log(factorial(4))

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

function collectOddValues(arr){
    let result = []

    function helperMethod(helperInputArr){
        if (helperInputArr.length == 0) {
            return;
        }
        if(helperInputArr[0] % 2 !== 0){
            result.push(helperInputArr[0])
        }
        helperMethod(helperInputArr.slice(1))
    }
    helperMethod(arr);
    return result;
}


//pure recursion 

function collectOddValues2(arr){

    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] % 2 !==0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues2(arr.splice(1)))
    return newArr;
}
console.log(collectOddValues2([1,9,8,7,5,3,1]));