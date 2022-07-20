// recursive function to return nth fibonacci number
const nthFibNum = n => {
    if(n <= 1) return n;
    return nthFibNum(n-1) + nthFibNum(n-2);
}