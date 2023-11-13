// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = (nums1, m, nums2, n) => {
    // declare pointers
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // //copy any remaining elements from nums2 to nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    return array1;
};

// test case
const array1 = [1,2,3,0,0,0];
const length1 = 3;
const array2 = [2,5,6];
const length2 = 3;

console.log(merge(array1, length1, array2, length2));

