import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { logout as logoutApi } from "../../../services/apiAuth"

export default function useLogout() {
  const navigate = useNavigate()

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true })
    },
  })

  return { logout, isPending }
}
