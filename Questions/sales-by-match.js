/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.
*/

const sockMerchant = (n, ar) => {
    // create a pair counter
    let pairs = 0;
    // create an object store
    const store = {};
    // iterate through the array
    for (let i = 0; i < ar.length; i++) {
        // if there isn't a key with the current value, create it and assign it's value to one
        if (!store[ar[i]]) {
            store[ar[i]] = 1;
        } else {
            // if there is a key with the current value, add the value by one
            store[ar[i]] += 1;
        }
    }
    // iterate through the object store
    for (const property in store) {
        // for every two, iterate the pair counter by one
        pairs += Math.floor(store[property]/2)
    }
    // return the pair counter
    return pairs;
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));