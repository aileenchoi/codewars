// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// P: string of numbers and spaces
// R: string of highest and lowest number
// E: 12345 -> 5 1
// P: Split string into an array
// sort them a - b (least to greatest) 
// join last and first 

function highAndLow(numbers){
    const arr = numbers.split(' ').sort(function(a,b){return a - b})
    return arr[arr.length - 1] + ' ' + arr[0]
  }