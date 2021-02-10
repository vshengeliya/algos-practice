// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {

    let slow = list.head; // both pointing to the beginning of the list
    let fast = list.head;

    while (fast.next && fast.next.next){ // as long as there is a two last nodes exists - advance in a lopp
        slow = slow.next;
        fast = fast.next.next;
    }// esle we reach the end of the list with the fast variable and our slow variable is exactly in the middle of the list
    // or in the last node of the first half.

    return slow;//return it
}