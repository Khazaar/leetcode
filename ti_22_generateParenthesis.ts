function generateParenthesis(n: number): string[] {
    // This validation function is non necessary
    const isValid = (str: string): boolean => {
        const stack: string[] = [];
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            if (element == ")" && stack[stack.length - 1] == "(") {
                stack.pop();
            } else stack.push(element);
        }
        return stack.length == 0;
    };
    const validCombs: string[] = [];
    const backtrack = (comb: string, leftCount: number, rightCount: number) => {
        if (comb.length === 2 * n) {
            validCombs.push(comb);
            return;
        }
        if (leftCount < n) backtrack(comb + "(", leftCount + 1, rightCount);
        // to generate only valid combinations
        if (rightCount < leftCount)
            backtrack(comb + ")", leftCount, rightCount + 1);
    };
    backtrack("", 0, 0);
    return validCombs;
}
