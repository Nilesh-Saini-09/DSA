// Find a row with maximum number of 1s in a matrix

// method 1
// 1. Do row wise traversal and compare the number of 1s in each row to the max. 
// 2. Return the index of the row with maximum ones
// 3. if no 1s found then return -1
// Time Complexity -> O(m*n) where m = no. of rows and n = no. of columns
// space complexity => O(n)

const max1sInRow = matrix => {
    let max = -1;
    let maxIdx = -1;
    for(let i of matrix) {
        let temp = i.filter(num => num == 1).length;
        if(temp > 0 && temp > max) {
            [max, maxIdx] = [temp, matrix.indexOf(i)];
        }
    }

    return maxIdx;
}

// const matrix = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
// output => 2

// method 2
// if the matrix is sorted then this will work
const max1sInRow2 = matrix => {
    let max = -1, maxIdx = -1;
    for(let i of matrix) {
        let temp = i.length - i.indexOf(1);
        if(temp > 0 && temp > max) {
            [max, maxIdx] = [temp, matrix.indexOf(i)];
        }
    }

    return maxIdx;
}