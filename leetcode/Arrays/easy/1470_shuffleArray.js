// method 1
var shuffle = (nums, n) => {
    let res = []
    for(let i=0; i < n; i++){  
        res.push(nums[i])
        res.push(nums[i+n])
    }
    return res 
};

// optimized
var shuffle = (nums, n) => {
    let res = [];
    let i = 0, j = n;
    while(i < n && j < nums.length) {
        res.push(nums[i]);
        res.push(nums[j]);
        i++;
        j++;
    }
    return res;
}