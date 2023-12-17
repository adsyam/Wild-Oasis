import { HiArrowRightOnRectangle } from "react-icons/hi2"
import { ButtonIcon, SpinnerMini } from "../../ui"
import useLogout from "./useLogout"

export default function Logout() {
  const { logout, isPending } = useLogout()

  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}
