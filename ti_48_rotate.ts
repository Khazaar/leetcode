function rotate(matrix: number[][]): void {
    const n = matrix.length;
    const layers = Math.floor(n / 2);
    let buf;
    for (let l = 0; l < layers; l++) {
        for (let i = l; i < n - 1 - l; i++) {
            buf = matrix[l][i];
            matrix[l][i] = matrix[n - 1 - i][l];
            matrix[n - 1 - i][l] = matrix[n - 1 - l][n - 1 - i];
            matrix[n - 1 - l][n - 1 - i] = matrix[i][n - 1 - l];
            matrix[i][n - 1 - l] = buf;
        }
    }
    console.log(matrix);
}

// rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]);
rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
]);
