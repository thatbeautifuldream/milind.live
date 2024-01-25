import { getCalApi } from "@calcom/embed-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function CalEmbed({ message }) {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: theme,
      })
    })()
  }, [theme])

  return (
    <button
      data-cal-link="milind/30min"
      onClick={() => setTheme(theme === "dark" ? "dark" : "light")}
    >
      {message}
    </button>
  )
}
