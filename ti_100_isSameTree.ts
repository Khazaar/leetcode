import { TreeNode, arrayToTreeNode } from "./ti_104_maxDepth";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q != null) return false;
    if (q == null && p != null) return false;
    if (q == null && p == null) return true;
    if (p?.val != q?.val) return false;
    return isSameTree(p?.left!, q?.left!) && isSameTree(p?.right!, q?.right!);
}

console.log(isSameTree(arrayToTreeNode([1, 2, 3]), arrayToTreeNode([1, 2, 3])));
