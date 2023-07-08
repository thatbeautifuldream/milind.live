import React from "react"
import GitHubCalendar from "react-github-calendar"
import { Tooltip as ReactTooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

export default function GithubCalenderComponent() {
  return (
    <>
      <GitHubCalendar
        username="thatbeautifuldream"
        hideColorLegend="true"
        showWeekdayLabels="true"
        theme={{
          light: ["hsl(0, 0%, 92%)", "white"],
          dark: ["hsl(0, 0%, 22%)", "white"],
        }}
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
