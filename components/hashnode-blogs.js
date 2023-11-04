import React from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import Image from "next/image"
import BarLoader from "react-spinners/BarLoader"

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

function Insite({ title, coverImage, url, description }) {
  const H3 = "h3"
  return (
    <a className="insite-card block font-semibold" href={url}>
      <Image
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
    </a>
  )
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
