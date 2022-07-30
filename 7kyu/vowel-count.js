// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// P: string
// R: number
// E
// P:
// make a function that filters or maps through the string and counts number of vowels then outputs as a number 

function getCount(str) {
    let m = str.match(/[aieou]/gi);
    return m === null ? 0 : m.length;
  }

console.log(getCount('dog'))//1
console.log(getCount('aeiouy'))//5
console.log(getCount('apple'))//2
