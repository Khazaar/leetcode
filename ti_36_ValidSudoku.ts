function isValidSudoku(board: string[][]): boolean {
    const n = 9;
    let rows: Array<Map<string, boolean>> = Array.from(
        { length: n },
        () => new Map<string, boolean>()
    );
    let columns: Array<Map<string, boolean>> = Array.from(
        { length: n },
        () => new Map<string, boolean>()
    );
    let subBox: Array<Array<Map<string, boolean>>> = Array.from(
        { length: n },
        () => Array.from({ length: n }, () => new Map<string, boolean>())
    );

    for (let i = 0; i < n; i++) {
        //  Columns
        for (let j = 0; j < n; j++) {
            const is = Math.floor(i / 3);
            const js = Math.floor(j / 3);
            if (
                rows[i].has(board[i][j]) ||
                columns[j].has(board[i][j]) ||
                subBox[is][js].has(board[i][j])
            ) {
                return false;
            }
            if (board[i][j] != ".") {
                rows[i].set(board[i][j], true);
                columns[j].set(board[i][j], true);
                subBox[is][js].set(board[i][j], true);
            }
        }
    }

    return true;
}

console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
console.log(
    isValidSudoku([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
