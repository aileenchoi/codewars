// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// string of letters, ignore letter casing 
// boolean
// hello -> false
// helo -> true
// moOse -> false
// boolean -> false 
// bowl -> true

function isIsogram(string) {
  
    if(string === "") {
      return true
    }
    let str = string.toLowerCase()
    for(let i=0; i<str.length;i++){
        for(let j= i + 1; j<str.length; j++){
            if(str[i]=== str[j]){
                return false
            }
        }
    } 
  return true
}