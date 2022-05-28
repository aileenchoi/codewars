function removeChar(str){
    let newStr = str.slice(1,str.length-1)
    return newStr
   };
   
   const removeChar = str => str.slice(1,-1)

console.log(removeChar('eloquent'))//loquen
console.log(removeChar('tired'))//ire
console.log(removeChar('sushi'))//ush

// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    return str.split('').reverse().join('')
}

const solution = str => str.split('').reverse().join('')

// Tests
// console.log(solution('world')) ///dlrow
// console.log(solution('mom')) ///mom
// console.log(solution('awerwe')) ///ewrewa