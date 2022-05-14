// link -> https://leetcode.com/problems/min-stack/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // push
    push(val) {
        this.stack.push(val);
        let n = this.minStack.length;
        if(n === 0 || val <= this.minStack[n - 1]) {
            this.minStack.push(val);
        }
    }

    // pop
    pop() {
        let x = this.stack.pop();
        let n = this.minStack.length;
        if(x === this.minStack[n - 1]) {
            this.minStack.pop();
        }
    }

    // top
    top() {
        if(this.stack.length > 0) return this.stack[this.stack.length - 1];
        return undefined;
    }

    // getMin
    getMin() {
        let n = this.minStack.length;
        return this.minStack[n - 1];
    }
}

