
function tournamentWinner(competitions, results) {
    const pointsAccumulator = {}

    for (let i = 0; i < results.length; i++) {
        const winner = competitions[i][results[i] === 1 ? 0 : 1]
        if (winner in pointsAccumulator) {
            pointsAccumulator[winner] += 3
        } else {
            pointsAccumulator[winner] = 3
        }
    }

    let topWinnerTeam = null;

    for (const team in pointsAccumulator) {
        if (topWinnerTeam === null || pointsAccumulator[topWinnerTeam] < pointsAccumulator[team]) {
            topWinnerTeam = team
        }
    }

    console.log(pointsAccumulator)

    return topWinnerTeam;
}

// console.log(tournamentWinner([
//     ['HTML', 'C#'],
//     ['C#', 'Python'],
//     ['Python', 'HTML'],
// ], [0, 0, 1]))

const HOME_TEAM_WON = 1;

function tournamentWinner2(competitions, results) {
    let currentBestTeam = competitions[0][0]
    const pointsAccumulator = { [currentBestTeam]: 0 }

    for (let i = 0; i < results.length; i++) {
        const [homeTeam, awayTeam] = competitions[i]
        const winner = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam
        if (winner in pointsAccumulator) {
            pointsAccumulator[winner] += 3
        } else {
            pointsAccumulator[winner] = 3
        }

        if (pointsAccumulator[currentBestTeam] < pointsAccumulator[winner]) {
            currentBestTeam = winner
        }
    }

    return currentBestTeam;
}

console.log(tournamentWinner2([
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
], [0, 0, 1]))
