function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;
    const calcLiveТeighbours = (ii: number, jj: number) => {
        let res = 0;
        for (let i = ii - 1; i <= ii + 1; i++) {
            for (let j = jj - 1; j <= jj + 1; j++) {
                if (
                    i < 0 ||
                    i > m - 1 ||
                    j < 0 ||
                    j > n - 1 ||
                    (i == ii && j == jj)
                )
                    continue;
                if (board[i][j] == 1 || board[i][j] == 3) res++;
            }
        }
        return res;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const neib = calcLiveТeighbours(i, j);
            console.log("i: ", i, "j: ", j, "neib: ", neib);
            if (board[i][j] == 0) {
                if (neib == 3) board[i][j] = 2;
                else board[i][j] = 0;
            } else {
                if (neib < 2 || neib > 3) board[i][j] = 1;
                if (neib >= 2 && neib <= 3) board[i][j] = 3;
            }
        }
    }
    console.log(board);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 0 || board[i][j] == 1) board[i][j] = 0;
            if (board[i][j] == 2 || board[i][j] == 3) board[i][j] = 1;
        }
    }
    console.log(board);
}

// gameOfLife([
//     [0, 1, 0],
//     [0, 0, 1],
//     [1, 1, 1],
//     [0, 0, 0],
// ]);
gameOfLife([
    [1, 1],
    [1, 0],
]);
