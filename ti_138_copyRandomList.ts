class Node1 {
    val: number;
    next: Node1 | null;
    random: Node1 | null;
    constructor(val?: number, next?: Node1, random?: Node1) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

// 2 pass algorithm

function copyRandomList(head: Node1 | null): Node1 | null {
    let deepCopyDummyHead = new Node1(0);
    let p2 = deepCopyDummyHead;
    let map = new Map<Node1, Node1>();
    let p1 = head;
    while (p1 != undefined) {
        p2.next = new Node1(p1.val);
        p2 = p2.next;
        map.set(p1, p2);
        p1 = p1.next;
    }
    p1 = head;
    p2 = deepCopyDummyHead;
    while (p1 != undefined) {
        p2 = p2.next!;
        p2.random = map.get(p1.random!)!;
        p1 = p1.next;
    }
    return deepCopyDummyHead.next;
}

function createListFromData(data: [number, number | null][]) {
    let dummyHead = new Node1(0);
    let current = dummyHead;
    let nodes: Node1[] = [];

    // First pass: create all the nodes and set their values and next pointers
    for (let i = 0; i < data.length; i++) {
        let node = new Node1(data[i][0]);
        nodes.push(node);
        current.next = node;
        current = current.next;
    }

    // Second pass: set the random pointers
    for (let i = 0; i < data.length; i++) {
        let randomIndex = data[i][1];
        if (randomIndex !== null) {
            nodes[i].random = nodes[randomIndex];
        } else {
            nodes[i].random = null;
        }
    }

    return dummyHead.next;
}

let head = createListFromData([
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
]);
console.log(copyRandomList(head));
