/*
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.

The first integer of every row is greater than the last integer of the previous row.

Return true if target exists within matrix or false otherwise.
*/

const searchMatrix = (matrix, target) => {

    let row;

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][0]);
        if (matrix[i][0] === target) return true;
        if (matrix[i][0] < target) row = matrix[i];
        
    }
    console.log(row);
    for (let i = 0; i < row.length; i++) {
        if (row[i] === target) return true;
    }
    return false;
}

// test
const matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]];
const target = 11;

console.log(searchMatrix(matrix, target));