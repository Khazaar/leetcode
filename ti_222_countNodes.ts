import { createBinaryTreeFromArray } from "./ti_114_flattenBinaryTree";
import { TreeNode } from "./ti_104_maxDepth";
function countNodes(root: TreeNode | null): number {
    // Count l and r depth separately
    if (root == null) return 0;
    let l = 1;
    let r = 1;
    let count = 0;
    let curent = root;
    while (curent?.left != null) {
        curent = curent.left;
        l++;
    }
    curent = root;
    while (curent?.right != null) {
        curent = curent.right;
        r++;
    }
    if (l == r) count = Math.pow(2, l) - 1;
    else {
        count = 1 + countNodes(root?.left!) + countNodes(root?.right!);
    }
    return count;
}

console.log(countNodes(createBinaryTreeFromArray([1, 2, 3, 4, 5, 6])));
