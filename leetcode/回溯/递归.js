/**
 * @param {string} S
 * @return {string[]}
 * @author qzj 
 * @data 2020-05-14
 */
var S = "a1b2c3";
let string = "12345";
var letterCasePermutation = function(S) {
    let ans = [];
    let reg1 = /[a-zA-Z]+/
    let reg = /[a-zA-Z]/

    if (!reg1.test(S)) {
        ans.push(S);
        return ans;
    }

    console.log('sfsd')

    function back(str, i) {
        if (i >= S.length) {
            ans.push(str);
        } else {
            let curr = S[i];
            if (reg.test(curr)) {
                let min = str + curr.toLowerCase();
                let max = str + curr.toUpperCase();
                back(min, i + 1);
                back(max, i + 1);
            } else {
                back(str + curr, i + 1);
            }
        }
    }
    back('', 0);
    return ans;

};
console.log(letterCasePermutation(string))