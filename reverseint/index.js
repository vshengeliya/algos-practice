// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//1 st solution
function reverseInt(n) {

    let reversed;
    if (Math.sign(n)===1 ||  n === 0){
        reversed = parseInt(n.toString().split('').reverse().join(''))
    } else {
        reversed = parseInt('-' + parseInt(n.toString().split('').reverse().join('')))    
    }
    return reversed
}

  // 2nd solution
  function reverseInt2(n){
    let reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(-5))

//Math.sign() returns 1 is positive number, return 0 if negative number
//ParseInt 
//toString