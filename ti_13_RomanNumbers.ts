function romanToInt(s: string): number {
    interface IData {
        [key: string]: number;
    }
    const data: IData = {
        ["I"]: 1,
        ["V"]: 5,
        ["X"]: 10,
        ["L"]: 50,
        ["C"]: 100,
        ["D"]: 500,
        ["M"]: 1000,
    };
    let sum: number = data[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        if (data[s[i]] < data[s[i + 1]]) {
            sum = sum - data[s[i]];
        } else {
            sum = sum + data[s[i]];
        }
    }
    return sum;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
