import { TreeNode, arrayToTreeNode } from "./ti_104_maxDepth";

function isValidBST(root: TreeNode | null): boolean {
    if (root == null) return true;
    const isValidRange = (
        root: TreeNode | null,
        min: number,
        max: number
    ): boolean => {
        if (root == null) return true;
        if (
            (root!.left != null && root!.left.val >= root.val) ||
            (root!.left != null && root!.left.val <= min)
        )
            return false;
        if (
            (root!.right != null && root!.right.val >= max) ||
            (root!.right != null && root!.right.val <= root.val)
        )
            return false;

        return (
            isValidRange(root.left, min, root.val) &&
            isValidRange(root.right, root.val, max)
        );
    };
    return isValidRange(root, -Infinity, Infinity);
}

//[5,4,6,null,null,3,7]

function isValidBSTWRONG(root: TreeNode | null): boolean {
    if (root == null) return true;
    if (root!.left != null && root!.left.val >= root.val) return false;
    if (root!.right != null && root!.val >= root.right.val) return false;
    return isValidBSTWRONG(root?.left) && isValidBSTWRONG(root?.right);
}
