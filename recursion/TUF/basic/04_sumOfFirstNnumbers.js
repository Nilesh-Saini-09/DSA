// recursive function to print the cum of first n numbers 
const sumOfFirstN = (n, sum = 0) => {
    if(n < 1) return sum;
    sum += n;
    return sumOfFirstN(n-1, sum)
}

const sumOfFirstN2 = n => {
    if(n === 0) return 0;
    return n + sumOfFirstN2(n - 1);
}

// without recursion, using the formula
// n(n+1)/2
const sumOfFirstN3 = n => {
    if(n === 0 || n === 1) return n;
    return (n*(n+1))/2
}