// Find a fixed point in a given array (value equal to index)
// method 1 - binary search
const fixedSearch = (arr,low,high) => {
     if(high >= low) {
        let mid = Math.floor(low + (high - low)/2); 
        if(mid === arr[mid]) return mid;
        let result = -1;
        if(mid+1 <= arr[high]){
           result = fixedSearch(arr, (mid + 1), high);
        }
          
        if(result!=-1) return result;
          
        if(mid-1 >= arr[low]) {
           return fixedSearch(arr, low, (mid -1));
        }
      }
   
      /* Return -1 if there is no Fixed Point */
      return -1;
 }

// method 2 -> linear search
const fixedSearch2 = arr => {
     for(let i = 0; i<arr.length; i++) {
          if(arr[i] === i) return arr[i];
     }
     return -1;
}