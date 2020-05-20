/**
 * @param {string} s
 * @return {boolean}
 */

var str = "abca";
var validPalindrome = function(s) {

    let leng = s.length;
    //let bool = 0;
    if (leng < 2)
        return true;
    // let bool;
    let start = 0,
        end = leng - 1;




    while (start < end) {
        // 不相等，删除其中一个，再判断剩下的是否是回文串
        if (s[start] != s[end]) {
            return isPali(start + 1, end) || isPali(start, end - 1)

        }
        start++
        end--

    }


    function isPali(start1, end1) {
        while (start1 < end1) {
            if (s[start1] != s[end1]) {

                return false

            }
            // 指针挪动，相互逼近
            start1++;
            end1--;
        }
        return true;
    }
    return true;
};

// 判断回文串


// if (bool < 2) {

//     console.log("bool", bool)
//     return true;

// } else {
//     console.log("bool", bool)
//     return false;


// }



console.log(validPalindrome(str))
var s = "asdfg";

var a = [...s]
console.log(a)
console.log(s)

console.log(4 % 2)