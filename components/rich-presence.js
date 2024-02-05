import { useLanyard } from "react-use-lanyard"

export default function RichPresence() {
  const lanyard = useLanyard({
    userId: "451669359866413076",
  })

  return (
    <code className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-800 dark:text-purple-400 ring-1 ring-inset ring-purple-600/20 dark:ring-purple-400/20">
      {lanyard.isValidating && "Loading..."}
      {!lanyard.isValidating && JSON.stringify(lanyard, null, 4)}
    </code>
  )
}
