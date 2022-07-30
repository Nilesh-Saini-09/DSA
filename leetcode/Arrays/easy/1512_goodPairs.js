// method 1 - O(n^2)
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) count++;
        }
    }
    
    return count;
}

// method 2 tc - O(n),  sc - O(nums.length)
var numIdenticalPairs = nums => {
    let map = {}, pairs = 0;
    for(let i of nums) {
        map[i] ? map[i]++ : map[i] = 1;
    }
    
    for(let i in map) {
        if(map[i] > 1) {
            let n = map[i];
            let totalPairs = ((n-1)*n)/2;
            pairs+=totalPairs;
        }
    }
    
    return pairs;
}

// method 2 - optimized
// time O(n) space O(nums.length)
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};