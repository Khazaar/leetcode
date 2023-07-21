import { TreeNode, arrayToTreeNode } from "./ti_104_maxDepth";

function isSymmetric(root: TreeNode | null): boolean {
    const sym = (l: TreeNode | null, r: TreeNode | null): boolean => {
        if (l?.val != r?.val) return false;
        if (l == null && r == null) return true;
        if (l == null || r == null) return false;
        return sym(l?.left!, r?.right!) && sym(l?.right!, r?.left!);
    };
    return sym(root?.left!, root?.right!);
}

console.log(isSymmetric(arrayToTreeNode([1, 2, 2, 3, 4, 4, 3])));
