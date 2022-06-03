// Recursive function
const mergeSort = arr => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// merge function
const merge = (arr1, arr2) => {
    let results = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}


// Iterative merge sort

function mergeSort(array) {
    if (array == null) {
        return;
    }

    if (array.length > 1) {
        var mid = parseInt(array.length / 2);

        // Split left part
        var left = Array(mid).fill(0);
        for (i = 0; i < mid; i++) {
            left[i] = array[i];
        }

        // Split right part
        var right = Array(array.length - mid).fill(0);
        for (i = mid; i < array.length; i++) {
            right[i - mid] = array[i];
        }
        mergeSort(left);
        mergeSort(right);

        var i = 0;
        var j = 0;
        var k = 0;

        // Merge left and right arrays
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                array[k] = left[i];
                i++;
            } else {
                array[k] = right[j];
                j++;
            }
            k++;
        }
        // Collect remaining elements
        while (i < left.length) {
            array[k] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            array[k] = right[j];
            j++;
            k++;
        }
    }
}
