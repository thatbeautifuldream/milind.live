import Image from "next/image"
import milindsSignDark from "../public/images/sign/milind-sign-dark.svg"

export default function Sign() {
  return (
    <>
      <a title="Milind's Sign" className="sign">
        <Image src={milindsSignDark} alt="Dark Sign" />
      </a>
    </>
  )
}
