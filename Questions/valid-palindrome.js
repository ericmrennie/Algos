/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, 
it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = (s) => {
    // filter out non-alphanumeric characters
    let word = s.replace(/[^a-zA-Z0-9]/g, '');
    // convert the string to lowercase
    word = word.toLowerCase();
    // declare two pointers, one for the start and one for the end
    let i = 0;
    let j = word.length - 1;
    // compare the values at the two pointers and determine if the letter is the same
    // if true, move the pointers to the next position
    while (i <= j) {
        // if there is an instance of the letters not being the same, return false
        if (word[i] !== word[j]) return false;
        i += 1;
        j -= 1;
    }
    return true;
}



// test
const palindrome = 'Racecar';
console.log(isPalindrome(palindrome));