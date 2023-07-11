function canCompleteCircuitGreedy(gas: number[], cost: number[]): any {
    let start = 0;
    if (
        gas.reduce((sum, elem) => sum + elem, 0) <
        cost.reduce((sum, elem) => sum + elem, 0)
    )
        return -1;
    let total = 0;
    for (let i = 0; i < gas.length; i++) {
        total = total + gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            start = i + 1;
        }
    }
    return start;
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let possiblePosition = -1;
    let gasVolume = 0;
    const n = gas.length;
    if (n == 1 && gas[0] >= cost[0]) return 0;
    const balance = gas.map((elem, i) => elem - cost[i]);
    const filteredBalance = balance.filter((element) => element != 0);
    console.log(balance);
    console.log(filteredBalance);
    for (
        let startPosition = 0;
        startPosition < filteredBalance.length;
        startPosition++
    ) {
        if (filteredBalance[startPosition] < 0) continue;
        gasVolume = filteredBalance[startPosition];
        let i = startPosition;
        while (gasVolume >= 0) {
            i = i == n - 1 ? 0 : i + 1;
            gasVolume += filteredBalance[i];

            if (i == startPosition) {
                possiblePosition = startPosition;
                break;
            }
        }
        if (possiblePosition != -1) break;
    }
    return possiblePosition;
}
console.log(canCompleteCircuitGreedy([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuitGreedy([2, 3, 4], [3, 4, 3]));

// Complexity: n*n
function canCompleteCircuitSlow(gas: number[], cost: number[]): number {
    let possiblePosition = -1;
    let gasVolume = 0;
    const n = gas.length;
    for (let startPosition = 0; startPosition < n; startPosition++) {
        gasVolume = gas[startPosition];
        let i = startPosition;
        let traveledSteps = 0;
        while (gasVolume >= cost[i] && traveledSteps < n) {
            gasVolume -= cost[i];
            i = i == n - 1 ? 0 : i + 1;
            traveledSteps++;
            gasVolume += gas[i];
        }
        if (traveledSteps == n) possiblePosition = startPosition;
    }
    return possiblePosition;
}
