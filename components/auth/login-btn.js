import { useSession, signIn, signOut } from "next-auth/react"
import { toast } from "sonner"

export default function LoginButton() {
  const { data: session } = useSession()
  // console.log({ session })
  if (session) {
    return (
      <code>
        Signed in as {session.user.name} <br />
        <button
          onClick={() => {
            signOut()
            toast.success("Signed out successfully")
          }}
        >
          Sign out
        </button>
      </code>
    )
  }
  return (
    <code>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </code>
  )
}
