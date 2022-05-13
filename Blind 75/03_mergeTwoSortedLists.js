// link - https://leetcode.com/problems/merge-two-sorted-lists/

// This is merging two sorted linked list together

const mergeTwoSortedList = (l1, l2) => {
    let list = new ListNode();
    let head = list;

    while(l1 !== null && l2 !== null) {
        // Select the smallest value from either linked list,
        if(l1.val < l2.val) {
            list.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            list.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        // then increment that list forward.
        list = list.next;
    }

    // if one of the list is longer than the other
    if(l1 !== null) list.next = l1;

    if(l2 !== null) list.next = l2;

    // since the first node is empty
    return head.next;
}

// method 2 recursion
const mergeTwoLists = (l1, l2) => {
    // return the one that's not empty
    if(!l1 || !l2) return l1 || l2;

    if(l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    }
    
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
    
  };