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
    function ListNode(val) {
        this.val = val;
        this.next = null;

    }
    var node1 = new ListNode(5);
    // var temp = new ListNode(3);
    //node1.next = temp; temp.next 
    //var temp2 = new ListNode(6)
    //node1.next = temp;
    //temp.next = temp2;

    //console.log("node1", node1);

    var node2 = new ListNode(5);
    //temp = new ListNode(8);
    //node2.next = temp;
    //temp.next = new ListNode(4)

    // temp = node2;
    // console.log("temp", temp);
    // var string = '';

    //if (temp.val !== null) {
    // do {
    //     string = string + temp.val;
    //     temp = temp.next;

    // } while (temp) {}

    //console.log("string", string);
    var addTwoNumbers = function(l1, l2) {

        var temp1 = l1;
        var temp2 = l2;
        var result;
        console.log("size", l1);
        result = l1;


        var shiwei = 0;
        var temp;
        console.log("temp1", temp1);
        console.log("temp2", temp2);

        var bool = true;
        do {

            console.log(temp1, temp2);
            if (temp1 !== null && temp2 !== null) {
                console.log("8955565");
                var num = temp1.val + temp2.val;
            } else if (temp1 === null && temp2 !== null) {
                console.log("dwefre");
                var num = 0 + temp2.val;
            } else if (temp1 !== null && temp2 === null) {
                console.log("第三次");
                var num = temp1.val + 0;
            }
            console.log("num", num);
            var numend = num;
            if (num >= 10) {
                num = num - 10;
                shiwei++;
                result.val = num;
                temp = result;
                result = result.next;
            } else {
                num = num + shiwei;
                shiwei = 0;
                result.val = num;
                temp = result;
                result = result.next;
            }

            if (temp1 !== null && temp2 !== null) {
                console.log("8955565");
                temp1 = temp1.next;
                temp2 = temp2.next;

            }
            if (temp1 === null && temp2 !== null) {
                console.log("dwefre");
                //temp2 = temp2.next;
                bool = false;
            }
            if (temp1 !== null && temp2 === null) {
                console.log("第三次");
                //temp1 = temp1.next;
                bool = false;
            }
            if (temp1 === null && temp2 === null) {
                console.log("出去");
                bool = false;
            }

        }
        while (bool) {

            console.log("第一结束");
            if (numend >= 10) {

                // console.log(end);
                // console.log(result);
                // console.log("l1", l1);
                // result = end;
                // console.log(result);

                if (temp2 === null && temp1 === null) {
                    var end = new ListNode(1);
                    temp.next = end;
                }


                if (temp2 !== null) {
                    var end = new ListNode(temp2.val + 1);
                    temp.next = end;
                    temp = end;
                    temp2 = temp2.next;
                }
                if (temp1 !== null) {
                    var end = new ListNode(temp1.val + 1);
                    temp.next = end;
                    temp = end;
                    temp1 = temp1.next;
                }


                if (temp2 !== null) {
                    var end = new ListNode(temp2.val + 1);
                    temp.next = end;
                    temp = end;
                    do {
                        var end = new ListNode(temp2.val);
                        temp.next = end;
                        temp = end;
                        temp2 = temp2.next;
                    } while (temp2) {
                        console.log("第2结束");
                        return l1;
                    }

                }
                if (temp1 !== null) {
                    do {
                        var end = new ListNode(temp1.val);
                        temp.next = end;
                        temp = end;
                        temp2 = temp1.next;
                    } while (temp2) {
                        console.log("第2结束");
                        return l1;
                    }

                }
                return l1;
            }


            if (temp2 !== null) {
                do {
                    var end = new ListNode(temp2.val);
                    temp.next = end;
                    temp = end;
                    temp2 = temp2.next;
                } while (temp2) {
                    console.log("第2结束");
                    return l1;
                }

            }
            if (temp1 !== null) {
                do {
                    var end = new ListNode(temp1.val);
                    temp.next = end;
                    temp = end;
                    temp2 = temp1.next;
                } while (temp2) {
                    console.log("第2结束");
                    return l1;
                }

            }

        }

        //return l1;

    };

    console.log("add", addTwoNumbers(node2, node1));



}
new LinkedList();