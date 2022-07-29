// Even or odd: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//P: takes in an integer? string? array?
//R: Return string 'even' for even numbers or 'odd' for odd numbers
//E:
//P: Make a function where you put in a number 

// Using a conditional, Use modulus to find out if even or odd

function even_or_odd(number) {
    if(number%2 === 0) {
        return('even')
    } else {
        return('odd')
    }
}

// tests
// console.log(even_or_odd(3)odd)
// console.log(even_or_odd(2)even)
// console.log(even_or_odd(-2)even)
