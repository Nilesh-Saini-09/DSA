// Rearrange the numbers in the array such that these number 
// are alternative +ve or -ve

// method 1
// sort the array in decreasing order and then loop through it and shift odd position numbers to the negative numbers


// swap function
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const rearrange = (arr,n) => {
    let i = 0, j = n - 1;
  
    // Shift all negative values to the end
    while (i < j)
    {
        while(i <= n - 1 && arr[i] > 0)
            i += 1;
        while (j >= 0 && arr[j] < 0)
            j -= 1;
             
        if (i < j)
            swap(arr, i,j);
    }
  
    // i has index of leftmost negative element
    if (i == 0 || i == n)
        return;
  
    // Start with first positive
    // element at index 0
  
    // Rearrange array in alternating
    // positive & negative items
    let k = 0;
    while (k < n && i < n)
    {
         
        // Swap next positive element
        // at even position
        // from next negative element.
        swap(arr, k, i);
        i = i + 1;
        k = k + 2;
    }
}
 

 
// Driver code
let arr = [ 2, 3, -4, -1, 6, -9 ];
let n = arr.length;