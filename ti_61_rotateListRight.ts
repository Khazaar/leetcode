import { ListNode } from "./ti_141_LinkedList";
import { createLinkedListFromArray2 } from "./ti_92_reverseBetween";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head == null) return null;
    if (k == 0) return head;
    let l: ListNode | null = head;
    let r: ListNode | null = head;
    let len = 1;

    while (r.next != null) {
        r = r?.next;
        len++;
    }
    r = head;
    k = k % len;

    for (let i = 0; i < k; i++) {
        if (r?.next != null) r = r?.next;
        else r = head;
    }
    while (r?.next != null) {
        if (l != undefined) l = l?.next;
        if (r != undefined) r = r?.next;
    }
    if (l?.next != null) {
        let newHead = l.next;
        l!.next = null;
        r!.next = head;
        return newHead!;
    } else {
        return head!;
    }
}

//console.log(rotateRight(createLinkedListFromArray2([1, 2, 3, 4, 5]), 2));
console.log(rotateRight(createLinkedListFromArray2([0, 1, 2]), 4));
//console.log(rotateRight(createLinkedListFromArray2([1]), 1));
