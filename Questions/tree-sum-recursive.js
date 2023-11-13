// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeSum = (root, stack = [ root ], sum = 0) => {
    if (root === null) return 0;
    if (stack.length === 0) return sum;
    let current = stack.pop();
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
    return treeSum(root, stack, sum += current.val);
}

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
