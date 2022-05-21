// reverse a string using a stack
class Stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
       return this.stack.length === 0 ? undefined : this.stack.pop();
    }
}

const reverStringUsingStack = str => {
    let newStack = new Stack(), reversedString = '';
    for(let i of str) {
        newStack.push(i);
    }

    while(newStack.length !== 0) {
        reversedString += newStack.pop();
    }

    return reversedString;
}