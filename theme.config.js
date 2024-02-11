import Verified from "./components/verified.js"
import Footer from "./components/footer.js"

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
  footer: <Footer />,
  darkMode: true,
  readMore: "Read More →",
}
