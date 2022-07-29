// Convert a number to a string 
// We need a function that can transform a number into a string.

// Examples:
// 123 --> "123"
// 999 --> "999"

function numberToString(num) {
    return `${num}`
  }


const numberToString = n => `${n}`

function numberToString(num) {
    return num.toString();
  }

const numberToString = n => n.toString()

console.log(numberToString(-2))
console.log(numberToString(555)'555')
console.log(numberToString(12345)'12345')
