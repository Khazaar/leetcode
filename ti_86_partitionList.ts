import { ListNode } from "./ti_141_LinkedList";
import { createLinkedListFromArray2 } from "./ti_92_reverseBetween";

function partition(head: ListNode | null, x: number): ListNode | null {
    let lDummyHead = new ListNode();
    let rDummyHead = new ListNode();
    let l = lDummyHead;
    let r = rDummyHead;
    let p = head;
    while (p != null) {
        if (p.val < x) {
            l.next = new ListNode(p.val);
            l = l.next;
            p = p.next;
        } else {
            r.next = new ListNode(p.val);
            r = r.next;
            p = p.next;
        }
    }
    r.next = null;
    l.next = rDummyHead.next;
    return lDummyHead.next;
}

console.log(partition(createLinkedListFromArray2([1, 4, 3, 2, 5, 2]), 3));
