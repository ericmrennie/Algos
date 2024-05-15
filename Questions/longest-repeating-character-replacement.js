/*
You are given a string s and an integer k. 
You can choose any character of the string and change it to any other uppercase English character. 
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

function characterReplacement(s, k) {
    let maxCount = 0, maxLength = 0;
    let start = 0;
    const charCount = {};

    for (let end = 0; end < s.length; end++) {
        charCount[s[end]] = (charCount[s[end]] || 0) + 1;
        maxCount = Math.max(maxCount, charCount[s[end]]);

        if (end - start + 1 - maxCount > k) {
            charCount[s[start]]--;
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// tests
console.log(characterReplacement('ABAB', 2));