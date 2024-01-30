/*
There are two n-element arrays of integers, A and B. 
Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i <= n.
There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. 
Otherwise, return NO.
*/

const twoArrays = (k, A, B) => {
    // Sort array A in ascending order
    A.sort((a, b) => a - b);

    // Sort array B in descending order
    B.sort((a, b) => b - a);

    // Check if there exists a permutation A', B' such that A'[i] + B'[i] >= k
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }

    // If all pairs satisfy the condition, return "YES"
    return "YES";
};

const A1 = [1, 2, 3];
const B1 = [3, 2, 1];
const k1 = 4;

console.log(twoArrays(k1, A1, B1));