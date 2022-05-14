// link -> https://leetcode.com/problems/climbing-stairs/

// method 1 - using recursion (t = o(n^2), s = o(1))
//  We can easily find the recursive nature in the above problem. The person can reach nth stair from either (n-1)th stair or from (n-2)th stair. Hence, for each stair n, we try to find out the number of ways to reach n-1th stair and n-2th stair and add them to give the answer for the nth stair.
// ways(n) = ways(n-1) + ways(n-2)
const fib = n => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
 
// Returns number of ways to reach s'th stair
const countWays = s =>{
    return fib(s + 1);
}

// method 2 => recursive
var climbStairs = function(n) {
    let arr = [0,1,2,3];
    for(let i = 4; i <= n; i++){
        arr[i] = arr[ i - 1] + arr[i - 2];
    }
    return arr[n];
};



// method 3 -> dp
const climbStairs2 = n => {
    return resolve(n, []);
}

const resolve = (n, memory) => {
    if(memory[n]) return memory[n];
    if(n < 0) return 1;
    if(n == 0) return 1;
    let result = resolve(n - 1, memory) + resolve(n - 2, memory);
    memory[n] = result;
    return result;
}



