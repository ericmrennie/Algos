/*
Given a list of integers, count and return the number of times each value appears as an array of integers.
*/

// const countingSort = (arr) => {
//     // create a new object store
//     const store = {};
//     // iterate through the input array
//     for (let i = 0; i < arr.length; i++) {
//         // check if the number exists in the object store
//         // if it does, then increment its value which keeps track of how often it appears
//         if (store.hasOwnProperty(arr[i])) {
//             store[arr[i]] += 1;
//         } else {
//         // if not, then create a new key with that number and set the value to 1
//             store[arr[i]] = 1;
//         }
//     }
//     // return the objects values
//     return Object.values(store);
// }

const countingSort = (arr) =>{
    // create a results array by creating an array of 100 zeros, matching the input size
    const results = Array(100).fill(0);
    // iterate through the input array
    for (let i = 0; i < arr.length; i++) {
        // increment the value at results[arr[i]] by 1
        results[arr[i]] += 1;
    }
    return results;
}

console.log(countingSort([1,1,1,3,3,4]));