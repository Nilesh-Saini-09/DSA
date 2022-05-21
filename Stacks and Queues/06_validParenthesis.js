const validParantheses = str => {
    let hashMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    // create a stack
    let stack = [];

    for(let i of str) {
        if(i === '(' || i === '{' || i === '[') {
            stack.push(i);
        } else {
            if(hashMap[stack.pop()] !== i) return false;
        }
    }

    return !stack.length;
}