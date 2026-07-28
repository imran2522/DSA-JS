/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    if (n === 0) return;

    k = k % n; // Handle cases where k is greater than the length of nums
    let result = new Array(n); // Create a new array to store the rotated elements 
    
    for (let i = 0; i < n; i++) {
        if (i < k) {
            // Add last k elements to the front
            result[i] = nums[n + i - k];
        } else {
            // Shift remaining elements
            result[i] = nums[i - k];
        }
    }

    // Copy rotated result back to original array
    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }
};

let nums = [1, 2, 3, 4, 5, 6, 7];   
rotate(nums, 3); // Rotate the array by 3 positions
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
