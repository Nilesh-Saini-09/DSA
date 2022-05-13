// recursive
const bs = (arr, k) => {
    let start = 0, end = arr.length - 1, mid;
    if(start <= end) {
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === k) return true;
        if(arr[mid] > k) return bs(arr.slice(start, mid-1), k);
        else return bs(arr.slice(mid+1, end+1), k);
    }

    return false;
}