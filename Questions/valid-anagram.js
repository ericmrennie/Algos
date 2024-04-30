// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s,t) => {
    // edge case
    if (s.length !== t.length) return false;
    // create an object store
    const store = {};
    // loop through s and store each letter as a value and set it equal to true
    for (let i = 0; i < s.length; i++) {
        if (!store[s[i]]) {
            store[s[i]] = 1;
        } else {
            store[s[i]]++
        }
    }
    // loop through t and check if the object store contains the current element and that that current element is greater than 0
    for (let i = 0; i < t.length; i++) {
        if (store[t[i]] > 0) {
            // if that element is found and is greater than 0, decrement the value
            store[t[i]]--;
        } else {
            return false;
        }
    }
    // return true if function is able to loop through all elements of t without triggering false
    return true;
}

// test cases
console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));