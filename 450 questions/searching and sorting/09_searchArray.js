// searching in an array where adjacent differ atmost by k

// method 1 => check each element and return the index if it matches

// method 2 => optimized version of the method 1
// 1. the difference between all adjacent elements is at most k
// 2. The idea is to start comparing from the leftmost element and find the difference between the current array element and x. Let this difference be ‘diff’.
// 3. we always know that x must be at least ‘diff/k’ away, so instead of searching one by one, we jump ‘diff/k’

const searchArray = (arr, x, k) => {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] == x) return i;
        i = i + Math.max(1, Math.abs(arr[i]-x)/k);
    }
    return -1;
}