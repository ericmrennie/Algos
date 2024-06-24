/*
Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. 
All elements will be integers. Solve this recursively.
*/

const sumNumbersRecursive = (numbers, sum = 0) => {
    if (numbers.length === 0) return sum;
    sum += numbers.pop();
    return sumNumbersRecursive(numbers, sum);
}

//tests
console.log(sumNumbersRecursive([5, 2, 9, 10]));
console.log(sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]));