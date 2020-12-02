// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
// From 0 to n (iterate througt rows)
    //Create an empty string, 'stair'
    //From 0 to n (iterate througt columns)
        //If the current column is equal to or less that the current row
            //Add a '#' to 'stair'
        //Else
             //Add space to 'stair'
    //Console log 'stair'

    for (let row = 0; row < n; row++){
        let stair = '';

        for (let column = 0; column < n; column++){
            if (column <= row){
                stair += '#'
            }else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}

console.log(steps(3))

//2nd solution
function steps(n, row = 0, stair = ''){
    //If (row ===n) then we have hit the end of our problem
    //If the 'stair' string has a length === n then we are at the end of row
    //If the length of the stair string is less that or equal to the row number 
    // we are working on, we add '#', otherwise add as space

    if (n === row){
        return;
    }

    if ( n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.string <= row){
        stair +='#'
    } else {
        stair +=' '
    }
    steps(n, row, stair)
}