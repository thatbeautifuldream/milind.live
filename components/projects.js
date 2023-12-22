import Link from "next/link"
import React from "react"
import Insite from "./insite"
import projects from "../data/projects.json"

export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "1.25rem",
      }}
    >
      {projects.map((project, index) => (
        <Insite
          title={project.title}
          coverImage={project.coverImage}
          url={project.url}
          description={project.description}
          key={index}
        />
      ))}
    </div>
  )
}
