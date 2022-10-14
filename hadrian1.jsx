import React, { useState } from "react";

// copied
function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const Button = ({ label, highlight, error, onClick }) => {
    const backgroundColor = error ? '#ff0000' : highlight ? '#0000ff' : '#ffffff'

    return (
        <button
            type='button'
            onClick={onClick}
            style={{margin: '5px', backgroundColor }}
        >{label}</button>
    );
}

const getPairsConfig = (data) => Object.keys(data).map(country => ({ country, capital: data[country] }))

const getCountriesButtonsConfig = (pairs) => pairs.map(({ country, capital }) => ({ id: country, targetId: capital, label: country, }))

const getCapitalsButtonsConfig = (pairs) => pairs.map(({ country, capital }) => ({ id: capital, targetId: country, label: capital, }))

const CountryCapitalGame = ({ data }) => {
    const pairsConfig = getPairsConfig(data)

    const [matchedIds, setMatchedIds] = useState([])
    const [stagedId, setStagedId] = useState(null)
    const [incorrectChoiceIds, setIncorrectChoiceIds] = useState([])

    const allButtons = getCountriesButtonsConfig(pairsConfig).concat(getCapitalsButtonsConfig(pairsConfig))
    const [allButtonsShuffled] = useState(shuffleArray(allButtons))

    const gameIsComplete = matchedIds.length === allButtonsShuffled.length

    const tryPair = (id, targetId) => {
        setIncorrectChoiceIds([])

        if (stagedId === id) {
            // user clicked the same button again
            return
        }

        if (stagedId === null) {
            setStagedId(id)
        } else if (stagedId === targetId) {
            setMatchedIds([...matchedIds, id, targetId])
            setStagedId(null)
        } else {
            setIncorrectChoiceIds([id, stagedId])
            setStagedId(null)
        }
    }

    return gameIsComplete ? <p>Congratulations</p> : (
        <div className='game__container' style={{ padding: '16px' }}>
            <p className='game__description'>Match countries with their capital cities</p>
            <div className='game__buttons'>
                {allButtonsShuffled.map(({ id, targetId, label }) =>
                    matchedIds.includes(id) ? null : (
                        <Button
                            key={id}
                            label={label}
                            highlight={stagedId === id}
                            error={incorrectChoiceIds.includes(id)}
                            onClick={() => tryPair(id, targetId)}
                        />
                    ))}
            </div>
        </div>
    )
}

export default CountryCapitalGame