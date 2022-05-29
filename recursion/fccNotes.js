// 1. Reverse the string
// If string is empty: return string
// Else call the function again on the substring starting from index 1 and add the character at 0th index at the end

const reverseString = (str) => {
  if (str === "") return "";
  return reverseString(str.substring(1)) + str.charAt(0);
};

// 2. Palindrome
// base case: if the length of the input string is 0 or 1 then return true
// check if the char at 0th index and last index (str.length - 1) are equal. Return the function again on the substring from 1st index to the second last index of the string.
// return false (extra base case)

const isPalindrome = (str) => {
  // base case
  if (str.length === 0 || str.length === 1) return true;

  // condition check + recursive call
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1));
  }

  // additional base case
  return false;
};

// 3. decimal to binary
// make a variable result to store the binary number
// base case: If the decimal is 0 then return result
// operation: add (decimal % 2) to the previous result value. result += decimal % 2;
// call the function again with the quotient value i.e. decimal/2

const dToB = (num, result = "") => {
  if (num === 0) return result;
  result = (num % 2) + result;
  return dToB(Math.floor(num / 2), result);
};

const decimalToBinary = (num) => {
  if (num === 0) return 0;
  return ((num % 2) + 10) * decimalToBinary(num / 2);
};

// 4. sum of natural numbers
// make a variable result to store the sum (initialize it to 0)
// base case: If the number is 0 then return result
// operation: add num to the result
// call the function again with the num-1 and result

const sumNaturalNums = (num) => {
  if (num === 0) return num;
  return num + sumNaturalNums(num - 1);
};

// 5. binary search
const bs = (arr, left, right, x) => {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (x === arr[mid]) return mid;
  if (x < arr[mid]) return bs(arr, left, mid - 1, x);
  return bs(arr, mid + 1, right, x);
};

// 6. fibonacci

// Non optimized version
const fib = (num) => {
  if (num === 0 || nums === 1) return num;
  return fib(num - 1) + fib(num - 2);
};

// 7. Merge sort
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let results = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// Linked list reversal
const linkedListReverse = (head) => {
  if (head === null || head.next === null) return head;
  let p = linkedListReverse(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

// Merge two sorted linked lists
const mergeLinkedList = (h1, h2) => {
  if (h1 === null && h2 === null) return undefined;
  if (!h1 || !h2) return h1 || h2;

  if (h1.val < h2.val) {
    h1.next = mergeLinkedList(h1.next, h2);
    return h1;
  } else {
    h2.next = mergeLinkedList(h1, h2.next);
    return h2;
  }
};

// Insert value in a bst
const insertBST = (root, val) => {
  // create a new node using the value passed
  let newNode = new Node(val);
  if (root === null) {
    root = newNode;
    return true;
  }

  if (val > root.val) {
    root.right = insertBST(root.right, val);
  } else {
    root.left = insertBST(root.left, val);
  }

  return root;
};

// print all leaf nodes

const printLeaves = (root) => {
  if (root === null) return;
  const result = [];

  if (root.left === null && root.right === null) {
    result.push(root.val);
  }

  if (root.left !== null) printLeaves(root.left);
  if (root.right !== null) printLeaves(root.right);

  return result;
};

// memoization and caching
// fib series

// tail - call recursion optimization
// Normal factorial function
const factorial = (num) => {
  if (num > 0) return num * factorial(num - 1);
  return 1;
};

// tail-call optimization
const factorial2 = (num, mult) => {
  if (num > 0) {
    return factorial2(num - 1, num * mult);
  }

  return mult;
};
