// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// P: years in the form of a number
// R: number (century)
// E:  1705 -> 18
//  1900 -> 19
// 1010 -> 11
// P: year / 100, then math.ceil to round up to the next largest integer 

function century(year) {
    return Math.ceil(year/100)
  }