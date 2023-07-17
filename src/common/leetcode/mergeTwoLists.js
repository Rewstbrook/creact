/**
 * @description 合并两个有序链表
 */
import ListNode from "../../utils/ListNode/ListNode";
export function mergeTwoLists(list1, list2) {
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    while (list1 && list2) {
        console.log(list1)
        let val1 = list1 ? list1.val : 0;
        let val2 = list2 ? list2.val : 0;
        if (val1 >= val2) {
            cur.next = new ListNode(val2);
            list2 = list2.next;
        } else {
            cur.next = new ListNode(val1);
            list1 = list1.next;
        }
        cur = cur.next;
    }
    if (!list1) {
        cur.next = list2;
        cur = cur.next;
    }
    if (!list2) {
        cur.next = list1;
        cur = cur.next;
    }
    cur.next = null;
    return dummyHead.next;
}