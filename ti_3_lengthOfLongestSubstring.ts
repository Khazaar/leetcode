function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    let l = 0;
    let r = 0;
    let maxLength = 1;
    let substr = s[0];
    while (r < s.length - 1) {
        if (substr.indexOf(s[r + 1]) == -1) {
            r++;
            substr = substr + s[r];
        } else {
            r++;
            while (substr.indexOf(s[r]) != -1) {
                l++;
                substr = substr.slice(1);
            }
            substr = substr + s[r];
        }
        maxLength = Math.max(maxLength, substr.length);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
//console.log(lengthOfLongestSubstring("pwwkew"));
