import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { login as loginApi } from "../../../services/apiAuth"

export default function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user)
      navigate("/dashboard", { replace: true })
    },
    onError: () => {
      toast.error("The provided email or password are incorrect")
    },
  })

  return { login, isPending }
}
