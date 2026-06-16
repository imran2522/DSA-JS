/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 2; // Start from index 2 since we can have at most 2 duplicates
    if (nums.length <= 2) return nums.length;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k++] = nums[i];
        }
    }
    console.log(nums); // [1,1,2,2,3]
    return k;
    
};  

console.log(removeDuplicates([1,1,1,2,2,3])); // [1,1,2,2,3]