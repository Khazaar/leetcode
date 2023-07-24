import { createBinaryTreeFromArray } from "./ti_114_flattenBinaryTree";
import { TreeNode } from "./ti_104_maxDepth";

// Difficult repeat
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (root == null || p == null || q == null) return null;
    if (root == p || root == q) return root;
    let l = lowestCommonAncestor(root.left, p, q);
    let r = lowestCommonAncestor(root.right, p, q);
    if (l != null && r != null) return root;
    return l != null ? l : r;
}

// const getNodeDepth = (
//     root: TreeNode | null,
//     target: TreeNode,
//     depth: number
// ): number | null => {
//     // get node depth recursively from left and right branches
//     if (root == null) return null;
//     if (root == target) return depth;
//     let leftDepth = getNodeDepth(root.left, target, depth + 1);
//     if (leftDepth != null) return leftDepth;
//     let rightDepth = getNodeDepth(root.right, target, depth + 1);
//     return rightDepth;
// };
