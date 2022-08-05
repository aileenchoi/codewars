// Return negative: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// P: positive or negative integers , except zero
// R: return a negative number
// E:
// P: 
// make a function that takes a number and turns it negative
// conditional? if num > 0, return -num 
// if num < 0 return regular 


function makeNegative(num) {
    if (num > 0) {
        return -num
    } else if(num < 0) {
        return num
    } else {
       return 'NaN'
    }
  }

console.log(makeNegative(2)-2)
console.log(makeNegative(-2)-2)
console.log(makeNegative(0)-none)