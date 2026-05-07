/**
 * @param {string} s
 * @return {number}
 * Sliding Window Approach:
1. Initialize two pointers, `start` and `end`, to represent the current window of characters being considered.
2. Use a Map (or Set) to keep track of the characters in the current window and their most recent indices.
3. Iterate through the string with the `end` pointer:
   - If the character at `end` is already in the Map and its index is greater than or equal to `start`, it means we have a duplicate character within the current window. In this case, move the `start` pointer to one position after the last occurrence of that character.
   - Update the Map with the current character and its index.
   - Calculate the length of the current window (from `start` to `end`) and update the maximum length found so far.
4. Return the maximum length after iterating through the string.

This approach ensures that we are always working with a valid substring without repeating characters, and it runs in O(n) time complexity since each character is processed at most twice (once when added to the window and once when removed).
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let maxLength = 0;
  let seen = new Map();

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

const res = lengthOfLongestSubstring("abcabcbb"); // Output: 3 (the longest substring is "abc")
console.log(res);