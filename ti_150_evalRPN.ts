function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    let a = 0;
    let b = 0;
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case "+":
                a = stack.pop() as number;
                b = stack.pop() as number;
                stack.push(a + b);
                break;
            case "-":
                a = stack.pop() as number;
                b = stack.pop() as number;
                stack.push(b - a);
                break;
            case "*":
                a = stack.pop() as number;
                b = stack.pop() as number;
                stack.push(a * b);
                break;
            case "/":
                a = stack.pop() as number;
                b = stack.pop() as number;
                stack.push(Math.trunc(b / a));
                break;

            default:
                {
                    stack.push(Number(tokens[i]));
                }
                break;
        }
    }
    return stack[0];
}

console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ])
);
