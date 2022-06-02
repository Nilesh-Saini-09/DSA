// Find the triplet that sum to a given value

// method 1 -> using three loops 
// Generate all possible triplets and compare the sum of every triplet with the given values.

// 1.  Given an array of length n and a sum s
// 2. Create three nested loop first loop runs from start to end (loop counter i), second loop runs from i+1 to end (loop counter j) and third loop runs from j+1 to end (loop counter k)
// 3. The counter of these loops represents the index of 3 elements of the triplets.
// 4. Find the sum of ith, jth and kth element. If the sum is equal to given sum. Print the triplet and break.
// 5. If there is no triplet, then print that no triplet exist.

// t- O(n^3), s- O(1)
const findTriplets = (arr,sum) => {
    let start, end;
    for(let i = 0; i<arr.length - 2; i++) {
        for(let j = i+1; j<arr.length - 1; j++) {
            for(let k = j+1; k<arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === sum) {
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
    return false;
}

// method 2 -> two pointers and sorting
// t - O(n^2), s - O(1)
const findTriplets2 = (arr, sum) => {
    arr.sort((a,b)=>a-b);
    for(let i = 0; i<arr.length-2; i++) {
        let l = i+1, r = arr.length - 1;
        while(l<r){
            let tempSum = arr[i] + arr[l] + arr[r];
            if(tempSum === sum) {
                return [arr[i], arr[l], arr[r]];
            } else if(tempSum < sum) {
                l++;
            } else {
                r--;
            }
        }
    }

    return false;
}

// method 3 t -> o(n^2), s - o(n)
const findTriplets3 = (arr, sum) => {
    for(let i = 0; i<arr.length - 2; i++) {
        let s = new Set();
        let currentSum = sum - arr[i];
        for(let j = i+1; j<arr.length; j++) {
            if(s.has(currentSum - arr[j])) {
                return [arr[i], arr[j], currentSum - arr[j]];
            }
            s.add(arr[j]);
        }
    }

    return false;
}