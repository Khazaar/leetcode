class Trie {
    trie: TrieNode;
    constructor() {
        this.trie = new TrieNode();
    }

    insert(word: string): void {
        let currenNode = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!currenNode.children.has(word[i])) {
                currenNode.children.set(word[i], new TrieNode());
            }
            currenNode = currenNode.children.get(word[i])!;
        }
        currenNode.endOfWord = true;
    }

    search(word: string): boolean {
        let currenNode = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (currenNode.children.has(word[i])) {
                currenNode = currenNode.children.get(word[i])!;
            } else return false;
        }
        return currenNode.endOfWord == true;
    }

    startsWith(prefix: string): boolean {
        let currenNode = this.trie;
        for (let i = 0; i < prefix.length; i++) {
            if (currenNode.children.has(prefix[i])) {
                currenNode = currenNode.children.get(prefix[i])!;
            } else return false;
        }
        return true;
    }
}

class TrieNode {
    children: Map<string, TrieNode>;
    endOfWord = false;
    constructor() {
        this.children = new Map<string, TrieNode>();
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
