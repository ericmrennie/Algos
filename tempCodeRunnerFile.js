class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
    //create a variable to store the sum
    let storedSum = 0;
    //iterate through the linked list
    while (head.next != null) {
        //add the current element to the stored sum
        storedSum += head.val;
    }
    //return stored sum
    return storedSum;
};

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