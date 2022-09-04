// Link: https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
// Odd-Even string sort: 
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

// Solution 1:

function sortMyString(S) {
    let even = S.split('').filter((v, i) => i%2 ===0).join('')
    let odd = S.split('').filter((v, i) => i %2 !==0).join('')
    return even + ' ' + odd
  }

// Solution 2:
function sortMyString(S) {
    let even = [], odd = [];
    S.split('').forEach((e, i) => { i % 2 === 0 ? even.push(e) : odd.push(e) })
    return `${even.join('')} ${odd.join('')}`;
  }

// Test:
console.log(sortMyString('codewars')) //"cdwr oeas