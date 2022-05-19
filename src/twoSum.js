var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i <= nums.length; i++) {
        const diff = target - nums[i] + "";
        if (map[diff] != undefined) {
            return [map[diff], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
console.time("loop");
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.timeEnd("loop");
console.time("loop1");
console.log(twoSum([2, 7, 11, 15], 17)); // [0,3]
console.timeEnd("loop1");