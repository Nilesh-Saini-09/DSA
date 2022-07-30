// method 1
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i of operations) {
        if(i.includes('-')) {
            x--
        } else if(i.includes('+')) {
            x++
        }
    }
    
    return x;
};

// method 2
var finalValueAfterOperations = function(operations) {
    let result = [0, 0];
    for(let i of operations) {
        i.includes('+') ? result[0]++ : result[1]--
    }
    console.log(result[0], result[1])
    return result[0] + result[1];
};