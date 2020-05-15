let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var shuffle = function(arr) {
    let nums = [...arr]; //使用扩展运算符  赋值不改变原数据
    // let nums = arr;//数组是引用类型 不能直接赋值 会改变原数组

    // console.log(nums);
    let n = nums.length - 1;
    while (n > 0) {
        let index = Math.floor(Math.random() * (n + 1));
        [nums[index], nums[n]] = [nums[n], nums[index]];
        n--;
    }
    return nums;
};

let t = 100;
for (let i = 0; i < t; i++) {
    // 浅拷贝一下
    let sorted = shuffle(arr1.slice(0));
    for (let i = 0; i < sorted.length; i++) {
        res[i] = sorted[i] + res[i];
    }
}
console.log(res.map(sum => sum / t));

console.log(shuffle(arr1));