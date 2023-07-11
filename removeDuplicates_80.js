nums = [1, 1, 1, 1, 2, 2, 3];
var removeDuplicates = function (nums) {
    let n = nums.length;
    let k = 2;
    for (let i = 2; i < n; i++) {
        if (nums[i] != nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    console.log(nums);
    return k;
};

console.log(removeDuplicates(nums));
