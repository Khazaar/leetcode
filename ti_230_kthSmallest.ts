import { TreeNode, arrayToTreeNode } from "./ti_104_maxDepth";

function kthSmallest(root: TreeNode | null, k: number): number {
    let min: number | null = null;
    let count = 0;
    const inOrderTraverse = (root: TreeNode | null): boolean => {
        if (root == null) return false;
        if (inOrderTraverse(root.left)) return true;
        min = root.val;
        count++;
        if (count == k) return true;
        return inOrderTraverse(root.right);
    };
    inOrderTraverse(root);
    return min as any;
}

console.log(kthSmallest(arrayToTreeNode([5, 3, 6, 2, 4, null, null, 1]), 3));
