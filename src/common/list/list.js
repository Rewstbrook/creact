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
// 反转链表
export function reverseList(head) {
    if (!head || !head.next) {return head}
    let temp = null;
    let prev = null;
    let current = head;
    while (current) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}