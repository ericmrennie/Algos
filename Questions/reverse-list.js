/*
Write a function, reverseList, that takes in the head of a linked list as an argument. 
The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
*/

class Node {
   constructor(val) {
     this.val = val;
     this.next = null;
   }
}

// const reverseList = (head) => {
//     // store the head as current variable
//     let current = head;
//     // variable for storing next initially set to null
//     let prev = null;
//     // while current is not null
//     while (current !== null) {
//         const next = current.next;
//         // set the current next to next variable
//         current.next = prev;
//         // set the next variable to equal current
//         prev = current;
//         // increment current
//         current = next;
//     }
//     // return head;
//     return prev;
// }

const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
}

// test
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(reverseList(a));