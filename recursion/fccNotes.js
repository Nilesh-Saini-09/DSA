// 1. Reverse the string 
// If string is empty: return string
// Else call the function again on the substring starting from index 1 and add the character at 0th index at the end

const reverseString = str => {
    if(str === '') return '';
    return reverseString(str.substring(1)) + str.charAt(0);
}

// 2. Palindrome
// base case: if the length of the input string is 0 or 1 then return true
// check if the char at 0th index and last index (str.length - 1) are equal. Return the function again on the substring from 1st index to the second last index of the string.
// return false (extra base case)

const isPalindrome = str => {
    // base case
    if(str.length === 0 || str.length === 1) return true;

    // condition check + recursive call
    if(str.charAt(0) === str.charAt(str.length - 1)) {
        return isPalindrome(str.substring(1, str.length-1))
    }

    // additional base case
    return false;
}

// 3. decimal to binary
// make a variable result to store the binary number
// base case: If the decimal is 0 then return result
// operation: add (decimal % 2) to the previous result value. result += decimal % 2;
// call the function again with the quotient value i.e. decimal/2

const dToB = (num, result = '') => {
    if(num === 0) return result;
    result = (num % 2) + result;
    return dToB(Math.floor(num/2), result);
}

const decimalToBinary = (num) => {
    if(num === 0) return 0;
    return ((num % 2) + 10) * decimalToBinary( num/2 );
}

// 4. sum of natural numbers
// make a variable result to store the sum (initialize it to 0)
// base case: If the number is 0 then return result
// operation: add num to the result
// call the function again with the num-1 and result


const sumNaturalNums = (num) => {
    if(num === 0) return num;
    return num + sumNaturalNums(num-1); 
}

// 5. binary search
const bs = (arr, left, right, x) => {
    if(left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if(x === arr[mid]) return mid;
    if(x<arr[mid]) return bs(arr, left, mid-1, x);
    return bs(arr, mid+1, right, x);
}

// 6. fibonacci

const fib = num => {
    
}
