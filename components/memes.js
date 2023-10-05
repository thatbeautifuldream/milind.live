import React, { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

const Memes = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentMeme, setCurrentMeme] = useState(null)

  function fetchMeme() {
    setLoading(true)
    setError(null)

    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => {
        setCurrentMeme(data)
        console.log(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMeme()
  }, [])

  return (
    <div>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarLoader color="#006D32" />
        </div>
      )}
      {error && (
        <div>
          <code
            style={{
              color: "#ff0000",
            }}
          >
            Error: {error}
          </code>
        </div>
      )}
      {!loading && !error && currentMeme && (
        <div
          className="figure"
          rel="noopener noreferrer"
          onDoubleClick={fetchMeme}
        >
          <img
            src={currentMeme.url}
            alt="Double click to get a new meme"
            style={{
              margin: "0px",
            }}
          />
        </div>
      )}
      <footer>
        <p>
          {loading && <code>Loading...</code>}
          {error && <code>Error: {error}</code>}
          {!loading && !error && currentMeme && (
            <code>
              [{currentMeme?.title}] by {currentMeme?.author} from{" "}
              <a
                href={currentMeme?.postLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                r/{currentMeme?.subreddit}
              </a>
            </code>
          )}
        </p>
      </footer>
    </div>
  )
}

export default Memes
