/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {


    let tempnode;

    function helper(node) {
        if (node) {
            if (node.left != null && node.right != null) {
                tempnode = node.right;
                node.right = node.left;
                node.left = tempnode;
            }
            if (node.left == null && node.right != null) {


                node.right = node.left;
                node.left == null;
            }
            if (node.left != null && node.right == null) {

                node.left = node.right;
                node.right == null;

            }
            // arr.push(val);
            helper(node.left);
            helper(node.right)
        }
    }
    helper(root);
    return root;

};