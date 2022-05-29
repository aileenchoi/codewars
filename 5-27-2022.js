// Convert boolean values to strings 'yes' or 'no'

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// P: a boolean value: true or false, what about null?
// R: Return a string 'yes' or 'no'
// E
// P:
// make a function that takes in bool
// conditional: if bool = true, return 'true'

function boolToWord( bool ){
    if(bool === true) {
        return 'Yes'
    } else {
        return 'No'
    }
  }

const boolToWord = bool => bool === true ? 'Yes' : 'No'

console.log(boolToWord(true)'yes')
console.log(boolToWord(false)'no')