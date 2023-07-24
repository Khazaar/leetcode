import { TreeNode } from "./ti_104_maxDepth";
import { createBinaryTreeFromArray } from "./ti_114_flattenBinaryTree";

function sumNumbers(root: TreeNode | null): number {
    const getSum = (node: TreeNode | null, num: number): number => {
        if (node == null) return 0; // important!
        let newNum = num * 10 + node.val;
        if (node.left == null && node.right == null) return newNum;
        return getSum(node?.left!, newNum) + getSum(node?.right!, newNum);
    };
    if (root == null) return 0;
    return getSum(root, 0); // importantto pass root
}
console.log(sumNumbers(createBinaryTreeFromArray([9])));
