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