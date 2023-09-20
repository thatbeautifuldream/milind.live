import React, { useEffect, useState } from "react"
import BarLoader from "react-spinners/BarLoader"

function HackerJobs() {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch the latest job listings from the Hacker News API
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        )
        const jobIds = await response.json()
        // Fetch details of the top 10 job listings (you can adjust this number)
        const topJobs = jobIds.slice(0, 10) // Change the number to get more or fewer jobs
        const jobPromises = topJobs.map(async (jobId) => {
          const jobResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
          )
          return await jobResponse.json()
        })
        const jobData = await Promise.all(jobPromises)
        setJobs(jobData)
        console.log("Hacker News jobs data:", jobData)
        setIsLoading(false) // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching Hacker News jobs data:", error)
        setIsLoading(false) // Set loading to false in case of an error
      }
    }
    fetchJobs()
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
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                {job.title}
              </a>{" "}
              by {job.by}
              <span
                className="dates"
                style={{
                  float: "right",
                }}
              >
                {new Date(job.time * 1000).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
      <footer>
        <p>
          Data from{" "}
          <a
            href="https://news.ycombinator.com/jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacker News Jobs
          </a>
        </p>
      </footer>
    </div>
  )
}

export default HackerJobs
