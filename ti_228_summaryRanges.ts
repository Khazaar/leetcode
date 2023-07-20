function summaryRanges(nums: number[]): string[] {
    if (nums.length == 0) return [];
    let res: string[] = [];
    let range: string;
    let l = nums[0];
    let r = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            r = nums[i];
        } else {
            range = l != r ? `${l}->${r}` : `${l}`;
            l = nums[i];
            r = nums[i];
            res.push(range);
        }
    }
    range = l != r ? `${l}->${r}` : `${l}`;
    res.push(range);
    return res;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
