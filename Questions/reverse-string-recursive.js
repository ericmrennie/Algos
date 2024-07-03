/*
Write a function, reverseString, that takes in a string as an argument. 
The function should return the string with its characters in reverse order. 
You must do this recursively.
*/

const reverseString = (s, result = '', index = s.length - 1) => {
    if (index < 0) return result;
    return reverseString(s, result += s[index], --index);
}

// tests
console.log(reverseString('hello'));