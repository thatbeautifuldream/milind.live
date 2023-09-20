import Link from "next/link"
import data from "../data/links.json"

export default function Links() {
  return (
    <div>
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} target="_blank">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
