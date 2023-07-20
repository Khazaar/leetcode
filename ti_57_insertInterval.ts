import { expect } from "chai";

//first I tried to modify "intervals" in plece, what causesd to a mess
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let start = newInterval[0];
    let end = newInterval[1];
    let left = intervals.filter((a) => a[1] < start);
    let right = intervals.filter((a) => a[0] > end);
    let middle = intervals.filter((a) => a[1] >= start && a[0] <= end);
    if (middle.length > 0) {
        start = Math.min(start, middle[0][0]);
        end = Math.max(end, middle[middle.length - 1][1]);
    }
    return left.concat([[start, end]]).concat(right);
}

console.log(
    insert(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5]
    )
);

describe("insert function", () => {
    it("should insert and merge intervals correctly", () => {
        expect(
            insert(
                [
                    [1, 3],
                    [6, 9],
                ],
                [2, 5]
            )
        ).to.deep.equal([
            [1, 5],
            [6, 9],
        ]);
        expect(
            insert(
                [
                    [1, 2],
                    [3, 5],
                    [6, 7],
                    [8, 10],
                    [12, 16],
                ],
                [4, 8]
            )
        ).to.deep.equal([
            [1, 2],
            [3, 10],
            [12, 16],
        ]);
    });

    it("should handle empty intervals array", () => {
        expect(insert([], [2, 5])).to.deep.equal([[2, 5]]);
    });

    it("should handle overlapping intervals", () => {
        expect(
            insert(
                [
                    [1, 5],
                    [6, 9],
                ],
                [4, 7]
            )
        ).to.deep.equal([[1, 9]]);
    });

    it("should handle non-overlapping intervals", () => {
        expect(
            insert(
                [
                    [1, 2],
                    [5, 6],
                ],
                [3, 4]
            )
        ).to.deep.equal([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    });
});

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.
