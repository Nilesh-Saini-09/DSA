// link -> https://leetcode.com/problems/balanced-binary-tree/

// method 1 => dfs
const isBalanced = root => {
    
    let dfs = node => {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    
    return dfs(root) == Infinity ? false : true;
};

// method 2 => dfs
const isBalanced2 = root => {
    if (!root) return true;
    
    let height = node => {
        if (!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }
    
    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
}

// method 3
const checkHeight = node => {
    if(node === null) return 0;
    
    let left = checkHeight(node.left);
    let right = checkHeight(node.right);
    
    if(left === false || right === false || Math.abs(left-right) > 1) {
        return false;
    }
    
    // height of a node
    return Math.max(left, right) + 1;
}

var isBalanced3 = function(root) {
    if(root === null) return true;
    return checkHeight(root) !== false;
};