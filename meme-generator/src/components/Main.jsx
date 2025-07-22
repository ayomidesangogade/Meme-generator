import React from "react"

export default function Main() {
    const [memeInfo, setMemeInfo] = React.useState({
        topText : "One does not simply",
        bottomText : "Walk into Mordor ",
        imageUrl : "http://i.imgflip.com/1bij.jpg",
        imageAlt : ""
    })
    const [allMemes, setAllMemes] = React.useState([])

    function getRandomMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeName = allMemes[randomNumber].name
        const newMemeUrl = allMemes[randomNumber].url
        setMemeInfo(prev => ({
            ...prev, 
            imageUrl: newMemeUrl,
            imageAlt: newMemeName
        }))
    }

    React.useEffect(() => {       
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

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
                <button onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imageUrl} alt={memeInfo.imageAlt} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}