// Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// integer, positive numbers only (no zero or negatives)
// boolean: true or false. true if it is a sqaure, false if it is not
// Examples: 
// console.log(isSquare(-1)) // false (beacuse - cannot be a square)
// console.log(isSquare(0)) //false
// console.log(isSquare(4)) //true
// console.log(isSquare(15)) //false

// pseudocode: if square root of n is a positive integer, return true- check if positive && if square root is a whole number by checking remainder
// else return false 

function isSquare(n) {
    if(n>=0 && Math.sqrt(n)%1 === 0) {
        return true
    } else {
        return false
    }
}

