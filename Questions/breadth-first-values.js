// Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in breadth-first order.

class Node {
constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
}

const breadthFirstValues = (root) => {
// edge case - if the root is null, return an empty array
if (root === null) return [];
// results array
const results = [];
// queue array with the root initialized inside 
const queue = [ root ];

// iterate through tree
while (queue.length > 0) {
    // set current node = queue.shift()
    const current = queue.shift();
    // push the current node into the results array
    results.push(current.val);
    // if current.left is not null, push the current.left into the queue
    if (current.left != null) queue.push(current.left);
    // if current.right is not null, push the current.right into the queue
    if (current.right != null) queue.push(current.right);
}
// return results array
return results;
}

// test
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h


console.log('This is the result: ', breadthFirstValues(a)); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']