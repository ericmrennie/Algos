// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

function groupAnagrams(strs) {
    const map = {};

    for (let str of strs) {
        // Sort the string to create a key for anagrams
        const sortedStr = str.split('').sort().join('');
        
        // If the sorted string doesn't exist in the map, create a new array
        if (!map[sortedStr]) {
            map[sortedStr] = [str];
        } else {
            // If it exists, push the current string to the array
            map[sortedStr].push(str);
        }
    }

    // Return all the grouped anagrams as a list of arrays
    return Object.values(map);
}

// test
console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));