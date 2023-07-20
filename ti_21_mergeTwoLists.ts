import { ListNode } from "./ti_141_LinkedList";
function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    let p1 = list1;
    let p2 = list2;
    while (true) {
        let val1 = p1?.val;
        let val2 = p2?.val;
        if (val1 == undefined && val2 == undefined) return dummyHead.next;
        if (val2 == undefined || val1! <= val2) {
            currentNode.next = new ListNode(val1);
            currentNode = currentNode.next;
            if (p1) p1 = p1?.next;
        } else {
            currentNode.next = new ListNode(val2);
            currentNode = currentNode.next;
            if (p2) p2 = p2?.next;
        }
    }
    return dummyHead.next;
}
function createLinkedListFromArray2(values: number[]): ListNode | null {
    if (values.length === 0) {
        return null;
    }
    const nodes: ListNode[] = values.map((val) => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    return nodes[0];
}

console.log(
    mergeTwoLists(
        createLinkedListFromArray2([1]),
        createLinkedListFromArray2([])
    )
);
