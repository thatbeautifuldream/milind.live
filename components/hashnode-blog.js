import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import React from "react"
import BarLoader from "react-spinners/BarLoader"
import Breadcrumb from "./breadcrumb"
import { BlogFooter } from "./hashnode-blogs"
import Giscus from "@giscus/react"

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

  const pages = [
    { name: "Blogs", href: "/blogs", current: false },
    {
      name: post?.title.substring(0, 20) + "...",
      href: `/blogs/${post?.slug}`,
      current: true,
    },
  ]

  return (
    <div>
      <Breadcrumb pages={pages} />
      <Image
        src={post?.coverImage.url}
        width={800}
        height={400}
        alt={post?.title}
        style={{
          borderRadius: "0.5rem",
        }}
      />
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content.html }} />
      <BlogFooter />
      <Giscus
        src="https://giscus.app/client.js"
        repo="thatbeautifuldream/discuss"
        repoId="R_kgDOLe3btA"
        category="blogs"
        categoryId="DIC_kwDOLe3btM4Cd5YL"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark"
        lang="en"
        crossorigin="anonymous"
        async
      />
    </div>
  )
}

export default BlogPost
