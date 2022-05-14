// link -> https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
    constructor() {
        this.stack = [];
        this.reversed = [];
    }

    // push
    push(val) {
        this.stack.push(val);
    }

    // pop
    pop() {
        if(!this.reversed.length) {
            while(this.stack.length) {
                this.reversed.push(this.stack.pop());
            }
        }

        return this.reversed.pop();
    }

    // peek
    peek() {
        // last item in reversed or first item in the stack
        return this.reversed[this.reversed.length - 1] ?? this.stack[0];
    }

    // empty
    empty() {
        return !this.stack.length && !this.reversed.length;
    }
}