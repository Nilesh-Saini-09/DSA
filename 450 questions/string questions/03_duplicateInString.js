// method 1 -> using map
// time -> O(N log N), where N = length of the string passed and it generally takes logN time for an element insertion in a map.
// space -> O(K), where K = size of the map (0<=K<=input_string_length)

const duplicateInStr = str => {
    let map = {}, duplicates = [];
    for(let i of str) {
        map[i] ? map[i]++ : map[i] = 1
    }

    for(let j in map) {
        if(map[j] > 1) {
            duplicates.push(j);
        } 
    }

    return duplicates;
}
