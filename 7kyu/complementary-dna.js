// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Solution:

function DNAStrand(dna){

    const DNAComplement = {
      'G' : 'C',
      'C' : 'G', 
      'T' : 'A',
      'A' : 'T'
    }
    
    return dna.split('').map(e => DNAComplement[e]).join('')
  }


// Tests: 

console.log(DNAStrand('ACTG')) //TGAC
console.log(DNAStrand('AAAA')) //TTTT
console.log(DNAStrand('GCGC')) //CGCG

