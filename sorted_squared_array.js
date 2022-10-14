
function sortedSquaredArray(array) {
    // Write your code here.
    const naturalNumbers = []

    for (const arrayElement of array) {
        if (arrayElement < 0) {
            naturalNumbers.push(arrayElement * -1)
        } else {
            naturalNumbers.push(arrayElement)
        }

    }

    const sorted = naturalNumbers.sort((a, b) => a - b)

    return sorted.map(item => item * item)
}

// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))


function sortedSquaredArray2(array) {
    // Write your code here.
    const result = []

    for (const arrayElement of array) {
        result.push(arrayElement * arrayElement)
    }

    return result.sort((a, b) => a - b)
}

// console.log(sortedSquaredArray2([1, 2, 3, 5, 6, 8, 9]))

// -5 -4 -3 -2 -1 0 1 2 3 4 5

function sortedSquaredArray3(array) {
    let smallestNumberIndex = 0
    let largestNumberIndex = array.length - 1

    const result = []

    while (result.length < array.length) {
        const smallestNumberAbs = Math.abs(array[smallestNumberIndex])
        const largestNumberAbs = Math.abs(array[largestNumberIndex])
        if (smallestNumberAbs > largestNumberAbs) {
            result.push(smallestNumberAbs * smallestNumberAbs)
            smallestNumberIndex++
        } else if (smallestNumberAbs < largestNumberAbs) {
            result.push(largestNumberAbs * largestNumberAbs)
            largestNumberIndex--
        } else {
            if (smallestNumberIndex === largestNumberIndex) {
                result.push(smallestNumberAbs * smallestNumberAbs)
            } else {
                const squared = largestNumberAbs * largestNumberAbs
                result.push(squared, squared)
                smallestNumberIndex++
                largestNumberIndex--
            }
        }
    }

    return result.reverse()
}

// console.log(sortedSquaredArray3([1, 2, 3, 5, 6, 8, 9]))

