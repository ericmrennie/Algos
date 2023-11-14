// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
    const majorityValue = Math.floor(nums.length/2);
    const newObject = {};
    for (let i = 0; i < nums.length; i++) {
        if (!newObject.hasOwnProperty(nums[i])) {
            newObject[nums[i]] = 1;
        } else {
            newObject[nums[i]]++;
        }
    }
    console.log(newObject);
    for (const property in newObject) {
        if (newObject[property] > majorityValue) return property;
    }
}


// test
const test = [3,2,3];
console.log(majorityElement(test));

// const test = [2,2,2,2,1,1,1,1,1,2,2,2,];
// console.log(majorityElement(test));
