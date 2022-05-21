// Reverse a linked list

// iterative t-> O(n), s-> O(1)
const reverse = node => {
    let prev = null;
    let current = node;
    let next = null;
    while(current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

// recursive t-> O(n), s-> O(1)
const reverse2 = node => {
    if(head === null || head.next === null) {
        return head;
    }

    let rest = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}

