/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

// const isPalindrome = (x) => {
//     x = String(x);
//     //create two pointers
//     let pointer1 = 0;
//     let pointer2 = x.length - 1;
//     //check if the number or character at each side of the number is equal to the otherside
//     while (pointer1 <= pointer2) {
//         console.log(pointer1);
//         if (x[pointer1] === x[pointer2]) {
//             //if true then increment and decrement pointer
//             pointer1++;
//             pointer2--;
//         } else {
//             //if false then return false
//             return false;
//         }
//     }
//     return true;
// }

//recursive
const isPalindrome = (x, pointer1 = 0, pointer2 = (typeof x === 'number' ? String(x).length - 1 : x.length - 1)) => {
    if (typeof x === 'number') {
        x = String(x);
    }
    if (pointer1 >= pointer2) return true;
    if (x[pointer1] === x[pointer2]) {
        return isPalindrome(x, pointer1 + 1, pointer2 - 1);
    } else {
        return false;
    }
} 

console.log(isPalindrome(101));