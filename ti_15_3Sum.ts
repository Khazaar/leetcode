function threeSum(nums: number[]): number[][] {
    let l: number = 0;
    let r: number = 0;
    let result: number[][] = [];

    nums = nums.sort((a, b) => a - b);
    console.log(nums);
    const n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        const remainder = 0 - nums[i];
        l = i + 1;
        r = nums.length - 1;
        while (l < r) {
            if (l == i) {
                l++;
                continue;
            }
            if (r == i) {
                r--;
                continue;
            }
            if (nums[l] + nums[r] == remainder) {
                result.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
            }
            if (nums[l] + nums[r] < remainder) l++;
            else r--;
        }
    }

    return result;
}

//console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0, 0]));
