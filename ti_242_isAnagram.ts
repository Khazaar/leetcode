function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    let mapS = new Map<string, number>();
    let mapT = new Map<string, number>();
    let val;
    let res = true;

    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i])) {
            val = mapS.get(s[i]);
            mapS.set(s[i], val! + 1);
        } else {
            mapS.set(s[i], 1);
        }
        if (mapT.has(t[i])) {
            val = mapT.get(t[i]);
            mapT.set(t[i], val! + 1);
        } else {
            mapT.set(t[i], 1);
        }
    }

    mapS.forEach((value, key) => {
        if (mapT.get(key) == undefined || value != mapT.get(key)) res = false;
    });

    return res;
}

//console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

function isAnagramOpt(s: string, t: string): boolean {
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
