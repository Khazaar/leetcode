//Greedy algorythm
//interval scheduling maximization problem (ISMP)
//finding the minimum number of resources needed to cover all intervals, which is a classic interval scheduling problem

function findMinArrowShots(points: number[][]): number {
    if (points.length == 0) return 0;

    let arrows = 1;
    points.sort((a, b) => a[1] - b[1]); // sorn by ends!!
    let lastRange = points[0];
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] <= lastRange[1]) {
            continue;
        } else {
            arrows++;
            lastRange = points[i];
        }
    }
    return arrows;
}

console.log(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
);
