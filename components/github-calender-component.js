import React from "react"
import { useTheme } from "next-themes"
import GitHubCalendar from "react-github-calendar"
import Link from "next/link"

export default function GithubCalenderComponent({ username }) {
  const { theme } = useTheme()
  return (
    <Link href="https://github.com/thatbeautifuldream" target="_blank">
      <GitHubCalendar username={username} blockSize={10} />
    </Link>
  )
}
