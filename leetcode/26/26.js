/**
 * @author qzj
 * @date 2020-4-14
 * @function 删除数组中的重复数据
 * @param {@type Array} nums
 * @return {Array}
 */
let nums = [1, 1, 2];
const removeDuplicates = function(nums) {
    console.log(nums.length);
    let a = nums[0];
    let n = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (a == nums[i]) {
            nums.splice(i - 1, 1);
            i--;
        } else {
            a = nums[i]
        }
        n = i;
    }
    return n;
};
console.log(removeDuplicates(nums));