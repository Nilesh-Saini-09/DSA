// method 1 - O(n^2)
var smallerNumbersThanCurrent = function(nums) {
    let sorted = nums.slice().sort((a,b) => a - b);
    return nums.map(num => sorted.indexOf(num));
};

// method 2 -  sorting (tc - o(nLgn), sc - o(1)) 
var smallerNumbersThanCurrent = nums => {
    const sorted = [...nums].sort((n1, n2) => n2 - n1);
    const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
    return nums.map(num => map.get(num));
}

// method 3 - dp
var smallerNumbersThanCurrent = nums => {
    const frequencies = new Array(101).fill(0);
    const smaller = new Array(101).fill(0);
  
    nums.forEach(num => frequencies[num]++);
  
    for (let i = 1; i < 101; i++) {
      smaller[i] = smaller[i - 1] + frequencies[i - 1];
    }
  
    return nums.map(num => smaller[num]);
}