import { ListNode } from "./ti_141_LinkedList";
import { createLinkedListFromArray2 } from "./ti_92_reverseBetween";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let l: ListNode | null = dummyHead;
    let r: ListNode | null = head;

    while (r != null) {
        if (r?.val != r?.next?.val) {
            l = l?.next!;
            r = r?.next!;
        } else {
            while (r.val == r.next?.val) r = r?.next!;
            l.next = r.next;
            r = r.next;
        }
    }
    return dummyHead.next;
}

console.log(
    deleteDuplicates(createLinkedListFromArray2([1, 2, 3, 3, 4, 4, 5]))
);
