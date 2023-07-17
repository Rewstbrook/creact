import ListNode from "../../utils/ListNode/ListNode";
export function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let result = dummyHead;
    let carry = 0;
    while (l1 || l2) {
        let curval1 = l1 ? l1.val : 0;
        let curval2 = l2 ? l2.val : 0;
        let sum = curval1 + curval2 + carry;
        // 进位只能进1
        carry = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        result.next = new ListNode(sum);
        result = result.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // 如果最终进位值为1,需要在末尾补一个listNode，值为1
    if (carry == 1) {
        result.next = new ListNode(1);
    }
    return dummyHead.next;
}