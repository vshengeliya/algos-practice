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