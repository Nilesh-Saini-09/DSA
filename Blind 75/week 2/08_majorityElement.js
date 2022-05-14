// link -> https://leetcode.com/problems/majority-element/

// method 1 -> using hashmap
const findMajority = arr => {
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
                let count = map.get(arr[i]) +1;
                if (count > arr.length /2) {
                    return arr[i];
                } else
                    map.set(arr[i], count);

        }
        else
            map.set(arr[i],1);
        }
    return undefined;
}