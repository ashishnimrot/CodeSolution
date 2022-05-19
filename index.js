const input = "pwwkew";

let map = {};
let c = 0;
let total = 0;
let count = 0;
for (let index = 0; index < input.length; index++) {
    count++;
    const element = input[index];
    if (map[`${element}`] === undefined) {
        map[`${element}`] = index;
        c++;
    } else {
        map = {};
        index = index - c;
        c = 0;
    }

    if (total < index) {
        console.log(map);
    }
    total = total > c ? total : c;
}
console.log(total, count);