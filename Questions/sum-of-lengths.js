/*
Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

You must solve this recursively.
*/

const sumOfLengths = (strings, sum = 0) => {
    if (strings[0] === undefined) return sum;
    const current = strings.pop();
    console.log(current)
    sum += current.length;
    return sumOfLengths(strings, sum);
}

// tests
console.log(sumOfLengths(["goat", "cat", "purple"]));