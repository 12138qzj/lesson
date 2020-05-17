/**
 * @param {string} digits
 * @return {string[]}
 * @author qzj
 * @data 2020-05-16
 * 
 */

var pre = ['a', 'b', 'c'];
var pre2 = ['d', 'e', 'f'];
var newpre = [];

var obj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}
var letterCombinations = function(digits) {
    // let leng = digits.length;
    // let oldelement = [];
    // let newelement = [];
    // let digitsleng = 0;
    // if (leng == 0) {
    //     return newelement;
    // }

    // backtrack(oldelement, '');

    /**
     * 将上一次匹配好的 和需要加入的  放入回调函数中
     * 让函数做匹配添加功能
     * 判断匹配的长度是否等于digits的长度 退出递归;
     */
    //function backtrack(pre, str) {
    // console.log(pre.length)

    // //  let k = 0;
    // if (pre.length == 0) {
    //     [...obj[digits[digitsleng]]]
    //     .filter(item => {
    //         newelement.push(item);
    //     })
    //     oldelement = newelement;
    //     console.log("dsfg", oldelement);

    //     newelement = [];
    //     digitsleng++;
    //     console.log("dsfgle", digits[digitsleng]);
    //     if (digitsleng == leng) {
    //         return;
    //     } else
    //         backtrack(oldelement, obj[digits[digitsleng]])
    // } else {
    //     console.log("else", str, pre);


    //     for (let j = 0; j < str.length; j++) {
    //         pre.filter(item => {
    //             newelement.push(item + str[j]);
    //         });
    //     }

    //     oldelement = newelement;
    //     console.log("else", oldelement);

    //     newelement = [];
    //     digitsleng++;
    //     if (digitsleng == leng) {
    //         return;
    //     } else
    //         backtrack(oldelement, obj[digits[digitsleng]])
    // }
    //}
    // return oldelement;


    let oldarr = []
    if (digits.length == 0) return result;
    let obj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    for (let code of digits) {
        //console.log(code)
        let word = obj[code]
        if (oldarr.length > 0) {
            let newarr = []
            for (let char of word) {
                oldarr.filter(item => {
                    newarr.push(item + char)
                })
            }
            oldarr = newarr
        } else {
            oldarr.push(...word)
        }
    }
    return oldarr
}





// function tg(pre, dig) {
//     let i = 0;
//     pre.filter(element => {
//         //console.log('element', element + pre2[i]);
//         newelement.push(element + pre2[i++])
//             // return element + pre2[i];
//     })
// }

// letterCombinations('23')
console.log(letterCombinations('232'));