// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
// The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//iterative
// const treeMinValue = (root) => {
//   let minimum = Infinity;
//   const stack = [ root ];
//   while (stack.length) {
//     const current = stack.pop();
//     if (current.val < minimum) minimum = current.val;
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return minimum;
// };

const treeMinValue = (root) => {
    if (root === null) return Infinity;
    const smallestLeftValue = treeMinValue(root.left);
    const smallestRightValue = treeMinValue(root.right);
    return Math.min(root.val, smallestLeftValue, smallestRightValue);
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
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
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2