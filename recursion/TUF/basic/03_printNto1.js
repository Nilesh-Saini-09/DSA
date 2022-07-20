// recursive function to print the numbers from n to 1
const printNto1 = (n) => {
    if(n < 1) return;
    console.log(n);
    return printNto1(n-1)
}