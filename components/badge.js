export default function Badge({ text, color = "gray" }) {
  if (color === "red") {
    return (
      <span
        className={`inline-flex items-center rounded-md bg-red-50 dark:bg-red-400/10 px-2 py-1 text-xs font-medium text-red-800 dark:text-red-400 ring-1 ring-inset ring-red-600/20 dark:ring-red-400/20`}
      >
        {text}
      </span>
    )
  }
  if (color === "gray") {
    return (
      <span
        className={`inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-800 dark:text-gray-400 ring-1 ring-inset ring-gray-600/20 dark:ring-gray-400/20`}
      >
        {text}
      </span>
    )
  }
}
