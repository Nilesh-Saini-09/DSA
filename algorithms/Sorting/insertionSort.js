// 
const insertionSort = arr => {
    for(let i = 1; i<arr.length; i++) {
        let key = arr[i];
        let j = i-1;

        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

// recursive insertion sort
const recursiveInsertionSort = (arr, n) => {
    if(n <= 1) return;
    recursiveInsertionSort(arr, n-1);
    let last = arr[n-1];
    let j = n-2;

    while( j >= 0 && arr[j] > last) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = last;
}