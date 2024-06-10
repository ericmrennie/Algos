/*
You are given an array non-negative integers heights which represent an elevation map. 
Each value heights[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.
*/

// const trap = (height) => {
//     // create a maxLefts array
//     const maxLefts = [];
//     // create a maxRights array
//     const maxRights = [];

//     // maxs set to edges
//     maxLefts[0] = height[0];
//     maxRights[height.length - 1] = height[height.length - 1];

//     let i = 1;
//     let j = height.length - 2;

//     // iterate through height 
//     while (i < height.length) {
//         // find the max height to the left and right of height[i] (the min height is the highest water can be captured)
//         maxLefts[i] = Math.max(maxLefts[i - 1], height[i]); // Check this height to max height to the left
//         maxRights[j] = Math.max(maxRights[j + 1], height[j]); // Check this height to max height to the right
//     }
//     // subtract the max height from height[i] to get the amount of water index i will capture
//     let ans = 0;
//     for (let i = 0; i < height.length; i++) {
//         ans += Math.max(0, Math.min(maxLefts[i], maxRights[i]) - height[i]);
//     }
//     return ans;
// }

// console.log(trap([0,2,0,3,1,0,1,3,2,1]));