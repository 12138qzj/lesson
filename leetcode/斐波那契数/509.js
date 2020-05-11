/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N == 0) {
        return 0
    }
    if (N == 1) {
        return 1;
    }
    let pre = 0,
        preh = 1,
        result = 0;
    for (let i = 2; i <= N; i++) {
        result = pre + preh;
        pre = preh;
        preh = result;
    }
    return result;
};
console.log(fib(6));