// brute force
// 1. A "brute force" approach using .pop() and .unshift() array methods.
// 2. A more complex solution using array reversals.

const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
}

// method 2
// Reversal Algorithm

// Let AB are the two parts of the input array where A = arr[0..d-1] and B = arr[d..n-1]. The idea of the algorithm is : 
 

// Reverse A to get ArB, where Ar is reverse of A.
// Reverse B to get ArBr, where Br is reverse of B.
// Reverse all to get (ArBr) r = BA.
// time = o(n), space = o(1)
const rotateArray2 = function(nums, k) {

    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
    
    // if number of rotations is more than length of array
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
  }



// method 3
// Reversal method for array rotation
// algorithm:
// 1. given n and r => n is length of the array and r is the number of times we must rotate.
// 2. Break the array in two parts n-r (A) and r (B).
// 3. Reverse A and B indivisually => ArBr.
// 4. Reverse whole ArBr => (ArBr)r.

function reverseArray(arr) {
    const swap = (a, idx1, idx2) => {
        [a[idx1], a[idx2]] = [a[idx2], a[idx1]]
    }
    
    let i = 0;
    let j = arr.length-1;
    while(i<j) {
        swap(arr, i, j);
        i++;
        j--;
    }
    
    return arr;
}

var rotate = function(nums, k) {
    let n = nums.length;
    
    // storing index of the array
    let leftIdx = n-k;
    let rightIdx = nums.length-k;
    return reverseArray(
    ... reverseArray(nums.slice(0, leftIdx)),
    ... reverseArray(nums.slice(rightIdx))
    );
    
}