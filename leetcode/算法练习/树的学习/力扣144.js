/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

    let arr = [];

    function helper(node) {
        if (node) {

            // let val = node.val;
            //前序遍历  将数据拿出来
            arr.push(val);
            helper(node.left);
            helper(node.right)

            //中序遍历  将数据拿出来

            // helper(node.left);
            // arr.push(val);
            // helper(node.right)

            //后序遍历  将数据拿出来

            // helper(node.left);
            // helper(node.right)
            // arr.push(val);
        }
    }
    helper(root);
    return arr;
};