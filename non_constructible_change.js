function nonConstructibleChange(coins) {
    let change = 0

    for (const coin of coins.sort((a, b) => a - b)) {
        if (coin > change + 1) {
            return change + 1
        } else {
            change += coin
        }
    }

    return change + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
console.log(nonConstructibleChange([1, 1, 1, 1]))