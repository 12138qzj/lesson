/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    let max = 0;

    function depth(node, num) {
        if (node) {
            num++;
            max = num > max ? num : max;
            depth(node.left, num);
            depth(node.right, num);
        }
    }
    depth(root, 0)
    return max;

};