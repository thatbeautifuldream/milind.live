import { useEffect, useState } from "react"

const Memes = () => {
  const [currentMeme, setCurrentMeme] = useState(null)
  useEffect(() => {
    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => {
        setCurrentMeme(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <a
        title="Enjoy Memes"
        className="figure"
        href={currentMeme ? currentMeme.postLink : "#"}
        target="_blank"
      >
        {currentMeme && <img src={currentMeme.url} alt="Enjoy Memes" />}
      </a>
    </>
  )
}

export default Memes
