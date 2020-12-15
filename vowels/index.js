// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
 
    let vowel = ['a', 'e', 'i', 'o' , 'u']
    let count = 0;

    for (let char of vowel){

        if (str.toLowerCase().includes(char)){
             count ++;
         } 
    }
    return count
}

//2nd solution

function vowels(str){

    let matched = str.match(/[aoeiu]/gi)
    return matched? matched.length : 0
}