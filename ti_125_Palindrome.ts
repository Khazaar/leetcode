function isPalindrome(s: string): boolean {
    let arr = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .split("");

    console.log(arr);
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            return false;
        }
    }

    return true;
}

//console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
