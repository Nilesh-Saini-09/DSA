// Find all pairs on the integer array which is equal to the given number

// method 1 -> using two for loops
const sumPairs = (arr, k) => {
    let count = 0;

    for(let i = 0; i<arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[i] + arr[j] === k) count++;
        }
    }

    return count;
}

// method 2 -> using hashmap (time - O(n), space - O(n))
// 1. create a map to store the freaquncy of each number in the array.
// 2. for each value check whether it can be combined with any other value in the array to form the sum (other than itself).
// 3. after traversal counter will have twice the required value stored in it return the half of that value.

const sumPairs2 = (arr, k) => {
    let map = new Map();

    // setting up the map
    for(let i of arr) {
        if(!map.has(i)) map.set(i, 0);
        map.set(i, map.get(i) + 1);
    }

    let twiceCount = 0;

    for(let i = 0; i<arr.length; i++) {
        if(map.get(k - arr[i]) !== null) {
            twiceCount += map.get(k - arr[i]);
        }

        if(sum - arr[i] === arr[i]) {
            twiceCount--;
        }
    }

    return twiceCount / 2;
}