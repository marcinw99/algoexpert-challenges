
// first, awful
function twoNumberSum(array, targetSum) {
    const numbers = array.reduce((accumulator, current) => {
        const resultsFromIteration = []
        for (const arrayElement of array) {
            if (current !== arrayElement && (current + arrayElement) === targetSum) {
                resultsFromIteration.push(current, arrayElement);
            }
        }
        return [...accumulator, ...resultsFromIteration];
    }, [])
    return [...new Set(numbers)]
}

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// from community
function twoNumberSum2(array, targetSum) {
    const numbers = [...new Set(array)]

    for (const number of numbers) {
        const requiredNumber = targetSum - number
        if (requiredNumber !== number && numbers.indexOf(requiredNumber) !== -1) {
            return [number, requiredNumber]
        }
    }

    return []
}

// console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));

// O(n^2) time | O(1) space
function twoNumberSum3(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        const firstNumber = array[i]

        for (let j = i + 1; j < array.length; j++) {
            const comparedNumber = array[j]
            if (firstNumber + comparedNumber === targetSum) {
                return [firstNumber, comparedNumber]
            }
        }
    }
    return []
}

// console.log(twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 10));

// O(n) time | O(n) space
function twoNumberSum4(array, targetSum) {
    const knownNumbers = {}

    for (const number of array) {
        const requiredNumber = targetSum - number
        if (knownNumbers[requiredNumber] === true) {
            return [number, requiredNumber]
        }
        knownNumbers[number] = true
    }

    return []
}

// console.log(twoNumberSum4([3, 5, -4, 8, 11, 1, -1, 6], 10));

// O(nLog(n)) time | O(1) space
function twoNumberSum5(array, targetSum) {
    const sortedNumbers = array.sort(((a, b) => a - b))
    let left = 0
    let right = array.length - 1

    while (left < right) {
        const firstNumber = sortedNumbers[left]
        const secondNumber = sortedNumbers[right]
        const currentSum = firstNumber + secondNumber
        if (currentSum === targetSum) {
            return [firstNumber, secondNumber]
        }
        if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }

    return []
}

// console.log(twoNumberSum5([3, 5, -4, 8, 11, 1, -1, 6], 10));










