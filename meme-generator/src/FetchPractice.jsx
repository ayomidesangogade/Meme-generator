import React from "react"

export default function FetchPractice() {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(1)
    // Infinite loop 10:23:36
    console.log("Rendered!")
    // GET the data
    // Save the data in state
    React.useEffect (function () {
        fetch(`https://swapi.info/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    React.useEffect(() => {
        console.log("effect function ran")
    }, [0])
    // side effects - useEffect
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}