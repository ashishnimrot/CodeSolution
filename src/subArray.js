const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // []

// Lopping Login
const subArraySimpleLopping = (input) => {
    let sum = 0;
    let start = 0,
        end = 0;
    for (let i = 0; i < input.length; i++) {
        let cal = input[i];
        for (let j = i; j < input.length; j++) {
            cal += input[j];
            if (cal > sum) {
                sum = cal;
                start = i;
                end = j;
                console.log({ sum });
            }
        }
    }
    return { sum, start, end };
};

// Kadene's Algorithm
// const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const subArrayKadeneAlgorithm = (input) => {
    if (input.length == 0) {
        return 0;
    }

    let sum_max = input[0];
    let sum_including_current = input[0];

    for (let i = 0; i < input.length; i++) {
        let n = input[i];
        sum_including_current =
            sum_including_current + n > n ? sum_including_current + n : n;
        sum_max = sum_max > sum_including_current ? sum_max : sum_including_current;
    }
    return sum_max;
};

// Debug // const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// sum_max         sum_including_current       i           n
// -2              -2                          -           -
// -2              -2                          0           -2
// 1                1                          1           1
// 1               -2                          2           -3
// 4               4                           3           4
// 4               3                           4           -1
// 5               5                           5           2
// 6               6                           6           1
// 6               1                           7           -5
// 6               4                           8           4

console.log(subArraySimpleLopping(input));
console.log(subArrayKadeneAlgorithm(input));