import { TreeNode } from "./ti_104_maxDepth";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null) return null;
    [root.left, root.right] = [root.right, root.left]; // destructuring assignment
    invertTree(root?.left!);
    invertTree(root?.right!);
    return root;
}
