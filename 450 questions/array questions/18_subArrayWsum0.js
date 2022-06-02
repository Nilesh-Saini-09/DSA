// find if there is any sub array with sum zero

// use hashing. The idea is to iterate through the array and for every element arr[i], calculate the sum of elements from 0 to i (this can simply be done as sum += arr[i]). If the current sum has been seen before, then there is a zero-sum array. Hashing is used to store the sum values so that we can quickly store sum and find out whether the current sum is seen before or not.

// time - O(n), space - O(n)

const subArrayExists = arr =>{
    // base cases
    if(arr.includes(0)) return true;
    if(!arr.some(x => x<0)) return false;

    let sumSet = new Set();
    let sum = 0;
    for(let i of arr) {
        sum += i;
        if(sum === 0 || sumSet.has(sum)) return true;
        sumSet.add(sum);
    }

    return false;
    
}

// method 2

