/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var exchange = function(nums) {
    // var os = 0,
    //     js = 0;
    // var temp;
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] % 2 === 0) {
    //         os = i;
    //         if (js === 0) {
    //             js = i;
    //         }
    //         for (var k = js; k < nums.length; k++) {
    //             if (nums[k] % 2 - 1 === 0) {
    //                 temp = nums[i];
    //                 nums[i] = nums[k];
    //                 nums[k] = temp;
    //                 js = k;
    //                 if (k === nums.length - 1) {
    //                     return nums;
    //                 }
    //                 break;
    //             }
    //         }
    //     }
    // }
    // return nums;
    var os = 0,
        js = nums.length - 1;
    var temp;
    while (os < js) {
        if (nums[os] % 2 === 0) {
            while (nums[js] % 2 === 0 && os < js) {
                js--;
            }
            if (os < js) {
                temp = nums[os];
                nums[os] = nums[js];
                nums[js] = temp;
            }
        }
        os++;
    }
    return nums;
};

console.log(exchange(nums));