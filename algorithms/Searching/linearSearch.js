const search = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) return i;
    }

    return -1;
}

// const testArray = [2, 8, 1, 3, 6, 7, 5, 4];
// let x = 6
// search(testArray, x)
// output => 4