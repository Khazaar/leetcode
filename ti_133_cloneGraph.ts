class NodeG {
    val: number;
    neighbors: NodeG[];
    constructor(val?: number, neighbors?: NodeG[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

function cloneGraph(node: NodeG | null): NodeG | null {
    if (node == null) return null;
    const queue = new Array<NodeG>(node);
    let nodeCopy = new Map<NodeG, NodeG>(); // Mapping from original node to it's copy
    nodeCopy.set(node, new NodeG(node.val));
    while (queue.length > 0) {
        let currentNode = queue.shift()!;
        for (let neighbor of currentNode!.neighbors) {
            if (!nodeCopy.has(neighbor)) {
                const newNeighbor = new NodeG(neighbor.val); // create new neighbor
                queue.push(neighbor);
                nodeCopy.set(neighbor, newNeighbor);
            }
            const newCurrentNode = nodeCopy.get(currentNode); // get the copy of current node
            newCurrentNode?.neighbors.push(nodeCopy.get(neighbor)!); // push the copies of neighbors to the copy of current node
        }
    }
    return nodeCopy.get(node)!;
}

//Node;

function cloneGraphWrong(node: NodeG | null): NodeG | null {
    if (node == null) return null;
    const queue = new Array<NodeG>(node);
    let visited = new Set<number>();
    visited.add(node.val);
    let currentNode = node;
    let newSrc = currentNode;
    while (queue.length > 0) {
        const qLength = queue.length;
        for (let index = 0; index < qLength; index++) {
            currentNode = queue.shift()!;
            const newCurrentNode = new NodeG(currentNode?.val);
            for (let neighbor of currentNode!.neighbors) {
                if (!visited.has(neighbor!.val)) {
                    visited.add(neighbor!.val);
                    queue.push(neighbor);
                    newCurrentNode?.neighbors.push(neighbor);
                }
            }
        }
    }
    return newSrc;
}
//Node;

function convertToNodes(adjList: number[][]): NodeG[] {
    const nodes: NodeG[] = adjList.map((_, i) => new NodeG(i + 1));

    for (let i = 0; i < adjList.length; i++) {
        nodes[i].neighbors = adjList[i].map(
            (neighborIndex) => nodes[neighborIndex - 1]
        );
    }

    return nodes;
}

console.log(
    cloneGraph(
        convertToNodes([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3],
        ])[0]
    )
);
