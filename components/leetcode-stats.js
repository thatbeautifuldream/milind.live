import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BarLoader } from "react-spinners"

const fetchLeetcodeStats = async (username) => {
  const response = await axios.get(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  )
  return response.data
}

function LeetcodeStats({ username }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leetcodeStats"],
    queryFn: () => fetchLeetcodeStats(username),
  })

  if (isLoading) {
    return (
      <BarLoader
        color="#006D32"
        cssOverride={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      />
    )
  }

  if (isError) {
    return <p>Error: {isError.message}</p>
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>Total Problems</td>
          <td>
            {data.totalSolved} / {data.totalQuestions}
          </td>
        </tr>
        <tr>
          <td>Easy Problems</td>
          <td>
            {data.easySolved} / {data.totalEasy}
          </td>
        </tr>
        <tr>
          <td>Medium Problems</td>
          <td>
            {data.mediumSolved} / {data.totalMedium}
          </td>
        </tr>
        <tr>
          <td>Hard Problems</td>
          <td>
            {data.hardSolved} / {data.totalHard}
          </td>
        </tr>
        <tr>
          <td>Acceptance Rate</td>
          <td>{data.acceptanceRate}</td>
        </tr>
        <tr>
          <td>Ranking</td>
          <td>{data.ranking}</td>
        </tr>
        <tr>
          <td>Contribution Points</td>
          <td>{data.contributionPoints}</td>
        </tr>
        <tr>
          <td>Reputation</td>
          <td>{data.reputation}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LeetcodeStats
