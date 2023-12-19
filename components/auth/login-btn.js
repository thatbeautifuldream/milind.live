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
        <img
          src={session?.user?.image}
          alt="avatar"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            float: "right",
          }}
        />
        Signed in as {session?.user?.name} ({session?.user?.email})
        <br />
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
      You must sign in to leave comments <br />
      <button onClick={() => signIn()}>Sign in</button>
    </code>
  )
}
