/*
Write a function, palindome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

You must solve this recursively.
*/

const palindrome = (s) => {
    if (s === '') return true;
    if (s[0] === s[s.length - 1]) {
        return palindrome(s.slice(1, s.length - 1));
    } else {
        return false;
    }
}

// tests
console.log(palindrome('kayak'));
console.log(palindrome('kayaks'));
