// Implement two stacks using the same array
// This method efficiently utilizes the available space. It doesn’t cause an overflow if there is space available in arr[]. The idea is to start two stacks from two extreme corners of arr[]. stack1 starts from the leftmost element, the first element in stack1 is pushed at index 0. The stack2 starts from the rightmost corner, the first element in stack2 is pushed at index (n-1). Both stacks grow (or shrink) in opposite direction. To check for overflow, all we need to check is for space between top elements of both stacks. This check is highlighted in the below code. 

class TwoStacks {
    constructor(n) {
        this.arr = Array(n).fill(0);
        this.size = n;
        this.top1 = -1;
        this.top2 = this.size;
    }

    push1(val) {
        if(this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = val;
        } else {
            return 'stack overflow';
        }
    }

    push2(x) {
        if(this.top1 < this.top2-1) {
            this.top2--;
            this.arr[this.top2] = x;
        } else {
            return 'stack overflow';
        }
    }

    pop1() {
        if(this.top1 >= 0) {
            let x = this.arr[this.top1];
            this.top1--;
            return x;
        }
        return 0;
    }

    pop2() {
        if(this.top2 < this.size) {
            let x = this.arr[this.top2];
            this.top2++;
            return x;
        }

        return 0;
    }
}