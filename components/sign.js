import Image from "next/image"
import React from "react"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import milindsSignDark from "../public/images/sign/milind-sign-dark.svg"
import milindsSignLight from "../public/images/sign/milind-sign-light.svg"

export default function Sign() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    console.log({ theme })
  }, [theme])
  return (
    <>
      <a title="Milind's Sign" className="sign">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <Image src={milindsSignDark} alt="Milinds Sign" />
          ) : (
            <Image src={milindsSignLight} alt="Milinds Sign" />
          )}
        </button>
      </a>
    </>
  )
}
