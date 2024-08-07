// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
// The function should return the total sum of all values in the linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const sumList = (head, sum = 0) => {
//     if (head === null) return sum;
//     sum += head.val;
//     return sumList(head.next, sum);
// }

// const sumList = (head) => {
//     let sum = 0;
//     while (head !== null) {
//         sum += head.val;
//         head = head.next;
//     }
//     return sum;
// }

const sumList = (head) => {
    let sum = 0;
    return _sumList(head, sum);
}

const _sumList = (head, sum) => {
    if (head === null) return sum;
    sum += head.val;
    return _sumList(head.next, sum);
}

//test
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(sumList(a));