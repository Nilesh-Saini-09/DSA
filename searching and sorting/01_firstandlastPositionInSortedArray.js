// using binary search
const searchRange = (nums, target) => {
    let result = [-1, -1];
    let i = 0, j = nums.length - 1;
    while(i <= j) {
        let mid = Math.floor((i + j) / 2)
        if(nums[mid] < target) {
            i = mid + 1
        } else if(nums[mid] > target) {
            j = mid - 1
        } else {
            let left = mid, right = mid;
            while(nums[left] === target && left >= 0) {
                left -= 1
            }
            result[0] = left + 1
            while(nums[right] === target && right < nums.length) {
                right += 1
            }
            result[1] = right - 1
            return result
        }
    }
    return result
};

// using built in js methods 
const searchRange2 = (nums, target) => {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}