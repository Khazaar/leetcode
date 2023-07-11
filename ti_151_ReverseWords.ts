function reverseWords(s: string): string {
    let res = "";
    let word = "";
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") word = s[i] + word;
        if ((s[i] == " " || i == 0) && word != "") {
            res = res + word + " ";
            word = "";
        }
    }
    return res.slice(0, res.length - 1);
}
function reverseWordsOptimal(s: string): string {
    return s
        .split(" ")
        .filter((word) => word)
        .reverse()
        .join(" ");
}

//console.log(reverseWords("the sky is blue"));
//console.log("#", reverseWords("  hello world  "), "#");
console.log(reverseWords("a good   example"));
