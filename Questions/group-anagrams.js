/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
    // store strs as an object store
    const strsStore = {};
    for (let h = 0; h < strs.length; h++) {
        if (strsStore[strs[h]] == null) {
            strsStore[strs[h]] = 1;
        } else {
            strsStore[strs[h]]++;
        }
    }
    // create storage for a results array
    const results = [];
    // create a storage array if the current element is an anagram
    let anagramStorage = [];
    // loop through the array
    for (let i = 0; i < strs.length; i++) {
        strsStore[strs[i]]--;
        // if the anagram storage array has length, push it into the results array
        if (anagramStorage.length) results.push(anagramStorage);
        // empty the array for the next iteration
        anagramStorage = [];
        // store the element in an object store
        const firstElement = {};
        for (let j = 0; j < strs[i].length; j++) {
            if (firstElement[strs[i][j]] == null) {
                firstElement[strs[i][j]] = 1;
            } else {
                firstElement[strs[i][j]]++;
            }
        }
        // loop through the array starting from the next element
        for (let k = i+1; k < strs.length; k++) {
            // store that elememt in a current object, breaking down its letters into key value pairs
            const current = strs[k];
            const secondElement = {};
            for (let l = 0; l < current.length; l++) {
                if (secondElement[current[l]] == null) {
                    secondElement[current[l]] = 1;
                } else {
                    secondElement[current[l]]++;
                }
            }
            // compare if this object equals the object from above
                // if it is equal, push it into anagram storage
            if ((_.isEqual(secondElement, firstElement)) && (strsStore[current] > 0)) anagramStorage.push(current) && strsStore[current]--;

        }
        if (anagramStorage.length) anagramStorage.push(strs[i]);
    }
    // return results
    console.log(Object.values(strsStore))
    results.push()
    return results;
}

// tests
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));
