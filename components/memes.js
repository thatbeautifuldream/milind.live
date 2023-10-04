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
      <button
        className="button"
        onClick={fetchMeme}
        style={{
          marginBottom: "1rem",
        }}
      >
        <code
          style={{
            color: "#006D32",
          }}
        >
          fetchMeme()
        </code>
      </button>
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
        <a
          title="Enjoy Memes"
          className="figure"
          href={currentMeme.postLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={currentMeme.url}
            alt="Enjoy Memes"
            style={{
              margin: "0px",
            }}
          />
        </a>
      )}
      <footer>
        <p>
          Memes from{" "}
          <a
            href="https://meme-api.com/gimme"
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
