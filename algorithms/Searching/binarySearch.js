// recursive
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

// bs
let bs2 = function (arr, x, start, end) {
      
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
