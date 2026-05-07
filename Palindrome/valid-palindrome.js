/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 1. Convert to lowercase and remove all NON-alphanumeric characters
    // [^a-z0-9] means "anything that is NOT a-z or 0-9"
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // 2. A blank string or single char is technically a palindrome
    // 3. Compare the cleaned string to its reversed version
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
};

const res = isPalindrome("A man, a plan, a canal: Panama");
console.log(res);