import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../../services/apiCabins"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"

export default function useCreateCabin() {
    const queryClient = useQueryClient()

    const { mutate: createCabin, isPending: isCreating } = useMutation({
      mutationFn: (data) => createEditCabin(data),
      onSuccess: () => {
        toast.success("New cabin successfully created!")
        queryClient.invalidateQueries({ queryKey: ["cabins"] })
      },
      onError: (err) => toast.error(err.message),
    })

    return { createCabin, isCreating }
}