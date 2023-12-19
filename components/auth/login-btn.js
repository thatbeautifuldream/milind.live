import { useSession, signIn, signOut } from "next-auth/react"
import { toast } from "sonner"

export default function LoginButton() {
  const { data: session, status } = useSession()
  if (status === "loading") {
    return <code>Checking...</code>
  }
  if (status === "authenticated") {
    return (
      <code>
        Signed in as {session?.user?.name}{" "}
        <button
          onClick={() => {
            signOut()
            toast.success("Signed out successfully")
          }}
        >
          [Sign out]
        </button>
      </code>
    )
  }
  return (
    <code>
      You must sign in to leave comments.{" "}
      <button onClick={() => signIn()}>[Sign in]</button>
    </code>
  )
}
