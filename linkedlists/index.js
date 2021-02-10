// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null){ //when creating a new node, always assign some data to it and next node as null;
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; //when creating a linkedlist, initialize it onlt with head property = null;
    }

    insertFirst(data){

       const node = new Node(data, this.head) //create a new Node with some data and pass an existing node, so the new node can be fist
       this.head = node// reassign the rerrerence to the head with a new node 

    //or simply:
    //  this.head = new Node(data, this.head)

    //2nd soltuon:
    //this.insertAt(data, 0)
    }

    size() {

        let counter = 0;
        let node = this.head;

        while (node){ // as long as we don't reach the last node, keep counting - incrementing the count of nodes
            counter ++;
            node = node.next;
        }
        return counter; // once there is no more node with the property next, next === null; return counter
    }

    getFirst() {
        return this.head //first element of the linked list is always a head


        //2ND solution
        // return getAt(0)
    }

    getLast() {
        if (!this.head) { //if we don't have head node = our linked list is empty
            return null; 
        }

        let node = this.head;

        while (node){ //we start with the head

            if (!node.next){// if our node doesn't have a next property - we are at the end of the linked list
                return node; //return this node then
            } //otherwise
            node = node.next; // reassign out node --> next node and continie the while loop
        }

        //2nd Solution:
        // return this.getAt(this.size()-1)

    }

    clear(){
        this.head =null; //just simply reassign the head node to null, to clean the linked list

    }

    removeFirst() {

         if (!this.head){ //if we don't have head node = our linked list is empty
             return;
            }
        this.head = this.head.next //remove first node by addigning the head to the next node

    }

    removeLast(){

        if (!this.head){//if we don't have head node = our linked list is empty
            return;
        }

        if (!this.head.next){ // if we don't have a next node, it equals to null
         this.head = null; //we have only one node - head, assign head to null;
         return;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next) { //as long as next element from the element next to head exists
            previous = node; // reassign it to prevoius
            node = node.next; // reassign next to node
        }// else

        previous.next = null;//remove the last element by assigning it to null.

    }

    insertLast(data) {

        const last = this.getLast()

        if (last){
            // There are some existing nodes in our chain
            last.next = new Node(data)
        } else{
            //The chain is empty
            this.head = new Node(data)
        }
    }

    getAt(index) {
 
        let node = this.head
        let counter = 0;

        while(node){ //as long as node is exist
            if (counter === index){ //if out index same as counter, means we found a note
                return node;
            } 
            node = node.next //if not, assing node to a next node and increment the counter
            counter ++;
        }
        return null;// otherwise return null
    }

    removeAt(index) {

        if(!this.head) {
            return;
        }

        if(index === 0) { //if no head
            this.head = this.head.next; //assign next node to head
            return;
        }
 
        let previous = this.getAt(index-1) //get the prevous node
        let next = this.getAt(index+1)// get the next note

        if (!previous || !previous.next){ //if no previous node or no next
            return;
        }

        previous.next = next // reestablish the connection skipping the cirrent node
        // previous.next = previous.next.next // as another version 

    }

    insertAt(data, index) {

        //insert a node to an empty list
        //index is out of bounce 12, add to the very end;
        // use getAt method to get a reference to the prevous node
        //carete the new node
        //new node point to the 
        
        if(!this.head) {
            this.head = new Node(data); //if our list is empty, create a fist node with the head
            return;
        }

        if(index === 0) {
            this.head = new Node (data, this.head); // if we need to insert the noew node to the beginning of the linked list - 
            //assign new node and make next agr to an old head
            return;
        }

       let previous =  this.getAt(index-1) || this.getLast(); // previous is the one before the new one that had to be insert or the last element in the linked list
       // if the index is out of bounce 
       let node = new Node(data, previous.next); // create a node and reassign the next node of the newly created node

       previous.next = node //change the reference of next to the new node

    }   

    forEach(fn) {

        let node = this.head;
        let counter = 0;

        while(node){
            fn(node, counter);
            node  = node.next;
            counter++;
        }
    }

    //need to know how Generators work
    *[Symbol.iterator]() {
        
        let node = this.head;
        while(node){
            yield node;
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };