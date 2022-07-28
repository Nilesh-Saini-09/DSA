// method 1 - using map
const validAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    let map = {};
    for(let i of s) {
        map[i] ? map[i]++ : map[i] = 1;
    }

    for(let j of t) {
        if(map[j]) {
            map[j]--;
            if(map[j] < 0) return false;
        } else {
            return false;
        }
    }

    return true;
}

// method 2 - different hash map solution
const isAnagram2 = (s, t) => {
    if (s.length !== t.length) return false;
    
    let letters = {};
    //create hashmap for both words, based on a counter
    for (let i = 0; i < s.length; i++) {
         letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
         letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
    }
    
    for (let letter in letters) {
        //this check for duplicates since if all letters are the same, we will end up with 0
        if (letters[letter] !== 0) {
            return false;
        }
    }
    return true;
};