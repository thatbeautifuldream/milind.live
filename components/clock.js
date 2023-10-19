import React, { useState, useEffect, useCallback } from "react"

const Clock = React.memo(() => {
  const [time, setTime] = useState("...")

  const updateClock = useCallback(() => {
    const date = new Date()
    setTime(date.toLocaleTimeString())
  }, [])

  useEffect(() => {
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [updateClock])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }, [])

  return (
    <div>
      <button
        style={{
          float: "right",
        }}
        onClick={toggleFullscreen}
      >
        Toggle Fullscreen
      </button>
      <h1>{time}</h1>
    </div>
  )
})

export default Clock
