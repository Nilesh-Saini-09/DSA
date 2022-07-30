// method 1
let mostWordsFound = function(sentences) {
    let count = 0;
    for(let i of sentences) {
        let temp = i.split(' ');
        if(temp.length > count) count = temp.length;
    }
    return count;
}


