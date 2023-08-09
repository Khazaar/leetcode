function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const sumPath = (reminder: number, path: number[], start: number) => {
        if (reminder === 0) {
            res.push(path);
            return;
        }
        if (reminder < 0) return;
        else {
            for (let i = start; i < candidates.length; i++) {
                const cand = candidates[i];
                sumPath(reminder - cand, [...path, cand], i); // start should e equal to i, to avoid permutations
            }
        }
    };
    sumPath(target, [], 0);
    return res;
}

console.log(combinationSum([2, 3, 6, 7], 7));
