// find the middle element of a stack;

class Stack {
    constructor() {
        this.arr = [];
        this.length = this.arr.length;
    }

    push(val) {
        this.stack.push(val);
    }

    middle() {
        if(this.length === 0) return null;
        if(this.length === 1 || this.length === 2) return this.arr[0];
        let mid = Math.floor((0+(this.length - 1)) / 2);
        return this.arr[mid];
    }
}

// if stack is made using linked list
var middleNode = function(head) {
    let len = 0;
    let curr = head;
    while(curr) {
        len++;
        curr = curr.next;
    }
    
    let mid = Math.floor(len/2), i = 0, cur = head;
    
    while(i!==mid) {
        cur = cur.next
        i++;
    }
    
    return cur;
}

// method 3
var middleNode2 = function(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
