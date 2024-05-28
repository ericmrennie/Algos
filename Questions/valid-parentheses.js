/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

// create a stack class
class Stack {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    push(element) {
        this.items[this.length] = element;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return undefined;
        let deletedItem = this.items[this.length - 1];
        this.items.length = this.length - 1
        this.length--;
        return deletedItem;
    }
}

const map = {
    ')': '(',
    '}': '{',
    ']': '['
};

const isValid = (s) => {
    // edge case
    if (s.length <= 1) return false;
    // create a stack variable 
    const newStack = new Stack();
    // iterate through the string
    for (let i = 0; i < s.length; i++) {
        // if the character is an opening bracket, push it onto the stack
        if (s[i] === '(' || s[i] === '{' || s[i] ==='[') {
            newStack.push(s[i])
        }
        // else if the character is a closing bracket and the length of the stack is not 0, check if the top of the stack is the corresponding opening bracket
        else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (newStack.length === 0 || newStack.pop() !== map[s[i]]) {
                return false
            } 
        }
    }
    return newStack.length === 0;
}

// test
console.log(isValid('()[]{}'));
console.log(isValid('(]'));