// Get the Middle Character- https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples: 

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// P: a string
// R: a strirng of either one or two letters (if the length is odd, it will be the middle one letter. and if it is even, it will be the middle two letters)
// E:
// test -> es
// middle -> dd
// A -> A
// P: if the remainder is 1, slice s.length/2. Else, return and slice the string's length - 1 divided by 2 and the string's length + 1 divided by 2 to get the two middle letters

function getMiddle(s){
    if(s.length/2 === 1){
      return s.slice(s.length/2)
    } else {
      return s.slice((s.length-1)/2, s.length/2+1)
    }
  }