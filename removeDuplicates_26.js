let nums = [1, 1, 2];

var removeDuplicates = function (nums) {
    let n = nums.length;
    let k = 1;
    for (let i = 1; i <= n - 1; i++) {
        if (nums[i] != nums[k - 1]) {
            k++;
            nums[k - 1] = nums[i];
        }
    }
    console.log(nums);
    return k;
};

console.log(removeDuplicates(nums));
