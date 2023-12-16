import UpdateSettingsForm from "../components/features/settings/UpdateSettingsForm"
import { Heading, Row } from "../components/ui"

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  )
}

export default Settings
