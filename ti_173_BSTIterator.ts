import { TreeNode } from "./ti_104_maxDepth";
import { createBinaryTreeFromArray } from "./ti_114_flattenBinaryTree";

// Big video help
// https://www.youtube.com/watch?v=RXy5RzGF5wo
class BSTIterator {
    public pointer: number;
    public stack: TreeNode[] = [];
    constructor(root: TreeNode | null) {
        this.pointer = -Infinity;
        let cur = root;
        while (cur != null) {
            // put all left branch inside the stack
            this.stack.push(cur);
            cur = cur.left;
        }
    }

    next(): number {
        let res = this.stack.pop();
        let cur = res?.right;
        while (cur != null) {
            // update left branch
            this.stack.push(cur);
            cur = cur.left;
        }
        return res?.val!;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}

let bSTIterator = new BSTIterator(
    createBinaryTreeFromArray([7, 3, 15, null, null, 9, 20])
);

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
