// method 1 => try out all the numbers 
// time and space => O(root n) and O(1)
const squareRoot = x => {
    if(x === 0 || x === 1) return x;

    let i = 1;
    let result = 1;

    while(result <= x) {
        i++;
        result = i*i;
    }

    return i-1;
}

// method 2 => binary search
var mySqrt = function(x) {
    let lo = 0, hi = x;
    while (lo < hi) {
        const mid = parseInt((lo + hi)/2);
        if (mid * mid === x) {
            return mid;
        }
        if (x < mid * mid) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return x < hi * hi ? hi - 1 : hi; 
};

// method 3 => using built in methods
const countSquares = (x) => {
    var sqr = parseInt( Math.sqrt(x));
    var result = parseInt(sqr);
    return result;
}