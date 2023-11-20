// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. 
// However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

const maxProfit = (prices) => {
    // edge case
    if (prices.length <= 1) return 0;
    // declare a max profit
    let maxProfit = 0;
    // iterate through the prices array
    for (let i = 1; i < prices.length; i++) {
        // if the price on the current day is greater than the previous day, add the profit
        if (prices[i] > prices[i - 1]) maxProfit += prices[i] - prices[i - 1];
    }
    // return maxProfit
    return maxProfit;
}

// test
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

