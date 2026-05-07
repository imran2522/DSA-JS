console.log("Starting test");

const findSubstring = (s, words) => {  
    console.log("Function called");
    if (!words || !words.length) {
        console.log("No words");
        return [];
    }
    
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const result = [];
    
    console.log("wordLength:", wordLength, "totalLength:", totalLength);
    
    if (totalLength > s.length) {
        console.log("Total length exceeds string length");
        return result;
    }

    const wordMap = {};
    for (const word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }
    
    console.log("wordMap:", wordMap);
    console.log("Starting loop, s.length - totalLength:", s.length - totalLength);

    for (let i = 0; i <= s.length - totalLength; i++) {
        console.log("Checking position:", i);
        const window = {};

        for (let j = 0; j < words.length; j++) {
            const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            console.log("  Word at", j, ":", word);
            if (!(word in wordMap)) {
                console.log("    Word not in map, breaking");
                break;
            }
            
            window[word] = (window[word] || 0) + 1;
            if (window[word] > wordMap[word]) {
                console.log("    Too many of this word, breaking");
                break;
            }
        }

        let isValid = true;
        for (const word in wordMap) {
            if ((window[word] || 0) !== wordMap[word]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log("Found match at:", i);
            result.push(i);
        }
    }

    console.log("Returning:", result);
    return result;        
};

console.log("Calling findSubstring");
const res = findSubstring("barfoothefoobarman", ["foo","bar"]);
console.log("Result:", res);
