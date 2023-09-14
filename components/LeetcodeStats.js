import React, { useState, useEffect } from "react"
import axios from "axios"
import BarLoader from "react-spinners/BarLoader"

function LeetcodeStats({ username }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((result) => {
        console.log("Leetcode Stats : ", result.data)
        setData(result.data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [username])

  if (!data)
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

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Total Solved / Total Questions</td>
            <td>
              {data.totalSolved} / {data.totalQuestions}
            </td>
          </tr>
          <tr>
            <td>Easy Solved / Total Easy</td>
            <td>
              {data.easySolved} / {data.totalEasy}
            </td>
          </tr>
          <tr>
            <td>Medium Solved / Total Medium</td>
            <td>
              {data.mediumSolved} / {data.totalMedium}
            </td>
          </tr>
          <tr>
            <td>Hard Solved / Total Hard</td>
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
    </div>
  )
}

export default LeetcodeStats
