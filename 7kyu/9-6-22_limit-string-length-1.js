// Link: https://www.codewars.com/kata/5208fc3cb613bc725f000142/javascript

// Limit string length -1
// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

// Solution:

function solution(string,limit){
    if(string.length > limit){
      return `${string.slice(0, limit)}...`
    } else {
      return string
    }
  }

// Refactored solution:
function solution(string,limit){
    return string.length > limit ? string.substr(0,limit) + "..." : string;
}

// Tests:

console.log(solution('Testing String', 3)) //'Tes...'
console.log(solution('Testing String', 8)) //'Testing ...'
console.log(solution('Test', 8)) //'Test'