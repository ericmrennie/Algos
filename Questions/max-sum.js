/*
Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum
and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
    // Write your code here
    const sortedArray = arr.sort();
    let miniSum = 0;
    let maxSum = 0;
    for (let i = 0; i <= 3; i++) {
        miniSum += sortedArray[i];
    }
    for (let i = 4; i >= 1; i--) {
        maxSum += sortedArray[i];
    }
    console.log(miniSum + " " + maxSum);
}

miniMaxSum([1,3,5,7,9]);