function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(-nums[i])) {
            return [i, map.get(-nums[i])!];
        }
        map.set(nums[i] - target, i);
    }
    return [0];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
