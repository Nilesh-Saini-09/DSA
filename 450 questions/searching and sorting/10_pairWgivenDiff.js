// Find a pair with the given difference

// method 1 => Naive approach using two for loops
// time and space => O(n^2) and O(1)
const findPair = (arr, diff) => {
    for(let i = 0; i<arr.length-1; i++) {
        let findNum = arr[i] + diff;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] === findNum) return [arr[i], arr[j]]
        }
    }

    return [-1, -1];
}

// method 2 => sorting and binary search
// time and space => O(nlogn) and O(1)

// binary search
const bs = (arr, e, l, r) => {
    let mid = Math.floor((l+r)/2);
    while(arr[mid] !== e && l<=r) {
        if(e < arr[mid]) r = mid-1;
        else l = mid+1;

        mid = Math.floor((l+r)/2);
    }

    if(arr[mid] === e) return mid;

    return -1;
}

const findPair2 = (arr, diff) => {
    arr.sort((a,b) => a-b);
    for(let i = 0; i<arr.length; i++) {
        let findNum = arr[i] + diff;
        let tempIndex = bs(arr, findNum, i+1, arr.length-1);
        if( tempIndex !== -1){
            return [arr[i], arr[tempIndex]];
        }
    }
}

// better version of above apprach
const findPair3 = (arr, diff) => {
    arr.sort((a,b) => a-b);
    let i = 0, j = 1;
    while(i < arr.length && j < arr.length) {
        if(i !== j && arr[j] - arr[i] === diff) {
            return [arr[i], arr[j]];
        } else if (arr[j] - arr[i] < diff) {
            j++;
        } else {
            i++;
        }
    }

    return [-1, -1];
}

// method 3 => using hashmap
// time and space => O(n) and o(n)

const findPair4 = (arr, diff) => {
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }

        // if the diff is 0
        // if freaq of any element is more than 1
        if(diff === 0 && map.get(arr[i] > 1)) {
            console.log([arr[i], arr[i]])
            return true;
        }
    }

    // if no duplicates exist the return false
    if(diff === 0) return false;

    for(let i = 0; i<arr.length; i++) {
        if(map.has(diff + arr[i])) return true;
    }
    
    return false;
}