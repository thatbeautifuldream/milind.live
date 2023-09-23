import Image from "next/image"
import MishraVerified from "../public/images/stamp/verified-stamp.png"
import Link from "next/link"

export default function Verified() {
  return (
    <>
      <Link legacyBehavior href="/">
        <a
          title="Mishra Verified"
          style={{
            marginTop: "-2rem",
            marginLeft: "auto",
            width: "10%",
          }}
        >
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
