// Link: https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

// Write a function that returns a string in which firstname is swapped with last name.

// Solution:
function nameShuffler(str){
    let fullName = str.split(' ')
    return [fullName[1], fullName[0]].join(' ')
  }

// Tests:
console.log(nameShuffler('john mclane')) //'mclane john"
console.log(nameShuffler('tom jerry')) //'jerry tom'
console.log(nameShuffler('ann perkins')) //'perkins ann'
