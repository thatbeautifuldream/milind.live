export default function Badge({ text }) {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-800 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-400/20">
        {text}
      </span>
    </>
  )
}
