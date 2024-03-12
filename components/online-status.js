import React from "react"
import useOnlineStatus from "../hooks/online-status.js"
import Badge from "./badge.js"

export default function OnlineStatus() {
  const status = useOnlineStatus() ? "online" : "offline"
  return (
    <>
      {status === "offline" && (
        <Badge text={status.toUpperCase()} color="red" />
      )}
    </>
  )
}
