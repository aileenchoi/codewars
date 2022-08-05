// Square Every Digit: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

  // P: integer
  // R: integer, all squared and concatenated
  // E: 9119 -> 811181 
  // 505 ->25025
  // 123 -> 149
  
  // P: convert the integer into a string
  // split into an array
  // use map to square each item and push to a new array
  // Join
  // Convert string to integer and return

function squareDigits(num){
    let number = '' + num;
    let newNum = new Array();
    number.split('').map(n => {
      newNum.push(n**2)
    })
    return parseInt(newNum.join(''))
  }
  
// refactored solution: 
function squareDigits(num){
    let newNum = new Array();
   return parseInt((''+num).split('').map(n=>n**2).join(''))
}
