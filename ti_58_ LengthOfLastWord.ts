function lengthOfLastWord(s: string): number {
    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " ") {
            if (len != 0) break;
        } else len++;
    }
    return len;
}

//console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
//console.log(lengthOfLastWord("luffy is still joyboy"));
//console.log(lengthOfLastWord("Hello World"));
