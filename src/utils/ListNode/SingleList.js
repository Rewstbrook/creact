import ListNode from "./ListNode";
export class SingleList {
    constructor() {
        this.size = 0;
        this.head = new Node("head");
        this.currNode = "";
    }
    isEmpty() {
        return this.size == 0;
    }
    // 在单链表中寻找item元素
    // 从头节点开始遍历，只要当前节点data不等于item，就一直往下遍历
    find(item) {
        let currentNode = this.head;    
        while (currentNode && (currentNode.data != item)) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    // 向单链表中插入元素
    insert(element, item) {
        let itemNode = this.find(item);
        // 如果item元素不存在
        if (!itemNode) {
            return
        }
        let newNode = new ListNode(element);
        newNode.next = itemNode.next;
        itemNode.next = newNode;
        this.size++;
    }
    // 在单链表中删除节点
    remove(item) {
        let itemNode = this.find(item);
        if (!itemNode) {
            return;
        }
        // 删除头节点
        if (itemNode === 'head') {
            if (!this.isEmpty()) {
                return;
            } else {
                this.head.next = null;
                return;
            }
        }
        let currNode = this.head;
        while (currNode.next.data != item) {
            // 删除不存在的节点
            if (!itemNode.next) {
                return;   
            }
            currNode = currNode.next;
        }
        currNode.next = currNode.next.next;
        this.size--;
    }
    // 获取单链表的最后一个节点
    // 只要当前节点的next指针不为空就一直向下遍历，直到当前节点的next为空时即是最后一个节点了。
    findLast() {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    // 在单链表的尾部添加元素
    append(element) {
        let currentNode = this.findLast();
        let newNode = new ListNode(element);
        currentNode.next = newNode;
        this.size++;
    }
    // 显示当前节点
    show() {
        return this.currNode.data;
    }
    // 获取单链表的长度
    getLength() {
        return this.size;
    }
    // 从当前节点向前移动n个位置
    advance(n, currNode = this.head) {
        this.currNode = currNode;
        while ((n--) && this.currNode.next) {
            this.currNode = this.currNode.next;
        }
        return this.currNode;
    }
    // 单链表的遍历显示
    display() {
        let result = "";
        let currNode = this.head;
        while (currNode) {
            result += currNode.data;
            currNode = currNode.next;
        }
        return result;
    }
    // 清空单链表
    clear() {
        this.size = 0;
        this.head.next = null;
    }
}