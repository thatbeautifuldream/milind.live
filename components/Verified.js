import Image from "next/image"
import MishraVerified from "../public/images/stamp/verified-stamp.png"

export default function Verified() {
  return (
    <>
      <a href="/" title="Mishra Verified" className="footer-verified-stamp">
        <Image src={MishraVerified} alt="Mishra Verified" placeholder="blur" />
      </a>
    </>
  )
}
