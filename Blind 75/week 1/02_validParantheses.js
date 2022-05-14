// link - https://leetcode.com/problems/valid-parentheses/

// method 1 - using stack (time - O(n), space - O(n) for stack)
// 1. create a hahmap and an empty stack
// 2. traverse the give string and if the item is starting bracket then push in the stack
// 3. otherwise pop and check with hashmap if it's correct
// 4. If correct move to the next element and if not then return false.
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