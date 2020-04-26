/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
// var matrix = [
//     [-1, 3]

// ];
/*第二种题解 
 *1.从数组的右上角开始 因为该值为一行最大值
 *2.比较大小然后 小就在此行的下一个， 大就在下一行找，以此类推
 */

var findNumberIn2DArray = function(matrix, target) {
    if (matrix[0].length == 0)
        return false;
    var j = 0;
    i = matrix[0].length;
    while (j < matrix.length && i >= 0) {
        if (target == matrix[j][i]) {
            return true;
        } else {
            if (target > matrix[j][i]) {
                j++;
                continue;
            } else {
                i--;
                continue;
            }
        }
    }
    return false;

    //console.log(i, j);

    //第一种解法
    /*for (var j = 0; j < matrix.length; j++) {
        // for (var i = 0; i < matrix[0].length; i++) {
        //     if (target == matrix[j][i]) {
        //         return true;
        //     }

        // }
        if (matrix[j].includes(target)) {
            return true;
        }
    }
    return false;*/
};

console.log(findNumberIn2DArray(matrix, 300));
//console.log(matrix[1].length);
console.log(matrix.length);