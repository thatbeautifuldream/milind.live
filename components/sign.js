import Image from "next/image"
import React from "react"
// import { useTheme } from "next-themes"
import milindsSignDark from "../public/images/sign/milind-sign-dark.svg"
// import milindsSignLight from "../public/images/sign/milind-sign-light.svg"

export default function Sign() {
  // const { resolvedTheme } = useTheme()
  // const theme = resolvedTheme === "dark" ? "dark" : "light"
  // useEffect(() => {
  //   console.log({ theme })
  // }, [theme])
  return (
    <>
      <a title="Milind's Sign" className="sign">
        <Image src={milindsSignDark} alt="Milinds Sign" />
      </a>
    </>
  )
}
