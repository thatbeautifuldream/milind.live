import { useState, useEffect } from "react"
import { onlineManager } from "@tanstack/react-query"
import { toast } from "sonner"

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(onlineManager.isOnline())

  useEffect(() => {
    if (!isOnline) toast("Offline")
    return onlineManager.subscribe(setIsOnline)
  }, [])

  return isOnline
}
