/**
 * @param {string} s
 * @return {number}
 * @author qzj
 * @date 2020-05-03
 */
var str = "())()()(()";
var longestValidParentheses = function(s) {
    var stack = [-1];
    var max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length < 1) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
}
console.log(longestValidParentheses(str))