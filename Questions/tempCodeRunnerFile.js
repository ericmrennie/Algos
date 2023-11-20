const maxProfit = (prices) => {
    // declare a pointer to represent the buy
    let bought = 0;
    // declare a pointer to represent the sale
    // declare a variable that keeps track of the max profit
    let max = 0; 
    // iterate through the array
    while (bought < prices.length) {
        // continue over the index that represents the buy
        for (let i = 0; i < prices.length; i++) {
            // subtract sale minus buy
            if (i === bought) continue;
            // if the profit is larger than the profit stored in the max profit, update the stored profit variable
            let comparedNumbers = (prices[i] - prices[bought])
            if (comparedNumbers > max) max = comparedNumbers;
        }
    }
    // increment the pointer that represents the buy 
    bought++;
    if (max <= 0) return 0;
    return max;
};

// test
const test = [7,1,5,3,6,4];
console.log(maxProfit(test));