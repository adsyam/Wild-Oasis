import SignupForm from "../components/features/authentication/SignupForm"
import { Heading } from "../components/ui"

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  )
}

export default NewUsers
