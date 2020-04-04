function LinkedList() {
    //Node类表示要加入列表的项
    var Node = function(element) {
        this.element = element; //要添加到链表的值
        this.next = null; //指向链表中下一个节点的值
    }
    var length = 0; //链表项的数量
    var head = null; //存储第一个节点的引用

    //向链表尾部追加元素
    this.append = function(element) {
        var node = new Node(element); //创建一个Node项
        var current;

        if (head === null) { //如果head元素为null,意味着向链表添加第一个元素
            head = node;
        } else {
            current = head;
            while (current.next) { //从链表的起点开始迭代，当current.next为null时，已经到达链表的尾部 // 不为空则等于下一个链结点
                current = current.next;
            }
            current.next = node; //将新创建的node添加到链表的尾部
        }
        length++;
    }

    //从链表中移除固定位置的元素
    this.removeAt = function(position) {
        if (position >= 0 && position <= length) { //验证位置是否有效
            var index = 0;
            var previous;
            var current = head; //用current变量创建链表的第一个元素引用
            if (position === 0) {
                head = current.next; //想要移除第一个元素，就让head指向第二个元素
            } else {
                while (index++ < position) { //迭代直到目的节点
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next; //将previous与current的下一项链接起来：跳过current，从而移除它
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }

    //在任意位置插入一个元素
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) { //检查是否越界 
            var node = new Node(element); //创建一个node节点
            var index = 0;
            var previous;
            var current = head;
            if (position === 0) { //在第一个位置添加 
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++; //更新链表长度 
            return true;
        } else {
            return false; //如果越界返回false 
        }
    };

    //将Linkedlist对象转换为字符串
    this.toString = function() {
        var current = head;
        var string = '';
        while (current) { //检查元素是否存在
            string += ',' + current.element;
            current = current.next;
        }
        return string.slice(1);
    }

    //找到元素的索引
    this.indexOf = function(element) {
        var current = head;
        var index = 0;

        while (current) { //检查元素是否存在
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    //实现了indexOf方法后可以根据元素的值来移除元素removeAt()
    this.remove = function(element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.size = function() {
        return length;
    }

    this.getHead = function() {
        return head;
    }
}
var arr = new LinkedList();
arr.append(1);
arr.append(2);
arr.append(3);
arr.insert(2, 9);
console.log(arr.toString() + '----------length：' + arr.size());
console.log(arr.toString());