/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/
//input: array
//output: highest profit you can make in a given day by buying and selling a single Apple stock

//write a function called highestProfit
const highestProfit = (array) => {
    //create a storage variable for highest profit 
    let profit = 0;
    //if the input is invalid, return profit
    if (!Array.isArray(array)) return profit;
    //iterate through the array
    for (let i = 0; i < array.length; i++) {
        //edge case to check if array[i] is a number
        if (typeof array[i] !== 'number') return 0;
        //iterate through the array again
        for (let j = i + 1; j < array.length; j++) {
            //calculate the absolute value of the differences
            //if the difference is greater than the current highest profit, update the highest profit variable
            profit = Math.max(profit, array[j] - array[i]);
            //if (currentProfit > profit) profit = currentProfit;
        }
    }
    return profit;
}

const stock = [1000, 500, 1500, 2000, 0];
console.log(highestProfit(stock));









