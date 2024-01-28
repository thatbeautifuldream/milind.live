import { XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Link from "next/link"

export default function BottomBanner() {
  const [banner, setBanner] = useState(true)
  if (!banner) return null
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-800 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-sm leading-6 text-white">
            <Link href="#">
              <strong className="font-semibold">Hi there!</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              I'm looking for fullstack roles. I'm a fullstack developer with 3
              years of experience.&nbsp;
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
          <button
            type="button"
            className="-m-1.5 flex-none p-1.5"
            aria-label="Dismiss"
            onClick={() => setBanner(false)}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  )
}
