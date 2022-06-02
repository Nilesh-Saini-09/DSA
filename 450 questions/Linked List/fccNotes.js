// 1. Traverse
// Iterative
const traverseLL = head => {
    let result = [], current = head;
    while(current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Recursive
const recursiveTraverseLL = (head, result=[]) => {
    if(head === null) return result;
    result.push(head.val)
    return recursiveTraverseLL(head.next, result);
}

// 2. Sum of linked list

// iterative
const sumLL = head => {
    let sum = 0, current = head;
    while(current !== null) {
        sum += current.val;
        current = current.next;
    }

    return sum;
}

// recursive time => O(n) space => O(n)
const recursiveSumLL = (head, sum = 0) => {
    if(head === null) return sum;
    sum+=head.val;
    return recursiveSumLL(head.next, sum);
}

const recursiveSumLL2 = head => {
    if(head === null) return 0;
    head.val + recursiveSumLL(head.next);
}


// 3. Find a value
// iterative
const findLL = (head, k) => {
    if(head === null) return -1;
    let current = head, index = 0;
    while(current) {
        if(current.val === k) return index
        else index++
        current = current.next;
    }

    return -1;
}

// recursive time => O(n), space => O(n)
// base case 1: if head is null return -1;
// base case2: if head.val is equal to target then return true/index

const recursiveFindLL = (head, k) => {
    if(head === null) return -1;
    if(head.val === k) return true;
    return recursiveFindLL(head.next, k);
}

// 4. Get Node Value

// Iterative time and space => O(n) and O(1)
const getNode = (head, index) => {
    if(head === null) return null;
    let i = 0, current = head;
    while(current) {
        if(i === index) return current.val;
        i++;
        current = current.next;
    }

    return null;
}

// recursive time and space => O(n)
const recursiveGetNode = (head, index, i = 0) => {
    if(head === null) return null;
    if(index === i) return head;
    return recursiveGetNode(head.next, index, ++i);
}

const recursiveGetNode2 = (head, index) => {
    if(head === null) return null;
    if(index === 0) return head.val;
    return recursiveGetNode2(head.next, index-1);
}

// 5. Reverse Linked List
// Iterative time and space => O(n) and O(1)
const reverseLinkedList = head => {
    let current = head, prev = null;
    while(current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
}

// recursive time and space => O(n)
const recursiveReverseLinkedList = (head, prev=null) => {
    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return recursiveReverseLinkedList(next, head);

}

// 6. Merging Lists (zipper list problem)

// Iterative time and space => O(min(m, n)) and o(1)
const mergeList = (h1, h2) => {
    let current1 = h1.next, current2 = h2, tail = head1, count = 0;
    while(current1 !== null && current2 !== null) {
        if(count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }

        tail = tail.next;
        count+=1;
    }

    if(current1 !== null) {
        tail.next = current1;
    }

    if(current2 !== null) {
        tail.next = current2;
    }

    return h1;
}

// Recursive

const recursiveMergeList = (h1, h2) => {
    if(h1 === null && h2 === null) return null;
    if(h1 === null) return h2;
    if(h2 === null) return h1;
    
    const next1 = h1.next;
    const next2 = h2.next;
    h1.next = h2;
    h2.next = recursiveMergeList(next1, next2);
    return h1 
}