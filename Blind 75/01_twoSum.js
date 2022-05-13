// link : https://leetcode.com/problems/two-sum/

// method 1 - using hashmap (time - O(n), space - O(n))
const twoSum = (arr, target) => {
    let map = {}, i;
    for(i = 0; i<arr.length; i++) {
        const diff = target - arr[i];
        const diffIdx = arr.indexOf(diff);

        if(diff in map && diffIdx !== i) {
            return [map[diff], i];
        } else {
            map[arr[i]] = i;
        }
    }
    return null;
}

// method 1 (revised)
const twoSum2 = (arr, target) => {
    var map = new Map();
  
    for(var i = 0; i<arr.length; i++) {
        var num = arr[i];
        if(map.get(num) === undefined) map.set(target-num, i);
        else return [map.get(num), i];
    }
};

// method 1 more revised (time - O(n), space - O(1))
const twoSum4 = (arr, target) => {
    for (let i = 0; i < array.length; i++) {
        const diffIdx = array.indexOf(target - array[i]);
        if (diffIdx >= 0 && diffIdx !== i) {
        return [i, diffIdx];
        }
    }
    return null;
}


// method 2 - sorting and two pointer (time - O(nlgn), space - O(n), Assuming using merge sort)
const twoSum3 = (arr, target) => {
    let start = 0, end = arr.length - 1;
    arr = arr.sort((a,b) => a-b);

    while(start < end) {
        let sum = arr[start] + arr[end];
        if(sum === target) return [start, end];
        if(sum > target) end--;
        else start++;
    }

    return null;
}

