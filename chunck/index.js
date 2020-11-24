// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//create a new array called chunked
//for each element
//check if the last element of the chuncked array is legnth of the given size 
//or if the element deosn't exist
//push this elemnt in the check chunked as new array
//else push the element into the ealiser created chunck
function chunk(array, size) {

    const chunked = [];
    for (let element of array){
        const last = chunked[chunked.length-1];

        if (!last || last.length === size){
            chunked.push([element])
        } else{
            last.push(element);
        }
    }
 return chunked;

}

// 2nd solution
// Create empty 'chunked' array
//Create 'indexi' at 0
//While index is less that arrray.length
 //Push a slice of lenth 'size' from 'array'
 // Add 'size' to 'index'

 function chunk (array, size){
    const chunked = [];
    let index  = 0;

    while (index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
  return chunked
 }