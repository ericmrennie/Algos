// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    // create an object store for visited elements
    const visited = {};
    // loop through the array of nums
    for (let i = 0; i < nums.length; i++) {
        // if the object store contains the current element, return true
        if (visited[nums[i]]) {
            return true;
        } else {
            visited[i] = nums[i];
        }
        console.log(visited);
    }
    // return false
    console.log(visited);
    return false;
};

//test cases
// console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,4,4]));
// console.log(containsDuplicate([1,1,2,3,4]));
