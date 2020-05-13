/**
 * @param {string} S
 * @return {string[]}
 */
var S = "a1b2";
var letterCasePermutation = function(S) {
    let ans = [];
    let reg = /[a-zA-Z]/

    function backtrack(str, i) {
        if (i >= S.length) {
            ans.push(str);
            return;
        }
        console.log(ans)
        let curr = S[i];
        if (reg.test(curr)) {
            let low = str + curr.toLowerCase(),
                high = str + curr.toUpperCase();
            backtrack(low, i + 1);
            backtrack(high, i + 1);
        } else {
            backtrack(str + curr, i + 1);
        }
    }
    backtrack('', 0);

    return ans;
};
console.log(letterCasePermutation(S))