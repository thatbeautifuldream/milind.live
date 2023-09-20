import React, { useEffect, useState } from "react"
import BarLoader from "react-spinners/BarLoader"

function HackerNews() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true) // Add loading state

  useEffect(() => {
    // Fetch the latest news from the Hacker News API
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        )
        const storyIds = await response.json()
        // Fetch details of the top 10 stories (you can change this number)
        const topStories = storyIds.slice(0, 10) // Change the number to get more or fewer stories
        const newsPromises = topStories.map(async (storyId) => {
          const storyResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
          )
          return await storyResponse.json()
        })
        const newsData = await Promise.all(newsPromises)
        setNews(newsData)
        setIsLoading(false) // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching Hacker News data:", error)
        setIsLoading(false) // Set loading to false in case of an error
      }
    }
    fetchNews()
  }, [])

  return (
    <div>
      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <BarLoader
          color="#006D32"
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        />
      ) : (
        <ol type="1">
          {news.map((story, index) => (
            <li key={index} value={story.score}>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}{" "}
              </a>
              by {story.by}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default HackerNews
