/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

const diagonalDifference = (arr) => {
    // variable to store the sum of diagonal 1
    let diagonalOne = 0;
    // variable to store the sum of diagonal 2
    let diagonalTwo = 0;
    // iterate through the matrix to find the sum of diagonal 1
    for (let i = 0; i < arr.length; i++) {
        diagonalOne += arr[i][i];
    }
    // iterate through the matrix to find the sum of diagonal 2
    // return the absolute difference of diagonal 1 and diagonal 2
}

console.log(diagonalDifference(3
    11 2 4
    4 5 6
    10 8 -12))