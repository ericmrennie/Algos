/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const zipperLists = (head1, head2) => {
    // tail variable which is equal to head1
    let tail = head1;
    // current1 pointer, pointed to head1.next
    let current1 = head1.next;
    // currrent2 pointer, pointed to head2
    let current2 = head2;
    // count variable set to 0
    let count = 0;
    // while head1 or head2 are not null
    while (current1 !== null && current2 !== null) {
        // if count is even
        if (count % 2 === 0) {
            // tail.next = current2
            tail.next = current2;
            // current2 = current2.next
            current2 = current2.next;
        // else
        } else {
            // tail.next = current1
            tail.next = current1;
            // current1 = current1.next
            current1 = current1.next;
        }
        // reassign tail
        tail = tail.next;
        // increment count
        count += 1;
    }
    // if head1 is not equal to null
    if (current1 !== null) {
        //tail.next is current1
        tail.next = current1;
    } 
    if (current2 !== null) {
        // tail.next is current2
        tail.next = current2;
    }
    // return head
    return head1;
}

// test
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z