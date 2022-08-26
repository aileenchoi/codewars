// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Solution:

function solution(str, ending){
    return str.endsWith(ending);
  }


// Tests:
console.log(solution('abc', 'bc')) //returns true
console.log(solution('abc', 'd')) //returns false