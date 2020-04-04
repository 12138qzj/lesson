/*给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function LinkedList() {
    this.val;
    this.next;

    var Node = function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    var head = null;
    var tail = null;
    this.length = 0;

    this.append = function(val) {
        var node = new Node(val);
        var temp;
        if (!head) {
            head = node;
            tail = node;
            console.log(node.val);
        } else {
            tail.next = node;
            tail = node;
            console.log(node.val);
        }
        this.length++;
    }
    this.toString = function() {
        var temp;
        temp = head;
        var string = '';

        if (temp.val !== null) {
            do {
                string = string + temp.val;
                temp = temp.next;
            } while (temp.next) {}

        }

        return string;
    }
}
var addTwoNumbers = function(l1, l2) {

};
var arr = new LinkedList();

arr.append(1);
arr.append(2);
arr.append(2);
arr.append(2);
arr.append(2);
console.log(arr.length);
console.log(arr.toString());