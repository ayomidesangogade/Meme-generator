import React from "react"

export default function Main() {
    const [memeInfo, setMemeInfo] = React.useState({
        topText : "One does not simply",
        bottomText : "Walk into Mordor ",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })

    function handleChanges(event) {
        const {name, value} = event.target
        setMemeInfo(prev => ({...prev, [name]:value}))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={memeInfo.topText}
                        onChange={handleChanges}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={memeInfo.bottomText}
                        onChange={handleChanges}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imageUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}