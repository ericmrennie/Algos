/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
*/

const maxProfit = (prices) => {

    // maxProfit variable
    let max = 0;
    // place pointer one at the first day to buy
    let pointerOne = 0;
    // while pointer two is less than the length of the array
    while (pointerOne < prices.length) {
        // place pointer two at the first day to buy plus 1
        let pointerTwo = pointerOne + 1;
        while (pointerTwo < prices.length) {
            // if the difference of pointer one minus pointer two 
            if (prices[pointerTwo] > prices[pointerOne]) max = Math.max(max, prices[pointerTwo] - prices[pointerOne]);
            // increment pointer one and two
            pointerTwo++;
        }
        pointerOne++;
    }
    // return max
    return max;
}

// test
console.log(maxProfit([10,1,5,6,7,1]));
console.log(maxProfit([10,8,7,5,2]));
