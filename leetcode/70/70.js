/**
 * @author qzj
 * @date 2020-4-14
 * @function 爬楼梯算法
 * @param {@type number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n >= 42) throw new Error(' 内存溢出');
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
};
console.log(climbStairs(6))