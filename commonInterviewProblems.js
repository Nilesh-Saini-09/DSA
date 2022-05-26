// 1. valid anagrams
// 1.1 using map
const validAnagram = (s1, s2) => {
    // base case 
    if(s1.length !== s2.length) return false;

    // map
    let map = {};
    for(let i of s1) {
        map[i] ? map[i]++ : map[i] = 1;
    }

    // loop to check
    for(let i of s2) {
        if(!map[i]) return false;
        map[i]--;
    }

    return true;
} 

// 1.2
// two anagrams have the same lexicographically sorted string.
// for eg: s1 = nameless, s2 = salesman
// sorted(s1) = aeelmnss, sorted(s2) = aeelmnss
// therefore we can check sorted(s1) === sorted(s2)

const validAnagram2 = (s1, s2) => {
    if(s1.length !== s2.length) return false;
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// 2. First and Last Index of an element In Sorted Array
// 2.1 using built in js methods - indexOf() and lastIndexOf()

// indexOf() always gives the index of first item in the array if duplicates occur
// lastIndexOf() return the last index of the item in the array.
const firstLastIdx = (arr, k) => {
    return [arr.indexOf(k), arr.lastIndexOf(k)]
}

// 2.2 Using binary search
var searchRange = function(nums, target) {
    let result = [-1, -1]
    let i = 0, j = nums.length - 1
    while(i <= j) {
        let mid = Math.floor((i + j) / 2)
        if(nums[mid] < target) {
            i = mid + 1
        } else if(nums[mid] > target) {
            j = mid - 1
        } else {
            let left = mid, right = mid
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
