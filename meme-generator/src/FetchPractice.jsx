import React from "react"

export default function FetchPractice() {
    const [starWarsData, setStarWarsData] = React.useState(null)
    // Infinite loop 10:23:36
    // console.log("Rendered!")
    // GET the data
    // Save the data in state
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    // side effects - useEffect
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}