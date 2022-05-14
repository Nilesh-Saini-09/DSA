// link -> https://leetcode.com/problems/valid-anagram/

// method 1 --> use sorting (n logn)
// 1. Sort both strings
// 2. Compare the sorted strings

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    str1.sort();
    str2.sort();

    for(let i = 0; i<str1.length; i++) {
        if(str1[i] !== str[2]) return false;
    }

    return true;
}

// method 2 -> using map
const isAnagram = (s, t) => {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
};

// method 3 -> concise solution
const isAnagram2 = (s, t) => {
    return s.split('').sort().join('') === t.split('').sort().join('');
};