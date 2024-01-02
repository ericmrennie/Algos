/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const strStr = (haystack, needle) => {
    let result = -1;
    //iterate through haystack
    for (let i = 0; i < haystack.length; i++) {
        //if i hit the first index of needle, i want to store that index and iterate through needle
        if (haystack[i] === needle[0]) result = i;
        console.log(result);
        for (let j = 1; j < needle.length; j++) {
            if (!haystack[i] === needle[j]) result = -1;
            if (j === needle.length) return result;
        }
    }
    // if we find that the next letters dont match, then we want to return the result to -1
    return result;
};

// test
const string1 = 'leetcode';
const string2 = 'leeto';
console.log(strStr(string1, string2));
