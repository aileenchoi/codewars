// Link:
// Substituting Variables Into Strings: Padded Numbers

// Instructions:
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:
// solution(5) // should return "Value is 00005"

// Solution 1:
function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }

// Solution 2:
function solution(value){
    return 'value is ' + `${value}`.padStart(5,0)
  }

// Tests:
console.log(solution(5)) //00005
console.log(solution(123)) //00123
console.log(solution(1255)) //01255