function isIsomorphic(s: string, t: string): boolean {
    const mapST = new Map<string, string>();
    const mapTS = new Map<string, string>();

    for (let index = 0; index < s.length; index++) {
        if (!mapST.has(s[index])) mapST.set(s[index], t[index]);
        else {
            if (mapST.get(s[index]) != t[index]) return false;
        }
        if (!mapTS.has(t[index])) mapTS.set(t[index], s[index]);
        else {
            if (mapTS.get(t[index]) != s[index]) return false;
        }
    }
    return true;
}

// console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));
//console.log(isIsomorphic("badc", "baba"));
