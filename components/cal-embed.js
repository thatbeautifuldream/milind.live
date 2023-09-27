import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      })
    })()
  }, [])
  return (
    <button data-cal-link="milind/30min" className="prose a">
      Book me
    </button>
  )
}
