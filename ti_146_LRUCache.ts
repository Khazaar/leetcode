class ListNodeDouble {
    pair: { key: number; val: number };
    next: ListNodeDouble | null;
    prev: ListNodeDouble | null;

    constructor(
        pair: { key: number; val: number },
        next?: ListNodeDouble | null,
        prev?: ListNodeDouble | null
    ) {
        this.pair = pair;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : prev;
    }
}
// crazy problem....
// similar ti the queue, but I can access element from the middle
// *repeat

class LRUCache {
    public capacity: number;
    public index;
    left: ListNodeDouble = new ListNodeDouble({ key: 0, val: 0 }); //least recently used
    right: ListNodeDouble = new ListNodeDouble({ key: 0, val: 0 }); //most recently used
    headKey: number | null = null;

    map = new Map<number, ListNodeDouble>();
    constructor(capacity: number) {
        this.capacity = capacity;
        this.index = 0;
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    get(key: number): number {
        let node = this.map.get(key);
        if (node != undefined) {
            this.remove(node);
            this.insert(node);
            return node.pair.val;
        } else return -1;
    }

    // remove from the list left
    remove(node: ListNodeDouble) {
        let n1 = node.prev;
        let n2 = node.next;
        n1!.next = n2;
        n2!.prev = n1;
    }

    // insert to the list right
    insert(node: ListNodeDouble) {
        let n1 = this.right.prev;
        n1!.next = node;
        node.prev = n1;
        node.next = this.right;
        this.right.prev = node;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node!.pair = { key: key, val: value };
            this.remove(node!);
            this.insert(node!);
            this.map.set(key, node!);
        } else {
            let node = new ListNodeDouble({ key: key, val: value });
            this.insert(node!);
            this.map.set(key, node!);
        }
        if (this.map.size > this.capacity) {
            let lru = this.left.next;
            this.remove(lru!);
            this.map.delete(lru?.pair.key!);
        }
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4
