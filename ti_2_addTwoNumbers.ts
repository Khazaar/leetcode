import { ListNode } from "./ti_141_LinkedList";

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let h1 = l1;
    let h2 = l2;
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    let carrier = 0;
    while (h1 != null || h2 != null) {
        let n1 = h1 != null ? h1.val : 0;
        let n2 = h2 != null ? h2.val : 0;
        let sum = n1 + n2 + carrier;
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;
        carrier = Math.floor(sum / 10);
        if (h1 != null) h1 = h1.next;
        if (h2 != null) h2 = h2.next;
    }
    if (carrier > 0) currentNode.next = new ListNode(carrier);
    return dummyHead.next;
}

function addTwoNumbersWrong(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const number1 = listToNumber(l1);
    const number2 = listToNumber(l2);
    const res = numberToList(number1 + number2);
    return res;
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

const listToNumber = (list: ListNode | null) => {
    if (list == null) return 0;
    let order = 0;
    let res = 0;
    let node = list;
    while (node != null) {
        res = res + node.val * Math.pow(10, order);
        if (node.next == null) return res;
        node = node.next;
        order++;
    }
    return res;
};

const numberToList = (num: number): ListNode => {
    if (num == 0) return new ListNode(0);
    let head = new ListNode(num % 10);
    let remainder = Math.floor(num / 10);
    let currentNode = head;
    while (remainder > 0) {
        currentNode.next = new ListNode(remainder % 10);
        remainder = Math.floor(remainder / 10);
        currentNode = currentNode.next;
    }
    return head;
};
const numberToArray = (num: number) => {
    let remainder = num;
    let list = new ListNode();
    let res: number[] = [];
    while (remainder > 0) {
        res.push(remainder % 10);
        remainder = Math.floor(remainder / 10);
    }
    return res;
};

console.log(
    addTwoNumbers(
        createLinkedListFromArray2([2, 4, 3]),
        createLinkedListFromArray2([5, 6, 4])
    )
);

// console.log(
//     addTwoNumbers(
//         createLinkedListFromArray2([
//             1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 1,
//         ]),
//         createLinkedListFromArray2([5, 6, 4])
//     )
// );
