import UpdatePasswordForm from "../components/features/authentication/UpdatePasswordForm"
import UpdateUserDataForm from "../components/features/authentication/UpdateUserDataForm"
import { Heading, Row } from "../components/ui"

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  )
}

export default Account
