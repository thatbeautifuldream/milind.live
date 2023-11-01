import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BarLoader } from "react-spinners"

async function fetchMeme() {
  const response = await axios.get("https://meme-api.com/gimme")
  return response.data
}

const Memes = () => {
  const {
    data: currentMeme,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["meme"],
    queryFn: fetchMeme,
  })

  return (
    <div>
      <p>
        {isLoading && <code>Loading...</code>}
        {!isLoading && !isError && currentMeme && (
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
      {isLoading && (
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
      {isError && (
        <div>
          <code
            style={{
              color: "#ff0000",
            }}
          >
            Error: {isError.message}
          </code>
        </div>
      )}
      {!isLoading && !isError && currentMeme && (
        <div
          className="figure"
          rel="noopener noreferrer"
          onDoubleClick={refetch}
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
    </div>
  )
}

export default Memes
