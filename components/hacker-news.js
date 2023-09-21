import React, { useEffect, useState } from "react"
import BarLoader from "react-spinners/BarLoader"

function HackerNews() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true) // Add loading state for news
  const [comments, setComments] = useState({}) // Store comments for each story
  const [isLoadingComments, setIsLoadingComments] = useState({}) // Loading state for comments
  const [showComments, setShowComments] = useState({}) // State to track if comments are visible

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

        // Set loading to false after data is fetched
        setIsLoading(false)

        // Set news data
        setNews(newsData)
      } catch (error) {
        console.error("Error fetching Hacker News data:", error)
        setIsLoading(false) // Set loading to false in case of an error
      }
    }
    fetchNews()
  }, [])

  // Function to fetch comments for a given story
  const fetchComments = async (storyId) => {
    try {
      setIsLoadingComments({ ...isLoadingComments, [storyId]: true })
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      )
      const story = await response.json()

      // Check if the story has kids (comments)
      if (story.kids) {
        const commentPromises = story.kids.map(async (commentId) => {
          const commentResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
          )
          return await commentResponse.json()
        })
        const commentsData = await Promise.all(commentPromises)
        console.log("Comments:", commentsData)
        // Store comments in state
        setComments({ ...comments, [storyId]: commentsData })
        setIsLoadingComments({ ...isLoadingComments, [storyId]: false })
        setShowComments({ ...showComments, [storyId]: true }) // Show comments
      }
    } catch (error) {
      console.error("Error fetching comments:", error)
    }
  }

  // Function to hide comments for a given story
  const hideComments = (storyId) => {
    setShowComments({ ...showComments, [storyId]: false }) // Hide comments
  }

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
                {story.title}
              </a>{" "}
              by <code>{story.by}</code>
              <span
                className="dates"
                style={{
                  float: "right",
                }}
              >
                {new Date(story.time * 1000).toLocaleString()}
              </span>
              {/* Fetch and display comments for this story */}
              {showComments[story.id] ? (
                <>
                  {" "}
                  <button onClick={() => hideComments(story.id)}>
                    <code>Hide Comments</code>
                  </button>
                  {/* Display comments */}
                  {comments[story.id] && (
                    <ul>
                      {comments[story.id].map((comment, commentIndex) => (
                        <li key={commentIndex}>
                          <div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: comment.text,
                              }}
                            />
                            <code>{comment.by}</code>
                            <span
                              className="dates"
                              style={{
                                float: "right",
                              }}
                            >
                              {new Date(comment.time * 1000).toLocaleString()}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  <button
                    onClick={() => fetchComments(story.id)}
                    disabled={isLoadingComments[story.id]}
                  >
                    <code>
                      {isLoadingComments[story.id]
                        ? "Loading..."
                        : "Show Comments"}
                    </code>
                  </button>
                </>
              )}
            </li>
          ))}
        </ol>
      )}
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
