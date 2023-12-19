import Error from "next/error"
import YouTube from "react-youtube"

export default function PageNotFound() {
  const videoId = "cKSpFkMr6Ik"
  return (
    <>
      <YouTube videoId={videoId} />
      <Error statusCode={404} />
    </>
  )
}
