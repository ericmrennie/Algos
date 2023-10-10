// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.

class Node {
constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
}

const treeIncludesDepth = (root, target) => {
//edge case
if (root === null || target === null) return false;
// declare a stack
const stack = [ root ]
// iterate through the tree
while (stack.length > 0) {
    // set a current variable equal to the stack.pop
    const current = stack.pop();
    // if current is equal to the target return true
    if (current.val === target) return true;
    // build the stack
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
}
//return false
return false;
};

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

console.log(treeIncludesDepth(a, "e")); // -> true

