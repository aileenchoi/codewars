// Sum of positive: You get an array of numbers, return the sum of all of the positive ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let newArr = arr.filter(n => n > 0)
    return newArr.reduce((acc, c) => acc + c, 0)
}

// tests
// console.log(positiveSum([-1,0,1,4]) 5)
// console.log(positiveSum([-5,5,-5,5]) 10)
// console.log(positiveSum([1, 2, 3, 4, 5]) 15)