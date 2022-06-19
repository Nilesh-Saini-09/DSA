// recursive
const binarySearch = (arr, k) => {
    let start = 0, end = arr.length - 1, mid;
    mid = Math.floor((start + end) / 2);
    if(arr.length === 1 && arr[0] === k) return false;
    if(arr[mid] === k) return mid;

    if(arr[mid] > k) {
        return binarySearch(arr.slice(0, mid), k);
    } else {
        return binarySearch(arr.slice(mid));
    }
}

// const testArray = [2, 8, 1, 3, 6, 7, 5, 4];
// let x = 6
// search(testArray, x)
// output => 4

// bs
let bs2 = function (arr, x, start, end) {
      
    // Base Condition
    if (start > end) return false;
    let mid = Math.floor((start + end)/2);
    if (arr[mid] === x) return true;
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
        return recursiveFunction(arr, x, mid+1, end);
}


// iterative
const binarySearch2 = (arr, x) => {   
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) return mid;
  
        if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}