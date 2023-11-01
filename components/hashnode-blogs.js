import React, { useState, useEffect } from "react"
import BarLoader from "react-spinners/BarLoader"

export function Insite({ title, coverImage, url, description }) {
  const H3 = "h3"
  return (
    <a className="insite-card block font-semibold" href={url}>
      <img
        src={coverImage}
        alt={title}
        style={{
          borderRadius: "0.25rem",
        }}
      />
      <H3>{title}</H3>
      <p>{description}</p>
    </a>
  )
}

const BlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query {
          publication(host: "blog.milind.live") {
            posts(first: 10) {
              edges {
                node {
                  title
                  slug
                  brief 
                  url
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `

      const variables = {}

      try {
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        })

        const data = await response.json()
        console.log({ data })
        setPosts(data.data.publication.posts.edges)
        setIsLoading(false) // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error)
        setIsLoading(false) // Set loading to false in case of error
      }
    }

    fetchData()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "1.25rem",
      }}
    >
      {isLoading ? (
        <BarLoader
          color="#006D32"
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        />
      ) : (
        posts.map((post, index) => (
          <Insite
            title={post.node.title}
            coverImage={post.node.coverImage.url}
            url={`/blogs/${post.node.slug}`}
            description={post.node.brief}
            key={index}
          />
        ))
      )}
    </div>
  )
}

export default BlogPosts
