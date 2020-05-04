/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var nums1 = [1, 2, 3, 0, 0, 0],
    m = 3;
var nums2 = [2, 5, 6],
    n = 3;
var merge = function(nums1, m, nums2, n) {
    var j = 0;
    let leng = nums1.length;
    for (let i = 0; i < m && m < ; i++) {
        console.log("i", i)
        console.log("j", nums2[j])
        if (nums1[i] < nums2[j]) {
            continue;
        } else {
            nums1.pop();
            nums1.splice(i, 0, nums2[j])
            j++;
            m++;
        }
    }
    console.log("m", m)
    console.log("j值", j)
    for (j; j < n; j++) {

        nums1.pop();
        nums1.splice(m++, 0, nums2[j]);
    }
    return nums1;
};
// nums1.pop();
// nums1.splice(1, 0, 9)
// console.log(nums1);
console.log(merge(nums1, m, nums2, n));