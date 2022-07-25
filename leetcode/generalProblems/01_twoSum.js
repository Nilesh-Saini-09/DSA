// method 1 -  using map
const twoSum2 = (arr, target) => {
    var map = new Map();
  
    for(var i = 0; i<arr.length; i++) {
        var num = arr[i];
        if(map.get(num) === undefined) {
            map.set(target-num, i);
        }
        return [map.get(num), i];
    }
};

// method 2
const twoSum = (arr, target) => {
    let map = {}, i;
    for(i = 0; i<arr.length; i++) {
        const diff = target - arr[i];
        const diffIdx = arr.indexOf(diff);

        if(diff in map && diffIdx !== i) {
            return [map[diff], i];
        } else {
            map[arr[i]] = i;
        }
    }
    return null;
}
