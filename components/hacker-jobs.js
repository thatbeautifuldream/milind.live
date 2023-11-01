import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import BarLoader from "react-spinners/BarLoader"

async function fetchJobs() {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/jobstories.json"
  )
  const jobIds = response.data.slice(0, 10)
  const jobPromises = jobIds.map(async (jobId) => {
    const jobResponse = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
    )
    return jobResponse.data
  })

  return Promise.all(jobPromises)
}

function HackerJobs() {
  const {
    data: jobs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
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
    return <p>Error fetching Hacker News jobs data: {isError.message}</p>
  }

  return (
    <div>
      <ul style={{ padding: "10px" }}>
        {jobs.map((job, index) => (
          <li key={index} style={{ marginBottom: "1.25rem" }}>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.title}
            </a>{" "}
            by <code>{job.by}</code>
            <span className="dates" style={{ float: "right" }}>
              {new Date(job.time * 1000).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
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
