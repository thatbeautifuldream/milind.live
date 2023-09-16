import Image from "next/image"

export default function Banner() {
  return (
    <div
      style={{
        marginBottom: "0.5rem",
      }}
    >
      <Image
        src="/images/banner/sh-banner.png"
        alt="banner"
        width={2535}
        height={720}
      />
    </div>
  )
}
