/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// nums1 = [1, 2, 3, 0, 0, 0];
// m = 3;
// nums2 = [2, 5, 6];
// n = 3;

// nums1 = [0];
// m = 0;
// nums2 = [1];
// n = 1;

var merge2 = function (nums1: number[], m: number, nums2: number[], n: number) {
    let k = n + m - 1,
        i = m - 1,
        j = n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[j];
            j--;
        } else {
            nums1[k] = nums2[i];
            i--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    return nums1;
};
