/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const hasCycle = (head) => {
    // Initialize two pointers, slow and fast
    let slow = head;
    let fast = head;

    // Traverse the list using two pointers
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow pointer by one step
        fast = fast.next.next;     // Move fast pointer by two steps

        // If there is a cycle, the pointers will meet at some point
        if (slow === fast) {
            return true;            // Cycle detected
        }
    }

    // If fast reaches the end of the list, there is no cycle
    return false;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);

one.next = two;
two.next = three;
//three.next = one;

console.log(hasCycle(one));