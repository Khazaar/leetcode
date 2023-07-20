function simplifyPath(path: string): string {
    let stack = [];
    let cur = "";
    path += "/";
    for (let i = 1; i < path.length; i++) {
        if (path[i] != "/") {
            cur += path[i];
        } else {
            if (cur != "" && cur != "." && cur != "..") stack.push(cur);
            if (cur == "..") stack.pop();
            cur = "";
        }
    }
    return "/" + stack.join("/");
}

console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/../"));
