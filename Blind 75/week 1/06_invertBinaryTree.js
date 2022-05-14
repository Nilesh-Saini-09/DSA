// link -> https://leetcode.com/problems/invert-binary-tree/submissions/

// method 1 - iterative
// 1. If root is null then return root
// 2. Create a swap function that will swap left and right values of a root.
// 3. create a queue and with root already inserted in it.
// 4. run a while loop till the queue's length is not empty.
// 5. store the queue.shift() in a temp variable (current).
// 6. Check if current is null then continue.
// 7. if not then swap(current) and push the left and right values of the current in the queue

const swap = tree => {
    [tree.left, tree.right] = [tree.right, tree.left];
    return tree;
}

const invertTree = root => {
    if(!root) return root;
    let queue = [root];
    while(queue.length) {
        let current = queue.shift();
        if(current === null) continue;
        swap(current);
        queue.push(current.left);
        queue.push(current.right);
    }

    return root;
}

// method 2 -> recursive
const invertTree2 = root => {
    if(root === null) return root;
    [root.left, root.right] = [invertTree2(root.right), invertTree2(root.left)];
    return root;
}
