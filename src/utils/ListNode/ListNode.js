export default class ListNode {
    constructor(data, next) {
        this.data = data;           // 节点数据域
        this.prev = null;           // 节点指针域
        this.next = next || null;   // 节点指针域
        this.val = data;
    }
}