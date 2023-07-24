import { createBinaryTreeFromArray } from "./ti_114_flattenBinaryTree";
import { TreeNode } from "./ti_104_maxDepth";

// to improve
function rightSideView(root: TreeNode | null): number[] {
    type Q = {
        node: TreeNode;
        level: number;
    };
    let map = new Map<number, number>();
    let queue: Q[] = [];
    let res: number[] = [];
    if (root == null) return [];
    let level = 1;
    queue.push({ node: root, level });
    while (queue.length > 0) {
        let q = queue.shift();
        if (q!.node?.left != null) {
            let newQEl = { node: q!.node?.left, level: q!.level + 1 };
            queue.push(newQEl);
            map.set(newQEl.level, newQEl.node.val);
        }
        if (q!.node?.right != null) {
            let newQEl = { node: q!.node?.right, level: q!.level + 1 };
            queue.push(newQEl);
            map.set(newQEl.level, newQEl.node.val);
        }
    }
    return [root.val].concat(Array.from(map.values()));
}

function rightSideViewImproved(root: TreeNode | null): number[] {
    if (root == null) return [];

    let queue: TreeNode[] = [root];
    let result: number[] = [];

    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();

            if (node!.left) {
                queue.push(node!.left);
            }

            if (node!.right) {
                queue.push(node!.right);
            }

            // Check if current node is the last node of current level
            if (i == len - 1) {
                result.push(node!.val);
            }
        }
    }

    return result;
}
