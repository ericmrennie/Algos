// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.

class Node {
constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
}

const treeIncludesBreadth = (root, target) => {
// edge case
if (root === null) return false;
// declare a queue
const queue = [ root ];
// iterate through the queue
while (queue.length > 0) {
    // set the current equal to the root.shift
    const node = queue.shift();
    // if the node is equal to the target return true
    if (node.val === target) return true;
    // if current.right is not null, push to the queue
    if (node.right != null) queue.push(node.right);
    // if current.left is not null, push to the queue
    if (node.left != null) queue.push(node.left);
}
return false;
}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

console.log(treeIncludesBreadth(a, "e")); // -> true