// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache={}; // creating a record of all of the previous calls of the slowFib fucntion and store it
    return function(...args) { // returtning an anonimus function that is or fib function in the last line of code with arguments //that recived to out slowFin fucntion, example: fib(5)
      if (cache[args]) {
        return cache[args];
      };
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    };
 };

 function slowFib(n) {
     if ( n < 2) {
    return n;
    }
     return fib(n - 1) + fib(n - 2);
 };

 const fib = memoize(slowFib);

// function fib(n) {

//     const result = [0, 1];

//     for (let i = 2; i <= n; i++){
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b)
//     }
//     return result[result.length-1]

// }


module.exports = fib;