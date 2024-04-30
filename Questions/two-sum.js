/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {
    // first for loop
    for (let i = 0; i < nums.length; i++) {
        // second for loop
        for (let j = i + 1; j < nums.length; j++) {
            //determine if the two indices add up to the target
            // if they do, return the indices
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
}

// tests
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,3], 6));
