// Convert boolean values to strings 'yes' or 'no'

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if(bool === true) {
        return 'Yes'
    } else {
        return 'No'
    }
  }

//   Optimized
const boolToWord = bool => bool === true ? 'Yes' : 'No'

// tests
// console.log(boolToWord(true)'yes')
// console.log(boolToWord(false)'no')
