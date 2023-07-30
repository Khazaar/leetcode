function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    type MapType = {
        node: string;
        res: number;
    };
    type GraphType = {
        [node: string]: MapType[];
    };
    let graph: GraphType = {}; // Init graph
    let res: number[] = [];
    equations.forEach((value, index) => {
        if (!graph[value[0]]) {
            graph[value[0]] = [];
        }
        if (!graph[value[1]]) {
            graph[value[1]] = [];
        }
        graph[value[0]].push({ node: value[1], res: values[index] });
        graph[value[1]].push({ node: value[0], res: 1 / values[index] });
    });
    const bfs = (src: string, dst: string) => {
        if (!(src in graph) || !(dst in graph)) return -1;
        type QueueType = {
            node: string;
            mult: number;
        };
        let queue = new Array<QueueType>();
        let visited = new Set<string>();
        queue.push({ node: src, mult: 1 });
        while (queue.length > 0) {
            let currentNode = queue.shift()!;
            if (currentNode.node == dst) return currentNode.mult;
            visited.add(currentNode.node);
            for (let neighbor of graph[currentNode.node]) {
                if (!visited.has(neighbor.node))
                    queue.push({
                        node: neighbor.node,
                        mult: currentNode.mult * neighbor.res,
                    });
            }
        }
        return -1;
    };
    for (let q of queries) {
        res.push(bfs(q[0], q[1]));
    }
    return res;
}

console.log(
    calcEquation(
        [
            ["a", "b"],
            ["b", "c"],
        ],
        [2.0, 3.0],
        [
            ["a", "c"],
            ["b", "a"],
            ["a", "e"],
            ["a", "a"],
            ["x", "x"],
        ]
    )
);
