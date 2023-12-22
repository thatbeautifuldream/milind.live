import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React from "react"
import BarLoader from "react-spinners/BarLoader"
import Insite from "./insite"

export function BlogFooter() {
  return (
    <p>
      Powered by{" "}
      <Link href="https://hashnode.com/headless">Headless Hashnode</Link>
    </p>
  )
}

const fetchBlogPosts = async () => {
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
  return data.data.publication.posts.edges
}

const BlogPosts = () => {
  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  })

  if (isPending) {
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

  if (error) {
    return <div>Error fetching data</div>
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "1.25rem",
      }}
    >
      {posts.map((post, index) => (
        <Insite
          title={post.node.title}
          coverImage={post.node.coverImage.url}
          url={`/blogs/${post.node.slug}`}
          description={post.node.brief}
          key={index}
        />
      ))}

      <BlogFooter />
    </div>
  )
}

export default BlogPosts
