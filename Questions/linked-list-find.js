/*
Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
   constructor(val) {
     this.val = val;
     this.next = null;
    }
}

// iterative
const linkedListFind = (head, target) => {
    let current = head;
    // while loop
    while (current !== null) {
        // if current is equal to the target return true
        if (current.val === target) return true;
        // declare the next node from current the head
        current = current.next;
    }
    // return false if a match is not found
    return false;
}

// const linkedListFind = (head, target) => {
//     if (head === null) return false;
//     if (head.val === target) return true;
//     return linkedListFind(head.next, target);
// }

// tests
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListFind(a,'c'));