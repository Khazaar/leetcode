type IslandType = {
    i: number;
    j: number;
};

// Do I pass the reference of a visited Set?
function numIslands(grid: string[][]): number {
    const exploreIsland = (visited: Set<string>, src: IslandType) => {
        const strKey = `${src.i};${src.j}`;
        if (
            visited.has(strKey) ||
            src.i >= n ||
            src.j >= m ||
            src.i < 0 ||
            src.j < 0
        )
            return false;
        if (grid[src.i][src.j] == "0") return false;

        visited.add(strKey);

        const neighbors: IslandType[] = [];
        neighbors.push({ i: src.i + 1, j: src.j });
        neighbors.push({ i: src.i - 1, j: src.j });
        neighbors.push({ i: src.i, j: src.j + 1 });
        neighbors.push({ i: src.i, j: src.j - 1 });

        for (let neighbor of neighbors) {
            exploreIsland(visited, neighbor);
        }
        return true;
    };
    let count = 0;
    let visited = new Set<string>();
    const n = grid.length;
    const m = grid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (exploreIsland(visited, { i, j })) count++;
        }
    }
    return count;
}

console.log(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "1"],
    ])
);
