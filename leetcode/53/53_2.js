/**
 * @param {number[]} nums
 * @return {number}
 * @author qzj
 * @date 2020-04-28
 */
var nums = [0]
var missingNumber = function(nums) {
    //let next = 0;

    //let pre = 0;
    //pre = nums[0];
    // if (nums[0] != 0) {
    //     return 0;
    // }
    // for (let i = 1; i < nums.length; i++) {
    //     //next = nums[i];
    //     if ((nums[i - 1] + 1) == nums[i]) {
    //         //pre = next
    //     } else {
    //         return nums[i] - 1
    //     }
    // }
    // return nums[nums.length - 1] + 1;
    let left = 0,
        temp = nums.length - 1,
        right = nums.length - 1;
    if ((nums.length - 1) == nums[nums.length])
        return nums.length
    while (left <= right) {
        temp = parseInt((left + right) / 2);
        temp === nums[temp] ? left = temp + 1 : right = temp - 1;
        //temp = right - 1;
        console.log(temp, left, right)

    }
    return left;
};
console.log(missingNumber(nums));