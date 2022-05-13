// link -> https://leetcode.com/problems/valid-palindrome/

// method 1
const validPalindrom = str => {
    // lower case the letters and remove all the special characters
    // using regex to remove special chars
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').replace(/ /g,'');

    // two pointers
    let i = 0, j = str.length;
    while(i < j) {
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }

    return true;
}

// method 2 - using reverse, split and join (all built in methods)
const validPalindrom2 = str => {
    // lower case the letters and remove all the special characters
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').replace(/ /g,'');

    return str = str.split('').reverse().join('');
}

// without using regex
// remove all extra chars
// const isAlphaNum = c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    
//  str = str.toLowerCase().split('').filter(e => isAlphaNum(e));