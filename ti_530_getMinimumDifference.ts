import { TreeNode } from "./ti_104_maxDepth";

// toRepeat
function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null;
    let minDiff = Infinity;
    const inOrderTrav = (root: TreeNode | null) => {
        // is a closure function
        if (root == null) return null;
        inOrderTrav(root.left);
        if (prev != null) {
            minDiff = Math.min(minDiff, root.val - prev);
        }
        prev = root.val;
        inOrderTrav(root.right);
    };
    inOrderTrav(root);

    return minDiff;
}
