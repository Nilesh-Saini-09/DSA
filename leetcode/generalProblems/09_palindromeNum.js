// method 1
const isPalindrome = x => {
    if(x < 0) return false;
    if(x < 10) return true;
    if(x % 10 === 0) return false;

    let reverse = 0;
    while(reverse < x) {
        reverse *= 10;
        reverse += x % 10;
        x = Math.trunc(x / 10);
    }

    return reverse === x || Math.trunc(reverse / 10) === x;
}

// method 2 - using recursion and string
const isPalindrome2 = x => {
    const s = x.toString();
    if (s.length === 1) {
        return true;
    }
    const start = s[0];
    const end = s[s.length - 1];
    if (start !== end) {
        return false;
    }
    if (s.length === 2) {
        return true;
    }
    const subStr = s.substring(1, s.length - 1);
    return isPalindrome2(subStr);
};