function letterCombinations(digits: string): string[] {
    type TelBtnType = {
        [key: string]: string[];
    };
    const telBtn: TelBtnType = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    };
    const res: string[] = [];
    if (digits.length == 0) return [];
    const dfs = (index: number, letters: string) => {
        if (digits.length == index) res.push(letters);
        const currentDigit = digits[index];
        if (telBtn[currentDigit]) {
            for (let letter of telBtn[currentDigit]) {
                dfs(index + 1, letters + letter);
            }
        }
    };
    dfs(0, "");
    return res;
}
