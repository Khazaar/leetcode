import { TreeNode } from "./ti_104_maxDepth";

// flatten left and right subtries recursievly

function flatten(root: TreeNode | null): void {
    if (root == null) return;
    flatten(root.left);
    flatten(root.right);

    let rightBranch = root.right;
    root.right = root.left;
    root.left = null;
    let current = root;
    while (current.right != null) current = current.right;
    current.right = rightBranch;
}

export function createBinaryTreeFromArray(
    data: (number | null)[]
): TreeNode | null {
    if (data.length === 0 || data[0] === null) return null;

    let root = new TreeNode(data[0]);
    let queue: TreeNode[] = [root];

    for (let i = 1; i < data.length; i++) {
        let currentNode = queue[0];

        if (data[i] !== null) {
            let newNode = new TreeNode(data[i] as number);
            if (i % 2 !== 0) {
                currentNode.left = newNode;
            } else {
                currentNode.right = newNode;
                queue.shift(); // Done adding children for current node, so remove it from queue
            }
            queue.push(newNode);
        } else {
            if (i % 2 === 0) {
                queue.shift(); // No more children for current node, so remove it from queue
            }
        }
    }

    return root;
}

console.log(flatten(createBinaryTreeFromArray([1, 2, 5, 3, 4, null, 6])));
//console.log(flatten(createBinaryTreeFromArray([1, null, 2, 3])));

function flattenWrong(root: TreeNode | null): void {
    while (root != null) {
        let rr = root?.left;
        if (rr == null) flatten(root.right);
        else {
            while (rr!.right != null) rr = rr!.right;
            if (root.right != null) rr!.right = root?.right;
            root!.right = root!.left!;
            root!.left = null;
            if (root.right != null) flatten(root.right);
            else return;
        }
    }
    console.log(root);
}
