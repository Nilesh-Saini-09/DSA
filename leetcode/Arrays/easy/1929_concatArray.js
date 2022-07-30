// built in methods 
// spread operator
const getConcatenation = nums => {
    return [...nums, ...nums];
};

// concat
var getConcatenation2 = nums => {
    return nums.concat(nums);
};

// method 2
var getConcatenation3 = nums => {
    let n = nums.length;
    let ans = new Array(2*n);
    
    for(let i = 0; i < n; i++) {
        ans[i] = ans[i + n]= nums[i];
    }
    
    return ans;
};

// method 3 -- error
// const getConcatenation4 = nums => {
//     for(let i = 0; i<nums.length; i++) {
//         nums.push(nums[i]);
//     }

//     return nums;
// }