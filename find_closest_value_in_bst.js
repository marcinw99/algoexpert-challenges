function findClosestValueInBst(tree, target) {
    const nodesDictionary = {};

    for (const node of tree.nodes) {
        nodesDictionary[node.id] = node
    }

    let currentNodeId = tree.root
    let prevValue = null
    let closestValue = null

    while (closestValue === null) {
        const currentNode = nodesDictionary[currentNodeId]
        const leftNode = nodesDictionary[currentNode.left]
        const rightNode = nodesDictionary[currentNode.right]
        const currentNodeDiff = Math.abs(currentNode.value - target)
        const leftDiff = Math.abs(leftNode.value - target)
        const rightDiff = Math.abs(rightNode.value - target)

        if (prevValue) {
        }

        prevValue = currentNode.value
        // save closest value, and move on to closest from left / right nodes, then compare with saved closest value
        console.log(currentNodeDiff, leftDiff, rightDiff)
        closestValue = leftDiff
    }
}

console.log(findClosestValueInBst({
    "nodes": [
        {"id": "10", "left": "5", "right": "15", "value": 10},
        {"id": "15", "left": "13", "right": "22", "value": 15},
        {"id": "22", "left": null, "right": null, "value": 22},
        {"id": "13", "left": null, "right": "14", "value": 13},
        {"id": "14", "left": null, "right": null, "value": 14},
        {"id": "5", "left": "2", "right": "5-2", "value": 5},
        {"id": "5-2", "left": null, "right": null, "value": 5},
        {"id": "2", "left": "1", "right": null, "value": 2},
        {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
}, 12))