import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

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

  return (
    <div>
      <button
        className="button"
        onClick={fetchMeme}
        style={{
          marginBottom: "1rem",
        }}
      >
        <code>fetchMeme()</code>
      </button>
      {spinner ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarLoader color="#39D353" />
        </div>
      ) : (
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
      )}
      <footer>
        <p>
          Memes from{" "}
          <a
            href="https://news.ycombinator.com/jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Memes
