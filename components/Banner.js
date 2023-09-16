import Image from "next/image"
import SHBanner from "../public/images/banner/sh-banner.png"

export default function Banner() {
  return (
    <div
      style={{
        marginBottom: "0.5rem",
      }}
    >
      <Image
        src={SHBanner}
        alt="banner"
        width={2535}
        height={720}
        placeholder="blur"
      />
    </div>
  )
}
