import React from "react"
import { useTheme } from "next-themes"
import GitHubCalendar from "react-github-calendar"

export default function GithubCalenderComponent({ username }) {
  const { theme } = useTheme()
  return <GitHubCalendar username={username} blockSize={10} />
}
