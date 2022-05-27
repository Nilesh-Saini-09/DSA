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

// 2.2 using linear search
// time and space => O(n) and o(1)
const firstLastIdx2 = (arr, k) => {
    let start = -1;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === k) {
            start = i;
            while(arr[i+1] === target && i+1 < arr.length) {
                i++;
            }
            return [start, i];
        }
    }
    return [start, -1];
}

// 2.3 Using binary search
// time and space => O(lgn) and O(1)
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

// 2.4 binary search another approach
// time and space => O(logn) and o(1)
const findStart = (arr, target) => {
    if(arr[0] === target) return 0;
    let [left, right] = [0, arr.length - 1];
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target && arr[mid-1] < target) return mid
        else if (arr[mid] < target) left = mid+1
        else right = mid-1
    }
    return -1;
}

const findEnd = (arr, target) => {
    let n = arr.length;
    if(arr[n-1] === target) return n-1;
    let [left, right] = [0, n-1];
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target && arr[mid+1] > target) return mid
        else if(arr[mid] > target) right = mid-1
        else left = mid+1
    }
    return -1;
}
const firstLastIdx3 = (arr, target) => {
    // edge cases
    if(arr.length === 0 || arr[0] > target || arr[arr.length - 1] < target) {
        return [-1, -1];
    }

    let start = findStart(arr, target);
    let end  = findEnd(arr, target);

    return [start, end];
}

// 3. Kth largest element in the array
// 3.1 removing max from the array k times
// time and space => O(kn), O(1)
const kthLargest = (arr, k) => {
    for(let i = 0; i<k-1; i++) {
        let maxIdx = arr.indexOf(Math.max(...arr));
        arr.splice(maxIdx, 1);
    }

    return Math.max(...arr);
}

// 3.2 Sort the array
// time and space => O(nlogn) and O(1);
const kthLargest2 = (arr, k) => {
    arr.sort((a,b) => a-b);
    return arr[arr.length - k];
}

// 3.3 Priority queue/binary heaps
// time and space => O(n+klogn) and O(n)
const kthLargest3 = (arr, k) => {
    let maxHeap = new MaxBinaryHeap();
    for(let i of arr) {
        maxHeap.insert(i);
    }

    while(k !== 0) {
        max = maxHeap.extractMax();
        k--;
    }

    return max;
}

// 3.4 Using maps
const kthLargest4 = (arr, k) => {
    let map = {}, len = arr.length;
    for(let i of arr) {
        map[i] ? map[i]++ : map[i] = 1;
    }

    let maxSum = len - k + 1;
    
    for(let i in map) {
        maxSum -= map[i];
        if(maxSum <= 0) return Number(i);
    }
}


// 4. Symmetric tree

// 4.1
const isSymmetric = root => {
    if(!root) return true;
    function traverse(leftNode, rightNode) {
        // base case - if both left and right child are null
        if(!leftNode && !rightNode) return true;

        // if one of them in null or values aren't equal
        if(leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) return false;

        // recursive call
        return traverse(leftNode.right, rightNode.left) && traverse(leftNode.left, rightNode.right);
    }

    // call the helper function
    return traverse(root.left, root.right);
}