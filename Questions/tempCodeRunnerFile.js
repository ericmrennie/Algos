const majorityElement = (nums) => {
    const majorityValue = (nums.length/2);
    let i = 0;
    console.log(i);
    let j = i + 1;
    let counter = 0;
    while (i < nums.length) {
        if (nums[i] === nums[j]) {
            counter++;
        }
        if (counter > majorityValue) return nums[i];
    }
    i++;
}


// test
const test = [3,2,3];
console.log(majorityElement(test));