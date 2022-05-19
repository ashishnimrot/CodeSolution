const reverse = (x) => {
    let rev = 0;
    for (i = x; i >= 1; i = Math.floor(i / 10)) {
        rev = rev * 10;
        rev = rev + (i % 10);
        console.log(rev);
    }
    return rev;
};

console.log(isPalindrome(142));
console.log(Math.floor(1001 / 10));