import Image from "next/image"
import milindsSign from "../public/images/sign/milind-sign.png"
// import milindsSignDark from "../public/images/sign/milind-sign-dark.svg"
// import milindsSignLight from "../public/images/sign/milind-sign-light.svg"
// import { useDarkMode } from "usehooks-ts"

export default function Sign() {
  //   const { isDarkMode } = useDarkMode()
  //   console.log("isDarkMode : ", isDarkMode)
  return (
    <>
      {/* <a title="Milind's Sign" className="sign">
        {isDarkMode ? (
          <Image src={milindsSignDark} alt="Dark Sign" />
        ) : (
          <Image src={milindsSignLight} alt="Light Sign" />
        )}
      </a> */}
      <a title="Milind's Sign" className="sign">
        <Image src={milindsSign} alt="Dark Sign" />
      </a>
    </>
  )
}
