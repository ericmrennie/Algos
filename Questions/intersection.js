/*
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

const intersection = (a, b) => {

    const results = [];
    const map = new Set(a);

    for (let item of b) {
        if (map.has(item)) results.push(item);
    }

    return results;
}

// tests
console.log(intersection([4,2,1,6], [3,6,9,2,10]));
console.log(intersection([2,4,6], [4,2]));