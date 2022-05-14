// link => https://leetcode.com/problems/longest-palindrome/

// method 1
const longestPalindrome = s => {
    const set = new Set();
    let count = 0;
    
    for (const char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
};

// method 2 --> to obtain the longest palindromic string
