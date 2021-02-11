// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

    const arr = [root, 's'];
    const counter = [0];

    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counter.push(0); //once reached the end of the array - create a new element in the counter array, and 
            arr.push('s') //push 's' in the end of the original array
        } else {

            arr.push(...node.children); //if not - push all the cildren 
            counter[counter.length-1]++; //increement the element in the counter;
        }
    }

    return counter;

}