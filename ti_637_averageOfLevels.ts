import { TreeNode } from "./ti_104_maxDepth";

function averageOfLevels(root: TreeNode | null): number[] {
    if (root == null) return [];
    let queue: TreeNode[] = [root];
    let res: number[] = [];
    while (queue.length > 0) {
        let len = queue.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            sum += node!.val;
            if (node!.left != null) queue.push(node!.left!);
            if (node!.right != null) queue.push(node!.right!);
        }
        res.push(sum / len);
    }
    return res;
}
