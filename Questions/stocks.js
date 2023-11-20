// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
    // edge case
    if (prices.length <= 1) return 0;
    // declare a variable that keeps track of the min price
    let minPrice = prices[0];
    // declare a variable that keeps track of the max profit
    let max = 0; 
    // iterate through the array
    for (let i = 0; i < prices.length; i++) {
        // update minimum price
        minPrice = Math.min(minPrice, prices[i])

        // update max profit if selling at the current price yields a higher profit
        max = Math.max(max, prices[i] - minPrice);
    }
    return max;
};

// test
const test = [7,1,5,3,6,4];
console.log(maxProfit(test));