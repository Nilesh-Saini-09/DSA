// Longest substring without repeating characters

// sliding window
function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
      while (seen.has(s[r])) {
        seen.delete(s[l]);
        l++;
      }
      seen.add(s[r]);
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
  };


// sliding window using hashmap
const lengthOfLongestSubstring2 = s => {
    let map = {};
    let maxLen = 0;
    let start = 0;
    for(let end  = 0; end < s.length; end++) {
        let lastChar = s[end];
        if(map[lastChar] == undefined) {
            map[lastChar] = 0;
        }

        map[lastChar]++;
        while(map[lastChar] > 1) {
            let firstChar = s[start];
            map[firstChar]--;
            start++;
        }
        maxLen = Math.max(maxLen, end-start + 1);
    }

    return maxLen;
}

