import { useMutation } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { signUp as signUpApi } from "../../../services/apiAuth"

export default function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      )
    },
  })

  return { signUp, isPending }
}
