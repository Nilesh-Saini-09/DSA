// union and intersection of the two sorted arrays
// To find union of two sorted arrays, follow the following merge procedure :

// 1) Use two index variables i and j, initial values i = 0, j = 0
// 2) If arr1[i] is smaller than arr2[j] then print arr1[i] and increment i.
// 3) If arr1[i] is greater than arr2[j] then print arr2[j] and increment j.
// 4) If both are same then print any of them and increment both i and j.
// 5) Print remaining elements of the larger array.

// To find intersection of 2 sorted arrays, follow the below approach :

// 1) Use two index variables i and j, initial values i = 0, j = 0
// 2) If arr1[i] is smaller than arr2[j] then increment i.
// 3) If arr1[i] is greater than arr2[j] then increment j.
// 4) If both are same then print any of them and increment both i and j.
const unionIntersection = (arr1, arr2) => {
    let [i, j] = [0, 0];
    let union = [];
    let intersection = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            union.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            union.push(arr2[j]);
            j++;
        } else {
            union.push(arr1[i]);
            intersection.push(arr1[i]);
            i++, j++;
        }
    }

    while(i < arr1.length) {
        union.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        union.push(arr2[j])
        j++;
    }

    return [union, intersection];
}

// method 2
const unionIntersection2 = (arr1, arr2) => {
    let numSet1 = new Set();
    for(let i of arr1) {
        numSet1.add(i);
    }

    let intersection = new Set();
    for(let i of arr2) {
        if(numSet1.has(i)) {
            intersection.add(i);
        }
    }

    return intersection;
}


// method 3

const unionIntersection3 = (arr1, arr2) => {
    let max = arr1.length > arr2.length ? arr1 : arr2;
    let min = arr1.length > arr2.length ? arr2 : arr1;

    // intersection
    let intersection = min.filter(num => max.includes(num));

    // union
    for(let i of min) {
        if(!max.includes(i)) max.push(i);
    }


    return [max, intersection];
}