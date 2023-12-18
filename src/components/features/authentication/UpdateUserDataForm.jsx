import { useState } from "react"
import { Button, FileInput, Form, FormRow, Input } from "../../ui"
import { useUpdateUser } from "./useUpdateUser"
import useUser from "./useUser"

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { full_name: currentFullName },
    },
  } = useUser()

  const { updateUser, isUpdating } = useUpdateUser()

  const [full_name, setFullName] = useState(currentFullName)
  const [avatar, setAvatar] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!full_name) return
    updateUser(
      { full_name, avatar },
      {
        onSuccess: () => {
          setAvatar(null)
          e.target.reset()
        },
      }
    )
  }

  function handleCancel() {
    setFullName(currentFullName)
    setAvatar(null)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          id="full_name"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" $variation="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  )
}

export default UpdateUserDataForm
