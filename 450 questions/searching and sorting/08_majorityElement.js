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
