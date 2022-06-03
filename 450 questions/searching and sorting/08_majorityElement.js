// method 1 => using two for loops
// time and space => O(n^2) and O(1)
const majorityElement = arr => {
    const maxCount = 0, index = -1;
    let tempCheck = Math.ceil(arr.length/2);
    for(let i = 0; i< arr.length; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) count++;
        }

        if(count > maxCount) {
            maxCount = count;
            index = i;
        }
    }

    if(maxCount > tempCheck) return arr[index];
    return -1;
}

// method 2 = Moore's voting algorithm
// time and space => O(n) and O(1)
const findCandidate = (a, size) => {
    let maj_index = 0, count = 1;
    let i;
    for (i = 1; i < size; i++) {
        if (a[maj_index] == a[i])
            count++;
        else
            count--;

        if (count == 0) {
            maj_index = i;
            count = 1;
        }
    }
    return a[maj_index];
}

const isMajority = (a, size, cand) => {
    let i, count = 0;
    for (i = 0; i < size; i++) {
        if (a[i] == cand)
            count++;
    }
    if (count > parseInt(size / 2, 10))
        return true;
    else
        return false;
}

const printMajority = (a, size) => {
    let cand = findCandidate(a, size);
  
    /* Print the candidate if it is Majority*/
    if (isMajority(a, size, cand))
        return cand;
    else
        return -1;
}

// method 3 => using hash map
// time and complexity => O(n) and O(n)
const findMajority = arr => {
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let count = map.get(arr[i]) +1;
            if (count > arr.length /2) return arr[i]
            else map.set(arr[i], count);
        }
        else
            map.set(arr[i],1);
    }
    return -1;
}
