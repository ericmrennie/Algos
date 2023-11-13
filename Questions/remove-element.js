// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

const removeElement = (nums, val) => {
    let i = 0;
    let j = 0;
    
    while (i < nums.length) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    
    return j;
}

// test cases
const array = [0,1,2,2,3,0,4,2];
const target = 2;

console.log(removeElement(array, target));
