// // --- Directions
// // Write a function that accepts an integer N
// // and returns a NxN spiral matrix.
// // --- Examples
// //   matrix(2)
// //     [[1, 2],
// //     [4, 3]]
// //   matrix(3)
// //     [[1, 2, 3],
// //     [8, 9, 4],
// //     [7, 6, 5]]
// //  matrix(4)
// //     [[1,   2,  3, 4],
// //     [12, 13, 14, 5],
// //     [11, 16, 15, 6],
// //     [10,  9,  8, 7]]

// function matrix(n) {

//     //Create an empty aray called 'results'
//     // Create a counter variable, starting at 1
//     // As long as (start column <= end column) and (start row <= end row)
//         //Loop from strt column to end column
//             //As results [start_row][i] assign counter variable
//             //Increment couner
//         //Increment start row
//         //Loop from strt row to end row
//             //At results[i][end_column] aggidn counter variable
//             //Increment counter
//         //Decrement end row
//         //..repeat for other tow sides

//     let results = []

//     for (let i=0; i < n; i++){
//         results.push([]);
//     }
//     let counter = 1;
//     let startColumn =0;
//     let endColumn = n-1;
//     let startRow = 0;
//     let endRow = n-1;

//     while (startColumn <= endColumn && startRow <= endRow){
//         //Top row
//         for (let i = startColumn; i <= endColumn; i++){
//             results[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;

//         //Right column
//         for (let i = startRow; i <= endRow; i++){
//             results[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;

//         //Bottom row
//         for (let i = endColumn; i >= startColumn; i--){
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;

//         //start column
//         for (let i = endRow; i >= startRow; i--){
//             results[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }

// return results;




// }
    // var xs = [1,2,3]

    // function sum(xs){
    //     for (let num of xs){
    //         return num+1
    //     };
    // }

    // sum()

    // let xs = [1,2,3]


    function fold(xs,init,func) {
        
        let accum = init;
        for (let x of xs){
            accum = func(accum, x);
        }
        return accum;
    }

   let addOne = xs =>fold(xs,[],(accum,x) => { accum.push(x + 1); return accum; })

   let sum = xs => fold(xs,0,(accum,x) => { accum += x; return accum; })
   
    
    console.log(addOne([1,2,3]))
    console.log(sum([1,2,3]))

    