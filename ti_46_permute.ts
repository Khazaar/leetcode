function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    const n = nums.length;
    const comb: number[] = [];
    const used = new Set<number>();
    const backtrack = () => {
        if (comb.length === n) {
            res.push([...comb]);
            return;
        }
        for (let num of nums) {
            if (!used.has(num)) {
                used.add(num);
                comb.push(num);
                backtrack();
                comb.pop();
                used.delete(num);
            }
        }
    };
    backtrack();
    return res;
}
