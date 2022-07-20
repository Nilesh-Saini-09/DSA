// check if the string is a palindrome or not
const palindrome = (str, l = 0, r = str.length - 1) => {
    if(l >= r) return true;
    if(str[l] !== str[r]) return false;
    return palindrome(str, l+1, r-1);
}