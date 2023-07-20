import { ListNode } from "./ti_141_LinkedList";
import { createLinkedListFromArray2 } from "./ti_92_reverseBetween";

// Two pointers!!!

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head == null) return null;
    let i = 1;
    let map = new Map<number, ListNode>();
    let p1: ListNode | null = head;

    while (p1 != null) {
        map.set(i, p1);
        p1 = p1.next;
        i++;
    }
    if (i - 1 == n) {
        //treat removing head
        head = head?.next;
        return head;
    }
    if (map.get(i - 1 - n) != undefined)
        map.get(i - 1 - n)!.next = map.get(i - 1 - n + 2) || null; // treat removing last element
    return head;
}

//console.log(removeNthFromEnd(createLinkedListFromArray2([1, 2, 3, 4, 5]), 5));
console.log(removeNthFromEnd(createLinkedListFromArray2([1, 2]), 1));
