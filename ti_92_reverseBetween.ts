import { ListNode } from "./ti_141_LinkedList";

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    let arr: number[] = [];
    let i = 1;
    let baseHead = head;
    let p1 = baseHead;
    while (i <= right) {
        if (i >= left) {
            arr.push(p1?.val!);
        }
        p1 = p1?.next!;
        i++;
    }
    i = 1;
    p1 = baseHead;
    while (i <= right) {
        if (i >= left) {
            p1!.val = arr[arr.length - (i - left) - 1];
        }
        p1 = p1?.next!;
        i++;
    }
    return baseHead;
}

export function createLinkedListFromArray2(values: number[]): ListNode | null {
    if (values.length === 0) {
        return null;
    }
    const nodes: ListNode[] = values.map((val) => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    return nodes[0];
}

console.log(reverseBetween(createLinkedListFromArray2([1, 2, 3, 4, 5]), 2, 4));
