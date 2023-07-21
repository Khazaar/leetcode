import { TreeNode } from "./ti_104_maxDepth";

// Lonved 100% by video
//preorder
//  1
// 2 3

//inorder
//  2
// 1 3

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length == 0 || inorder.length == 0) return null;
    let root = new TreeNode(preorder[0]);
    let midIndex = inorder.indexOf(root.val);
    root.left = buildTree(
        preorder.slice(1, midIndex + 1),
        inorder.slice(0, midIndex)
    );
    root.right = buildTree(
        preorder.slice(midIndex + 1),
        inorder.slice(midIndex + 1)
    );
    return root;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
