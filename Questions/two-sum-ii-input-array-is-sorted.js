/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

const twoSum = (numbers, target) => {
    // pointer 1
    let pointerOne = 0;
    // pointer 2
    let pointerTwo = 1;
    // iterate
    while (pointerOne < numbers.length) {
         // if pointer 1 plus pointer 2 equals target, return the values of pointer 1 and pointer 2
         if (numbers[pointerOne] + numbers[pointerTwo] === target) {
            return [pointerOne + 1, pointerTwo + 1];
         } else  if (pointerTwo >= numbers.length) {
            pointerOne += 1;
            pointerTwo = pointerOne + 1;
         } else {
            pointerTwo += 1;
         }
    }
}

// tests
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1, 0], -1));