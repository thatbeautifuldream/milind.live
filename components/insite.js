import Link from "next/link"

export default function Insite({ title, coverImage, url, description }) {
  const H3 = "h3"
  return (
    <Link className="insite-card block font-semibold" href={url}>
      <img
        src={coverImage}
        width={300}
        height={200}
        alt={title}
        style={{
          borderRadius: "0.25rem",
          margin: "0 0 1rem 0", // top right bottom left
        }}
      />
      <H3>{title}</H3>
      <p>{description}</p>
    </Link>
  )
}

export function InsiteTargetBlank() {
  return <></>
}
