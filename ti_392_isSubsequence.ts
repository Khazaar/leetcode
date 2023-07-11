function isSubsequence(s: string, t: string): boolean {
    if (s == "") return true;
    if (t == "") return false;

    let p = 0;
    for (let i = 0; i < s.length; i++) {
        while (p < t.length && s[i] != t[p]) {
            p++;
        }
        p++;
        if (p == t.length) return false;
    }
    return true;
}

//console.log(isSubsequence("abc", "ahbgdc"));
//console.log(isSubsequence("axc", "ahbgdc"));
//console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));
