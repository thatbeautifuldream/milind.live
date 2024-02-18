import { useTheme } from "nextra-theme-blog"
import React from "react"
import GitHubCalendar from "react-github-calendar"

export default function GithubCalenderComponent({ username }) {
  const { theme } = useTheme()
  return (
    <GitHubCalendar
      username={username}
      blockSize={10}
      colorScheme={theme === "dark" ? "dark" : "light"}
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    />
  )
}
