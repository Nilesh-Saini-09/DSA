// swap function
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// time and space complexity => O(n^2) and O(1)

// unoptimized version
const bubbleSort1 = arr => {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n-i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

// optimized version
const bubbleSort2 = arr => {
    let n = arr.length;
    let swapped;
    for(let i = 0; i < n-1; i++) {
        swapped = false;
        for(let j = 0; j < n-i - 1; j++) {
            swap(arr, j, j+1);
            swapped = true;
        }

        if(swapped === false) {
            break;
        }
    }

    return arr;
}

// Recursive bubble sort
// 1. if array's size is 1 return;
// 2. Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
// 3. Recur for all the elements in the array except for the last one

// time and space => O(n*n) and O(n)

const recursiveBubbleSort = (arr, n) => {
    if(n === 1) return;
    for(let i = 0; i<n-1; i++) {
        if(arr[i] > arr[i+1]) swap(arr, i, i+1);
    }

    recursiveBubbleSort(arr, n-1);
}