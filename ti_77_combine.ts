// Backtracking. Decision tree

function combine(n: number, k: number): number[][] {
    const res: number[][] = [];
    const comb: number[] = [];
    const backtrack = (start: number) => {
        if (comb.length == k) {
            res.push([...comb]); // it is important to push a created shallow copy, not an object, to avoid modification
            return;
        }
        for (let i = start; i <= n; i++) {
            comb.push(i); // make a decision
            backtrack(i + 1); // not start + 1!!
            comb.pop(); // undo a decision (backtrack)
        }
    };
    backtrack(1);
    return res;
}

console.log(combine(4, 2));
