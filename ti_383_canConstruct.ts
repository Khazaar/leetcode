function canConstruct(ransomNote: string, magazine: string): boolean {
    let magMap: Map<string, number> = new Map<string, number>();
    let val;
    for (let index = 0; index < magazine.length; index++) {
        const element = magazine[index];
        if (magMap.has(element)) {
            val = magMap.get(element);
            magMap.set(element, val! + 1);
        } else magMap.set(element, 1);
    }
    for (let index = 0; index < ransomNote.length; index++) {
        val = magMap.get(ransomNote[index]);
        if (val && val > 0) magMap.set(ransomNote[index], val - 1);
        else return false;
    }
    return true;
}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
