/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   const n = nums.length;
    let candidate = -1;
    let count = 0;

    // Find a candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } 
        else if (num === candidate) {
            count++;
        }
        else {
            count--;
        }
    }

    // Validate the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }
	
    // If count is greater than n / 2, return 
    // the candidate; otherwise, return -1
    if (count > n / 2) {
        return candidate;
    } else {
        return -1;
    }
};

console.log(majorityElement([2,2,1,1,1,2,2])); // 2