class LinkNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

export default class MyLinkedList2 {
    constructor() {
        this.start = null
        this.length = 0
    }
    toArray() {
        let current = this.start;// 对链表当前元素的引用，默认为链表第一个元素
        let array = []; //接收元素值变量
        // 检查current是否存在
        while (current) {
            // 存在则添加到数组中
            array.push(current.val);
            // 把current引用改为下一个链表元素
            current = current.next;
        }
        // 把最终生成的链表元素通过数组方式返回
        return array;
    }
    get(index) {
        if (index < 0 || index >= this.length) return -1
        let current = this.start
        while (0 < index) {
            current = current.next
            index--
        }
        return current ? current.val : -1
    }

    addAtHead(val) {
        let tempNode = new LinkNode(val)
        tempNode.next = this.start || null
        this.start = tempNode
        this.length = this.length ? ++this.length : 1
    }

    addAtTail(val) {
        let tailNode = new LinkNode(val)
        let tempNode = this.start
        while (tempNode && tempNode.next) {
            tempNode = tempNode.next
        }
        if (tempNode) {
            tempNode.next = tailNode
        } else {
            tempNode = tailNode
            this.start = tailNode
        }

        this.length = this.length ? ++this.length : 1
    }

    addAtIndex(index, val) {
        if (index <= 0) return this.addAtHead(val)
        if (index === this.length) return this.addAtTail(val)
        if (index > this.length) return

        let addNode = new LinkNode(val)
        let cur = this.start

        while (index-- > 1) {
            cur = cur.next
        }
        addNode.next = cur.next
        cur.next = addNode
        this.length++
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return
        if (index) {
            let i = 1
            let cur = this.start
            while ((index - 1) >= i) {
                cur = cur.next
                i++
            }
            if (cur && cur.next) {
                cur.next = cur.next.next
            }
            this.length--

        } else {
            this.start = this.start.next
            this.length--
        }
    }

}