function intToRoman(num: number): string {
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
    let keys = Object.keys(data);

    let res = "";
    let rest = num;

    for (let k = 6; k >= 0; k--) {
        while (Math.floor(rest / data[keys[k]]) > 0) {
            rest = rest - data[keys[k]];
            res = res + keys[k];
        }
        if (rest != 0) {
            if (keys[k] == "D" || keys[k] == "M") {
                if (data[keys[k]] - rest <= data["C"]) {
                    res = res + "C" + keys[k];
                    rest = rest - data[keys[k]] + data["C"];
                    continue;
                }
            }
            if (keys[k] == "L" || keys[k] == "C") {
                if (data[keys[k]] - rest <= data["X"]) {
                    res = res + "X" + keys[k];
                    rest = rest - data[keys[k]] + data["X"];
                    continue;
                }
            }
            if (keys[k] == "V" || keys[k] == "X") {
                if (data[keys[k]] - rest <= data["I"]) {
                    res = res + "I" + keys[k];
                    rest = rest - data[keys[k]] + data["I"];
                    continue;
                }
            }
        }
    }

    return res;
}

//console.log(intToRoman(3));
//console.log(intToRoman(1400));
//console.log(intToRoman(58));
console.log(intToRoman(40));
