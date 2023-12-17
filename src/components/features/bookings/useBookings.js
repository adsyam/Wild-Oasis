import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { getBookings } from "../../../services/apiBookings"

export default function useBookings() {
  const [searchParams] = useSearchParams()

  const filterValue = searchParams.get("status")
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue }

  const sortByRaw = searchParams.get("sortBy") || "start_date-desc"
  const [field, direction] = sortByRaw.split("-")
  const sortBy = { field, direction }

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  })

  return { isLoading, bookings, error }
}