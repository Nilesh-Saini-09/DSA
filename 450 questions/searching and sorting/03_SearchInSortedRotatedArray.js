// Search an element in a sorted and rotated array

// method 1
// Find Pivot and divide the array in two subarrays and then use binary search in those arrays 
// Pivot : In a sorted rotated array (ascending order) the pivot is the only element for which the next element is smaller than it.

// Binary Search
const BS = (arr, low, high, key) => {
    if (high < low) return -1;
    let mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) return mid;
    if (key > arr[mid]) return BS(arr, mid + 1, high, key);
    return BS(arr, low, mid - 1, key);
}

// Pivot
const findPivot = (arr, low, high) => {
    if (high < low) return -1;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2);
    if (mid < high && arr[mid] > arr[mid + 1]) return mid;

    if (mid > low && arr[mid] < arr[mid - 1]) return (mid - 1);

    if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);

    return findPivot(arr, mid + 1, high);
}

// main function
const pivotedBS = (arr, k) => {
    let pivot = findPivot(arr, 0, arr.length - 1);
    if (pivot === -1) return BS(arr, 0, arr.length - 1, key);
    if (arr[pivot] == key) return pivot;
    if (arr[0] <= key) return BS(arr, 0, pivot - 1, key);
    return BS(arr, pivot + 1, arr.length - 1, key);
}

// method 2

const rotatedSearch = (arr, l, h, target) => {
    if(l > h) return -1;

    let mid = Math.floor((l+h) / 2);
    if(arr[mid] === target) return mid;
    if(arr[l] <= arr[mid]) {
        if(target >= arr[l] && target <= arr[mid]) {
            return rotatedSearch(arr, l, mid-1, target);
        }
        return rotatedSearch(arr, mid+1, h, target);
    }

    if(target >= arr[mid] && target <= arr[h]) {
        return rotatedSearch(arr, mid+1, h, target);
    }
    return rotatedSearch(arr, l, mid-1, target)
}
