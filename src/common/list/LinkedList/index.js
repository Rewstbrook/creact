/**
 * leetcode-707 设计链表
 */
class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next == undefined ? null : next;
    }
}
export default class MyLinkedList {
    // 单链表，储存头节点尾节点和数量
    constructor() {
        this.size = 0;
        this.head = new LinkNode(0);
    }
    get(index) {
        if (index < 0 || index > this.size) {
            return -1;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }
    /**
     * @description 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
     * @param {*} val 
     */
    addAtHead(val) {
        const newNode = new LinkNode(val, this.head);
        this.head = newNode;
        this.size++;
    }
    /**
     * @description 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
     * @param {*} val 
     */
    addAtTail(val) {
        const newNode = new LinkNode(val, null);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    /**
     * @description 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，
     * 那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
     * @param {*} index 
     * @param {*} val 
     * @returns 
     */
    addAtIndex(index, val) {
        if (index <= 0) {
            const newNode = new LinkNode(val, this.head);
            this.head = newNode;
            this.size++;
            return;
        }
        let currentNode = this.head;
        console.log(currentNode)
        while (index > 0) {
            currentNode = currentNode.next;
            index--;
        }
        currentNode.next = new LinkNode(val, currentNode.next);
        this.size++;
    }
    /**
     * @description 如果下标有效，则删除链表中下标为 index 的节点。
     * @param {*} index 
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
        }
        const preDeleteNode = this.get(index - 1);
        preDeleteNode.next = preDeleteNode.next.next;
        this.size--;
    }
}



MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    }
    index = Math.max(0, index);
    this.size++;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
        pred = pred.next;
    }
    let toAdd = new ListNode(val);
    toAdd.next = pred.next;
    pred.next = toAdd;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    this.size--;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
        pred = pred.next;
    }
    pred.next = pred.next.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}