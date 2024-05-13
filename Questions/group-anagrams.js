/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
    const anagramsMap = new Map();

    // Iterate through each string in the input array
    for (const str of strs) {
        // Sort each string alphabetically to identify anagrams
        const sortedStr = str.split('').sort().join('');
        console.log(sortedStr)

        // Check if the sorted string is already a key in the map
        if (anagramsMap.has(sortedStr)) {
            // If it exists, add the original string to its value array
            anagramsMap.get(sortedStr).push(str);
        } else {
            // Otherwise, create a new key with the sorted string and set its value as an array containing the original string
            anagramsMap.set(sortedStr, [str]);
        }
    }

    // Return an array of the grouped anagrams
    return Array.from(anagramsMap.values());
}

// tests
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));
