const input = [1, 1, 2, 2, 3, 4, 5, 5, 4, 6, 7, 8, 6]; // 3

const map = {};

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (map[`${element}`] == undefined) {
        map[`${element}`] = 1;
    } else {
        delete map[`${element}`];
    }
}

console.log(map);