/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Sliding Window Approach:
1. Use a Map to store the most recent index of each number encountered in the array.
2. Iterate through the array with an index `i`:
   - For each number `nums[i]`, check if it exists in the Map and if the difference between the current index `i` and the last index stored in the Map for that number is less than or equal to `k`.
   - If both conditions are true, it means we have found a duplicate number within the required distance, so we return true.
   - Otherwise, update the Map with the current index for that number.
3. If we finish iterating through the array without finding any duplicates within distance `k`, return false.

This approach runs in O(n) time complexity since we are iterating through the array once, and each lookup and update operation in the Map is O(1).
 */
var containsNearbyDuplicate = (nums, k) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;   
};

const res = containsNearbyDuplicate([1,2,3,1], 3); // Output: true
console.log(res);