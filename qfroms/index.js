// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor(){
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add(record){
        //pushing all the records one by one to Stack 1
        this.stackOne.push(record)
    }

    remove(){
        while (this.stackOne.peek()){ //as long as Stack 1 has a record
            this.stackTwo.push(this.stackOne.pop()) // get the first reacord from Stack 1 that pops out (top) and push it to the Stack 2
        }
        
        const record = this.stackTwo.pop()//to REMOVE the top record from Stack 2 that originally first first record in Stack 1, 
        //so to remove the first record that was in Stack 1.

        //need to return the items back from Stack 2 to Stack 1, so it's ready to call remove method again
        while (this.stackTwo.peek()){//as long as Stack 2 has a record
            this.stackOne.push(this.stackTwo.pop()) // get the first record from Stack 2 that pops out(top) and push it back to the Stack 1
        }

        return record;
            
    }

    peek(){
        while (this.stackOne.peek()){ //as long as Stack 1 has a record
            this.stackTwo.push(this.stackOne.pop()) // get the first reacord from Stack 1 that pops out (top) and push it to the Stack 2
        }
        
        const record = this.stackTwo.peek()//to PEEK the top record from Stack 2 that originally first first record in Stack 1, 
        //so to remove the first record that was in Stack 1.

        //need to return the items back from Stack 2 to Stack 1, so it's ready to call remove method again
        while (this.stackTwo.peek()){//as long as Stack 2 has a record
            this.stackOne.push(this.stackTwo.pop()) // get the first record from Stack 2 that pops out(top) and push it back to the Stack 1
        }

        return record;
    }

}

module.exports = Queue;