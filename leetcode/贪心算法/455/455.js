/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const g = [1, 2, 5, 6, 7, 8];
const s = [2, 3, 4];
var findContentChildren = function(g, s) {
    var j = 0,
        i = 0,
        count = 0;
    while (j < g.length && i < s.length) {
        if (g[j] <= s[i]) {
            count++;
            i++;
            j++;
        } else {
            i++
        }
    }
    return count;
    // console.log(g)
    // g = g.sort((a, b) => a - b);
    // s = s.sort((a, b) => a - b);
    // var gLen = g.length;
    // var sLen = s.length;
    // var i = 0;
    // var j = 0;
    // var maxNum = 0;
    // while (i < gLen && j < sLen) {
    //     if (s[j] >= g[i]) {
    //         i++;
    //         j++;
    //         maxNum++;
    //     } else {
    //         j++;
    //     }
    // }
    // return maxNum;
};

console.log(g.length);

console.log(findContentChildren(g, s));
//排序函数
/*console.log(g.sort((a, b) => {

    console.log(a, b)

    return a - b;
}))*/