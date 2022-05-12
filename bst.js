class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert
    insert(val) {
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true) {
            if(val === current.val) return undefined;
            if(val < current.val) {
                if(current.left === null) {
                    current.left = null;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

const b1 = new BinarySearchTree();
b1.insert(5)
b1.insert(4)
b1.insert(1)
b1.insert(2)
console.log(b1.left);
