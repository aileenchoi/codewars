// Sum of two lowest positive integers
// Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Solution:

function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a, b) => a - b)
    return numbers[0] + numbers [1]
}

// Tests:
console.log(sumTwoSmallestNumbers([1, 3, 2, 4, 8])) //3
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //6
