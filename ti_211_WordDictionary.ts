class WordDictionary {
    trie: TrieNodeD;
    cache: Map<string, boolean>; // search results caching
    constructor() {
        this.trie = new TrieNodeD();
        this.cache = new Map<string, boolean>();
    }
    addWord(word: string): void {
        let currenNode = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!currenNode.children) {
                currenNode.children = new Map<string, TrieNodeD>();
            }
            if (!currenNode.children.has(word[i])) {
                currenNode.children.set(word[i], new TrieNodeD());
            }
            currenNode = currenNode.children.get(word[i])!;
        }
        currenNode.endOfWord = true;
        this.cache.clear(); // Clear the cache because the trie has changed
    }

    search(word: string): boolean {
        if (this.cache.has(word)) return true;
        const res = this.searchPrefix(this.trie, word);
        if (res) this.cache.set(word, true);
        return res;
    }

    searchPrefix(src: TrieNodeD, prefix: string): boolean {
        if (prefix.length == 0 && src.endOfWord) return true;
        if (src.children) {
            if (prefix[0] == ".") {
                for (let ch of src.children.keys()) {
                    if (
                        this.searchPrefix(
                            src.children.get(ch)!,
                            prefix.substring(1)
                        ) == true
                    )
                        return true;
                }
            } else {
                const children = src.children.get(prefix[0]);
                if (
                    children &&
                    this.searchPrefix(children, prefix.substring(1))
                )
                    return true;
            }
        }
        return false;
    }
}

class TrieNodeD {
    // lazy loading of children - create them only when it is necessary
    children: Map<string, TrieNodeD> | null = null;

    endOfWord = false;
    constructor() {}
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
