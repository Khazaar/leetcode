function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let volume = 0;
    let maxVolume = volume;
    while (l != r) {
        volume = Math.min(height[l], height[r]) * (r - l);
        if (volume > maxVolume) maxVolume = volume;
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return maxVolume;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
// console.log(maxArea([2, 3, 4], 6));
// console.log(maxArea([-1, 0], -1));
