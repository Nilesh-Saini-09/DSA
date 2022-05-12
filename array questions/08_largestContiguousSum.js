// using kadane's algorithm
const maxSubarray = arr => {
    let maxSoFar = a[0];
    let currentMax = a[0];

    for(let i = 1; i < arr.length; i++) {
        currentMax = Math.max(a[i], currentMax + a[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}

// method 2 Finding sum of maximum subarray (another way of doing this)
const maxSubarray2 = arr => {
    let maxSoFar = arr[0];
    let maxEndingHere = 0;

    for(let i = 0; i < arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i];
        if(maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }

        if(maxEndingHere < 0) {
            maxEndingHere = 0
        }
    }

    return maxSoFar;
} 

// Finding the contiguous array that has maximum sum
const maxSubarray3 = arr => {
    let maxSoFar = arr[0];
    let maxEndingHere = 0;
    let start = 0, end = 0, s = 0;

    for(let i = 0; i < arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i];
        if(maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }

        if(maxEndingHere < 0) {
            maxEndingHere = 0;
            s = i+1;
        }
    }

    return arr.slice(start, end+1);
} 




