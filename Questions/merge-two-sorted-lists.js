/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeTwoLists = (list1, list2) => {
    const dummy = new Node();
    let current = dummy;

    while(list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1.val;
            list1 = list1.next;
        } else {
            current.next = list2.val;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    return dummy.next;
}

const list1 = new Node(1, new Node (2, new Node(3)));
const list2 = new Node(1, new Node (3, new Node(4)));

console.log(mergeTwoLists(list1, list2));