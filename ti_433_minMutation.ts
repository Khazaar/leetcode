function minMutation(
    startGene: string,
    endGene: string,
    bank: string[]
): number {
    const isMutationPossible = (geneA: string, geneB: string) => {
        let charChanges = 0;
        for (let i = 0; i < 8; i++) {
            if (geneA[i] != geneB[i]) charChanges++;
        }
        return charChanges < 2;
    };
    type QueueType = {
        gene: string;
        count: number;
    };
    let queue = new Array<QueueType>();
    queue.push({ gene: startGene, count: 0 });
    let usedGenes = new Set<string>();
    while (queue.length > 0) {
        const currentQueue = queue.shift()!;
        const possibleMutations = bank.filter((gene) =>
            isMutationPossible(currentQueue.gene, gene)
        );
        for (let gene of possibleMutations) {
            if (!usedGenes.has(gene)) {
                usedGenes.add(gene);
                queue.push({ gene, count: currentQueue.count + 1 });
                if (gene == endGene) return currentQueue.count + 1;
            }
        }
    }
    return -1;
}

//console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
console.log(
    minMutation("AACCTTGG", "AATTCCGG", [
        "AATTCCGG",
        "AACCTGGG",
        "AACCCCGG",
        "AACCTACC",
    ])
);
