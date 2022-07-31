// using built in methods and extra space 
var rearrangeArray = function(nums) {
    let result = [];
    let pos = nums.filter(num => num > 0);
    let neg = nums.filter(nums => nums < 0);
    let i = 0, j = 0;
    while(i < pos.length && j < neg.length) {
        result.push(pos[i]);
        result.push(neg[j]);
        i++;
        j++;
    }
    
    return result;
};
