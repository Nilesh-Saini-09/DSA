// swap function
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

// unstable algorithm
// 1. Initialize minimum value(min_idx) to location 0
// 2.  Traverse the array to find the minimum element in the array
// 3. While traversing if any element smaller than min_idx is found then swap both the values.
// 4. Then, increment min_idx to point to next element
// 5. Repeat until array is sorted

const selectionSort = (arr) => {
    let minIdx;
    for(let i = 0; i<arr.length-1; i++) {
        minIdx = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[minIdx] > arr[j]) minIdx = j;
        }
        swap(arr, minIdx, i);
    }

    return arr;
}

// stable selection sort

const stableSelectionSort = arr => {
    for(let i = 0; i<arr.length - 1; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[min] > arr[j]) min = j;
        }

        let key = arr[min];
        while(min > i) {
            arr[min] = arr[min - 1];
            min--;
        }

        arr[i] = key;
    }

    return arr;
}