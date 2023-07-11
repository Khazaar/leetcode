function minSubArrayLen2(target: number, nums: number[]): number {
    let l = 0;
    let r = 0;
    let sum = nums[0];
    const n = nums.length;
    let minLength = n;
    let found = false;
    while (l < n && r <= n - 1) {
        if (sum >= target) {
            found = true;
            if (r - l < minLength) minLength = r - l;
            sum = sum - nums[l];
            l++;
        }
        if (sum < target) {
            if (!found && r == n - 1) return 0;
            if (r < n - 1) {
                r++;
                sum = sum + nums[r];
            } else break;
        }
    }
    return minLength + 1;
}
function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0;
    let r = 0;
    let sum = 0;
    const n = nums.length;
    let minLength = Infinity;
    while (r < n) {
        sum += nums[r];
        while (sum >= target) {
            if (r - l + 1 < minLength) {
                minLength = r - l + 1;
            }
            sum -= nums[l];
            l++;
        }
        r++;
    }
    return minLength === Infinity ? 0 : minLength;
}

//console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
//console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
