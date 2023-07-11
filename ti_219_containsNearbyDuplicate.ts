function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map<number, number[]>();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], [i]);
        } else {
            map.get(nums[i])!.push(i);
        }
    }
    for (let val of map.values()) {
        if (val.length >= 2) {
            const minDiff = val.reduce((minDiff, current, index) => {
                if (index == 0) return minDiff;
                else {
                    return Math.min(minDiff, val[index] - val[index - 1]);
                }
            }, Infinity);
            if (minDiff <= k) return true;
        }
    }
    return false;
}

function containsNearbyDuplicateOpt(nums: number[], k: number): boolean {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i])! <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
