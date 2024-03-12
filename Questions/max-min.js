/*
You will be given a list of integers, arr, and a single integer, k.
You must create an array of length k from elements of arr such that its unfairness is minimized.
Call that array arr'. Unfairness of an array is calculated as max(arr')-min(arr').
*/

const maxMin = (k, arr) => {
    arr.sort(); // Sort the array in ascending order
    let minUnfairness = Infinity; // Initialize minimum unfairness to infinity

    // Iterate through the array to consider each subarray of length k
    for (let i = 0; i <= arr.length - k; i++) {
        let subarray = arr.slice(i, i + k);
        let unfairness = Math.max(...subarray) - Math.min(...subarray);
        minUnfairness = Math.min(minUnfairness, unfairness); // Update minimum unfairness
    }

    return minUnfairness;
}

//test
console.log(maxMin(2, [1,4,7,2]));