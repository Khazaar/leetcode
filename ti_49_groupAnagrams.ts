function groupAnagrams(strs: string[]): string[][] {
    let res: string[][] = [];
    let map = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sortedString = str.split("").sort().join("");
        if (!map.has(sortedString)) map.set(sortedString, [str]);
        else map.get(sortedString)?.push(str);
    }
    return Array.from(map.values());
}

//console.log(isAnagram("anagram", "nagaram"));

function isAnagramOpt2(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    for (let value of map.values()) {
        if (value !== 0) return false;
    }

    return true;
}

function groupAnagramsUnopt(strs: string[]): string[][] {
    let res: string[][] = [];
    let map = new Map<string, string[]>();
    let fl = false;
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        fl = false;
        for (let key of map.keys()) {
            if (isAnagramOpt2(key, str)) {
                let val = map.get(key);
                val?.push(str);
                map.set(key, val!);
                fl = true;
                continue;
            }
        }
        !fl && map.set(str, [str]);
    }
    map.forEach((value, key) => {
        res.push(value);
    });
    return res;
}
