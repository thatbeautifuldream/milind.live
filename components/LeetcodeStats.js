import React, { useState, useEffect } from "react"
import axios from "axios"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

function LeetcodeStats({ username }) {
  const [data, setData] = useState(null)

  const LeetcodeTooltip = ({ message, children }) => {
    return (
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content={message || "Leetcode Stats"}
        style={{ cursor: "pointer" }}
      >
        {children}
      </a>
    )
  }

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

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <table>
        <tbody>
          <tr>
            <td>Total Solved / Total Questions</td>
            <LeetcodeTooltip>
              <td>
                {data.totalSolved} / {data.totalQuestions}
              </td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Easy Solved / Total Easy</td>
            <LeetcodeTooltip>
              <td>
                {data.easySolved} / {data.totalEasy}
              </td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Medium Solved / Total Medium</td>
            <LeetcodeTooltip>
              <td>
                {data.mediumSolved} / {data.totalMedium}
              </td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Hard Solved / Total Hard</td>
            <LeetcodeTooltip>
              <td>
                {data.hardSolved} / {data.totalHard}
              </td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Acceptance Rate</td>
            <LeetcodeTooltip>
              <td>{data.acceptanceRate}</td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Ranking</td>
            <LeetcodeTooltip>
              <td>{data.ranking}</td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Contribution Points</td>
            <LeetcodeTooltip>
              <td>{data.contributionPoints}</td>
            </LeetcodeTooltip>
          </tr>
          <tr>
            <td>Reputation</td>
            <LeetcodeTooltip>
              <td>{data.reputation}</td>
            </LeetcodeTooltip>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LeetcodeStats
