/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

const topKFrequent = (nums, k) => {
    // new frequency map
    const frequencyMap = new Map();

    for (const num of nums) {
        // check if frequencyMap has num
        if (frequencyMap.has(num)) {
            // store the current value
            const currentValue = frequencyMap.get(num);
            //increment the current value
            const newValue = currentValue + 1;
            // set the new value as num's value
            frequencyMap.set(num, newValue);
        } else {
            // set 1 as num's value if num is not in the frequency map
            frequencyMap.set(num, 1);
        }
    }
    // create an array of key value pairs from the frequency map
    const sortedArray = [...frequencyMap];
    console.log(sortedArray);
    // sort the values in descending order
    sortedArray.sort((a, b) => b[1] - a[1]);
    // return an array of the keys with the two highest values
    return sortedArray.slice(0, 2).map(entry => entry[0]);
}

//tests
console.log(topKFrequent([1,1,1,2,2,3], 2));