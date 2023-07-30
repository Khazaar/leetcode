import { TreeNode } from "./ti_104_maxDepth";

function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];
    let queue: TreeNode[] = [root];
    let res: number[][] = [[root.val]];
    while (queue.length > 0) {
        let length = queue.length;
        let row: number[] = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node!.left != null) {
                queue.push(node!.left);
                row.push(node!.left.val);
            }
            if (node!.right != null) {
                queue.push(node!.right);
                row.push(node!.right.val);
            }
        }
        if (row.length > 0) res.push(row);
    }
    return res;
}
