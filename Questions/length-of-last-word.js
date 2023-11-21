/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

const lengthOfLastWord = (s) => {
    // // counter variable
    // let counter = 0;
    // // index variable
    // let index = undefined;
    // // iterate through the string
    // for (let i = 0; i < s.length; i++) {
    //     // find the last index that contains a letter
    //     if (s[i].match(/[a-zA-Z]/)) {
    //         index = i;
    //     }
    // }
    // // count backwards until you run into a space
    // for (let i = index; i >= 0; i--) {
    //     if (s[i].match(/[a-zA-Z]/)) {
    //         counter++;
    //     } else {
    //         break;
    //     }
    // }
    // return counter;

    // counter variable
    let counter = 0;
    // boolean for found letter
    let foundLetter = false;

    // iterate through the string backwards
    for (let i = s.length - 1; i >= 0; i--) {
        // if the index matches a letter, increment the counter and set found letter to true
        if (s[i].match(/[a-zA-z]/)) {
            counter++
            foundLetter = true;
        } else if (foundLetter) {
            // else break
            break;
        }
    }
    return counter;
}

// tests
const phrase = '   fly me    to   the moon    ';
// const phrase = 'luffy is still joyboy';
// const phrase = 'Hello World'
console.log(lengthOfLastWord(phrase));

