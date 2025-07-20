import React from "react"
import WindowTracker from "./components/WindowTracker"

function DisplayWindow() {
    const [show, setShow] = React.useState(true)

    return (
        <main className="container">
            <button onClick={() => setShow(prev => !prev)}>Toggle WindowTracker</button>
            {show ? <WindowTracker /> : undefined}
        </main>
    )
}

export default DisplayWindow