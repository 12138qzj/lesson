/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

    let arr = [];
    let tem = [];

    function helper(node, temp, num) {
        if (num < sum && node) {
            // let temp = [];
            num += node.val;
            temp.push(node.val);
            if (num == sum && node.left == null && node.right == null) {
                arr.push(temp)
            }
            // arr.push(val);
            helper(node.left, temp.slice(0), num);
            helper(node.right, temp.slice(0), num)
        }
    }
    helper(root, tem, 0);
    return arr;

};
var a = [

];
var temp = [];

a[1].push("ad");
a[2].push("ad");

console.log(a)
console.log(pathSum, 22)