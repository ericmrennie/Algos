/*
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.

The first integer of every row is greater than the last integer of the previous row.

Return true if target exists within matrix or false otherwise.
*/

const searchMatrix = (matrix, target) => {
    if (!matrix.length || !matrix[0].length) return false;

    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(mid / n)][mid % n];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};


// test
const matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]];
const target = 11;

console.log(searchMatrix(matrix, target));