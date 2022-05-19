// Find whether an array is a subset of another array.

// method 1 => js built-in methods
// use filter method on arr2 to keep only those nums that are in arr1 
// compare the length of the filtered array and the orginal array
const isSubset = (arr1, arr2) => {
    return arr2.filter(num => arr1.includes(num)).length === arr2.length;
}

// method 2 -> using binary search
const bs = (arr, k) => {
    let start = 0, end = arr.length - 1, mid;
    if(start <= end) {
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === k) return true;
        if(arr[mid] > k) return bs(arr.slice(start, mid-1), k);
        else return bs(arr.slice(mid+1, end+1), k);
    }

    return false;
}
