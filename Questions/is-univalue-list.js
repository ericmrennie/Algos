/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// iterative
// const isUnivalueList = (head) => {
//     const compare = head.val;
//     while (head !== null) {
//         if (head.val !== compare) return false;
//         head = head.next;
//     }
//     return true;
// }

// recursive
const isUnivalueList = (head, compare = head) => {
    if (head === null) return true;
    if (head !== compare) return false;
    return isUnivalueList(head.next);

}


// test
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true