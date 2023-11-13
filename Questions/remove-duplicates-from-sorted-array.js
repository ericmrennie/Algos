// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// 1. Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
//   The remaining elements of nums are not important as well as the size of nums.
// 2. Return k.

const removeDuplicates = (nums) => {
    // count
    let count = 1;
    // pointer
    let pointer = 1;

    // iterate through array
    while (pointer < nums.length) {
        // if pointer value is not equal to pointer - 1 value
        if (nums[pointer] !== nums[pointer - 1]) {
            // replace nums at index count with nums at index pointer
            nums[count] = nums[pointer];
            // increment count  
            count++;
        }
        //increment pointer
        pointer++;
    }
    // return count
    // console.log(nums);
    return count;
};

// tests
// test1 = [1,1,2];
// console.log(removeDuplicates(test1));

test2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(test2));
