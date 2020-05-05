/**
 * @param {number[]} nums
 * @return {number[][]}
 * @author qzj
 * @date 2020-05-05
 */
var nums = [-1, 0, 1, 2, -1, 1, -4];
var nums2 = [0, 0, 0, 0]
var demo = [
    [-1, 0, 1],
    [-1, 2, -1],
    [0, 1, -1],
    [0, 1, -1]
]

var threeSum = function(nums) {
    var sum = 0;
    var result = [];

    nums.sort((a, b) => a - b)
    console.log("nums", nums)
    if (nums.length < 3 || nums[nums.length - 1] < 0 || nums[0] > 0)
        return result;
    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] == nums[i - 1] && i > 0) {
            console.log("i", i)
            continue;
        }
        console.log("i外", i)
        sum += nums[i];
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] == nums[j - 1] && j > i + 1)
                continue;
            sum += nums[j];
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[k] == nums[k - 1] && k > j + 1)
                    continue;
                sum += nums[k];
                if (sum == 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    sum -= nums[k]

                    break;
                } else {
                    sum -= nums[k]
                }


            }
            sum -= nums[j];
        }
        sum -= nums[i];
    }

    return result;
    // if (nums.length < 3)
    //     return []
    // let i, L, R, sum = 0,
    //     store = []
    // nums.sort((a, b) => a - b)
    // console.log(nums)
    // for (i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) break
    //     if (nums[i] === nums[i - 1]) continue
    //     L = i + 1
    //     R = nums.length - 1
    //     while (L < R) {
    //         sum = nums[i] + nums[L] + nums[R]
    //         if (sum === 0) {
    //             store.push([nums[i], nums[L], nums[R]])
    //             while (nums[L] === nums[L + 1]) L++
    //                 L++
    //         } else if (sum < 0) {
    //             L++
    //         } else if (sum > 0) {
    //             R--
    //         }
    //     }
    // }
    // return store
};
// result.push([1, 2, 3])
// var arr2 = demo.some(function(x) {
//     console.log(x)
//     console.log(x == [-1, 0, 1]);

// });
//console.log(threeSum(nums))
// var map = new Map();
// demo.forEach(x => {
//     map.set(x)
// })
// console.log(map);
console.log(threeSum(nums));