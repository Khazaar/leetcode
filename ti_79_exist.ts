function exist(board: string[][], word: string): boolean {
    const n = board.length;
    const m = board[0].length;
    const used = new Set<string>();

    const backtrack = (i: number, j: number, reminder: string) => {
        const str = `${i};${j}`;
        if (reminder === "") return true;
        if (i >= n || j >= m || i < 0 || j < 0 || used.has(str)) return false;
        if (board[i][j] != reminder[0]) return false;
        else {
            const newReminder = reminder.slice(1);
            used.add(str);
            if (backtrack(i + 1, j, newReminder) === true) return true;
            if (backtrack(i - 1, j, newReminder) === true) return true;
            if (backtrack(i, j + 1, newReminder) === true) return true;
            if (backtrack(i, j - 1, newReminder) === true) return true;
        }
        used.delete(str); // It's important to delete only the last str
        return false;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const res = backtrack(i, j, word);
            if (res === true) return true;
            used.clear();
        }
    }

    return false;
}

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "E", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCESEEEFS"
    )
);
