// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// P: array of integers and strings
// R: new array with numbers
// E: filter_list([1, aesef, 3, 9, ase]) -> [1, 3, 9]
// filter_list([aksjdhf, 0, 3, ewrer, 5]) -> [0, 3, 5]
// P:
// make empty array
// loop through 
// if type of = number, add to empty array
// if not number, don't add
// return number
// or use filter array method: input a variable and if it is a number, return

function filter_list(arr) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            newArr.push(arr[i])
        } 
    } return newArr
}

function filter_list(arr){
    return arr.filter(v => typeof v == 'number')
}
