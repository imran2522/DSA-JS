/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for the last element of nums1
    let j = n - 1; // Pointer for the last element of nums2
    let k = m + n - 1; // Pointer for the last position in nums1 
    let result = [];   

    // Merge nums1 and nums2 from the end to the beginning
    while (j >= 0) {
        // Compare the last elements of nums1 and nums2 and place the larger one at the end of nums1
        if (i >= 0 && nums1[i] > nums2[j]) {
            // If the current element of nums1 is greater than the current element of nums2, place it at the end of nums1
            nums1[k] = nums1[i];
            i--;
        } else {
            // If the current element of nums2 is greater than or equal to the current element of nums1, place it at the end of nums1
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    for (let i = 0; i < nums1.length; i++) {
        result.push(nums1[i]);
    }
    return result;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]  