// Write a function, depthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in depth-first order.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const depthFirstValues = (root) => {
//     // egde case for if root is null
//     if (root === null) return [];
//     // variable to store values
//     const values = [];
//     // start a stack with the root
//     const stack = [root];
//     // check if the stack is empty
//     while (stack.length) {
//         // if it's not empty, then set current to popping an item off the stack
//         const current = stack.pop();
//         // add current to the values
//         values.push(current.val);
//         // check to see if the current has a left and right child and then push them into the stack
//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     }
//     return values;
// }

// recursive
const depthFirstValues = (root) => {
    if (root === null) return [];
    
    const leftValues = depthFirstValues(root.left);
    console.log(leftValues)
    const rightValues = depthFirstValues(root.right);
    console.log(rightValues)
    return [ root.val, ...leftValues, ...rightValues ];
};


// test
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a));   