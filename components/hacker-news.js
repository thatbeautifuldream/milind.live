import React from "react"
import { useQuery } from "@tanstack/react-query"
import BarLoader from "react-spinners/BarLoader"
import axios from "axios"

async function fetchNews() {
  try {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/beststories.json"
    )
    const storyIds = response.data.slice(0, 10)
    const newsPromises = storyIds.map(async (storyId) => {
      const storyResponse = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      )
      return storyResponse.data
    })

    return Promise.all(newsPromises) // Wait for all promises to resolve before returning data
  } catch (error) {
    // Handle errors here
    console.error("Error fetching news:", error)
    throw error
  }
}

function HackerNews() {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  })

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.25rem",
        }}
      >
        <BarLoader color="#006D32" />
      </div>
    )
  }

  if (isError) {
    return <div>Error fetching Hacker News data</div>
  }

  return (
    <div>
      <ol type="1">
        {news.map((story, index) => (
          <li
            key={index}
            value={story.score}
            style={{
              marginTop: "1.25rem",
            }}
          >
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>{" "}
            by <code>{story.by}</code>
            <span className="dates">
              {new Date(story.time * 1000).toLocaleString()}
            </span>
            {/* Add comments here */}
          </li>
        ))}
      </ol>
      <footer>
        <p>
          Data from{" "}
          <a
            href="https://news.ycombinator.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacker News
          </a>
        </p>
      </footer>
    </div>
  )
}

export default HackerNews
