// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    //     // Make an empty array
    //     // Split the input string by spaces to get an array
    //     /// For each words in the array
    //         //Uppercase the first letter of the word
    //         // Join the forst latter wih the rest of the string
    //         // Push the result into the 'words' array
    //     // Join 'workds' into a string and return it

    let words = [];

    for (let word of str.split(' ')){
         words.push( word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

// //2nd solution

function capitalize (str){
    
    //     //Create an empty string called 'result'
    //     //For each character in the string
    //         //If the character to the left a space
    //             //Capitalize it and add it to 'result
    //         //Else 
    //             //Add it to 'result'

    let result =[str[0].toUpperCase()];

    for (let i=1; i < str.length; i++){
      if (str[i-1] === ' '){
          result += str[i].toUpperCase()
      } else {
          result += str[i]
      }
    }
    return result  
    }

    console.log (capitalize('hi there, you are cool'))