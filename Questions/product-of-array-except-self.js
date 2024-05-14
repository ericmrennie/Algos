/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

const productExceptSelf = (nums) => {
    const n = nums.length;
    const results = [];

    // Calculate the product of all elements to the left of the current index
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        results[i] = leftProduct;
        leftProduct *= nums[i];
        console.log(leftProduct)
    }

    // Calculate the product of all elements to the right of the current index
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        results[i] *= rightProduct;
        rightProduct *= nums[i];
        console.log(rightProduct)
    }

    return results;
};

// test
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));