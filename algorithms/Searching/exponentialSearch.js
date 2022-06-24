// binary search
function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + (r - l) / 2;
        if (arr[mid] == x) return mid;
        
        if (arr[mid] > x) {
             return binarySearch(arr, l, mid - 1, x);   
        }
        
        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}

// exponential search
const exponentialSearch = (arr, x) => {
    let n = arr.length;
    // If x is present at first location itself
    if (arr[0] == x) return 0;

    // Find range for binary search by
    // repeated doubling
    let i = 1;
    while (i < n && arr[i] <= x) {
        i = i*2;
    }
    
    //  Call binary search for the found range.
    return binarySearch(arr, i/2, Math.min(i, n), x);
}

// let testArray = [1,2,3,4,5,6,7,8,9,10];
// let x = 9;
// exponentialSearch(testArray, x);
