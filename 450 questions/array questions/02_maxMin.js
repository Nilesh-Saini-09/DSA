let arr = [2,5,1,3,8,9];

// method 1
// ```
// 1. Create and initialize max and min variables.
// 2. Create another set of maximum and minimum variables.
// 3. Create a variable to store the last element.
// 4. Loop through the array, two element at a time.
// 5. If first element is greater than the second element then set maximum and minimum accordingly.
// 6. compare maximum and minimum element to max and min and change if required
// 7. return max and min.  
// ```
const maxMin = arr => {
    
    let max = -Infinity,
    min = Infinity,
    n = arr.length,
    maximum, minimum, last;

    if(n === 1) return [arr[0], arr[0]];
    if(n === 2) return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])]

    if(n % 2 !== 0) {
        last = arr[n - 1];
        arr = arr.slice(0, n-1);
    }

    for(let i = 0; i < n; i += 2) {
        if(arr[i] > arr[i+1]) {
            [maximum, minimum] = [arr[i], arr[i+1]];
        } else {
            [maximum, minimum] = [arr[i+1], arr[i]];
        }

        if(maximum > max) max = maximum;
        if(minimum < min) min = minimum;
    }

    if(last !== undefined) {
        max = Math.max(max, last);
        min = Math.min(min, last);
    }

    return [max, min];
}

maxMin(arr);

// method 2
const maxMin2 = arr => {
    let n = arr.length, max = -Infinity, min = Infinity;
    if(n === 1) return [arr[0], arr[0]];
    if(n === 2) return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])]

    for(let i of arr) {
        if(i > max) max = i;
        if(i < min) min = i; 
    }

    return [max, min];
}

// method 3 => Using the built in methods and spread op.

const maxMin3 = arr => [Math.max(...arr), Math.min(...arr)];

// method 4 => sorting the array

const maxMin4 = arr => {
    let n = arr.length;
    arr.sort((a, b) => a-b);
    return [arr[n-1], arr[0]];
}

//  using reduce function
const maxMin5 = arr => {
    let max = arr.reduce((a,b) => Math.max(a,b));
    let min = arr.reduce((a,b) => Math.min(a,b));
    return [max, min];
}