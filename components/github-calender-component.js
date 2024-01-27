import Link from "next/link"
import { useTheme } from "nextra-theme-blog"
import React from "react"
import GitHubCalendar from "react-github-calendar"

export default function GithubCalenderComponent({ username }) {
  const { theme } = useTheme()
  return (
    <Link href="https://github.com/thatbeautifuldream" target="_blank">
      <GitHubCalendar
        username={username}
        blockSize={10}
        colorScheme={theme === "dark" ? "dark" : "light"}
      />
    </Link>
  )
}
