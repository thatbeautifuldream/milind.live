import React from "react"

const videos = [
  {
    id: "iWU9-Rjve1c",
  },
  {
    id: "dTeqmVxvHdM",
  },
]

function Short({ id }) {
  return (
    <iframe
      width="315"
      height="560"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

function ShortsEmbed() {
  return (
    <div className="flex justify-center">
      <ul role="list" className="divide-y divide-current list-none">
        {videos.map((video) => (
          <li key={video.id} className="px-4 py-4 sm:px-0">
            <Short id={video.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShortsEmbed
