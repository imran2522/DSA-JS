/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 * @description Splits an array into chunks of a specified size.
 */
var chunk = function(arr, size) {
    const result = [];
    // Loop through the array in increments of 'size'
    // For each iteration, create a chunk of the array and push it to the result
    // The loop continues until we have processed the entire array
    // i += size ensures that we move to the next chunk in each iteration
    // The slice method is used to create a new array containing the elements from index i to i + size   
    for (let i = 0; i < arr.length; i += size) {
        // Use slice to create a chunk of the array from index i to i + size
        result.push(arr.slice(i, i + size));
    }
    return result;  
};  

// Example usage:
console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // Output: [[1, 2, 3], [4, 5]]
console.log(chunk([], 2)); // Output: []
console.log(chunk([1, 2, 3], 1)); // Output: [[1], [2], [3]]    