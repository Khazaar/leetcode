import { TreeNode } from "./ti_104_maxDepth";
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];
    let queue: TreeNode[] = [root];
    let res: number[][] = [[root.val]];
    let isLeftToRight = false;
    while (queue.length > 0) {
        let length = queue.length;
        let row: number[] = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node!.left != null) {
                queue.push(node!.left);
                row = isLeftToRight
                    ? [...row, node!.left.val!]
                    : [node!.left.val!, ...row];
            }
            if (node!.right != null) {
                queue.push(node!.right);
                row = isLeftToRight
                    ? [...row, node!.right.val!]
                    : [node!.right.val!, ...row];
            }
        }
        isLeftToRight = !isLeftToRight;
        if (row.length > 0) res.push(row);
    }
    return res;
}
