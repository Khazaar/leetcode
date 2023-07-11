function isHappy(n: number): boolean {
    let map = new Map<number, boolean>();
    let res = n;
    while (true) {
        res = res
            .toString()
            .split("")
            .reduce((sum, d) => sum + Math.pow(Number(d), 2), 0);
        if (res == 1) return true;
        if (map.has(res)) return false;
        else {
            map.set(res, true);
        }
    }
}

//console.log(isHappy(19));
console.log(isHappy(2));
