function convert(s: string, numRows: number): string {
    let res = "";
    let i = 0;
    if (numRows == 1) return s;

    for (let r = 0; r < numRows; r++) {
        i = r;
        while (i < s.length) {
            res = res + s[i];
            if (i % (numRows * 2 - 2) < numRows - 1) i += (numRows - r - 1) * 2;
            else i += r * 2;
        }
    }

    return res;
}

//console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("AB", 1));
//console.log(convert("A", 1));
