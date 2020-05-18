/**
 * @param {number[]} nums
 * @return {boolean}
 */
var num = [3, 2, 2, 0, 0, 4]; //[2, 3, 1, 1, 4];

var canJump = function(nums) {
    let leng = nums.length;
    // console.log(backtrack(0, nums[0]));

    return backtrack(0, nums[0]) ? true : false;

    function backtrack(pos, movepos) {
        let max = pos,
            newpos = 0;
        for (let i = pos + 1; i <= movepos; i++) {
            //  console.log(i, max, nums[i] + i, nums[i] + i > max)
            if (nums[i] + i > max) {
                max = i + nums[i];
                newpos = i;
            }
        }
        //  console.log(newpos, max)
        if (max >= (leng - 1)) {
            //  console.log("匹配成功")
            return true;
        }
        return pos == max ? false : backtrack(newpos, max);
        // if (pos == max) {
        //     //console.log("匹配shiabi")
        //     return false;
        // } else {
        //     return backtrack(newpos, max);
        // }

    }
};
console.log(canJump(num))