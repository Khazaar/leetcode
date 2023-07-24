import { TreeNode } from "./ti_104_maxDepth";
import { createBinaryTreeFromArray } from "./ti_114_flattenBinaryTree";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) {
        return false;
    } else {
        let restSum = targetSum - root!.val;
        let l = root!.left;
        let r = root!.right;
        if (restSum == 0 && l == null && r == null) return true;
        return (
            (l != null && hasPathSum(l, restSum)) ||
            (r != null && hasPathSum(r, restSum))
        );
    }
}

console.log(
    hasPathSum(
        createBinaryTreeFromArray([
            5,
            4,
            8,
            11,
            null,
            13,
            4,
            7,
            2,
            null,
            null,
            null,
            1,
        ]),
        22
    )
);
