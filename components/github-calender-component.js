import React, { useState, useEffect } from "react"
import GitHubCalendar from "react-github-calendar"
import { Tooltip as ReactTooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

export default function GithubCalenderComponent({ username }) {
  return (
    <>
      <GitHubCalendar
        username={username}
        hideColorLegend="true"
        showWeekdayLabels="true"
        style={{
          padding: "0px",
          marginBottom: "20px",
        }}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} commits on ${activity.date}`,
          })
        }
      />
      <ReactTooltip id="react-tooltip" />
    </>
  )
}
