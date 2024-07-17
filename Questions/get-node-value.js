/*
Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
*/

class Node {
   constructor(val) {
     this.val = val;
     this.next = null;
   }
}

// iterative
// const getNodeValue = (head, index) => {
//     // store the head
//     let current = head;
//     // counter variable
//     let counter = 0;
//     // while the current is not null
//     while (current !== null) {
//         // if counter is equal to index return current value
//         if (counter === index) return current.val;
//         // incremement current
//         current = current.next;
//         // increment counter
//         counter += 1;
//     }
//     // return null
//     return null;
// }

//recursive
const getNodeValue = (head, index) => {
    if (head === null) return null
    if (index === 0) return head.val;
    return getNodeValue(head.next, index - 1);
}

// test
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'