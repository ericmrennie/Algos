/*
Given an array of integers, where all elements but one occur twice, find the unique element.

lonelyinteger has the following parameter(s):
int a[n]: an array of integers

Returns
int: the element that occurs only once
*/

function lonelyinteger(a) {
    // edge case
    if (a.length === 0) return 'No unique elements'
    // create an object store
    const integers = {};
    // if the element does not exist, store the key as the number and the value as 1
    for (let i = 0; i < a.length; i++) {
        // if the element does exist, increment the value by 1
        if (!integers[a[i]]) {
            integers[a[i]] = 1;
        } else {
            integers[a[i]] += 1;
        }
    }
    // check all keys in the object
    // if there is an key with a value of one, return the key
    for (const key in integers) {
        if (integers[key] === 1) return key;
    }
    return 'No unique elements';
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));
console.log(lonelyinteger([1,2,3,4,4,5,3,2,1]));