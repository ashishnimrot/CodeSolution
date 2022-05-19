// const findNonRepeatNumber = (input) => {
//     if (input === undefined || input.length === 0) {
//         return -1;
//     }

//     const obj = {};
//     for (let i = 0; i < input.length; i++) {
//         const num = input[i] + "";
//         if (obj[num]) {
//             obj[num] = obj[num] + 1;
//         } else {
//             obj[num] = 1;
//         }
//     }
//     return obj;

//     // O(n)//
//     // for (let i = 0; i < input.length; i++) {
//     //     if (input.indexOf(input[i]) == input.lastIndexOf(input[i])) {
//     //         return input[i];
//     //     }
//     // }
//     // return -1;
// };

// console.log(findNonRepeatNumber([1, 1, 2, 2, 3])); // 3
// console.log(findNonRepeatNumber([1, 1, 2, 2, 4, 4])); // -1
// console.log(findNonRepeatNumber([])); // -1

// const subString = (input) => {
//     const str = [...input];
//     let index = 0;
//     const group = [];
//     let maxLength = 0;
//     for (let i = 0; i < str.length; i++) {
//         // n
//         const localGroup = [];
//         const strChar = str[i];
//         for (let j = index; i < str.length; j++) {
//             // n
//             if (localGroup.includes(str[j])) {
//                 // n
//                 break;
//             } else {
//                 localGroup.push(str[j]);
//             }
//         }
//         index++;
//         if (maxLength < localGroup.length) {
//             group.push(localGroup);
//             maxLength = localGroup.length;
//         }
//     }
//     return group;
// };

// console.log(subString("ashish")); // dcbae
// console.log(subString("abcaderft"));

const input = "abcaderft";

let map = {};
let c = 0;
let total = 0;
let count = 0;
for (let index = 0; index < input.length; index++) {
    count++;
    const element = input[index];
    if (map[`${element}`] === undefined) {
        map[`${element}`] = index;
    } else {
        map = {};
        index = index - index;
    }

    if (total < index) {
        console.log(map);
    }
    total = total > index ? total : index;
}
console.log(total, count);