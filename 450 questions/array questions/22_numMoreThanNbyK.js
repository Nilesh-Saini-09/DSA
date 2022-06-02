// Given an array of size n and a number k, find all elements that appear more than n/k times

// method 1 using hashmap
const moreThanNdK = (arr, k) => {
    let x = arr.length/k;
    let result = [];

    // creating map and storing array's value in it
    let map = new Map();
    for(let i of arr) {
        if(!map.has(i)) {
            map.set(i, 1);
        } else {
            let count = map.get(i);
            map.set(i, count+1);
        }
    }

    for(let [k, v] of map.entries()) {
        if(v > x) {
            result.push(k);
        }
    }

    return result;
}


// method 1 (using object to store freq);
const moreThanNdK2 = (arr, k) => {
    let x = arr.length/k;
    let result = [];
    let map = {};
    for(let i of arr) {
        map[i] ? map[i]++ : map[i] = 1
    }

    for(let i in map) {
        if(map[i]>x) result.push(i);
    }

    return result;
}