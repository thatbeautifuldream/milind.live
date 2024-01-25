import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { BarLoader } from "react-spinners"

async function fetchMeme() {
  const response = await axios.get("https://meme-api.com/gimme")
  return response.data
}

async function postImage(imageUrl) {
  console.log("imageUrl", imageUrl)
  const response = await axios.post("/api/bot", {
    imageUrl,
  })
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

  // mutation to post imageUrl to a /api/bot endpoint
  const {
    data,
    isError: isBotError,
    isLoading: isBotLoading,
    isSuccess,
    mutateAsync,
  } = useMutation({
    mutationKey: ["bot"],
    mutationFn: postImage,
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
          <code
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
            }}
          >
            <button
              onClick={() => {
                console.log("clicked")
                mutateAsync(currentMeme.url)
              }}
            >
              {!isBotLoading && "Describe this image using AI"}
              {isBotLoading && "AI Magic"}
            </button>
          </code>
          <code>
            {isBotLoading && <BarLoader color="#006D32" />}
            {isBotError && (
              <code
                style={{
                  color: "#ff0000",
                  display: "flex",
                }}
              >
                Error!
              </code>
            )}
            {isSuccess && <code>{data?.kwargs?.content}</code>}
          </code>
        </>
      )}
    </div>
  )
}
