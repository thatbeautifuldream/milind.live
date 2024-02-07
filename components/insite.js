import Link from "next/link"

export default function Insite({ title, coverImage, url, description, tags }) {
  const H3 = "h3"
  return (
    <Link
      className="insite-card block font-semibold"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={coverImage}
        alt={title}
        style={{
          borderRadius: "0.25rem",
          margin: "0 0 1rem 0", // top right bottom left
        }}
      />
      <H3>{title}</H3>
      <p>{description}</p>
      {tags && (
        <div className="flex gap-1 mt-3 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-800 dark:text-gray-400 ring-1 ring-inset ring-gray-600/20 dark:ring-gray-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}

export function InsiteTargetBlank() {
  return <></>
}
