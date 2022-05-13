// main class
class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    // adding to the max MaxBinaryHeap ===>
    // 1. Add to the end
    // 2. Bubble Up
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element >= parent) break;
            // swap the parent and the child
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // change idx to parentIdx
            idx = parentIdx;
        }
    }

    // extract 
    extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild < element) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

