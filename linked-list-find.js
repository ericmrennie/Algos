// Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
// The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//input: head & target
//output: boolean indicating whether or not the link list contains the target

const linkedListFind = (head, target) => {
    //store the head in a variable
    let current = head;
    //iterate through the linked list
    while (current != null) {
        console.log(current);
        //if the target is found, return true
        if (current.val === target) return true;
        current = current.next;
    }
    //else return false
    return false;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true
