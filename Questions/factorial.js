/*
Write a function, factorial, that takes in a number n and returns the factorial of that number. 
The factorial of n is the product of all the positive numbers less than or equal to n. 
You must solve this recursively.
*/

const factorial = (n) => {
    console.log(n);
    if(n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
// tests
console.log(factorial(3));