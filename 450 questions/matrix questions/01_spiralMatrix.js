// print the matrix in a spiral form
const spiralMatrix = (matrix) => {
    let result = [];
    let i, k = 0, l = 0;
    console.log(matrix[0])
    let lastRow = matrix.length-1, lastColumn = matrix[0].length-1;
    while(k <= lastRow && l <= lastColumn) {

        // part 1 - print the first row
        for(i = l; i<=lastColumn; i++) {
            result.push(matrix[k][i]);
        }
        k++;

        // part 2 - print the last column
        for(i = k; i<=lastRow; i++) {
            result.push(matrix[i][lastColumn])
        }
        lastColumn--;

        // part 3 - print last row backwards
        if(k <= lastRow) {
            for(i = lastColumn; i>=l; i--) {
                result.push(matrix[lastRow][i]);
            }
            lastRow--;
        }

        // part 4 - print first column reverse
        if(l <= lastColumn) {
            for(i = lastRow; i >= k; i--) {
                result.push(matrix[i][l]);
            }
            l++;
        }
    }

    return result;
}