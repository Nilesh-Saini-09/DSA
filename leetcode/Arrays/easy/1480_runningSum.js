// method 1
const runningSum = nums => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        nums[i] += sum;
        sum = nums[i];
    }

    return sum;
}

// method 2 - using reduce
const runningSum2 = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}