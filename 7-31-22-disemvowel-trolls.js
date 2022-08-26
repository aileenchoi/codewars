// Disemvowel Trolls: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// P: string
// R: new string with all vowels removed
// E: "This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!"
// "Haha you suck" -> "HH y sck"
// P: replace with vowels, for each letter, both lowercase and uppercase vowels

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

console.log(disemvowel('This website is for losers LOL!')) //console.logs "Ths wbst s fr lsrs LL!"