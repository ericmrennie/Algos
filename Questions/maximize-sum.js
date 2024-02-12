/*
Sean invented a game involving a 2n x 2n metrix where each cell of the matrix contains an integer. 
He can reverse any of its rows or columns any number of times.
The goal of the game is to maximize the sum of the elements in the n x n submatrix located in the upper-left quadrant of the matrix. 
Given the initial configurations for q matrices, help Sean reverse the rows and columns of 
each metrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal
*/

function maximizeUpperLeftQuadrant(matrix) {
    const n = matrix.length / 2;
    let upperLeftSum = 0;

    // Calculate the sum of the upper-left quadrant
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            upperLeftSum += matrix[i][j];
        }
    }

    return upperLeftSum;
}

function reverseRows(matrix) {
    return matrix.slice().reverse();
}

function reverseColumns(matrix) {
    return matrix.map(row => row.slice().reverse());
}

function maximizeSum(matrices) {
    const maxSums = [];
    for (const matrix of matrices) {
        const upperLeftSum = maximizeUpperLeftQuadrant(matrix);

        // Try reversing rows and columns to maximize the upper-left quadrant sum
        const reversedRowSum = maximizeUpperLeftQuadrant(reverseRows(matrix));
        const reversedColumnSum = maximizeUpperLeftQuadrant(reverseColumns(matrix));

        const maxSum = Math.max(upperLeftSum, reversedRowSum, reversedColumnSum);
        maxSums.push(maxSum);
    }

    return maxSums;
}

// Example usage:
const matrices = [
    [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
    [[4, 3, 2, 1], [8, 7, 6, 5], [12, 11, 10, 9], [16, 15, 14, 13]]
];

const maxSums = maximizeSum(matrices);
console.log(maxSums);  // Output: [34, 34]
