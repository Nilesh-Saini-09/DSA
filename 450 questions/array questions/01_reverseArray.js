let arr = [1,2,3,4,5];

// method 1 - built in reverse method
const reverseArr = arr => {
    return arr.reverse();
}

// method 2 - Swapping an array in place using two pointers
// create two pointers - start and end
// while start < end, swap the values (i used array desct.)
// increment start, decrement end
const reverseArr2 = arr => {
    let start = 0, end = arr.length - 1;
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

// method 3 - for loop and extra space
const reverseArr3 = arr => {
    let result = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

// method 4 - using map and spread
const reverseArr4 = arr => {
    return arr.map(arr.pop, [...arr]);
}
