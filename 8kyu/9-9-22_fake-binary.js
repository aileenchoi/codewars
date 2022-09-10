// Link: https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript

// Problem: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Solution:

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// Tests:
console.log(fakeBin('1234567890')) //'0000111110'
console.log(fakeBin('2093240329423')) //'0010000001000'
console.log(fakeBin('1509')) //'0101'