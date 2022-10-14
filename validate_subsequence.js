
// mine

function isValidSubsequence(array, sequence) {
    const remainingSequenceNumbersStack = sequence.reverse()

    for (const arrayElement of array) {
        const lastStackElement = remainingSequenceNumbersStack.length - 1
        if (arrayElement === remainingSequenceNumbersStack[lastStackElement]) {
            remainingSequenceNumbersStack.pop()
        }
        if (remainingSequenceNumbersStack.length === 0) {
            return true
        }
    }

    return false
}

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

// with hint

// O(n = array.length) time | O(1) space
function isValidSubsequence2(array, sequence) {
    let currentSequenceElementIndex = 0

    for (const arrayElement of array) {
        if (arrayElement === sequence[currentSequenceElementIndex]) {
            currentSequenceElementIndex++
        }
        if (currentSequenceElementIndex === sequence.length - 1) {
            if (array.length >= sequence.length) {
                return true
            }
        }
    }

    return false
}

// console.log(isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

function isValidSubsequence3(array, sequence) {
    let currentSequenceElementIndex = 0

    for (const arrayElement of array) {
        if (currentSequenceElementIndex === sequence.length) break
        if (sequence[currentSequenceElementIndex] === arrayElement) currentSequenceElementIndex++
    }

    return currentSequenceElementIndex === sequence.length
}

console.log(isValidSubsequence3([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))