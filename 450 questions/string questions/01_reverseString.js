// method 1 time -> O(n) and space -> O(n)
const reverseString = str => {
    let resultStr = '';
    for(let i = str.length - 1; i >=0; i--) {
        //resultStr += str[i];
        resultStr += str.charAt(i);
    }
    return resultStr;
}

// method 2 time -> O(n) and space -> O(1)
const reverseString2 = str => {
    let i = 0, j = str.length-1, newStr = str.split('');
    while(i < j) {
        [newStr[i], newStr[j]] = [newStr[j], newStr[i]]
        i++;
        j--;
    }
    return newStr.join('');
}

// method 3 (recursion)
const reverseString3 = str => {
    if (str === '') return '';
    return reverseString3(str.substring(1)) + str.charAt(0);
}