// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//1st solution
function reverse(str) {
    let reversed = '';
    for (let character of str){
        reversed = character + reversed
    }
      return reversed;
  }

//2nd solution
function reverse(str){
    let reversedStr = [...str].reverse().join('')
    return reversedStr
}

//3rd solution
function reverse(str) {
    return str.split('').reduce((rev, char) => char+ rev , '')
  }
