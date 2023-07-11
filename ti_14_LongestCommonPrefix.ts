function longestCommonPrefix(strs: string[]): string {
    let pref = "";
    let fl = true;
    let count = -1;
    if (strs.length == 1) return strs[0];
    while (fl) {
        count++;

        pref = strs[0].slice(0, count);

        for (let str of strs) {
            if (str.indexOf(pref) != 0) {
                fl = false;
                pref = strs[0].slice(0, count - 1);
                break;
            }
            if (str == "" || count > str.length) {
                fl = false;
                break;
            }
        }
    }
    return pref;
}

//console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix(["dog", "racecar", "car"]));
//console.log(longestCommonPrefix([""]));
//console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower", "flower"]));
