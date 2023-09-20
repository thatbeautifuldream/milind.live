import Image from "next/image"
import MishraVerified from "../public/images/stamp/verified-stamp.png"
import Link from "next/link"

export default function Verified() {
  return (
    <>
      <Link href="/">
        <a title="Mishra Verified" className="footer-verified-stamp">
          <Image
            src={MishraVerified}
            alt="Mishra Verified"
            placeholder="blur"
          />
        </a>
      </Link>
    </>
  )
}
