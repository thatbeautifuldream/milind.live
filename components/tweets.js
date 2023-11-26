import { useTheme } from "next-themes"
import { Tweet } from "react-tweet"

export default function Tweets() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === "dark" ? "dark" : "light"
  return (
    <>
      <div className={theme}>
        <Tweet id="1725350533635162541" />
      </div>
    </>
  )
}
