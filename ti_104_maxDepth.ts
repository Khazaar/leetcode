export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function maxDepthRec(root: TreeNode | null): number {
    if (root == null) return 0; // Base case
    return 1 + Math.max(maxDepth(root!.left), maxDepth(root!.right));
}

//Breath for search

function maxDepthBFS(root: TreeNode | null): number {
    if (root == null) return 0;
    let queue = new Array<TreeNode>();
    queue.push(root);
    let level = 0;
    while (queue.length != 0) {
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (node!.left != null) queue.push(node!.left);
            if (node!.right != null) queue.push(node!.right);
        }
        level++;
    }
    return level;
}

// emulating the call stack
function maxDepth(root: TreeNode | null): number {
    type StackType = {
        node: TreeNode;
        depth: number;
    };
    if (root == null) return 0;
    let stack = new Array<StackType>();
    let res = 0;
    stack.push({ node: root, depth: 1 });
    while (stack.length > 0) {
        let { node, depth } = stack.pop()!;
        if (node!.left != null)
            stack.push({ node: node.left, depth: depth + 1 });
        if (node!.right != null)
            stack.push({ node: node.right, depth: depth + 1 });
        res = Math.max(depth, res);
    }
    return res;
}

export function arrayToTreeNode(arr: Array<number | null>): TreeNode | null {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]!, null, null);
    let queue: Array<TreeNode> = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (currentNode) {
            if (arr[i] !== null) {
                currentNode.left = new TreeNode(arr[i]!, null, null);
                queue.push(currentNode.left);
            }
            if (arr[i + 1] !== null && i + 1 < arr.length) {
                currentNode.right = new TreeNode(arr[i + 1]!, null, null);
                queue.push(currentNode.right);
            }
        }

        i += 2;
    }

    return root;
}

console.log(maxDepth(arrayToTreeNode([3, 9, 20, null, null, 15, 7])));
