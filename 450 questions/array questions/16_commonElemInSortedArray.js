// Find common elements in three sorted arrays

// method 1 time -> O(n1+n2+n3)
const commonElements = (arr1, arr2, arr3) => {
    // initializing the result array and i, j, k variables to 0
    let result = [], [i, j, k] = new Array(3).fill(0);
    // looping through the array
    while(i < arr1.length && j < arr2.length && k < arr3.length) {
        if(arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } 
        else if(arr1[i] < arr2[j]) i++;
        else if(arr2[j] < arr3[k]) j++;
        else k++;
    }
    return result;
}

// Note: the above method works fine if there are no duplicates in the array. But If there are any duplicates then the elements will start to repeat itself and it will mess the count.
// To avoid this problem we can keep a previous variable which will store the previous values and compare the next value in the array with the previous values.
// if they are same then just move ahead, otherwise compare.

// method 1 (modified version)

const commonElements2 = (arr1, arr2, arr3) => {
    // initializing the result array and i, j, k variable to 0
    let result = [], [i, j, k] = new Array(3).fill(0);

    // declaring prevs and initializing it to negative items
    let prev1, prev2, prev3;
    prev1 = prev2 = prev3 = Infinity;

    while(i < arr1.length && j < arr2.length && k < arr3.length) {
        // check value of arr[i] with prev and it's less than length of the array
        while(arr1[i] === prev1 && i < arr1.length) i++;
        while(arr2[j] === prev2 && j < arr2.length) j++;
        while(arr3[k] === prev3 && k < arr3.length) k++;

        // same as above
        if(arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            result.push(arr1[i]);
            prev1 = arr1[i];
            prev2 = arr2[j];
            prev3 = arr3[k];
            i++;
            j++;
            k++;
        } 


        else if(arr1[i] < arr2[j]) {
            prev1 = arr1[i];   
            i++
        }
        else if(arr2[j] < arr3[k]) {
            prev2 = arr2[j];
            j++;
        }
        else {
            prev3 = arr3[k];
            k++;
        }
    }
    return result;
}

// method 2 using set
// The idea is to use hash set. Here we use 2 of the sets to store elements of the 1st and 2nd arrays. The elements of the 3rd array are then checked if they are present in the first 2 sets. Then, we use a 3rd set to prevent any duplicates from getting added to the required array.

// time - O(n1 + n2 + n3), space - O(n1 + n2 + n3)

const commonElements3 = (arr1, arr2, arr3) => {
    let first = new Set();
    let second = new Set();
    let third = new Set();

    for(let i of arr1) first.add(i);
    for(let i of arr2) second.add(j);

    // using third set to prevent duplicates
    for(let i of arr3) {
        if(first.has(i) && second.has(i)) {
            if(!third.has(i)) result.push(i);
        }

        third.add(i);

    }
}


// method 3 using binary search
// time - O(n1(log(n2*n3)))
// space - O(1)

// Binary Search 
const binary_search = (arr, element) => {
    let l = 0, h = arr.length - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2)
        if (arr[mid] == element) {
            return true
        }
        else if (arr[mid] > element) {
            h = mid - 1
        }
        else {
            l = mid + 1
        }
    }
    return false
}

const commonElements4 = (arr1, arr2, arr3) => {
    let result = [];
    for(let i = 0; i<arr1.length; i++) {
        if(i !== 0 && arr[i] === arr[i-1]) {
            continue;
        }

        // check if the current item exist in the second and third arrays using bs
        if(binary_search(arr2, arr1[i]) && binary_search(arr3, arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}












