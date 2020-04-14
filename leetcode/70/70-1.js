/**
 * @author qzj
 * @date 2020-4-14
 * @function 爬楼梯算法
 * @param {@type number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if (n >= 42) throw new Error(' 内存溢出');
    if (n == 1) return 1;
    if (n == 2) return 2;
    let ret = 0,
        pre = 1,
        preh = 2;
    for (let i = 3; i <= n; i++) {
        ret = pre + preh;
        pre = preh;
        preh = ret
    }
    return ret;
};