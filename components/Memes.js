import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners"

const Memes = () => {
  const [spinner, setSpinner] = useState(false)
  const [currentMeme, setCurrentMeme] = useState(null)

  function fetchMeme() {
    setSpinner(true)
    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => {
        setCurrentMeme(data)
        setSpinner(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchMeme()
  }, [])

  if (spinner) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <HashLoader color="#39D353" />
      </div>
    )
  }
  return (
    <>
      <a
        title="Enjoy Memes"
        className="figure"
        href={currentMeme ? currentMeme.postLink : "#"}
        target="_blank"
      >
        {currentMeme && (
          <img
            src={currentMeme.url}
            alt="Enjoy Memes"
            style={{
              margin: "0px",
            }}
          />
        )}
      </a>
    </>
  )
}

export default Memes
