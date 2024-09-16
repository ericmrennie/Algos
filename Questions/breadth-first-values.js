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
    // edge case for if root is null
    if (root === null) return [];
    // values storage
    const values = [];
    // begin a queue with a root node
    const queue = [ root ];
    // while the queue is populated
    while(queue.length) {
        // declare a current value
        const current = queue.shift();
        // push the current into values
        values.push(current.val);
        // check for current's left and right values
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    // return values
    return values;
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