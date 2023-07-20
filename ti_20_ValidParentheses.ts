function isValid(s: string): boolean {
    const closeToOpen = new Map<string, string>();
    closeToOpen.set(")", "(");
    closeToOpen.set("]", "[");
    closeToOpen.set("}", "{");
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!closeToOpen.has(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack[stack.length - 1] == closeToOpen.get(s[i])) {
                stack.pop();
            } else return false;
        }
    }
    if (stack.length == 0) return true;
    else {
        return false;
    }
}
console.log(isValid("]"));
