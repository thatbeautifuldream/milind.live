import axios from "axios"
import React from "react"
import { useQuery } from "@tanstack/react-query"
import { BarLoader } from "react-spinners"

async function fetchMeme() {
  const response = await axios.get("https://meme-api.com/gimme")
  return response.data
}

export default function Memes() {
  const {
    data: currentMeme,
    isLoading: isMemeLoading,
    isError: isMemeError,
    refetch,
  } = useQuery({
    queryKey: ["meme"],
    queryFn: fetchMeme,
  })

  return (
    <div>
      <p>
        {isMemeLoading && <code>Loading...</code>}
        {!isMemeLoading && !isMemeError && currentMeme && (
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
      {isMemeLoading && (
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
      {isMemeError && (
        <div>
          <code
            style={{
              color: "#ff0000",
            }}
          >
            Error: {isMemeError.message}
          </code>
        </div>
      )}
      {!isMemeLoading && !isMemeError && currentMeme && (
        <>
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
        </>
      )}
    </div>
  )
}
