// Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
// The function should return the total sum of all values in the tree.

class Node {
constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
}

const treeSum = (root) => {
// edge case
if (root === null) return 0;
// sum variable
let sum = 0;
// stack
const stack = [ root ];
// iterate through tree
while (stack.length > 0) {
    // current
    let current = stack.pop();
    // add to the sum variable
    sum += current.val;
    // if the left of the current is not null, push to the stack
    if (current.left !== null) stack.push(current.left);
    // if the right of the current is not null, push to the stack
    if (current.right !== null) stack.push(current.right);
}
//reassign the root???
return sum;
};

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log(treeSum(a)); // -> 10