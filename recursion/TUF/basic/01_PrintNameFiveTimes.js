// Function that will print the name N times using recursion
const printNTimes = (str, n) => {
    if(n < 1) return;
    console.log(str);
    return printNTimes(str, n-1);
}