class Node2 {
    val: number;
    left: Node2 | null;
    right: Node2 | null;
    next: Node2 | null;
    constructor(val?: number, left?: Node2, right?: Node2, next?: Node2) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}

function connect(root: Node2 | null): Node2 | null {
    type QueueNode = {
        node: Node2;
        level: number;
    };
    if (root == null) return null;
    let queue = new Array<QueueNode>();
    queue.push({
        node: root,
        level: 1,
    });

    while (queue.length > 0) {
        let qn = queue.shift() as QueueNode;
        let level = qn.level;
        if (qn.node!.left != null) {
            queue.push({
                node: qn.node.left,
                level: level + 1,
            });
            if (
                queue.length >= 2 &&
                queue[queue.length - 2].level == queue[queue.length - 1].level
            )
                queue[queue.length - 2].node.next =
                    queue[queue.length - 1].node;
        }
        if (qn.node!.right != null) {
            queue.push({
                node: qn.node.right,
                level: level + 1,
            });
            if (
                queue.length >= 2 &&
                queue[queue.length - 2].level == queue[queue.length - 1].level
            )
                queue[queue.length - 2].node.next =
                    queue[queue.length - 1].node;
        }
    }
    return root;
}
