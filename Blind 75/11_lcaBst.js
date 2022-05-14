// link -> https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// method 1 -> recursion
const lowestCommonAncestor = (root, p, q) => {
    if(root === p || root === q) return root;
    // helper function
    const helper = (root, n) => {
        if(!root) return false;
        if(root === n) return true;
        return helper(root.left, n) || helper(root.right, n);
    }

    // check left and right roots for both p and q
    const leftP = helper(root.left, p);
    const leftQ = helper(root.left, q);
    const rightP = helper(root.right, p);
    const rightQ = helper(root.right, q);

    if(leftP && rightQ || leftQ && rightP) return root;
    else if(leftP && leftQ) return lowestCommonAncestor(root.left, p, q);
    else return lowestCommonAncestor(root.right, p, q);

}

// method 2 -> iterative (time = O(h), space = O(1))
const lowestCommonAncestor2 = (root, p, q) => {
    while(root) {
        if(root.val < p.val && root.val < q.val) {
            root = root.right;
        } else if(root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }

    return root;
}

// method 3 -> more recursive
const lowestCommonAncestor3 = (root, p, q) => {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor3(root.right, p, q);
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor3(root.left, p, q);
    }
    return root;
};