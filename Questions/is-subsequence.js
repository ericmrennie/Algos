/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by 
deleting some (can be none) of the characters without disturbing the relative positions 
of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

const isSubsequence = (s, t) => {
    // edge case
    if (s === '') return true;
    if (t === '') return false;
    // declare two pointers
    let i = 0;
    let j = 0;
    // start with the first letter of s and try to find an instance of that letter in t
    // if not found then move the t pointer further down the word
    // if found then move the s pointer further down the word as well as the t pointer
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (i === s.length) return true;
    }
    // if we reach the end of t without reaching the end of s, return false
    return false;
};

// test
const string1 = 'abc';
const string2 = 'ahbgdc';

console.log(isSubsequence(string1, string2));
