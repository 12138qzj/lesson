/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var nums1 = [1, 2, 3, 0, 0, 0],
    m = 3;
var nums2 = [4, 5, 6],
    n = 3;
var merge = function(nums1, m, nums2, n) {
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return nums1;
    }
    if (n == 0)
        return nums1;
    if (n == 0 && m == 0)
        return nums1;


    for (let i = 0; i < nums1.length - 1; i++) {
        if (nums1[m - 1] <= nums2[n - 1]) {
            nums1[n + m - 1] = nums2[n - 1];
            n--;
        } else {
            nums1[n + m - 1] = nums1[m - 1];
            m--;
        }
    }
    nums1[m] = nums2[0];
    return nums1;
};
// nums1.pop();
// nums1.splice(1, 0, 9)
// console.log(nums1);
console.log(merge(nums1, m, nums2, n));