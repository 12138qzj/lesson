/**
 * @param {number[]} nums
 * @return {boolean}
 */



var num = [2, 1, 1]; //[2, 3, 1, 1, 4];，，

var canJump = function(nums) {
    let n = 1;
    let leng = nums.length;
    // console.log(backtrack(0, nums[0]));

    if (leng == 1) return 0;
    if (nums[0] >= leng - 1) {
        return n;
    }
    let bool = backtrack(0, nums[0]) ? true : false;
    // console.log("n", n);
    return bool ? n : 0;

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


        n = n + 1
        console.log("n++", n)
            //  console.log(newpos, max)
        if (max >= (leng - 1)) {
            //  console.log("匹配成功")
            // if (max > nums[0]) {
            //     n++;
            // }
            // n == 0 ? '' : n++;
            // n = n + 1
            console.log("n++++", n)
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