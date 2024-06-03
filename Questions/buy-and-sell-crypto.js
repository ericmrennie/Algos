/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
*/

const maxProfit = (prices) => {
    // declare a variable to keep track of the maximum profit
    let maximumProfit = 0;
    // iterate through the array stopping at the first integer
    for (let i = 0; i < prices.length; i++) {
        // now iterate through the array starting at i + 1
        for (let j = i + 1; j < prices.length; j++) {
            // subtract i from i + 1
            // if the profit is greater than the maximum profit, uppdate the maximum profit
            maximumProfit = Math.max(maximumProfit, (prices[j] - prices[i]));
        }
    }
    // return the maximum profit
    return maximumProfit;
}

// test
console.log(maxProfit([10,1,5,6,7,1]));
console.log(maxProfit([10,8,7,5,2]));
