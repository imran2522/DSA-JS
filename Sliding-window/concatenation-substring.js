/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * Sliding Window Approach:
1. Calculate the length of each word in the `words` array and the total length of the concatenated substring we are looking for.
2. Create a frequency map to count the occurrences of each word in the `words` array.
3. Iterate through the string `s` with a window of size equal to the total length of the concatenated substring:
   - For each starting index `i`, create a temporary frequency map to count the occurrences of words in the current window.
   - Split the current window into words of the same length as those in the `words` array and check if they match the frequency map.
   - If they match, add the starting index `i` to the result array.
4. Return the result array containing all starting indices of valid concatenated substrings.

This approach runs in O(n * m) time complexity, where n is the length of string `s` and m is the number of words in the `words` array, since we are iterating through the string and checking each window against the frequency map.
 */
let findSubstring = (s, words) => {  
    if (!words || !words.length) return [];
    
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const result = [];
    
    if (totalLength > s.length) return result;

    const wordMap = {};
    for (const word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    for (let i = 0; i <= s.length - totalLength; i++) {
        const window = {};

        for (let j = 0; j < words.length; j++) {
            const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            if (!(word in wordMap)) break;
            
            window[word] = (window[word] || 0) + 1;
            if (window[word] > wordMap[word]) break;
        }

        let isValid = true;
        for (const word in wordMap) {
            if ((window[word] || 0) !== wordMap[word]) {
                isValid = false;
                break;
            }
        }
        if (isValid) result.push(i);
    }

    return result;        
};

const res = findSubstring("barfoothefoobarman", ["foo","bar"]);
console.log(res);