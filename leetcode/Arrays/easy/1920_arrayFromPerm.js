// method 1 - using built in method
const buildArray = nums => {
    return nums.map(num => nums[num]);
}

// method 2
const buildArray2 = nums => {
    let result = [];
    for(let i = 0; i<nums.length; i++) {
        result.push(nums[nums[i]]);
    }
    return result;
}

// method 3 - using Euclidean Division
// https://en.wikipedia.org/wiki/Euclidean_division
const buildArray3 = nums => {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        nums[i] = nums[i] + (len * (nums[nums[i]] % len));
    }

    for(let i = 0; i < len; i++) {
        nums[i] = Math.floor(nums[i] / len);
    }

    return nums;
}