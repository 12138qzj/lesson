/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];
var buildTree = function(preorder, inorder) {
    let i = 0;
    let leng = preorder.length;

    let node = preorder[0] != null ? new TreeNode(preorder[0]) : null;

    if (leng > 1) {
        while (inorder[i] != preorder[0] && i < leng) {
            i++;
        }
        //  console.log(preord.slice(pos + 1, i + 1), inord.slice(pos, i))

        node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
        node.right = buildTree(preorder.slice(i + 1, leng), inorder.slice(i + 1, leng));
    }
    return node;

};

console.log(preorder.slice(0, 2))
let a = [];
if (a[0])
    console.log("null")