// Find common elements in three sorted arrays

// method 1 time -> O(n1+n2+n3)
const commonElements = (arr1, arr2, arr3) => {
    let result = [], [i, j, k] = new Array(3).fill(0);
    while(i< arr1.length && j<arr2.length && k<arr3.length) {
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
    let result = [], [i, j, k] = new Array(3).fill(0);

    // declaring prevs and initializing it to negative items
    let prev1, prev2, prev3;
    prev1 = prev2 = prev3 = Infinity;

    while(i< arr1.length && j<arr2.length && k<arr3.length) {
        // check value of arr[i] with prev
        while(arr1[i] === prev1 && i < arr1.length) i++;
        while(arr2[j] === prev2 && j < arr2.length) j++;
        while(arr3[k] === prev3 && k < arr3.length) k++;

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

// method 2 using hash map

// method 3 using binary search











