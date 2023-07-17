import ListNode from "../../utils/ListNode/ListNode";
// 删除链表元素
export function removeElement(head, val) {
    const ret = new ListNode(0, head);
    let currentNode = ret;
    while (currentNode.next) {
        if (currentNode.next.data == val) {
            currentNode.next = currentNode.next.next;
            continue;
        }
        currentNode = currentNode.next;
    }
    return ret.next;
}
// 原链表直接删除
export function removeElement1(head, val) {
    // 删除头部节点
    if (head !== null && head.val == val) {
        head = head.next;
    }
    if (head == null) return head;
    let pre = head;
    let current = head.next;
    while (current) {
        if (current.val == val) {
            pre.next = current.next;
        } else {
            pre = pre.next;
        }
        current = current.next;
    }
    return head;
}
export function removeElement2(head, val) {
    // 添加虚拟节点
    const dummyNode = new ListNode(0, head);
    let pre = dummyNode;
    let current = dummyNode.next;
    while (current) {
        if (current.val == val) {
            pre.next = current.next;
        } else {
            pre = current;
        }
        current = pre.next;
    }
    return dummyNode;
}
// 反转链表--双指针
export function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    let temp = null;
    let pre = null;
    let current = head;
    while (current) {
        temp = current.next;
        current.next = pre;
        pre = current;
        current = temp;
    }
    return pre;
}
// 反转链表--递归1
export function reverse(pre, head) {
    if (!head) {
        return pre;
    }
    const temp = head.next;
    head.next = pre;
    pre = head;
    return reverse(pre, head);
}
export function reverseList1(head) {
    return reverse(null, head);
}
// 反转链表--从后往前反转
var reverse = function(head) {
    if(!head || !head.next) return head;
    // 从后往前翻
    const pre = reverse(head.next);
    head.next = pre.next;
    pre.next = head;
    return head;
}

var reverseList = function(head) {
    let cur = head;
    while(cur && cur.next) {
        cur = cur.next;
    }
    reverse(head);
    return cur;
};

// leetcode-24两两翻转链表节点
export function swapPairs(head) {
    let dummyNode = new ListNode(0, head);
    let current = dummyNode;
    while (temp.next && temp.next.next) {
        let temp = current.next;
        let temp1 = current.next.next.next;


        current.next = current.next.next;
        current.next.next = temp;
        temp.next = temp1;

        current = current.next.next;

    }
    return dummyNode.next;
}
