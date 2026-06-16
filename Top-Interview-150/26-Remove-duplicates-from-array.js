/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // If array is empty, return 0
        if (nums.length === 0) return 0;

        // Pointer for last unique element
        let i = 0;

        // Start from second element
        for (let j = 1; j < nums.length; j++) {
            // If current element is different from last unique element
            if (nums[j] !== nums[i]) {
                // Move pointer forward
                i++;
                // Place the new unique element
                nums[i] = nums[j];
            }
        }

        // i is last index of unique element, count = i + 1
        return i + 1;
};

console.log(removeDuplicates([1,1,2])); // [1,2]    