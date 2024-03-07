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
    <>
      <span className="animate-pulse inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20 dark:ring-yellow-400/20">
        <button
          data-cal-link="milind/30min"
          onClick={() => setTheme(theme === "dark" ? "dark" : "light")}
        >
          {message}
        </button>
      </span>
    </>
  )
}
