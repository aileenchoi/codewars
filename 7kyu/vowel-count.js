// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let sumOfVowels = 0;
  let vowelArr= ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    for(let j=0; j<vowelArr.length; j++){
      if(str[i] === vowelArr[j]){
        sumOfVowels++
      }
    }
  }
  return sumOfVowels
}

console.log(getCount('mom'))

// P: string of words
// R: Integers (count of vowels)
// E: mom -> 1
// P: create a variable to hold the sum of vowels, create an array of vowels to loop through and compare the string with. create a for loop for the string of words, with another for loop with the vowel array and add a conditional for if the string loop and the vowel loop are equal, add one to the sum variable.