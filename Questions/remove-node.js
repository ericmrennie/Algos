/*
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. 
The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. 
If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

// const removeNode = (head, target) => {
//     // if head equals target, return head.next
//     if (head.val === target) return head.next;
//     // declare a previous node to null
//     let previous = head;
//     // declare a current node to head
//     let current = head.next;
//     // traverse through nodes
//     while (current !== null) {
//         // if current is the target, set the previous nodes next pointer to current.next
//         if (current.val === target) {
//             previous.next = current.next;
//             break;
//         }
//         previous = current;
//         current = current.next;
//     }
//     return head;
// };

// recursive
const removeNode = (head, targetVal) => {
    if (head === null) return null;
    if (head.val === targetVal) return head.next;
    head.next = removeNode(head.next, targetVal);
    return head;
};

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

console.log(removeNode(a, 'c'));