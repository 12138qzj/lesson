/**
 * @param {string} s
 * @return {string}
 */
var str = "b"
var longestPalindrome = function(s) {

    let leng = s.length;
    if (leng < 2) return s;
    // if (leng == 2) {
    //     return s[0] == s[1] ? s : s[0]
    // }
    let max = '';
    let left, right, center;
    for (let i = 0; i < leng - 1; i++) {
        center = i;
        left = i - 1;
        right = i + 1;
        // if (s[left] == s[right]) {
        //     var one = iscompare(left, right)
        // }
        // if (s[left] == s[center]) {
        //     right = center;
        //     var two = iscompare(left, right)

        // }
        let one = iscompare(left, right);
        let two = iscompare(center, right)
            // console.log(one.content.length > two.content.length ? one : two)

        let temp = one.length > two.length ? one : two
        if (max.length < temp.length)
            max = temp;
        // return one.content.length > two.content.length ? one : two
        // if (s[center] == s[right]) {
        //     left = center;
        //     var three = iscompare(left, right)

        // }

        // console.log(Math.max(one.length, two.length, three.length))
        // if ((max.right - max.left) < (right - left)) {
        //     max.right = right;
        //     max.left = left;
        // }
        //   console.log(max.right, max.left, right, left)
    }

    function iscompare(l, r) {

        while (s[l] == s[r] && l > -1 && r < leng) {
            console.log(r, l)
            l--;
            r++;
        }
        l++;
        r--;
        // return { left: l, right: r, content: s.slice(l, r + 1) }
        return s.slice(l, r + 1);

    }
    return max

};
console.log(longestPalindrome(str))