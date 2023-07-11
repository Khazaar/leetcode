function spiralOrder(matrix: number[][]): number[] {
    let res: number[] = [];
    let n = matrix.length;
    let m = matrix[0].length;
    let l = 0;
    let r = m - 1;
    let t = 0;
    let b = n - 1;

    while (l <= r || t <= b) {
        for (let j = l; j <= r; j++) {
            res.push(matrix[t][j]);
        }
        t++;
        if (t > b) break;
        for (let i = t; i <= b; i++) {
            res.push(matrix[i][r]);
        }
        r--;
        if (l > r) break;

        for (let j = r; j >= l; j--) {
            res.push(matrix[b][j]);
        }
        b--;
        if (t > b) break;

        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l]);
        }
        l++;
        if (l > r) break;
    }
    return res;
}

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);
console.log(spiralOrder([[7], [9], [6]]));
console.log(
    spiralOrder([
        [2, 5, 8],
        [4, 0, -1],
    ])
);
