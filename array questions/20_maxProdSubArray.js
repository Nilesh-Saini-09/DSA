// find maximum product subarray

// method 1 -> O(N^2) o(1)
const maxProdSubarray = arr => {
    let result = arr[0];

    for(let i = 0; i<arr.length; i++) {
        let mul = arr[i];
        for(let j = i+1; j<arr.length; j++) {
            result = Math.max(result, mul);
            mul *= arr[j];
        }
        result = Math.max(result, mul);
    }

    return result;
}

// method 2 
const maxProdSubarray2 = arr => {
    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];
    let maxSoFar = arr[0];

    for(let i  = 1; i<arr.length; i++) {
        let temp = Math.max(Math.max(arr[i], arr[i]*maxEndingHere), arr[i]*minEndingHere);
        minEndingHere = Math.min(Math.min(arr[i], arr[i]*maxEndingHere), arr[i]*minEndingHere );
        maxEndingHere = temp;
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }

    return maxSoFar;
}