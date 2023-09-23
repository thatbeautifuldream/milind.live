import Image from "next/image"
import milindBanner from "../public/images/banner/milind-banner.png"

export default function Banner() {
  return (
    <div
      style={{
        marginBottom: "0.5rem",
      }}
    >
      <Image
        src={milindBanner}
        alt="banner"
        width={720}
        height={300}
        placeholder="blur"
      />
    </div>
  )
}
