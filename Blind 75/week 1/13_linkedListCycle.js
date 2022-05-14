// link -> https://leetcode.com/problems/linked-list-cycle/

// method1 -> using hash table (t = o(n), s = o(n))
const hasCycle = head => {
    let s = new Set();
    while(head !== null) {
        // if we already have this node in the set then there is a cycle so return true.
        if(s.has(h)) return true;
        s.add(h);
        h = h.next;
    }

    return false;
}

// method2 -> modifying the node of the linked list (t = o(n), s = o(1))
// 1. Each node has a visited flag.
// 2. Traverse the ll and keep marking visited nodes.
// 3. If a node is visited again then return true.
// 4. A variation of this solution that doesn’t require modification to basic data structure can be implemented using a hash, just store the addresses of visited nodes in a hash and if you see an address that already exists in hash then there is a loop.

class Node {
    constructor() {
        let data;
        let next;
        let flag;
    }
}

const hasCycle2 = node => {
    while(head !== null) {
        if(head.flag === 1) return true;
        head.flag = 1;
        head = head.next;
    }

    return false;
}

// method 3 -> Floyd's cycle detection algorithm
// 1. Traverse ll using two pointers.
// 2. move one pointer (slow pointer) by 1 and other (fast pointer) by 2.
// 3. If these pointers meet at the same node then there is a loop. If pointers donot meet then linked list doesn't have a loop.

const hasCycle3 = head => {
    let slow = head, fast = head;
    let flag = 0;

    while(slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            flag = 1;
            break;
        }

        return flag ? true : false
    }
}

// method 4 => another way to do method 3
var hasCycle4 = function(head) {
    let r1 = head, r2 = head;
    while (r1 && r1.next) {
        r1 = r1.next.next;
        r2 = r2.next;
        if (r1 == r2) {
            return true;
        }
    } 
    return false;
};