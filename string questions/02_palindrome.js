
// method 1 -> two pointers
const isPalindrome = str => {
    // lower case the letters and remove all the special characters
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').replace(/ /g,'');

    let i = 0, j = str.length - 1;
    while(i < j) {
        if(str.charAt(i) !== str.charAt(j)) return false;
        i++; 
        j--;
    }
    return true;
}

// using built in reverse
const isPalindrome2 = str => {
    return str == str.split('').reverse().join('');
}