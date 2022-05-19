var isPalindrome = function(x) {
    let rev = 0;

    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        rev = rev * 10;
        rev = rev + (i % 10);
    }
    console.log(rev);
    return rev == x;
};
console.log(isPalindrome(142));