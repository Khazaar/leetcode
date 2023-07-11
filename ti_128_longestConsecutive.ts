function longestConsecutive(nums: number[]): number {
    let res = 0;
    let set = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let j = 0;
            while (set.has(nums[i] + j)) {
                j++;
            }
            res = Math.max(res, j);
        }
    }
    return res;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

function longestConsecutiveUnopt(nums: number[]): number {
    let map = new Map<number, number[]>();
    let mapArray = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        mapArray.set(nums[i], [nums[i]]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i] - 1)) {
            map.set(nums[i], [nums[i]]);
            let subs = [nums[i]];
            while (mapArray.has(subs[subs.length - 1] + 1)) {
                subs.push(subs[subs.length - 1] + 1);
            }
            map.set(nums[i], subs);
        }
    }
    let max = 0;
    for (let val of map.values()) {
        max = Math.max(max, val.length);
    }

    return max;
}
