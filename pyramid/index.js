// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    // From 0 to n (iterate through rows)
    //Create an empty string, 'level'
    // From 0 to 2 * n-1(columns)
    //IF the column sould have a #
    //Add a '#' to 'level'
    //ELSE
    //Add a space to 'level'
    //Console log 'level'

    const midpoint = Math.floor(( 2 * n - 1)/2);
    //get the mid number from the array expm. [0,1,2,3,4] = if we hav e 5 column and 3 rows, midpoint  = 2

        for (let row = 0; row < n; row++ ){
            let level = ''
            
                for (column = 0; column < 2 * n-1; column++){
                    if ( midpoint - row <= column && midpoint + row >= column){
                        level += '#'
                    } else{
                        level += ' '
                    }
                }
            console.log(level)
        }  
}

//2nd solution using recursion 

function pyramid(n, row = 0, level = ''){

    if (row === n){
        return;
    }

    if (level.length === 2 * n -1 ){
        console.log(level)
        return pyramid (n, row +1);
    }
    const midpoint = Math.floor((2 * n -1)/2);
    let add;

    if (midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#'
    } else {
        add =' '
    }
    pyramid (n,row, level+add);
}



