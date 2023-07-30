function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let preMap = new Map<number, number[]>();
    for (let pr of prerequisites) {
        // Define a prereq Map
        if (!preMap.has(pr[0])) preMap.set(pr[0], []);
        preMap.get(pr[0])?.push(pr[1]);
        if (!preMap.has(pr[1])) preMap.set(pr[1], []);
    }

    // Define a visited set
    let visitedSet = new Set<number>();

    // detecting a loop with dfs
    const dfs = (crs: number): boolean => {
        // base case - loop found
        if (visitedSet.has(crs)) return false;
        // base case - no prereq, course could be complened
        if (preMap.get(crs)?.length == 0) return true;
        visitedSet.add(crs);
        for (let pr of preMap.get(crs)!) {
            //return dfs(pr); this is wrong, because this ignores all iterations after the first in loop
            if (!dfs(pr)) return false;
        }
        // with returning true we need to clean up visited set
        visitedSet.delete(crs);
        preMap.set(crs, []);
        return true;
    };

    for (let crs of preMap.keys()) {
        visitedSet = new Set<number>();
        if (!dfs(crs)) return false;
    }

    return true;
}

const prereq = [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
];

console.log(canFinish(8, prereq));
