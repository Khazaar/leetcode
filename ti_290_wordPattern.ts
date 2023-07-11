function wordPattern(pattern: string, s: string): boolean {
    let mapPS = new Map<string, string>();
    let mapSP = new Map<string, string>();
    const sA = s.split(" ");
    if (sA.length != pattern.length) return false;
    for (let index = 0; index < pattern.length; index++) {
        if (!mapPS.has(pattern[index])) mapPS.set(pattern[index], sA[index]);
        else {
            if (mapPS.get(pattern[index]) != sA[index]) return false;
        }
        if (!mapSP.has(sA[index])) mapSP.set(sA[index], pattern[index]);
        else {
            if (mapSP.get(sA[index]) != pattern[index]) return false;
        }
    }
    return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
