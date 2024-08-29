/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. 
The function should insert a new node with the value into the list at the specified index. 
Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
*/

const insertNode = (head, value, index) => {
    if (index === 0) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }
    let count = 0;
    let current = head;
    // iterate through the linked list
    while (current !== null) {
        // if our count and index match, 
        if (count + 1 === index) {
            const nextNode = current.next;
            current.next = new Node(value);
            current.next.next = nextNode;
        }
        current = current.next;
        // increment count
        count++;
    }
    //return head
    return head;
}

// test
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(insertNode(a, 'x', 2));