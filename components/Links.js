import Link from "next/link"
import data from "../data/links.json"

export default function Links() {
  return (
    <div>
      <h1>Links</h1>
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
