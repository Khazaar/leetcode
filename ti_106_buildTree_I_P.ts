import { TreeNode } from "./ti_104_maxDepth";

//inorder
//  2
// 1 3

//postorder
//  3
// 1 2
//@TODO Mapping optimzation
//https://www.youtube.com/watch?v=vm63HuIU7kw

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length == 0 || postorder.length == 0) return null;
    let root = new TreeNode(postorder[postorder.length - 1]);
    let midIndex = inorder.indexOf(root.val);
    root.left = buildTree(
        inorder.slice(0, midIndex),
        postorder.slice(0, midIndex)
    );
    root.right = buildTree(
        inorder.slice(midIndex + 1),
        postorder.slice(midIndex, -1)
    );
    return root;
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
