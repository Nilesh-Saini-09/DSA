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