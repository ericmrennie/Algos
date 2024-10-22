/*
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
The function should return the number of times that the target occurs in the tree.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeValueCount = (root, target) => {
//     // if you find the target, increment the counter
//     // if a node is null, return 0
//     let count = 0;

//     let stack = [ root ];

//     while (stack.length) {
//         const current = stack.pop();
//         if (current.val === target) count += 1;
//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     }

//     return count;
// }

//recursive
const treeValueCount = (root, target) => {
    if (root === null) return 0;
    let count = root.val === target ? 1 : 0;

    count += treeValueCount(root.left, target);
    count += treeValueCount(root.right, target);

    return count;
};


// test
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeValueCount(a, 6));
