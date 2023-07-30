// Topological sort
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    let res: number[] = [];

    let preMap = new Map<number, number[]>();
    // itit all prereqs to [], even if they are not in prerequisites
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    for (let pr of prerequisites) {
        preMap.get(pr[0])!.push(pr[1]);
    }
    let visitedSet = new Set<number>();
    let completedSet = new Set<number>();
    const dfs = (src: number): boolean => {
        if (visitedSet.has(src)) return false;
        if (completedSet.has(src)) return true;
        visitedSet.add(src);

        for (let pr of preMap.get(src)!) {
            if (dfs(pr) == false) return false;
        }

        preMap.set(src, []);
        visitedSet.delete(src);
        completedSet.add(src);
        res.push(src);
        return true;
    };

    for (let src of preMap.keys()) {
        if (!completedSet.has(src)) if (dfs(src) == false) return [];
    }
    return res;
}

const prereq2 = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
];

console.log(findOrder(1, []));
