/**
 * @param {string} s
 * @return {number}
 * @author qzj
 * @date 2020-05-03
 */
var str = "())()()(()";
var longestValidParentheses = function(s) {
    // var sum = 0;
    // var count = 0;
    // var result = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == "(") {
    //         sum++;
    //     } else if (s[i] == ")" && sum > 0) {
    //         sum--;
    //         count += 2;
    //     } else if (s[i] == ")" && sum <= 0) {
    //         if (count > result) {
    //             result = count;
    //             count = 0;
    //         }
    //     } else {
    //         console.log('count', count);
    //     }
    // }
    // console.log('countr', count);

    // var suml = 0;
    // var countl = 0;
    // var resultl = 0;
    // for (let j = s.length - 1; j >= 0; j--) {
    //     if (s[j] == ")") {
    //         suml++;
    //     } else if (s[j] == "(" && suml > 0) {
    //         suml--;
    //         countl += 2;
    //     } else if (s[j] == "(" && suml <= 0) {
    //         if (countl > resultl) {
    //             resultl = countl;
    //             countl = 0;
    //         }
    //     } else {
    //         console.log('countll', countl);
    //         console.log('sunl', suml);
    //         console.log('resultl', resultl)
    //     }
    // }


    // let left = result < count ? count : result;
    // let right = resultl < countl ? countl : resultl
    // console.log("right", resultl < countl ? countl : resultl);
    // console.log("left", result < count ? count : result);

    // return left < right ? left : right;
    var stack = [];

    var max = 0;

    if (s.length == 0 || s.length == 1) return 0;

    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        let taxmax = 0;
        for (let j = i; j < s.length; j++) {
            if (s[j] == '(') {
                //stack.push()
                sum++;
                taxmax++;
            } else {
                // "())()()(()"
                if (sum < 1) {
                    max = max < taxmax ? taxmax : max;
                    break;

                } else {
                    sum--;
                    taxmax++;
                }
                console.log("taxmax", taxmax)
            }
        }
        console.log("taxmax11", taxmax)
        if (sum == 0) {
            max = max < taxmax ? taxmax : max;
        }
        //sum = 0; //清除本次循环
        console.log(i, s[i], max)
    }

    return max;
};
console.log(longestValidParentheses(str))