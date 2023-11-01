import React from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import BarLoader from "react-spinners/BarLoader"

const fetchPost = async (slug) => {
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
  if (data.errors && data.errors.length > 0) {
    throw new Error(data.errors[0].message)
  }

  return data.data.publication.post
}

const BlogPost = ({ slug }) => {
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogPost"],
    queryFn: () => fetchPost(slug),
  })

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.25rem",
        }}
      >
        <BarLoader color="#006D32" />
      </div>
    )
  }

  if (isError) {
    return <div>Error fetching post data</div>
  }

  return (
    <div>
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
    </div>
  )
}

export default BlogPost
