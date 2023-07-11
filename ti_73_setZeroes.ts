function setZeroes(matrix: number[][]): void {
    const n = matrix.length;
    const m = matrix[0].length;
    let buf = matrix[0][0];
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] == 0) buf = 0;
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j > 0; j--) {
            if (matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (buf == 0) {
        for (let i = n - 1; i >= 0; i--) {
            matrix[i][0] = 0;
        }
    }
    console.log(matrix);
}

// setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
// ]);
// setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
// ]);
setZeroes([
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
]);
