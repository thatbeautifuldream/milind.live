import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <code>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
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
