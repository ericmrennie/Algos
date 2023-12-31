const isPalindrome = (s) => {
    // filter out non-alphanumeric characters
    let word = s.replace(/[^a-zA-Z0-9]/g, '');
    // convert the string to lowercase
    word = word.toLowerCase();
    // declare two pointers, one for the start and one for the end
    let i = 0;
    let j = word.length - 1;
    let pointer1 = word[i];
    let pointer2 = word[j];
    // compare the values at the two pointers and determine if the letter is the same
    // if true, move the pointers to the next position
    while (pointer1 <= pointer2) {
        // if there is an instance of the letters not being the same, return false
        if (pointer1 !== pointer2) return false;
        if (pointer1 === pointer2) {
            i += 1;
            j -= 1;
        }
    }
    return true;
}

// test
const palindrome = 'Racecar';
console.log(isPalindrome(palindrome));