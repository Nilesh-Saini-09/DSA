// link -> https://leetcode.com/problems/ransom-note/

// using hash map
let canConstruct = (ransomeNote, magazine) => {
    let map = {};
    for(let i of ransomeNote) {
        map[i] ? map[i]++ : map[i] = 1;
    }

    for(let i of magazine) {
        if(map[i]) map[i]--;
    }

    return Object.values(map).some(x => x>0) ? false : true;

}

