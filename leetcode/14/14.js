/**
 * @param {string[]} strs
 * @return {string}
 */
var strs = ["flower", "flow", "flight"];
var strs1 = ["dog", "racecar", "car"];
var strs2 = [""];
var strs3 = ["ca", "ca"];
var length = 0;
var longestCommonPrefix = function(strs) {
    // var i = 0;
    // while ((strs[0][i] == strs[1][i]) && (strs[1][i] == strs[2][i])) {
    //     i++
    // }
    if (strs.length == 0)
        return "";
    else if (strs.length == 1) {
        console.log("len", strs.length)
        return strs[0];
    } else {
        for (var i = 0; i < strs[0].length; i++) {
            for (var j = 1; j < strs.length; j++) {
                if (strs[0][i] == strs[j][i]) {
                    console.log("ture", j)
                } else {
                    length = i;
                    console.log(j)
                    return strs[0].slice(0, length)
                }
            }
        }
        return strs[0];
    }
    //return strs[0].slice(0, i)
};

console.log(strs[0].length);

console.log("----", longestCommonPrefix(strs3));