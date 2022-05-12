// method 1 -> partition method of quick sort
// time = o(N) and space = O(1)
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]; 
const rearrange = arr => {
    let j = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] < 0) {
            if(i !== j) {
                swap(arr, i, j);
            }
            j++;
        }
    }
    return arr;
}

// method 2 => two pointers
// time -> o(N) space -> o(1)
const  reArrange = (arr) => {
    let low = 0, high = arr.length - 1;
    while(low < high){
        if(arr[low] < 0)
            low++;
        else if(arr[high] > 0)
            high--;
        else{
            swap(arr, low, high);
        }
    }
    return arr;
}