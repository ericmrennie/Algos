/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in O(logn) time.
*/

const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start+ end) / 2);

        if (nums[middle] === target) return middle;
        if (nums[middle] < target) {
            start = middle + 1;
        } else if (nums[middle] > target) {
            end = middle - 1;
        }
    }
    return -1;
}

console.log(search([-1,0,2,4,6,8], 4));
console.log(search([-1,0,2,4,6,8], 3));