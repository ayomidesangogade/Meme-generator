import React from "react"

export default function Main() {
    const [memeInfo, setMemeInfo] = React.useState({
        topText : "One does not simply",
        bottomText : "Walk into Mordor ",
        // imageUrl : "http://i.imgflip.com/1bij.jpg"
    })
    const [meme, setMeme] = React.useState({})
    const [change, setChange] = React.useState(false)

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    React.useEffect(() => {       
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                let randomNum = getRandomInt(0, data.data.memes.length - 1)
                setMeme(data.data.memes[randomNum])
            })
        console.log(meme)
    }, [change])

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
                <button onClick={() => setChange(prev => !prev)}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.url} alt={meme.name} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}