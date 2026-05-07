# DSA-JS

A collection of Data Structures & Algorithms and JavaScript problem solutions, organized by topic.

## Structure

```
DSA-JS/
├── JS-30/              # LeetCode 30 Days of JavaScript challenges
├── Palindrome/         # Palindrome problems
└── Sliding-window/     # Sliding window technique problems
```

---

## JS-30 — 30 Days of JavaScript

| File | Problem | Description |
|------|---------|-------------|
| [2622-Cache-With-Time-Limit.js](JS-30/2622-Cache-With-Time-Limit.js) | [#2622 Cache With Time Limit](https://leetcode.com/problems/cache-with-time-limit/) | A key-value cache that auto-expires entries after a given duration using `setTimeout` |
| [2627-debounce.js](JS-30/2627-debounce.js) | [#2627 Debounce](https://leetcode.com/problems/debounce/) | Delays invoking a function until after a specified wait time has elapsed since the last call |
| [2721-Execute-Asynchronous-Functions-in-Parallel.js](JS-30/2721-Execute-Asynchronous-Functions-in-Parallel.js) | [#2721 Execute Async Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/) | Runs an array of async functions in parallel and resolves with all results (custom `Promise.all`) |
| [process-time-limit.js](JS-30/process-time-limit.js) | Time Limit | Wraps a function with a timeout; rejects with `"Time Limit Exceeded"` if the function doesn't resolve in time |

---

## Palindrome

| File | Problem | Description |
|------|---------|-------------|
| [valid-palindrome.js](Palindrome/valid-palindrome.js) | [#125 Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Checks if a string is a palindrome after stripping non-alphanumeric characters and lowercasing |

---

## Sliding Window

| File | Problem | Description |
|------|---------|-------------|
| [longest-substring.js](Sliding-window/longest-substring.js) | [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | O(n) sliding window with a Map to track the last seen index of each character |
| [contains-duplicate-ii.js](Sliding-window/contains-duplicate-ii.js) | [#219 Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) | Checks if any two equal elements are within distance `k` of each other |
| [concatenation-substring.js](Sliding-window/concatenation-substring.js) | [#30 Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) | Finds all starting indices of substrings that are a concatenation of all given words |

---

## Running the Solutions

Each file is self-contained and includes a sample test at the bottom. Run any file with Node.js:

```bash
node JS-30/2627-debounce.js
node Sliding-window/longest-substring.js
```
