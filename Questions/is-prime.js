// Write a function, isPrime, that takes in a number as an argument. 
// The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

const isPrime = (n) => {
// if n is less than 2, return true;
if (n < 2) return false;
// iterate from 2 to n - 1
for (let i = 2; i <= Math.sqrt(n); i++) {
    // if n is divisible by any of those number, return false
    if (n % i === 0) return false;
}
//return true   
return true;
};

console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false

