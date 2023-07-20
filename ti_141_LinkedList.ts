export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

//Floyd's cycle-finding algorithm,

function createLinkedListFromArray(
    values: number[],
    pos: number
): ListNode | null {
    if (values.length === 0) {
        return null;
    }
    const nodes: ListNode[] = values.map((val) => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    // Create cycle
    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    return nodes[0];
}

function hasCycle(head: ListNode | null): boolean {
    if (head == null) return false;
    else {
        let sP: ListNode | null = head;
        let fP: ListNode | null = head.next;
        while (fP != null && fP.next != null) {
            sP = sP!.next;
            fP = fP!.next.next;
            if (sP == fP) return true;
        }
    }
    return false;
}

console.log(createLinkedListFromArray([3, 2, 0, -4], 1));
