function twoSumSorted(numbers: number[], target: number): number[] {
    let index1 = 0;
    let index2 = numbers.length - 1;
    const arr = numbers; //.filter((e) => e <= target);
    console.log(arr);
    while (numbers[index1] + numbers[index2] != target) {
        if (numbers[index1] + numbers[index2] > target) {
            index2--;
        } else index1++;
    }
    return [index1 + 1, index2 + 1];
}

console.log(twoSumSorted([2, 7, 11, 15], 9));
console.log(twoSumSorted([2, 3, 4], 6));
console.log(twoSumSorted([-1, 0], -1));
