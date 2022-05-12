// method 1  => count the number of 0, 1, 2 in an array. Then store them in the array

// Keep three counter c0 to count 0s, c1 to count 1s and c2 to count 2s
// Traverse through the array and increase the count of c0 if the element is 0,increase the count of c1 if the element is 1 and increase the count of c2 if the element is 2

// Now again traverse the array and replace first c0 elements with 0, next c1 elements with 1 and next c2 elements with 2.

// O(n) time and contant space

const sortArr = arr => {
    let c0 = 0, c1 = 0, c2 = 0, i;
    for(i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 0:
                c0++;
                break;
            case 1:
                c1++;
                break;
            case 2:
                c2++;
                break;
        }
    }

    i = 0;
    while(c0 > 0) {
        arr[i++] = 0;
        c0--;
    }

    while(c1 > 0) {
        arr[i++] = 1;
        c1--;
    }

    while(c2 > 0) {
        arr[i++] = 2;
        c2--;
    }

    return arr;
}

// method 2 =>  Using three pointers 

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const sortArr2 = arr => {
    let stat = 0, mid = 0, pivot = 1, end = arr.length - 1;

    while(mid <= end) {
        if(arr[mid] < pivot) {
            swap(arr, start, mid);
            start++;
            mid++;
        } else if(arr[mid] > pivot) {
            swap(arr, mid, end);
            end--;
        } else {
            mid++;
        }
    }

    return sortArr2;
}

// method 3 -> another variant of method 2
const sortArr3 = arr => {
    let start = 0, mid = 0; high = arr.length - 1;

    while(mid <= high) {
        switch(arr[mid]) {
            case 0:
                swap(arr, start, mid);
                start++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(arr, mid, high);
                high--;
                break;
        }
    }

    return arr;
}