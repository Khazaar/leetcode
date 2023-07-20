function merge(intervals: number[][]): number[][] {
    let res: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        intervals[i] = [
            Math.min(intervals[i][0], intervals[i][1]),
            Math.max(intervals[i][0], intervals[i][1]),
        ];
    }
    intervals.sort((a, b) => {
        if (a[0] != b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    });

    let i = 0;
    let currentInterval = intervals[0];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= currentInterval[1]) {
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
        } else {
            res.push(currentInterval);
            currentInterval = intervals[i];
        }
    }
    res.push(currentInterval);

    return res;
}

// console.log(
//     merge([
//         [1, 3],
//         [2, 6],
//         [8, 10],
//         [15, 18],
//     ])
// );
// console.log(
//     merge([
//         [1, 4],
//         [2, 3],
//     ])
// );
// console.log(
//     merge([
//         [2, 3],
//         [5, 5],
//         [2, 2],
//         [3, 4],
//         [3, 4],
//     ])
// );
console.log(
    merge([
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10],
    ])
);
// console.log(
//     merge([
//         [2, 3],
//         [4, 6],
//         [5, 7],
//         [3, 4],
//     ])
// );

function mergeStuck(intervals: number[][]): number[][] {
    let map = new Map<number, number>();
    for (let i = 0; i < intervals.length; i++) {
        const interval = [
            Math.min(intervals[i][0], intervals[i][1]),
            Math.max(intervals[i][0], intervals[i][1]),
        ];
        if (map.has(interval[0])) {
            if (interval[1] > map.get(interval[0])!) {
                map.set(interval[0], interval[1]);
            }
        } else {
            map.set(interval[0], interval[1]);
        }
    }
    for (let key1 of map.keys()) {
        for (let key2 of map.keys()) {
            if (key2 > key1 && key2 <= map.get(key1)!) {
                if (map.get(key2)! > map.get(key1)!)
                    map.set(key1, map.get(key2)!);
                map.delete(key2);
            }
        }
    }
    let res: number[][] = [];
    for (let key of map.keys()) {
        res.push([key, map.get(key)!]);
    }
    return res;
}
