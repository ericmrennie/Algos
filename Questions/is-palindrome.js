/*
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
*/

const isPalindrome = (s) => {
    // edge case
    if (s.length === 1) return true;
    // convert string to lowercase
    // remove all non-alphanumeric characters and spaces
    const phrase = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // declare two pointers, one that starts at the beginning and one at the end
    let pointer1 = 0;
    let pointer2 = phrase.length - 1;
    // compare both letters at each pointer to see if the letter is the same
    while (pointer1 <= pointer2) {
        // if it is the same, continue
        if (phrase[pointer1] === phrase[pointer2]) {
            pointer1++;
            pointer2--;
        } else {
            // otherwise return false because it's not a valid palindrome
            return false;
        }
    }
    return true;
}

//tests
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("tab a cat"));



