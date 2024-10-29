/*
Write a function, bottomRightValue, that takes in the root of a binary tree. 
The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

const bottomRightValue = (root) => {
    // breadth first traversal
    // create a queue
    const queue = [ root ];
    // while loop
    while (queue.length) {
        // current variable by shifting off queue
        const current = queue.shift();
        // if current.left, add current.left to the stack
        if (current.left) queue.push(current.left);
        // if current.right, add current.right to the stack
        if (current.right) queue.push(current.right);
        // if queue is empty, then return current
        if (!queue.length) return current.val; 
    }
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

console.log(bottomRightValue(a)); // -> 1
