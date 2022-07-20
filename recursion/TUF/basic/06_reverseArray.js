// use recursion to reverse an array
const reverseArray = (arr, l = 0, r = arr.length - 1) => {
    if(l >= r) return arr;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    return reverseArray(arr, l+1, r-1);
}