import React, { useState, useEffect } from "react"
import Link from "next/link"
import BarLoader from "react-spinners/BarLoader"

const BlogPost = ({ slug }) => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `
          query GetPost($slug: String!) {
            publication(host: "blog.milind.live") {
              post(slug: $slug) {
                title
                slug
                content {
                  html
                }
                coverImage {
                  url
                }
              }
            }
          }
        `

        const variables = {
          slug,
        }

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
        if (data.errors && data.errors.length > 0) {
          throw new Error(data.errors[0].message)
        }

        setPost(data.data.publication.post)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching post data:", error.message)
        setError(error.message)
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [])

  return (
    <div>
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
        <>
          <Link href="/blogs">← Back to blogs</Link>
          <img
            src={post?.coverImage.url}
            alt={post?.title}
            style={{
              borderRadius: "0.5rem",
            }}
          />
          <h1>{post?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.content.html }} />
        </>
      )}
    </div>
  )
}

export default BlogPost
