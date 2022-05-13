// Iterative
const search = (nums, target) => {
    let start = 0, end = nums.length - 1;
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) return mid;
        if(target < nums[mid]) {
            end = mid-1;
        } else if(target > nums[mid]) {
            start = mid+1;
        }
    }
    
    return -1;
}

// note: calculating mid using bitwise operator
// Calculate the midpoint of the array length
// mid = ((low + high) / 2) | 0

// recursive
