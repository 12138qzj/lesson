/**
 * 四数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * @author qzj
 * @date 2020-05-09
 * 思路 ：先固定两个值 然后两指针去找合适的值
 */
var nums = [-1, -5, -5, -3, 2, 5, 0, 4],
    target = -7;
var fourSum = function(nums, target) {
    let len = nums.length;
    nums.sort((a, b) => a - b);
    if (nums.length < 4 || nums[0] + nums[1] + nums[2] + nums[3] > target) return [];

    console.log(nums)
    let result = [];

    for (let j = 0; j < len - 3; j++) {

        if (nums[j] === nums[j - 1] || nums[j] + nums[len - 1] + nums[len - 2] + nums[len - 3] > target)
            continue;
        for (let i = j + 1; i < len - 2; i++) {
            if (i != j + 1 && nums[i] === nums[i - 1])
                continue;
            console.log("nums[i - 1]", nums[-1])
            let L = i + 1;
            let R = len - 1;
            while (L < R) {

                if (nums[j] + nums[L] + nums[R] + nums[i] === target) {
                    result.push([nums[j], nums[i], nums[L], nums[R]]);
                    while (nums[L] === nums[L + 1]) L++;

                    R--;
                    L++;

                } else if (nums[j] + nums[L] + nums[R] + nums[i] > target) {

                    R--;
                } else if (nums[j] + nums[L] + nums[R] + nums[i] < target) {

                    L++;
                }
            }
        }
    }
    return result;
};
console.log("result", fourSum(nums, target))