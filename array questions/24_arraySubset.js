// Find whether an array is a subset of another array.

// method 1 => js built-in methods
// use filter method on arr2 to keep only those nums that are in arr1 
// compare the length of the filtered array and the orginal array
const isSubset = (arr1, arr2) => {
    return arr2.filter(num => arr1.includes(num)).length === arr2.length;
}


// method 2 -> using binary search

let bs = function (arr, x, start, end) {
      
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return true;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}

const isSubset2 = (arr1,arr2) => {
    // sort arr1
    arr1.sort((a,b) => a-b)
    console.log(arr1);
    let result = []
    // do binary search for each element in arr2
    for(let i of arr2) {
        if(!bs(arr1, i, 0, arr1.length)) return false;
    }

    return true;
}

// method 3 -> using map
const isSubset3 = (arr1, arr2) => {
    let map = {};
    for(let i of arr2) {
        map[i] ? map[i]++ : map[i] = 1
    }

    for(let i of arr1) {
        if(map[i] && map[i] > 0) {
            map[i]--;
        }
    }

    return !Object.values(map).some(x => x>0);
}