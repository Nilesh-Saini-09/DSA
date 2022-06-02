// getting min num from stack in O(1) time
class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        let n = this.minStack.length;
        if(n === 0 || val <= this.minStack[n - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        let x = this.stack.pop();
        let n = this.minStack.length;
        if(x === this.minStack[n-1]) {
            this.minStack.pop();
        }

        return x;
    }

    getMin() {
        let n = this.minStack.length;
        return this.minStack[n - 1];
    }
    
}