/*
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
*/

const reverseList = (head) => {
    // declare a previous node and set it to null
    let prev = null;
    // iterate through head
    while (head !== null) {
        // store the next value
        let nextNode = head.next;
        // set the next value for the current element to prev
        head.next = prev;
        // set prev to the value of the current element
        prev = head;
        // set head to the next node to start the process again
        head = nextNode;
    }
    return prev;
}

console.log(reverseList([0,1,2,3]))
