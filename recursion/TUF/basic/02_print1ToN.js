// recursive function to print numbers from 1 to n
const printToN = (n, main = n) => {
    if(n < 1) return;
    console.log(main - (n-1));
    return printToN(n-1, main);
}