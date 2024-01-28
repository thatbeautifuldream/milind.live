import Verified from "./components/verified.js"

const YEAR = new Date().getFullYear()

export default {
  head: ({ meta }) => {
    return (
      <>
        <meta name="author" content="Milind Mishra" />
        <link rel="canonical" href="https://milind.live" />
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://milind.live" />
        <meta
          property="og:image"
          content={meta.image || "https://milind.live/logo.png"}
        />
        <meta
          property="twitter:card"
          content={meta.image ? "summary_large_image" : "summary"}
        />
        <meta property="twitter:site" content="@milindstwt" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content="https://milind.live" />
        <meta
          property="twitter:image"
          content={meta.image || "https://milind.live/logo.png"}
        />
      </>
    )
  },
  footer: (
    <div>
      <hr />
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <a href="https://www.linkedin.com/in/mishramilind/" target="_blank">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href="https://github.com/thatbeautifuldream" target="_blank">
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1ujYf9MIOEeH3UpaHKZmXm_9-W6XpSQ5LAcLUv0ue32k/export?format=pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <Verified />
      </div>

      <small style={{ display: "block", marginTop: "8rem" }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: "help" }}
        >
          CC BY-NC 4.0
        </abbr>{" "}
        <time>{YEAR}</time> © Milind Mishra.
        <a href="https://blog.milind.live" target="_blank">
          Blogs
        </a>
        <style jsx>{`
          a {
            float: right;
          }
        `}</style>
      </small>
    </div>
  ),
  darkMode: true,
  readMore: "Read More →",
}
