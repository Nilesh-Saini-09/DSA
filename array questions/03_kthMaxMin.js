let arr = [2,5,9,7,1,3,6];

// method 1 --> using max and min binary heap;
// 1. Build a max and min heap o(n)
// 2. Extract max and min k times
// 3. time complexity O(n + k*logN)

const kMaxMin = (arr, k) => {
    let maxHeap = new MaxBinaryHeap();
    let minHeap = new MinBinaryHeap();
    for(let i of arr) {
        maxHeap.insert(i);
        minHeap.insert(i);
    }

    while(k !== 0) {
        max = maxHeap.extractMax();
        min = minHeap.extractMin();
        k--;
    }

    return [max, min]

}

// method 2  (If the list is sorted or by sorting) (O(nlgn))
const kMaxMin2 = (arr,k) => {
    arr.sort((a,b) => a-b);
    //return [arr[k-1], arr.slice(-k)[0]];
    return [arr[k-1], arr[arr.length-k]];
}

// method 3 (by using map) (O(n)) + space complexity O(n)
const kMaxMin3 = (arr, k) => {
    let map = {};
    for(let i of arr) map[i] ? map[i]++ : map[i] = 1;
    return [Number(Object.keys(map)[k-1]), Number(Object.keys(map)[arr.length-k])]
}

// using modified bubble sort or other sorting algs

