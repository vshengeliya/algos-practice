function palindrome (str){
    let reversed = str.split('').reverse().join('')
    return reversed === str;
} 

console.log(palindrome('12321'))
