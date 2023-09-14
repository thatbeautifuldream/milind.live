import React, { useEffect, useState } from "react"
import Image from "next/image"
import milindsSignDark from "../public/images/sign/milind-sign-dark.svg"
import milindsSignLight from "../public/images/sign/milind-sign-light.svg"

export default function Sign() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)
    const handleChange = (e) => {
      setIsDarkMode(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return (
    <>
      <a title="Milind's Sign" className="sign">
        {isDarkMode ? (
          <Image src={milindsSignDark} alt="Dark Sign" />
        ) : (
          <Image src={milindsSignLight} alt="Light Sign" />
        )}
      </a>
    </>
  )
}
