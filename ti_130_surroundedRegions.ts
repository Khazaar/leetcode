// We are traversing board borders (they are safe by definition) and going into center marking safe islands by "T"

function solve(board: string[][]): void {
    const n = board.length;
    const m = board[0].length;
    const visited = new Set<string>();
    const exploreIsland = (i: number, j: number) => {
        if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] == "X")
            return false;
        const strKey = i + ";" + j;
        if (visited.has(strKey)) return false;
        board[i][j] = "T";
        visited.add(strKey);
        exploreIsland(i + 1, j);
        exploreIsland(i - 1, j);
        exploreIsland(i, j + 1);
        exploreIsland(i, j - 1);
        return true;
    };
    for (let i = 0; i < n; i++) {
        if (exploreIsland(i, 0) == true) {
        }
        if (exploreIsland(i, m - 1) == true) {
        }
    }
    for (let j = 0; j < m; j++) {
        if (exploreIsland(0, j) == true) {
        }
        if (exploreIsland(n - 1, j) == true) {
        }
    }
    console.log(board);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] == "O") board[i][j] = "X";
            if (board[i][j] == "T") board[i][j] = "O";
        }
    }
    console.log(board);
}

solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
]);
