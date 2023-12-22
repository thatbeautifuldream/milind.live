import React from "react"
import projects from "../data/projects.json"
import Insite from "./insite"

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
