const jumpSearch = (arr, x) => {
    let n = arr.length;
    let block = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(block, n) - 1] < x) {
        prev = block;
        block += Math.sqrt(n);
        if (prev >= n) return -1;
    }
   
    while (arr[prev] < x) {
        prev++;
        if (prev == Math.min(block, n)) return -1;
    }

    if (arr[prev] == x) return prev;
    return -1;
}