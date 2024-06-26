/*
Given a string s, find the length of the longest 
substring without repeating characters.
*/

const lengthOfLongestSubstring = (s) => {
    // edge case
    if (s.length === 0) return 0;
    // results
    let results = 0;
    // pointer one
    let i = 0;
    // pointer two
    let j = 0;
    // make a set
    const charSet = new Set();
    // iterate
    while (j < s.length) {
        // if pointer two is different from the string sliced up to pointer 2, keep increasing pointer 2
        if (!charSet.has(s[j])) {
            charSet.add(s[j]);
            j += 1;
            results = Math.max(results, j - i);
        } else {
            // else update results with the difference between pointer one and two
            charSet.delete(s[i]);
            i += 1;
        }
    }
    // return results
    return results;
}

// tests
console.log(lengthOfLongestSubstring('abcabcbb'));