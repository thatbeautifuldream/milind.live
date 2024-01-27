import Image from "next/image"
import React from "react"
import { useEffect } from "react"
import milindsSignDark from "../public/images/sign/milind-sign-dark.svg"
import milindsSignLight from "../public/images/sign/milind-sign-light.svg"
import { useTheme } from "nextra-theme-blog"

export default function Sign() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    // console.log({ theme })
  }, [theme])
  return (
    <div>
      <a title="Milind's Sign" className="sign">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {/* to suppress hydration error */}
          {typeof window === "undefined" && (
            <Image src={milindsSignDark} alt="Milind's Sign" />
          )}
          {theme === "dark" && (
            <Image src={milindsSignDark} alt="Milind's Sign" />
          )}
          {theme === "light" && (
            <Image src={milindsSignLight} alt="Milind's Sign" />
          )}
        </button>
      </a>
    </div>
  )
}
