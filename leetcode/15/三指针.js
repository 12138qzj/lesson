/**
 * @param {number[]} nums
 * @return {number[][]}
 * @author qzj
 * @date 2020-05-05
 */
var nums = [-1, -1, -1, 0, 1, 2, -1, 1, -4];
var nums2 = [-2, 0, 0, 2, 2]
var demo = [
    [-1, 0, 1],
    [-1, 2, -1],
    [0, 1, -1],
    [0, 1, -1]
]

var threeSum = function(nums) {

    nums.sort((a, b) => a - b);
    console.log(nums)
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            continue;
        let L = i + 1;
        let R = nums.length - 1;
        while (L < R) {

            if (nums[L] + nums[R] + nums[i] === 0) {
                result.push([nums[i], nums[L], nums[R]]);
                while (nums[L] === nums[L + 1]) L++;

                R--;
                L++;

            } else if (nums[L] + nums[R] + nums[i] > 0) {

                R--;
            } else if (nums[L] + nums[R] + nums[i] < 0) {

                L++;
            }
        }
    }
    return result;

};

console.log(threeSum(nums));