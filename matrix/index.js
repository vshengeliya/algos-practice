// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    //Create an empty aray called 'results'
    // Create a counter variable, starting at 1
    // As long as (start column <= end column) and (start row <= end row)
        //Loop from strt column to end column
            //As results [start_row][i] assign counter variable
            //Increment couner
        //Increment start row
        //Loop from strt row to end row
            //At results[i][end_column] aggidn counter variable
            //Increment counter
        //Decrement end row
        //..repeat for other tow sides

    let rusults = []
    let counter = 1
    
    
}