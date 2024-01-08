/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. 
'Print the decimal value of each fraction on a new line with 6 places after the decimal.
*/

function plusMinus(arr) {
    // postive counter
    let positive = 0;
    // zero counter
    let zero = 0;
    // negative counter
    let negative = 0;
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++;
        if (arr[i] === 0) zero++;
        if (arr[i] < 0) negative++;
    }
    // return postive, zero, and negative counters divided by length of array
    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);